
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Scan, Package } from "lucide-react";

interface OutloadingOrder {
  rfid: string;
  sourceRawMaterialCode: string;
  destinationSelection: string;
  quantity: number;
  truckId: string;
  sourceSilo: string;
}

const OutloadingOrderForm = () => {
  const { toast } = useToast();
  const [outloadingOrder, setOutloadingOrder] = useState<OutloadingOrder>({
    rfid: "",
    sourceRawMaterialCode: "",
    destinationSelection: "",
    quantity: 0,
    truckId: "",
    sourceSilo: ""
  });

  const destinationOptions = [
    "Bulk - Loose Material",
    "Bags - Packaged Format"
  ];

  const siloOptions = [
    "Silo #1 - Steel Rod (1200kg)",
    "Silo #2 - Aluminum Sheet (800kg)", 
    "Silo #3 - Copper Wire (450kg)",
    "Silo #4 - Feed Mix (2000kg)"
  ];

  const handleRFIDScan = () => {
    const simulatedRFID = `RFID-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    setOutloadingOrder(prev => ({ ...prev, rfid: simulatedRFID }));
    
    toast({
      title: "RFID Scanned",
      description: `Tag ${simulatedRFID} captured for outloading`
    });
  };

  const handleSubmitOutloadingOrder = () => {
    if (!outloadingOrder.rfid || !outloadingOrder.sourceRawMaterialCode || !outloadingOrder.truckId) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Outloading Order Created",
      description: `Outloading order created for ${outloadingOrder.quantity}kg to ${outloadingOrder.destinationSelection}`,
    });

    // Reset form
    setOutloadingOrder({
      rfid: "",
      sourceRawMaterialCode: "",
      destinationSelection: "",
      quantity: 0,
      truckId: "",
      sourceSilo: ""
    });
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <ArrowRight className="w-5 h-5 text-orange-400" />
          Outloading Order Creation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-slate-300">RFID</Label>
            <div className="flex gap-2">
              <Input
                value={outloadingOrder.rfid}
                onChange={(e) => setOutloadingOrder(prev => ({ ...prev, rfid: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Scan RFID tag"
                readOnly
              />
              <Button 
                onClick={handleRFIDScan}
                className="bg-orange-600 hover:bg-orange-700"
              >
                <Scan className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label className="text-slate-300">Source Raw Material Code</Label>
            <Input
              value={outloadingOrder.sourceRawMaterialCode}
              onChange={(e) => setOutloadingOrder(prev => ({ ...prev, sourceRawMaterialCode: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Enter material code"
            />
          </div>
        </div>

        <div>
          <Label className="text-slate-300">Destination Selection (0 = Bulk, 1 = Bags)</Label>
          <Select onValueChange={(value) => setOutloadingOrder(prev => ({ ...prev, destinationSelection: value }))}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
              <SelectValue placeholder="Select destination format" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {destinationOptions.map((option) => (
                <SelectItem key={option} value={option} className="text-white">
                  {option}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-slate-300">Quantity</Label>
            <Input
              type="number"
              value={outloadingOrder.quantity}
              onChange={(e) => setOutloadingOrder(prev => ({ ...prev, quantity: Number(e.target.value) }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Enter quantity"
            />
          </div>

          <div>
            <Label className="text-slate-300">Truck ID</Label>
            <Input
              value={outloadingOrder.truckId}
              onChange={(e) => setOutloadingOrder(prev => ({ ...prev, truckId: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Enter truck ID"
            />
          </div>
        </div>

        <div>
          <Label className="text-slate-300">Silo (used as source)</Label>
          <Select onValueChange={(value) => setOutloadingOrder(prev => ({ ...prev, sourceSilo: value }))}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
              <SelectValue placeholder="Select source silo" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {siloOptions.map((silo) => (
                <SelectItem key={silo} value={silo} className="text-white">
                  {silo}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <Button 
          onClick={handleSubmitOutloadingOrder}
          className="w-full bg-orange-600 hover:bg-orange-700 text-white"
        >
          <Package className="w-4 h-4 mr-2" />
          Create Outloading Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default OutloadingOrderForm;
