
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Wifi, Battery, MapPin, Scan } from "lucide-react";

interface RFIDTag {
  id: string;
  location: string;
  status: "active" | "inactive" | "in_transit";
  lastSeen: Date;
  associatedOrder?: string;
  batteryLevel: number;
}

const RFIDTracking = () => {
  const [rfidTags, setRfidTags] = useState<RFIDTag[]>([
    {
      id: "RFID-001",
      location: "Loading Bay A",
      status: "active",
      lastSeen: new Date(),
      associatedOrder: "ORD-001",
      batteryLevel: 85
    },
    {
      id: "RFID-002",
      location: "Storage Zone B",
      status: "active",
      lastSeen: new Date(Date.now() - 300000),
      batteryLevel: 92
    },
    {
      id: "RFID-003",
      location: "Truck Bay 2",
      status: "in_transit",
      lastSeen: new Date(Date.now() - 600000),
      associatedOrder: "ORD-003",
      batteryLevel: 67
    }
  ]);

  const [searchTag, setSearchTag] = useState("");

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setRfidTags(tags => 
        tags.map(tag => ({
          ...tag,
          lastSeen: Math.random() > 0.7 ? new Date() : tag.lastSeen,
          batteryLevel: Math.max(0, tag.batteryLevel - Math.random() * 0.1)
        }))
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: RFIDTag['status']) => {
    switch (status) {
      case "active": return "bg-green-900 text-green-300 border-green-700";
      case "inactive": return "bg-slate-700 text-slate-300 border-slate-600";
      case "in_transit": return "bg-blue-900 text-blue-300 border-blue-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 50) return "text-green-400";
    if (level > 20) return "text-yellow-400";
    return "text-red-400";
  };

  const filteredTags = rfidTags.filter(tag => 
    tag.id.toLowerCase().includes(searchTag.toLowerCase()) ||
    tag.location.toLowerCase().includes(searchTag.toLowerCase()) ||
    (tag.associatedOrder && tag.associatedOrder.toLowerCase().includes(searchTag.toLowerCase()))
  );

  const getTimeAgo = (date: Date) => {
    const seconds = Math.floor((new Date().getTime() - date.getTime()) / 1000);
    if (seconds < 60) return `${seconds}s ago`;
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    return `${hours}h ago`;
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="h-5 w-5" />
            RFID Tag Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-4 w-4" />
              <Input
                placeholder="Search by tag ID, location, or order..."
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
                className="pl-10 bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
              />
            </div>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Scan className="h-4 w-4 mr-2" />
              Scan New Tag
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTags.map((tag) => (
          <Card key={tag.id} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-cyan-400" />
                  <CardTitle className="text-lg text-white">{tag.id}</CardTitle>
                </div>
                <Badge className={getStatusColor(tag.status)}>
                  {tag.status.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-300 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Location:
                </span>
                <span className="text-sm text-cyan-300 font-medium">{tag.location}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-300">Last Seen:</span>
                <span className="text-sm text-slate-400">{getTimeAgo(tag.lastSeen)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-slate-300 flex items-center gap-1">
                  <Battery className="h-3 w-3" />
                  Battery:
                </span>
                <span className={`text-sm font-medium ${getBatteryColor(tag.batteryLevel)}`}>
                  {Math.round(tag.batteryLevel)}%
                </span>
              </div>
              
              {tag.associatedOrder && (
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-slate-300">Order:</span>
                  <span className="text-sm text-cyan-400 font-medium">{tag.associatedOrder}</span>
                </div>
              )}
              
              <div className="pt-2">
                <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      tag.batteryLevel > 50 ? 'bg-cyan-500' : 
                      tag.batteryLevel > 20 ? 'bg-yellow-500' : 
                      'bg-red-500'
                    }`}
                    style={{ width: `${tag.batteryLevel}%` }}
                  ></div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RFIDTracking;
