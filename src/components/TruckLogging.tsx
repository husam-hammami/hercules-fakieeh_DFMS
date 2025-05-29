
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

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
        title: "Error",
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
      title: "Truck Logged",
      description: `Truck ${truck.truckNumber} has arrived and been logged`
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
      description: `Truck status changed to ${newStatus}`
    });
  };

  const getStatusColor = (status: TruckEntry['status']) => {
    switch (status) {
      case "arrived": return "bg-blue-100 text-blue-800";
      case "loading": return "bg-yellow-100 text-yellow-800";
      case "weighing": return "bg-purple-100 text-purple-800";
      case "departed": return "bg-green-100 text-green-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const activeTrucks = trucks.filter(truck => truck.status !== "departed");
  const todayDepartures = trucks.filter(truck => 
    truck.status === "departed" && 
    truck.departureTime &&
    truck.departureTime.toDateString() === new Date().toDateString()
  );

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{activeTrucks.length}</div>
            <div className="text-sm text-gray-600">Trucks in Yard</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">
              {trucks.filter(t => t.status === "loading").length}
            </div>
            <div className="text-sm text-gray-600">Currently Loading</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-green-600">{todayDepartures.length}</div>
            <div className="text-sm text-gray-600">Departed Today</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Truck Arrival Form */}
        <Card className="lg:col-span-1">
          <CardHeader>
            <CardTitle>Log Truck Arrival</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="truckNumber">Truck Number</Label>
              <Input
                id="truckNumber"
                value={newTruck.truckNumber}
                onChange={(e) => setNewTruck({...newTruck, truckNumber: e.target.value})}
                placeholder="e.g., ABC-1234"
              />
            </div>
            <div>
              <Label htmlFor="driverName">Driver Name</Label>
              <Input
                id="driverName"
                value={newTruck.driverName}
                onChange={(e) => setNewTruck({...newTruck, driverName: e.target.value})}
                placeholder="Enter driver name"
              />
            </div>
            <div>
              <Label htmlFor="company">Company</Label>
              <Input
                id="company"
                value={newTruck.company}
                onChange={(e) => setNewTruck({...newTruck, company: e.target.value})}
                placeholder="Enter company name"
              />
            </div>
            <div>
              <Label htmlFor="bayNumber">Bay Number (Optional)</Label>
              <Input
                id="bayNumber"
                value={newTruck.bayNumber}
                onChange={(e) => setNewTruck({...newTruck, bayNumber: e.target.value})}
                placeholder="e.g., Bay A"
              />
            </div>
            <Button onClick={handleTruckArrival} className="w-full">
              Log Arrival
            </Button>
          </CardContent>
        </Card>

        {/* Active Trucks */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Active Trucks ({activeTrucks.length})</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {activeTrucks.map((truck) => (
                <div key={truck.id} className="p-4 border rounded-lg bg-white">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="font-semibold text-lg">{truck.truckNumber}</h3>
                      <p className="text-sm text-gray-600">{truck.company}</p>
                    </div>
                    <Badge className={getStatusColor(truck.status)}>
                      {truck.status}
                    </Badge>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                    <div>
                      <span className="font-medium">Driver:</span> {truck.driverName}
                    </div>
                    <div>
                      <span className="font-medium">Arrived:</span> {truck.arrivalTime.toLocaleTimeString()}
                    </div>
                    {truck.bayNumber && (
                      <div>
                        <span className="font-medium">Bay:</span> {truck.bayNumber}
                      </div>
                    )}
                    {truck.weight && (
                      <div>
                        <span className="font-medium">Weight:</span> {truck.weight} kg
                      </div>
                    )}
                  </div>

                  {truck.associatedOrders.length > 0 && (
                    <div className="mb-3">
                      <span className="text-sm font-medium">Orders: </span>
                      {truck.associatedOrders.map(order => (
                        <Badge key={order} variant="outline" className="ml-1">
                          {order}
                        </Badge>
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2">
                    {truck.status === "arrived" && (
                      <Button
                        size="sm"
                        onClick={() => updateTruckStatus(truck.id, "loading")}
                      >
                        Start Loading
                      </Button>
                    )}
                    {truck.status === "loading" && (
                      <>
                        <Button
                          size="sm"
                          onClick={() => updateTruckStatus(truck.id, "weighing")}
                        >
                          Move to Weighing
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => updateTruckStatus(truck.id, "departed")}
                        >
                          Mark Departed
                        </Button>
                      </>
                    )}
                    {truck.status === "weighing" && (
                      <Button
                        size="sm"
                        onClick={() => updateTruckStatus(truck.id, "departed")}
                      >
                        Complete & Depart
                      </Button>
                    )}
                  </div>
                </div>
              ))}
              
              {activeTrucks.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  No active trucks in the yard
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
