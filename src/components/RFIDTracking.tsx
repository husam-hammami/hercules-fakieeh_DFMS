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
      case "active": return "bg-green-100 text-green-800";
      case "inactive": return "bg-gray-100 text-gray-800";
      case "in_transit": return "bg-blue-100 text-blue-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const getBatteryColor = (level: number) => {
    if (level > 50) return "text-green-600";
    if (level > 20) return "text-yellow-600";
    return "text-red-600";
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
      <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-lg">
        <CardHeader className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-b border-slate-700">
          <CardTitle className="text-white flex items-center gap-2">
            <Search className="h-5 w-5" />
            RFID Tag Search
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <div className="flex gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search by tag ID, location, or order..."
                value={searchTag}
                onChange={(e) => setSearchTag(e.target.value)}
                className="pl-10 bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-purple-500"
              />
            </div>
            <Button 
              variant="outline" 
              className="bg-gradient-to-r from-purple-500 to-pink-500 border-none text-white hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            >
              <Scan className="h-4 w-4 mr-2" />
              Scan New Tag
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTags.map((tag) => (
          <Card 
            key={tag.id} 
            className="relative overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 group"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-bl-full"></div>
            <CardHeader className="pb-3 relative">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  <Wifi className="h-4 w-4 text-purple-400" />
                  <CardTitle className="text-lg text-white">{tag.id}</CardTitle>
                </div>
                <Badge className={getStatusColor(tag.status)}>
                  {tag.status.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3 relative">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-300 flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  Location:
                </span>
                <span className="text-sm text-purple-300 font-medium">{tag.location}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-300">Last Seen:</span>
                <span className="text-sm text-gray-400">{getTimeAgo(tag.lastSeen)}</span>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-300 flex items-center gap-1">
                  <Battery className="h-3 w-3" />
                  Battery:
                </span>
                <span className={`text-sm font-medium ${getBatteryColor(tag.batteryLevel)}`}>
                  {Math.round(tag.batteryLevel)}%
                </span>
              </div>
              
              {tag.associatedOrder && (
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-300">Order:</span>
                  <span className="text-sm text-blue-400 font-medium">{tag.associatedOrder}</span>
                </div>
              )}
              
              <div className="pt-2">
                <div className="w-full bg-slate-600 rounded-full h-2 overflow-hidden">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      tag.batteryLevel > 50 ? 'bg-gradient-to-r from-green-400 to-emerald-500' : 
                      tag.batteryLevel > 20 ? 'bg-gradient-to-r from-yellow-400 to-orange-500' : 
                      'bg-gradient-to-r from-red-400 to-red-600'
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
