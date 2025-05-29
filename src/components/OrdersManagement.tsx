
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Plus, Download, Database, Calendar, FileText } from "lucide-react";

interface OrderItem {
  materialCode: string;
  materialName: string;
  quantity: number;
  uom: string;
  unitPrice: number;
  totalPrice: number;
}

interface Order {
  id: string;
  customerName: string;
  customerCode: string;
  orderDate: Date;
  deliveryDate: Date;
  items: OrderItem[];
  totalAmount: number;
  status: "draft" | "confirmed" | "in-production" | "ready" | "shipped" | "delivered";
  priority: "low" | "medium" | "high" | "urgent";
  notes?: string;
  erpSyncStatus: "pending" | "synced" | "failed";
}

const OrdersManagement = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customerName: "Industrial Corp Ltd",
      customerCode: "IC001",
      orderDate: new Date(),
      deliveryDate: new Date(Date.now() + 86400000 * 7),
      items: [
        {
          materialCode: "SR-001",
          materialName: "Steel Rod",
          quantity: 500,
          uom: "KG",
          unitPrice: 45.50,
          totalPrice: 22750
        },
        {
          materialCode: "AS-002",
          materialName: "Aluminum Sheet",
          quantity: 100,
          uom: "PCS",
          unitPrice: 125.00,
          totalPrice: 12500
        }
      ],
      totalAmount: 35250,
      status: "in-production",
      priority: "high",
      notes: "Rush order for Q1 project",
      erpSyncStatus: "synced"
    },
    {
      id: "ORD-002",
      customerName: "Manufacturing Solutions",
      customerCode: "MS002",
      orderDate: new Date(Date.now() - 86400000),
      deliveryDate: new Date(Date.now() + 86400000 * 5),
      items: [
        {
          materialCode: "CW-003",
          materialName: "Copper Wire",
          quantity: 200,
          uom: "MTR",
          unitPrice: 15.75,
          totalPrice: 3150
        }
      ],
      totalAmount: 3150,
      status: "confirmed",
      priority: "medium",
      erpSyncStatus: "pending"
    }
  ]);

  const [newOrder, setNewOrder] = useState({
    customerName: "",
    customerCode: "",
    deliveryDate: "",
    priority: "medium" as const,
    notes: ""
  });

  const [erpSyncStatus, setErpSyncStatus] = useState<"idle" | "syncing" | "success" | "error">("idle");

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case "draft": return "bg-gray-900 text-gray-300 border-gray-700";
      case "confirmed": return "bg-blue-900 text-blue-300 border-blue-700";
      case "in-production": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "ready": return "bg-green-900 text-green-300 border-green-700";
      case "shipped": return "bg-purple-900 text-purple-300 border-purple-700";
      case "delivered": return "bg-cyan-900 text-cyan-300 border-cyan-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const getPriorityColor = (priority: Order['priority']) => {
    switch (priority) {
      case "urgent": return "bg-red-900 text-red-300 border-red-700";
      case "high": return "bg-orange-900 text-orange-300 border-orange-700";
      case "medium": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "low": return "bg-green-900 text-green-300 border-green-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const handleERPSync = async () => {
    setErpSyncStatus("syncing");
    // Simulate ERP sync
    setTimeout(() => {
      setOrders(orders.map(order => ({ ...order, erpSyncStatus: "synced" as const })));
      setErpSyncStatus("success");
      setTimeout(() => setErpSyncStatus("idle"), 3000);
    }, 2000);
  };

  const handleExportPDF = () => {
    console.log("Exporting orders to PDF...");
    // Implement PDF export logic
  };

  const handleExportExcel = () => {
    console.log("Exporting orders to Excel...");
    // Implement Excel export logic
  };

  const handleCreateOrder = () => {
    if (newOrder.customerName && newOrder.customerCode) {
      const order: Order = {
        id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
        ...newOrder,
        orderDate: new Date(),
        deliveryDate: new Date(newOrder.deliveryDate),
        items: [],
        totalAmount: 0,
        status: "draft",
        erpSyncStatus: "pending"
      };
      setOrders([...orders, order]);
      setNewOrder({ customerName: "", customerCode: "", deliveryDate: "", priority: "medium", notes: "" });
    }
  };

  return (
    <div className="space-y-6">
      {/* Order Actions */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-white">Orders Management</h2>
        <div className="flex gap-2">
          <Button 
            onClick={handleERPSync}
            disabled={erpSyncStatus === "syncing"}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Database className="w-4 h-4 mr-2" />
            {erpSyncStatus === "syncing" ? "Syncing..." : "Sync ERP"}
          </Button>
          <Button 
            onClick={handleExportPDF}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <FileText className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button 
            onClick={handleExportExcel}
            variant="outline"
            className="border-slate-600 text-slate-300 hover:bg-slate-700"
          >
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Create New Order */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-cyan-400" />
            Create New Order
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <Label className="text-slate-300">Customer Name</Label>
              <Input
                value={newOrder.customerName}
                onChange={(e) => setNewOrder(prev => ({ ...prev, customerName: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter customer name"
              />
            </div>
            <div>
              <Label className="text-slate-300">Customer Code</Label>
              <Input
                value={newOrder.customerCode}
                onChange={(e) => setNewOrder(prev => ({ ...prev, customerCode: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter customer code"
              />
            </div>
            <div>
              <Label className="text-slate-300">Delivery Date</Label>
              <Input
                type="date"
                value={newOrder.deliveryDate}
                onChange={(e) => setNewOrder(prev => ({ ...prev, deliveryDate: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <Label className="text-slate-300">Priority</Label>
              <select
                value={newOrder.priority}
                onChange={(e) => setNewOrder(prev => ({ ...prev, priority: e.target.value as any }))}
                className="w-full h-10 rounded-md border border-slate-600 bg-slate-700 px-3 py-2 text-white"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </select>
            </div>
            <div className="flex items-end">
              <Button 
                onClick={handleCreateOrder}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                Create Order
              </Button>
            </div>
          </div>
          <div>
            <Label className="text-slate-300">Notes</Label>
            <Textarea
              value={newOrder.notes}
              onChange={(e) => setNewOrder(prev => ({ ...prev, notes: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Enter order notes..."
              rows={3}
            />
          </div>
        </CardContent>
      </Card>

      {/* Orders Table */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            Order List
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Order ID</TableHead>
                <TableHead className="text-slate-300">Customer</TableHead>
                <TableHead className="text-slate-300">Order Date</TableHead>
                <TableHead className="text-slate-300">Delivery Date</TableHead>
                <TableHead className="text-slate-300">Items</TableHead>
                <TableHead className="text-slate-300">Total Amount</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Priority</TableHead>
                <TableHead className="text-slate-300">ERP Sync</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order) => (
                <TableRow key={order.id} className="border-slate-700">
                  <TableCell className="text-cyan-400 font-mono">{order.id}</TableCell>
                  <TableCell className="text-white">
                    <div>
                      <div>{order.customerName}</div>
                      <div className="text-xs text-slate-400">{order.customerCode}</div>
                    </div>
                  </TableCell>
                  <TableCell className="text-slate-300">{order.orderDate.toLocaleDateString()}</TableCell>
                  <TableCell className="text-slate-300">{order.deliveryDate.toLocaleDateString()}</TableCell>
                  <TableCell className="text-white">{order.items.length} items</TableCell>
                  <TableCell className="text-white">${order.totalAmount.toLocaleString()}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(order.status)}>
                      {order.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={getPriorityColor(order.priority)}>
                      {order.priority}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Badge className={
                      order.erpSyncStatus === "synced" ? "bg-green-900 text-green-300 border-green-700" :
                      order.erpSyncStatus === "failed" ? "bg-red-900 text-red-300 border-red-700" :
                      "bg-yellow-900 text-yellow-300 border-yellow-700"
                    }>
                      {order.erpSyncStatus}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        View
                      </Button>
                      <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                        Edit
                      </Button>
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

export default OrdersManagement;
