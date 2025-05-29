import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Factory, Calendar, Plus } from "lucide-react";
import NewRecipeDialog from "./NewRecipeDialog";

interface BatchRecipe {
  recipeId: string;
  batchNo: string;
  ingredients: string[];
  targetQuantity: number;
  actualQuantity: number;
  status: "pending" | "in-progress" | "completed" | "failed";
  startTime: Date;
  endTime?: Date;
}

const ProductionManagement = () => {
  const [todayOutput] = useState({
    target: 50.5,
    actual: 42.8,
    efficiency: 84.7
  });

  const [batchRecipes, setBatchRecipes] = useState<BatchRecipe[]>([
    {
      recipeId: "RCP-001",
      batchNo: "BTH-001",
      ingredients: ["Steel Rod (500kg)", "Carbon (50kg)", "Alloy Mix (25kg)"],
      targetQuantity: 10.5,
      actualQuantity: 10.2,
      status: "completed",
      startTime: new Date(Date.now() - 3600000),
      endTime: new Date(Date.now() - 600000)
    },
    {
      recipeId: "RCP-002",
      batchNo: "BTH-002",
      ingredients: ["Aluminum Sheet (300pcs)", "Copper Wire (100m)", "Coating (15kg)"],
      targetQuantity: 8.0,
      actualQuantity: 6.5,
      status: "in-progress",
      startTime: new Date(Date.now() - 1800000)
    },
    {
      recipeId: "RCP-003",
      batchNo: "BTH-003",
      ingredients: ["Raw Material A (200kg)", "Raw Material B (150kg)"],
      targetQuantity: 12.0,
      actualQuantity: 0,
      status: "pending",
      startTime: new Date(Date.now() + 3600000)
    }
  ]);

  const handleNewRecipe = (newRecipe: BatchRecipe) => {
    setBatchRecipes(prev => [...prev, newRecipe]);
  };

  const getStatusColor = (status: BatchRecipe['status']) => {
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
      {/* Today's Output */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Factory className="w-5 h-5 text-cyan-400" />
            Today's Production Output
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">{todayOutput.target}</div>
              <div className="text-slate-400">Target (Tons)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">{todayOutput.actual}</div>
              <div className="text-slate-400">Actual (Tons)</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{todayOutput.efficiency}%</div>
              <div className="text-slate-400">Efficiency</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Batch Recipes */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-white flex items-center gap-2">
            <Calendar className="w-5 h-5 text-cyan-400" />
            Batch Recipe Management
          </CardTitle>
          <NewRecipeDialog onRecipeCreate={handleNewRecipe}>
            <Button className="bg-cyan-600 hover:bg-cyan-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              New Recipe
            </Button>
          </NewRecipeDialog>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Recipe ID</TableHead>
                <TableHead className="text-slate-300">Batch No</TableHead>
                <TableHead className="text-slate-300">Ingredients</TableHead>
                <TableHead className="text-slate-300">Target (Tons)</TableHead>
                <TableHead className="text-slate-300">Actual (Tons)</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Start Time</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {batchRecipes.map((recipe) => (
                <TableRow key={recipe.recipeId} className="border-slate-700">
                  <TableCell className="text-cyan-400 font-mono">{recipe.recipeId}</TableCell>
                  <TableCell className="text-white font-mono">{recipe.batchNo}</TableCell>
                  <TableCell className="text-slate-300">
                    <div className="max-w-xs">
                      {recipe.ingredients.slice(0, 2).map((ingredient, index) => (
                        <div key={index} className="text-xs">{ingredient}</div>
                      ))}
                      {recipe.ingredients.length > 2 && (
                        <div className="text-xs text-slate-500">+{recipe.ingredients.length - 2} more</div>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="text-white">{recipe.targetQuantity}</TableCell>
                  <TableCell className="text-white">{recipe.actualQuantity}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(recipe.status)}>
                      {recipe.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">
                    {recipe.startTime.toLocaleTimeString()}
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

export default ProductionManagement;
