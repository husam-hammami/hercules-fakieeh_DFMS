
import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Database, AlertTriangle, CheckCircle, Lock } from "lucide-react";

interface StorageBin {
  id: string;
  name: string;
  materialCode: string;
  materialName: string;
  currentLevel: number;
  maxCapacity: number;
  status: "available" | "full" | "locked" | "maintenance";
  highLevelFlag: boolean;
  lockLevelFlag: boolean;
  lastUpdated: Date;
}

const StorageManagement = () => {
  const [storageBins, setStorageBins] = useState<StorageBin[]>([
    {
      id: "SILO-001",
      name: "Silo #1",
      materialCode: "SR-001",
      materialName: "Steel Rod",
      currentLevel: 1200,
      maxCapacity: 1500,
      status: "available",
      highLevelFlag: false,
      lockLevelFlag: false,
      lastUpdated: new Date()
    },
    {
      id: "SILO-002", 
      name: "Silo #2",
      materialCode: "AS-002",
      materialName: "Aluminum Sheet",
      currentLevel: 1450,
      maxCapacity: 1500,
      status: "full",
      highLevelFlag: true,
      lockLevelFlag: false,
      lastUpdated: new Date(Date.now() - 300000)
    },
    {
      id: "SILO-003",
      name: "Silo #3", 
      materialCode: "CW-003",
      materialName: "Copper Wire",
      currentLevel: 1500,
      maxCapacity: 1500,
      status: "locked",
      highLevelFlag: true,
      lockLevelFlag: true,
      lastUpdated: new Date(Date.now() - 600000)
    },
    {
      id: "BIN-001",
      name: "Bin A",
      materialCode: "WH-001",
      materialName: "Wheat",
      currentLevel: 800,
      maxCapacity: 1000,
      status: "available",
      highLevelFlag: false,
      lockLevelFlag: false,
      lastUpdated: new Date(Date.now() - 120000)
    }
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStorageBins(bins => 
        bins.map(bin => {
          const variation = (Math.random() - 0.5) * 10; // ±5kg variation
          let newLevel = Math.max(0, Math.min(bin.maxCapacity, bin.currentLevel + variation));
          
          const fillPercentage = (newLevel / bin.maxCapacity) * 100;
          let newStatus: StorageBin['status'] = "available";
          let highLevel = fillPercentage >= 95;
          let lockLevel = fillPercentage >= 100;
          
          if (lockLevel) {
            newStatus = "locked";
          } else if (fillPercentage >= 95) {
            newStatus = "full";
          }
          
          return {
            ...bin,
            currentLevel: Math.round(newLevel),
            status: newStatus,
            highLevelFlag: highLevel,
            lockLevelFlag: lockLevel,
            lastUpdated: new Date()
          };
        })
      );
    }, 10000); // Update every 10 seconds

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (status: StorageBin['status']) => {
    switch (status) {
      case "available": return "bg-green-900 text-green-300 border-green-700";
      case "full": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "locked": return "bg-red-900 text-red-300 border-red-700";
      case "maintenance": return "bg-orange-900 text-orange-300 border-orange-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const getFillPercentage = (bin: StorageBin) => {
    return (bin.currentLevel / bin.maxCapacity) * 100;
  };

  const getProgressColor = (percentage: number) => {
    if (percentage >= 100) return "bg-red-500";
    if (percentage >= 95) return "bg-yellow-500";
    if (percentage >= 80) return "bg-orange-500";
    return "bg-cyan-500";
  };

  const availableBins = storageBins.filter(bin => bin.status === "available").length;
  const fullBins = storageBins.filter(bin => bin.status === "full" || bin.status === "locked").length;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Database className="w-8 h-8 text-cyan-400" />
              <div>
                <div className="text-2xl font-bold text-white">{storageBins.length}</div>
                <div className="text-sm text-slate-400">Total Silos/Bins</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-8 h-8 text-green-400" />
              <div>
                <div className="text-2xl font-bold text-green-400">{availableBins}</div>
                <div className="text-sm text-slate-400">Available</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-8 h-8 text-yellow-400" />
              <div>
                <div className="text-2xl font-bold text-yellow-400">{fullBins}</div>
                <div className="text-sm text-slate-400">Full/Critical</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-4">
            <div className="flex items-center gap-2">
              <Lock className="w-8 h-8 text-red-400" />
              <div>
                <div className="text-2xl font-bold text-red-400">
                  {storageBins.filter(bin => bin.lockLevelFlag).length}
                </div>
                <div className="text-sm text-slate-400">Locked</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Storage Bins Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {storageBins.map((bin) => {
          const fillPercentage = getFillPercentage(bin);
          
          return (
            <Card key={bin.id} className="bg-slate-800 border-slate-700">
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-lg text-white">{bin.name}</CardTitle>
                    <p className="text-sm text-slate-400">{bin.id}</p>
                  </div>
                  <Badge className={getStatusColor(bin.status)}>
                    {bin.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-slate-300">Material</p>
                  <p className="text-cyan-400 font-medium">{bin.materialCode} - {bin.materialName}</p>
                </div>

                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-slate-300">Fill Level</span>
                    <span className="text-white">{Math.round(fillPercentage)}%</span>
                  </div>
                  <Progress 
                    value={fillPercentage} 
                    className="h-3"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>{bin.currentLevel} kg</span>
                    <span>{bin.maxCapacity} kg</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-300">Last Updated:</span>
                  <span className="text-xs text-slate-400">
                    {bin.lastUpdated.toLocaleTimeString()}
                  </span>
                </div>

                {bin.highLevelFlag && (
                  <div className="flex items-center gap-1 text-yellow-400 text-sm">
                    <AlertTriangle className="w-4 h-4" />
                    High Level Alert
                  </div>
                )}

                {bin.lockLevelFlag && (
                  <div className="flex items-center gap-1 text-red-400 text-sm">
                    <Lock className="w-4 h-4" />
                    Bin Locked - Overfilled
                  </div>
                )}
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default StorageManagement;
