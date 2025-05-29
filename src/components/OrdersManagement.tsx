
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import IntakeOrderForm from "./IntakeOrderForm";
import OutloadingOrderForm from "./OutloadingOrderForm";
import BulkTransferManagement from "./BulkTransferManagement";
import { Download, Database, Calendar, FileText } from "lucide-react";

interface Order {
  id: string;
  type: "intake" | "outloading" | "mineral" | "bulk-transfer";
  customerName?: string;
  truckId?: string;
  materialCode: string;
  quantity: number;
  status: "pending" | "in-progress" | "completed" | "failed";
  createdAt: Date;
  rfidTag?: string;
}

const OrdersManagement = () => {
  const [orders] = useState<Order[]>([
    {
      id: "ORD-001",
      type: "intake",
      truckId: "ABC-1234",
      materialCode: "SR-001",
      quantity: 1500,
      status: "completed",
      createdAt: new Date(Date.now() - 3600000),
      rfidTag: "RFID-12345678"
    },
    {
      id: "ORD-002", 
      type: "outloading",
      customerName: "Industrial Corp",
      truckId: "XYZ-5678",
      materialCode: "AS-002",
      quantity: 800,
      status: "in-progress",
      createdAt: new Date(Date.now() - 1800000),
      rfidTag: "RFID-87654321"
    },
    {
      id: "ORD-003",
      type: "bulk-transfer",
      materialCode: "CW-003",
      quantity: 500,
      status: "pending",
      createdAt: new Date(Date.now() - 600000)
    }
  ]);

  const getOrderTypeColor = (type: Order['type']) => {
    switch (type) {
      case "intake": return "bg-cyan-900 text-cyan-300 border-cyan-700";
      case "outloading": return "bg-orange-900 text-orange-300 border-orange-700";
      case "mineral": return "bg-purple-900 text-purple-300 border-purple-700";
      case "bulk-transfer": return "bg-green-900 text-green-300 border-green-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case "pending": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "in-progress": return "bg-blue-900 text-blue-300 border-blue-700";
      case "completed": return "bg-green-900 text-green-300 border-green-700";
      case "failed": return "bg-red-900 text-red-300 border-red-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Order Management System (OMS)</h2>
        <div className="flex gap-2">
          <Button 
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Database className="w-4 h-4 mr-2" />
            ERP Sync
          </Button>
          <Button 
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <FileText className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button 
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      <Tabs defaultValue="intake" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4 bg-slate-800">
          <TabsTrigger value="intake" className="data-[state=active]:bg-cyan-600">
            Intake Orders
          </TabsTrigger>
          <TabsTrigger value="outloading" className="data-[state=active]:bg-orange-600">
            Outloading Orders  
          </TabsTrigger>
          <TabsTrigger value="bulk-transfer" className="data-[state=active]:bg-green-600">
            Bulk Transfer
          </TabsTrigger>
          <TabsTrigger value="all-orders" className="data-[state=active]:bg-slate-600">
            All Orders
          </TabsTrigger>
        </TabsList>

        <TabsContent value="intake">
          <IntakeOrderForm />
        </TabsContent>

        <TabsContent value="outloading">
          <OutloadingOrderForm />
        </TabsContent>

        <TabsContent value="bulk-transfer">
          <BulkTransferManagement />
        </TabsContent>

        <TabsContent value="all-orders">
          <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Calendar className="w-5 h-5 text-cyan-400" />
                All Orders History
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow className="border-slate-700">
                    <TableHead className="text-slate-300">Order ID</TableHead>
                    <TableHead className="text-slate-300">Type</TableHead>
                    <TableHead className="text-slate-300">Truck/Customer</TableHead>
                    <TableHead className="text-slate-300">Material</TableHead>
                    <TableHead className="text-slate-300">Quantity</TableHead>
                    <TableHead className="text-slate-300">RFID</TableHead>
                    <TableHead className="text-slate-300">Status</TableHead>
                    <TableHead className="text-slate-300">Created</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow key={order.id} className="border-slate-700">
                      <TableCell className="text-cyan-400 font-mono">{order.id}</TableCell>
                      <TableCell>
                        <Badge className={getOrderTypeColor(order.type)}>
                          {order.type}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-white">
                        {order.customerName || order.truckId || "N/A"}
                      </TableCell>
                      <TableCell className="text-white">{order.materialCode}</TableCell>
                      <TableCell className="text-white">{order.quantity} kg</TableCell>
                      <TableCell className="text-cyan-400 font-mono text-sm">
                        {order.rfidTag || "N/A"}
                      </TableCell>
                      <TableCell>
                        <Badge className={getStatusColor(order.status)}>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-slate-300">
                        {order.createdAt.toLocaleString()}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default OrdersManagement;
