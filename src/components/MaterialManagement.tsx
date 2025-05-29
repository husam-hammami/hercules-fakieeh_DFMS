
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Database } from "lucide-react";

interface Material {
  id: string;
  name: string;
  code: string;
  type: string;
  uom: string;
  stock: number;
  status: "active" | "inactive";
}

const MaterialManagement = () => {
  const [materials, setMaterials] = useState<Material[]>([
    {
      id: "MAT-001",
      name: "Steel Rod",
      code: "SR-001",
      type: "Raw Material",
      uom: "KG",
      stock: 1500,
      status: "active"
    },
    {
      id: "MAT-002",
      name: "Aluminum Sheet",
      code: "AS-002",
      type: "Semi-Finished",
      uom: "PCS",
      stock: 250,
      status: "active"
    },
    {
      id: "MAT-003",
      name: "Copper Wire",
      code: "CW-003",
      type: "Raw Material",
      uom: "MTR",
      stock: 500,
      status: "inactive"
    }
  ]);

  const [newMaterial, setNewMaterial] = useState({
    name: "",
    code: "",
    type: "",
    uom: "",
    stock: 0
  });

  const handleAddMaterial = () => {
    if (newMaterial.name && newMaterial.code) {
      const material: Material = {
        id: `MAT-${String(materials.length + 1).padStart(3, '0')}`,
        ...newMaterial,
        status: "active"
      };
      setMaterials([...materials, material]);
      setNewMaterial({ name: "", code: "", type: "", uom: "", stock: 0 });
    }
  };

  return (
    <div className="space-y-6">
      {/* Add New Material */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <div className="relative">
              <Plus className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] filter brightness-125 transform hover:scale-110 transition-all duration-200" 
                    style={{
                      filter: 'drop-shadow(0 0 8px rgba(34, 211, 238, 0.6)) drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))'
                    }} />
              <div className="absolute inset-0 w-6 h-6 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full blur-sm -z-10"></div>
            </div>
            Add New Material
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            <div>
              <Label className="text-slate-300">Material Name</Label>
              <Input
                value={newMaterial.name}
                onChange={(e) => setNewMaterial(prev => ({ ...prev, name: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter material name"
              />
            </div>
            <div>
              <Label className="text-slate-300">Material Code</Label>
              <Input
                value={newMaterial.code}
                onChange={(e) => setNewMaterial(prev => ({ ...prev, code: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter code"
              />
            </div>
            <div>
              <Label className="text-slate-300">Material Type</Label>
              <Input
                value={newMaterial.type}
                onChange={(e) => setNewMaterial(prev => ({ ...prev, type: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter type"
              />
            </div>
            <div>
              <Label className="text-slate-300">UoM</Label>
              <Input
                value={newMaterial.uom}
                onChange={(e) => setNewMaterial(prev => ({ ...prev, uom: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="KG, PCS, MTR"
              />
            </div>
            <div className="flex items-end">
              <Button 
                onClick={handleAddMaterial}
                className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
              >
                Add Material
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Materials Table */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Database className="w-5 h-5 text-cyan-400" />
            Material Inventory
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Material ID</TableHead>
                <TableHead className="text-slate-300">Name</TableHead>
                <TableHead className="text-slate-300">Code</TableHead>
                <TableHead className="text-slate-300">Type</TableHead>
                <TableHead className="text-slate-300">UoM</TableHead>
                <TableHead className="text-slate-300">Stock</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {materials.map((material) => (
                <TableRow key={material.id} className="border-slate-700">
                  <TableCell className="text-white font-mono">{material.id}</TableCell>
                  <TableCell className="text-white">{material.name}</TableCell>
                  <TableCell className="text-cyan-400 font-mono">{material.code}</TableCell>
                  <TableCell className="text-slate-300">{material.type}</TableCell>
                  <TableCell className="text-slate-300">{material.uom}</TableCell>
                  <TableCell className="text-white">{material.stock}</TableCell>
                  <TableCell>
                    <Badge 
                      className={material.status === "active" 
                        ? "bg-green-900 text-green-300 border-green-700" 
                        : "bg-red-900 text-red-300 border-red-700"
                      }
                    >
                      {material.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button size="sm" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-700">
                      <Edit className="w-4 h-4" />
                    </Button>
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

export default MaterialManagement;
