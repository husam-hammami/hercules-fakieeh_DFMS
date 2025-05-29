
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { AlertCircle, Calendar, CheckCircle, Clock } from "lucide-react";

interface Alarm {
  id: string;
  type: "critical" | "warning" | "info";
  message: string;
  source: string;
  timestamp: Date;
  status: "active" | "acknowledged" | "resolved";
  operator?: string;
}

const AlarmsManagement = () => {
  const [alarms, setAlarms] = useState<Alarm[]>([
    {
      id: "ALM-001",
      type: "critical",
      message: "Temperature exceeded threshold in Furnace #2",
      source: "Furnace Control System",
      timestamp: new Date(Date.now() - 300000),
      status: "active"
    },
    {
      id: "ALM-002",
      type: "warning",
      message: "Low material level in Hopper A",
      source: "Material Management",
      timestamp: new Date(Date.now() - 900000),
      status: "acknowledged",
      operator: "John Doe"
    },
    {
      id: "ALM-003",
      type: "info",
      message: "Scheduled maintenance reminder for Conveyor Belt #3",
      source: "Maintenance System",
      timestamp: new Date(Date.now() - 1800000),
      status: "active"
    },
    {
      id: "ALM-004",
      type: "warning",
      message: "RFID reader connectivity issue at Station 5",
      source: "RFID System",
      timestamp: new Date(Date.now() - 3600000),
      status: "resolved",
      operator: "Jane Smith"
    }
  ]);

  const getAlarmTypeColor = (type: Alarm['type']) => {
    switch (type) {
      case "critical": return "bg-red-900 text-red-300 border-red-700";
      case "warning": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "info": return "bg-blue-900 text-blue-300 border-blue-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const getStatusColor = (status: Alarm['status']) => {
    switch (status) {
      case "active": return "bg-red-900 text-red-300 border-red-700";
      case "acknowledged": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "resolved": return "bg-green-900 text-green-300 border-green-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const handleAcknowledge = (alarmId: string) => {
    setAlarms(alarms.map(alarm => 
      alarm.id === alarmId 
        ? { ...alarm, status: "acknowledged" as const, operator: "Current User" }
        : alarm
    ));
  };

  const handleResolve = (alarmId: string) => {
    setAlarms(alarms.map(alarm => 
      alarm.id === alarmId 
        ? { ...alarm, status: "resolved" as const, operator: "Current User" }
        : alarm
    ));
  };

  const activeAlarms = alarms.filter(alarm => alarm.status === "active");
  const criticalAlarms = alarms.filter(alarm => alarm.type === "critical" && alarm.status === "active");

  return (
    <div className="space-y-6">
      {/* Alarm Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-red-400">{criticalAlarms.length}</div>
                <div className="text-slate-400">Critical Alarms</div>
              </div>
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-yellow-400">{activeAlarms.length}</div>
                <div className="text-slate-400">Active Alarms</div>
              </div>
              <Clock className="w-8 h-8 text-yellow-400" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-800 border-slate-700">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-green-400">{alarms.filter(a => a.status === "resolved").length}</div>
                <div className="text-slate-400">Resolved Today</div>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alarms Table */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertCircle className="w-5 h-5 text-cyan-400" />
            Alarm Feed
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Alarm ID</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">Message</TableHead>
                <TableHead className="text-slate-300">Source</TableHead>
                <TableHead className="text-slate-300">Timestamp</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Operator</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {alarms.map((alarm) => (
                <TableRow key={alarm.id} className="border-slate-700">
                  <TableCell className="text-cyan-400 font-mono">{alarm.id}</TableCell>
                  <TableCell>
                    <Badge className={getAlarmTypeColor(alarm.type)}>
                      {alarm.type}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white max-w-xs">{alarm.message}</TableCell>
                  <TableCell className="text-slate-300">{alarm.source}</TableCell>
                  <TableCell className="text-slate-300">
                    {alarm.timestamp.toLocaleString()}
                  </TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(alarm.status)}>
                      {alarm.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{alarm.operator || "-"}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {alarm.status === "active" && (
                        <>
                          <Button 
                            size="sm" 
                            variant="outline" 
                            onClick={() => handleAcknowledge(alarm.id)}
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          >
                            Ack
                          </Button>
                          <Button 
                            size="sm" 
                            variant="outline"
                            onClick={() => handleResolve(alarm.id)}
                            className="border-slate-600 text-slate-300 hover:bg-slate-700"
                          >
                            Resolve
                          </Button>
                        </>
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default AlarmsManagement;
