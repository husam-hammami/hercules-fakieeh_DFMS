
import { useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Plus, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface NewRecipeDialogProps {
  children: React.ReactNode;
  onRecipeCreate?: (recipe: any) => void;
}

const NewRecipeDialog = ({ children, onRecipeCreate }: NewRecipeDialogProps) => {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    recipeId: "",
    batchNo: "",
    targetQuantity: "",
    status: "pending" as const,
    ingredients: [{ name: "", quantity: "" }]
  });
  const { toast } = useToast();

  const handleAddIngredient = () => {
    setFormData(prev => ({
      ...prev,
      ingredients: [...prev.ingredients, { name: "", quantity: "" }]
    }));
  };

  const handleRemoveIngredient = (index: number) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.filter((_, i) => i !== index)
    }));
  };

  const handleIngredientChange = (index: number, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      ingredients: prev.ingredients.map((ingredient, i) => 
        i === index ? { ...ingredient, [field]: value } : ingredient
      )
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.recipeId || !formData.batchNo || !formData.targetQuantity) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    // Format ingredients for display
    const formattedIngredients = formData.ingredients
      .filter(ing => ing.name && ing.quantity)
      .map(ing => `${ing.name} (${ing.quantity})`);

    const newRecipe = {
      recipeId: formData.recipeId,
      batchNo: formData.batchNo,
      ingredients: formattedIngredients,
      targetQuantity: parseFloat(formData.targetQuantity),
      actualQuantity: 0,
      status: formData.status,
      startTime: new Date(),
    };

    console.log("Creating new recipe:", newRecipe);
    
    if (onRecipeCreate) {
      onRecipeCreate(newRecipe);
    }

    toast({
      title: "Recipe Created",
      description: `Recipe ${formData.recipeId} has been created successfully`,
    });

    // Reset form
    setFormData({
      recipeId: "",
      batchNo: "",
      targetQuantity: "",
      status: "pending",
      ingredients: [{ name: "", quantity: "" }]
    });
    
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create New Recipe</DialogTitle>
          <DialogDescription>
            Add a new batch recipe to the production schedule
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="recipeId">Recipe ID *</Label>
              <Input
                id="recipeId"
                placeholder="e.g., RCP-004"
                value={formData.recipeId}
                onChange={(e) => setFormData(prev => ({ ...prev, recipeId: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="batchNo">Batch Number *</Label>
              <Input
                id="batchNo"
                placeholder="e.g., BTH-004"
                value={formData.batchNo}
                onChange={(e) => setFormData(prev => ({ ...prev, batchNo: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="targetQuantity">Target Quantity (Tons) *</Label>
              <Input
                id="targetQuantity"
                type="number"
                step="0.1"
                placeholder="e.g., 15.5"
                value={formData.targetQuantity}
                onChange={(e) => setFormData(prev => ({ ...prev, targetQuantity: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="status">Status</Label>
              <Select 
                value={formData.status} 
                onValueChange={(value: "pending" | "in-progress" | "completed" | "failed") => 
                  setFormData(prev => ({ ...prev, status: value }))
                }
              >
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent className="bg-slate-700 border-slate-600">
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="in-progress">In Progress</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                  <SelectItem value="failed">Failed</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>Ingredients</Label>
              <Button
                type="button"
                size="sm"
                onClick={handleAddIngredient}
                className="bg-cyan-600 hover:bg-cyan-700"
              >
                <Plus className="w-4 h-4 mr-1" />
                Add Ingredient
              </Button>
            </div>
            
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {formData.ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2 items-end">
                  <div className="flex-1">
                    <Input
                      placeholder="Ingredient name"
                      value={ingredient.name}
                      onChange={(e) => handleIngredientChange(index, 'name', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      placeholder="Quantity (e.g., 500kg)"
                      value={ingredient.quantity}
                      onChange={(e) => handleIngredientChange(index, 'quantity', e.target.value)}
                      className="bg-slate-700 border-slate-600 text-white"
                    />
                  </div>
                  {formData.ingredients.length > 1 && (
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => handleRemoveIngredient(index)}
                      className="border-red-600 text-red-400 hover:bg-red-600/10"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              ))}
            </div>
          </div>

          <DialogFooter>
            <Button type="button" variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-cyan-600 hover:bg-cyan-700">
              Create Recipe
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default NewRecipeDialog;
