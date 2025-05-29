
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

interface Order {
  id: string;
  customerName: string;
  items: string;
  quantity: number;
  status: "pending" | "processing" | "completed" | "cancelled";
  rfidTag?: string;
  createdAt: Date;
}

const OrderManagement = () => {
  const { toast } = useToast();
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      customerName: "ABC Manufacturing",
      items: "Steel Pipes",
      quantity: 50,
      status: "processing",
      rfidTag: "RFID-001",
      createdAt: new Date("2024-01-15")
    },
    {
      id: "ORD-002",
      customerName: "XYZ Industries",
      items: "Electronic Components",
      quantity: 200,
      status: "pending",
      createdAt: new Date("2024-01-16")
    }
  ]);

  const [newOrder, setNewOrder] = useState({
    customerName: "",
    items: "",
    quantity: 0
  });

  const handleCreateOrder = () => {
    if (!newOrder.customerName || !newOrder.items || newOrder.quantity <= 0) {
      toast({
        title: "Error",
        description: "Please fill in all fields correctly",
        variant: "destructive"
      });
      return;
    }

    const order: Order = {
      id: `ORD-${String(orders.length + 1).padStart(3, '0')}`,
      ...newOrder,
      status: "pending",
      createdAt: new Date()
    };

    setOrders([...orders, order]);
    setNewOrder({ customerName: "", items: "", quantity: 0 });
    
    toast({
      title: "Order Created",
      description: `Order ${order.id} has been created successfully`
    });
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case "pending": return "bg-yellow-100 text-yellow-800";
      case "processing": return "bg-blue-100 text-blue-800";
      case "completed": return "bg-green-100 text-green-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const updateOrderStatus = (orderId: string, newStatus: Order['status']) => {
    setOrders(orders.map(order => 
      order.id === orderId ? { ...order, status: newStatus } : order
    ));
    
    toast({
      title: "Status Updated",
      description: `Order ${orderId} status changed to ${newStatus}`
    });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <Card className="lg:col-span-1">
        <CardHeader>
          <CardTitle>Create New Order</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="customer">Customer Name</Label>
            <Input
              id="customer"
              value={newOrder.customerName}
              onChange={(e) => setNewOrder({...newOrder, customerName: e.target.value})}
              placeholder="Enter customer name"
            />
          </div>
          <div>
            <Label htmlFor="items">Items</Label>
            <Input
              id="items"
              value={newOrder.items}
              onChange={(e) => setNewOrder({...newOrder, items: e.target.value})}
              placeholder="Enter items description"
            />
          </div>
          <div>
            <Label htmlFor="quantity">Quantity</Label>
            <Input
              id="quantity"
              type="number"
              value={newOrder.quantity}
              onChange={(e) => setNewOrder({...newOrder, quantity: parseInt(e.target.value) || 0})}
              placeholder="Enter quantity"
            />
          </div>
          <Button onClick={handleCreateOrder} className="w-full">
            Create Order
          </Button>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Active Orders</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="p-4 border rounded-lg bg-white">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <h3 className="font-semibold">{order.id}</h3>
                    <p className="text-sm text-gray-600">{order.customerName}</p>
                  </div>
                  <Badge className={getStatusColor(order.status)}>
                    {order.status}
                  </Badge>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium">Items:</span> {order.items}
                  </div>
                  <div>
                    <span className="font-medium">Quantity:</span> {order.quantity}
                  </div>
                  {order.rfidTag && (
                    <div>
                      <span className="font-medium">RFID Tag:</span> {order.rfidTag}
                    </div>
                  )}
                  <div>
                    <span className="font-medium">Created:</span> {order.createdAt.toLocaleDateString()}
                  </div>
                </div>
                <div className="flex gap-2 mt-3">
                  {order.status === "pending" && (
                    <Button
                      size="sm"
                      onClick={() => updateOrderStatus(order.id, "processing")}
                    >
                      Start Processing
                    </Button>
                  )}
                  {order.status === "processing" && (
                    <Button
                      size="sm"
                      onClick={() => updateOrderStatus(order.id, "completed")}
                    >
                      Mark Complete
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default OrderManagement;
