
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

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
      <Card>
        <CardHeader>
          <CardTitle>RFID Tag Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-4">
            <Input
              placeholder="Search by tag ID, location, or order..."
              value={searchTag}
              onChange={(e) => setSearchTag(e.target.value)}
              className="flex-1"
            />
            <Button variant="outline">
              Scan New Tag
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredTags.map((tag) => (
          <Card key={tag.id} className="transition-all hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">{tag.id}</CardTitle>
                <Badge className={getStatusColor(tag.status)}>
                  {tag.status.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Location:</span>
                <span className="text-sm text-gray-600">{tag.location}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm font-medium">Last Seen:</span>
                <span className="text-sm text-gray-600">{getTimeAgo(tag.lastSeen)}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm font-medium">Battery:</span>
                <span className={`text-sm font-medium ${getBatteryColor(tag.batteryLevel)}`}>
                  {Math.round(tag.batteryLevel)}%
                </span>
              </div>
              
              {tag.associatedOrder && (
                <div className="flex justify-between">
                  <span className="text-sm font-medium">Order:</span>
                  <span className="text-sm text-blue-600 font-medium">{tag.associatedOrder}</span>
                </div>
              )}
              
              <div className="pt-2">
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all ${
                      tag.batteryLevel > 50 ? 'bg-green-600' : 
                      tag.batteryLevel > 20 ? 'bg-yellow-600' : 'bg-red-600'
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
