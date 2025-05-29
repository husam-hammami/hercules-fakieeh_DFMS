
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  quantity: number;
  location: string;
  rfidTags: string[];
  lastUpdated: Date;
  status: "in_stock" | "low_stock" | "out_of_stock";
}

const InventoryView = () => {
  const [inventory, setInventory] = useState<InventoryItem[]>([
    {
      id: "INV-001",
      name: "Steel Pipes - 2 inch",
      category: "Raw Materials",
      quantity: 150,
      location: "Storage Zone A",
      rfidTags: ["RFID-001", "RFID-002"],
      lastUpdated: new Date(),
      status: "in_stock"
    },
    {
      id: "INV-002",
      name: "Electronic Components",
      category: "Components",
      quantity: 25,
      location: "Storage Zone B",
      rfidTags: ["RFID-003"],
      lastUpdated: new Date(Date.now() - 3600000),
      status: "low_stock"
    },
    {
      id: "INV-003",
      name: "Aluminum Sheets",
      category: "Raw Materials",
      quantity: 0,
      location: "Storage Zone C",
      rfidTags: [],
      lastUpdated: new Date(Date.now() - 7200000),
      status: "out_of_stock"
    }
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = ["all", ...Array.from(new Set(inventory.map(item => item.category)))];

  const getStatusColor = (status: InventoryItem['status']) => {
    switch (status) {
      case "in_stock": return "bg-green-100 text-green-800";
      case "low_stock": return "bg-yellow-100 text-yellow-800";
      case "out_of_stock": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  const filteredInventory = inventory.filter(item => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const totalItems = inventory.reduce((sum, item) => sum + item.quantity, 0);
  const lowStockItems = inventory.filter(item => item.status === "low_stock").length;
  const outOfStockItems = inventory.filter(item => item.status === "out_of_stock").length;

  return (
    <div className="space-y-6">
      {/* Inventory Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-blue-600">{totalItems}</div>
            <div className="text-sm text-gray-600">Total Items</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-yellow-600">{lowStockItems}</div>
            <div className="text-sm text-gray-600">Low Stock Alerts</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4">
            <div className="text-2xl font-bold text-red-600">{outOfStockItems}</div>
            <div className="text-sm text-gray-600">Out of Stock</div>
          </CardContent>
        </Card>
      </div>

      {/* Search and Filter */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Search & Filter</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <Input
              placeholder="Search items, locations, or IDs..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 border border-gray-300 rounded-md"
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category === "all" ? "All Categories" : category}
                </option>
              ))}
            </select>
            <Button variant="creative">
              Export Report
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Inventory Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredInventory.map((item) => (
          <Card key={item.id} className="transition-all hover:shadow-lg">
            <CardHeader className="pb-3">
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <p className="text-sm text-gray-600">{item.category}</p>
                </div>
                <Badge className={getStatusColor(item.status)}>
                  {item.status.replace('_', ' ')}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm font-medium">Quantity:</span>
                <span className={`text-sm font-bold ${
                  item.quantity === 0 ? 'text-red-600' : 
                  item.quantity < 50 ? 'text-yellow-600' : 'text-green-600'
                }`}>
                  {item.quantity}
                </span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm font-medium">Location:</span>
                <span className="text-sm text-gray-600">{item.location}</span>
              </div>
              
              <div>
                <span className="text-sm font-medium">RFID Tags:</span>
                <div className="flex flex-wrap gap-1 mt-1">
                  {item.rfidTags.length > 0 ? (
                    item.rfidTags.map(tag => (
                      <Badge key={tag} variant="outline" className="text-xs">
                        {tag}
                      </Badge>
                    ))
                  ) : (
                    <span className="text-xs text-gray-400">No tags assigned</span>
                  )}
                </div>
              </div>
              
              <div className="flex justify-between">
                <span className="text-sm font-medium">Last Updated:</span>
                <span className="text-xs text-gray-500">
                  {item.lastUpdated.toLocaleString()}
                </span>
              </div>

              <div className="flex gap-2 pt-2">
                <Button size="sm" variant="outline" className="flex-1">
                  Update
                </Button>
                <Button size="sm" variant="secondary" className="flex-1">
                  Move
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default InventoryView;
