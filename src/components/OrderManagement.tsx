
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface Order {
  id: string;
  customerName: string;
  items: { name: string; quantity: number; rfidTag?: string }[];
  status: "pending" | "processing" | "completed" | "shipped";
  priority: "low" | "medium" | "high";
  createdAt: Date;
  estimatedCompletion: Date;
}

const OrderManagement = () => {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customerName: "Industrial Corp Ltd",
      items: [
        { name: "Steel Pipes", quantity: 50, rfidTag: "RFID-001" },
        { name: "Aluminum Sheets", quantity: 25 }
      ],
      status: "processing",
      priority: "high",
      createdAt: new Date(),
      estimatedCompletion: new Date(Date.now() + 86400000)
    },
    {
      id: "ORD-002",
      customerName: "Manufacturing Solutions",
      items: [
        { name: "Electronic Components", quantity: 100 }
      ],
      status: "pending",
      priority: "medium",
      createdAt: new Date(Date.now() - 3600000),
      estimatedCompletion: new Date(Date.now() + 172800000)
    }
  ]);

  const [newOrderForm, setNewOrderForm] = useState({
    customerName: "",
    itemName: "",
    quantity: 0
  });

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case "pending": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "processing": return "bg-blue-900 text-blue-300 border-blue-700";
      case "completed": return "bg-green-900 text-green-300 border-green-700";
      case "shipped": return "bg-purple-900 text-purple-300 border-purple-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const getPriorityColor = (priority: Order['priority']) => {
    switch (priority) {
      case "high": return "bg-red-900 text-red-300 border-red-700";
      case "medium": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "low": return "bg-green-900 text-green-300 border-green-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  return (
    <div className="space-y-6">
      {/* Create New Order */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white">Create New Order</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input
              placeholder="Customer Name"
              value={newOrderForm.customerName}
              onChange={(e) => setNewOrderForm(prev => ({ ...prev, customerName: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
            <Input
              placeholder="Item Name"
              value={newOrderForm.itemName}
              onChange={(e) => setNewOrderForm(prev => ({ ...prev, itemName: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
            <Input
              placeholder="Quantity"
              type="number"
              value={newOrderForm.quantity || ""}
              onChange={(e) => setNewOrderForm(prev => ({ ...prev, quantity: parseInt(e.target.value) || 0 }))}
              className="bg-slate-700 border-slate-600 text-white placeholder:text-slate-400"
            />
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              Create Order
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Orders List */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {orders.map((order) => (
          <Card key={order.id} className="bg-slate-800 border-slate-700">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg text-white">{order.id}</CardTitle>
                  <p className="text-slate-400 text-sm">{order.customerName}</p>
                </div>
                <div className="flex gap-2">
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                  <Badge className={getPriorityColor(order.priority)}>
                    {order.priority}
                  </Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium text-slate-300 mb-2">Items:</h4>
                <div className="space-y-2">
                  {order.items.map((item, index) => (
                    <div key={index} className="flex justify-between items-center p-2 bg-slate-700 rounded">
                      <span className="text-white">{item.name}</span>
                      <div className="text-right">
                        <div className="text-cyan-400 font-medium">Qty: {item.quantity}</div>
                        {item.rfidTag && (
                          <div className="text-xs text-slate-400">RFID: {item.rfidTag}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Created:</span>
                <span className="text-white">{order.createdAt.toLocaleDateString()}</span>
              </div>
              
              <div className="flex justify-between text-sm">
                <span className="text-slate-400">Est. Completion:</span>
                <span className="text-white">{order.estimatedCompletion.toLocaleDateString()}</span>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                  Update Status
                </Button>
                <Button size="sm" variant="outline" className="flex-1 border-slate-600 text-slate-300 hover:bg-slate-700">
                  Assign RFID
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default OrderManagement;
