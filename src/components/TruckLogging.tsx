

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { Truck, Users, Clock, MapPin, Weight, CheckCircle, AlertCircle, Plus, ArrowRight } from "lucide-react";

interface TruckEntry {
  id: string;
  truckNumber: string;
  driverName: string;
  company: string;
  arrivalTime: Date;
  departureTime?: Date;
  status: "arrived" | "loading" | "weighing" | "departed";
  weight?: number;
  associatedOrders: string[];
  bayNumber?: string;
}

const TruckLogging = () => {
  const { toast } = useToast();
  const [trucks, setTrucks] = useState<TruckEntry[]>([
    {
      id: "TRK-001",
      truckNumber: "ABC-1234",
      driverName: "John Smith",
      company: "Fast Logistics",
      arrivalTime: new Date(Date.now() - 3600000),
      status: "loading",
      associatedOrders: ["ORD-001"],
      bayNumber: "Bay A"
    },
    {
      id: "TRK-002",
      truckNumber: "XYZ-5678",
      driverName: "Mike Johnson",
      company: "Quick Transport",
      arrivalTime: new Date(Date.now() - 7200000),
      departureTime: new Date(Date.now() - 1800000),
      status: "departed",
      weight: 2500,
      associatedOrders: ["ORD-002", "ORD-003"]
    }
  ]);

  const [newTruck, setNewTruck] = useState({
    truckNumber: "",
    driverName: "",
    company: "",
    bayNumber: ""
  });

  const handleTruckArrival = () => {
    if (!newTruck.truckNumber || !newTruck.driverName || !newTruck.company) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const truck: TruckEntry = {
      id: `TRK-${String(trucks.length + 1).padStart(3, '0')}`,
      ...newTruck,
      arrivalTime: new Date(),
      status: "arrived",
      associatedOrders: []
    };

    setTrucks([...trucks, truck]);
    setNewTruck({ truckNumber: "", driverName: "", company: "", bayNumber: "" });
    
    toast({
      title: "Truck Registered",
      description: `${truck.truckNumber} has been successfully logged into the system`
    });
  };

  const updateTruckStatus = (truckId: string, newStatus: TruckEntry['status']) => {
    setTrucks(trucks.map(truck => {
      if (truck.id === truckId) {
        const updatedTruck = { ...truck, status: newStatus };
        if (newStatus === "departed" && !truck.departureTime) {
          updatedTruck.departureTime = new Date();
        }
        return updatedTruck;
      }
      return truck;
    }));
    
    toast({
      title: "Status Updated",
      description: `Truck moved to ${newStatus} status`
    });
  };

  const getStatusConfig = (status: TruckEntry['status']) => {
    switch (status) {
      case "arrived": 
        return { 
          color: "bg-blue-500/20 text-blue-300 border-blue-500/40", 
          icon: <Clock className="w-4 h-4" />,
          label: "Arrived"
        };
      case "loading": 
        return { 
          color: "bg-orange-500/20 text-orange-300 border-orange-500/40", 
          icon: <Truck className="w-4 h-4" />,
          label: "Loading"
        };
      case "weighing": 
        return { 
          color: "bg-purple-500/20 text-purple-300 border-purple-500/40", 
          icon: <Weight className="w-4 h-4" />,
          label: "Weighing"
        };
      case "departed": 
        return { 
          color: "bg-green-500/20 text-green-300 border-green-500/40", 
          icon: <CheckCircle className="w-4 h-4" />,
          label: "Departed"
        };
      default: 
        return { 
          color: "bg-zinc-500/20 text-zinc-300 border-zinc-500/40", 
          icon: <AlertCircle className="w-4 h-4" />,
          label: "Unknown"
        };
    }
  };

  const activeTrucks = trucks.filter(truck => truck.status !== "departed");
  const todayDepartures = trucks.filter(truck => 
    truck.status === "departed" && 
    truck.departureTime &&
    truck.departureTime.toDateString() === new Date().toDateString()
  );

  return (
    <div className="space-y-8 p-6 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 min-h-screen">
      {/* Enhanced Header Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-zinc-800/70 border-zinc-700/50 backdrop-blur-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-500/30">
                <Truck className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-100">{activeTrucks.length}</div>
                <div className="text-sm text-zinc-400">Active Trucks</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800/70 border-zinc-700/50 backdrop-blur-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-500/30">
                <Weight className="w-6 h-6 text-orange-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-100">
                  {trucks.filter(t => t.status === "loading").length}
                </div>
                <div className="text-sm text-zinc-400">Loading</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800/70 border-zinc-700/50 backdrop-blur-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-500/30">
                <Clock className="w-6 h-6 text-purple-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-100">
                  {trucks.filter(t => t.status === "weighing").length}
                </div>
                <div className="text-sm text-zinc-400">Weighing</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-zinc-800/70 border-zinc-700/50 backdrop-blur-md">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
                <CheckCircle className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <div className="text-3xl font-bold text-zinc-100">{todayDepartures.length}</div>
                <div className="text-sm text-zinc-400">Completed Today</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
        {/* Enhanced Truck Registration Form */}
        <Card className="bg-zinc-800/80 border-zinc-700/50 backdrop-blur-md xl:col-span-1">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-zinc-100 flex items-center gap-3">
              <div className="p-2 bg-cyan-500/20 rounded-lg border border-cyan-500/30">
                <Plus className="w-5 h-5 text-cyan-400" />
              </div>
              Register New Truck
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div>
                <Label className="text-zinc-300 font-medium">Truck Number *</Label>
                <Input
                  value={newTruck.truckNumber}
                  onChange={(e) => setNewTruck({...newTruck, truckNumber: e.target.value})}
                  className="mt-2 bg-zinc-700/50 border-zinc-600/50 text-zinc-100 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  placeholder="e.g., ABC-1234"
                />
              </div>
              
              <div>
                <Label className="text-zinc-300 font-medium">Driver Name *</Label>
                <Input
                  value={newTruck.driverName}
                  onChange={(e) => setNewTruck({...newTruck, driverName: e.target.value})}
                  className="mt-2 bg-zinc-700/50 border-zinc-600/50 text-zinc-100 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  placeholder="Enter driver name"
                />
              </div>
              
              <div>
                <Label className="text-zinc-300 font-medium">Company *</Label>
                <Input
                  value={newTruck.company}
                  onChange={(e) => setNewTruck({...newTruck, company: e.target.value})}
                  className="mt-2 bg-zinc-700/50 border-zinc-600/50 text-zinc-100 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  placeholder="Enter company name"
                />
              </div>
              
              <div>
                <Label className="text-zinc-300 font-medium">Bay Assignment</Label>
                <Input
                  value={newTruck.bayNumber}
                  onChange={(e) => setNewTruck({...newTruck, bayNumber: e.target.value})}
                  className="mt-2 bg-zinc-700/50 border-zinc-600/50 text-zinc-100 focus:border-cyan-500/50 focus:ring-cyan-500/20"
                  placeholder="e.g., Bay A (Optional)"
                />
              </div>
            </div>
            
            <Button 
              onClick={handleTruckArrival} 
              className="w-full h-12 text-base font-semibold"
              variant="default"
            >
              <Plus className="w-5 h-5 mr-2" />
              Register Truck Arrival
            </Button>
          </CardContent>
        </Card>

        {/* Enhanced Active Trucks Display */}
        <Card className="bg-zinc-800/80 border-zinc-700/50 backdrop-blur-md xl:col-span-2">
          <CardHeader className="pb-4">
            <CardTitle className="text-xl text-zinc-100 flex items-center gap-3">
              <div className="p-2 bg-orange-500/20 rounded-lg border border-orange-500/30">
                <Users className="w-5 h-5 text-orange-400" />
              </div>
              Active Operations ({activeTrucks.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4 max-h-[600px] overflow-y-auto">
              {activeTrucks.map((truck) => {
                const statusConfig = getStatusConfig(truck.status);
                return (
                  <div key={truck.id} className="bg-zinc-700/40 border border-zinc-600/40 rounded-xl p-6 hover:bg-zinc-700/60 transition-all duration-200 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-4">
                        <div className="p-3 bg-zinc-600/50 rounded-lg border border-zinc-500/30">
                          <Truck className="w-6 h-6 text-zinc-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-zinc-100">{truck.truckNumber}</h3>
                          <p className="text-zinc-400">{truck.company}</p>
                        </div>
                      </div>
                      <Badge className={`${statusConfig.color} border flex items-center gap-2 px-3 py-1`}>
                        {statusConfig.icon}
                        {statusConfig.label}
                      </Badge>
                    </div>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-zinc-400" />
                        <span className="text-zinc-300">{truck.driverName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-zinc-400" />
                        <span className="text-zinc-300">{truck.arrivalTime.toLocaleTimeString()}</span>
                      </div>
                      {truck.bayNumber && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-zinc-400" />
                          <span className="text-zinc-300">{truck.bayNumber}</span>
                        </div>
                      )}
                      {truck.weight && (
                        <div className="flex items-center gap-2">
                          <Weight className="w-4 h-4 text-zinc-400" />
                          <span className="text-zinc-300">{truck.weight} kg</span>
                        </div>
                      )}
                    </div>

                    {truck.associatedOrders.length > 0 && (
                      <div className="mb-4">
                        <span className="text-sm font-medium text-zinc-300 mb-2 block">Associated Orders:</span>
                        <div className="flex gap-2">
                          {truck.associatedOrders.map(order => (
                            <Badge key={order} variant="outline" className="border-zinc-500/50 text-zinc-300">
                              {order}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3 flex-wrap">
                      {truck.status === "arrived" && (
                        <Button
                          size="sm"
                          variant="secondary"
                          onClick={() => updateTruckStatus(truck.id, "loading")}
                          className="flex items-center gap-2"
                        >
                          <ArrowRight className="w-4 h-4" />
                          Start Loading
                        </Button>
                      )}
                      {truck.status === "loading" && (
                        <>
                          <Button
                            size="sm"
                            variant="secondary"
                            onClick={() => updateTruckStatus(truck.id, "weighing")}
                            className="flex items-center gap-2"
                          >
                            <Weight className="w-4 h-4" />
                            Move to Weighing
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => updateTruckStatus(truck.id, "departed")}
                            className="flex items-center gap-2"
                          >
                            <CheckCircle className="w-4 h-4" />
                            Mark Complete
                          </Button>
                        </>
                      )}
                      {truck.status === "weighing" && (
                        <Button
                          size="sm"
                          variant="accent"
                          onClick={() => updateTruckStatus(truck.id, "departed")}
                          className="flex items-center gap-2"
                        >
                          <CheckCircle className="w-4 h-4" />
                          Complete & Dispatch
                        </Button>
                      )}
                    </div>
                  </div>
                );
              })}
              
              {activeTrucks.length === 0 && (
                <div className="text-center py-12">
                  <div className="p-4 bg-zinc-700/30 rounded-xl inline-block mb-4 border border-zinc-600/30">
                    <Truck className="w-12 h-12 text-zinc-400" />
                  </div>
                  <h3 className="text-lg font-medium text-zinc-300 mb-2">No Active Trucks</h3>
                  <p className="text-zinc-400">Register a new truck arrival to get started</p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default TruckLogging;

