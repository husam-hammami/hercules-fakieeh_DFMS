
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { Truck, Scan, Database } from "lucide-react";

interface IntakeOrder {
  truckId: string;
  driverId: string;
  sourceRawMaterialCode: string;
  rfidTag: string;
  quantity: number;
  destinationBin: string;
  deliveryVehicle: string;
}

const IntakeOrderForm = () => {
  const { toast } = useToast();
  const [intakeOrder, setIntakeOrder] = useState<IntakeOrder>({
    truckId: "",
    driverId: "",
    sourceRawMaterialCode: "",
    rfidTag: "",
    quantity: 0,
    destinationBin: "",
    deliveryVehicle: ""
  });

  const [stockAvailable, setStockAvailable] = useState<boolean | null>(null);

  const materialTypes = [
    "SR-001 - Steel Rod",
    "AS-002 - Aluminum Sheet", 
    "CW-003 - Copper Wire",
    "FM-001 - Feed Mix Base",
    "WH-002 - Wheat",
    "CO-003 - Corn"
  ];

  const destinationBins = [
    "Silo #1", "Silo #2", "Silo #3", "Silo #4",
    "Bin A", "Bin B", "Bin C", "Bin D"
  ];

  const handleMaterialTypeSelect = async (materialCode: string) => {
    setIntakeOrder(prev => ({ ...prev, sourceRawMaterialCode: materialCode }));
    
    // Simulate stock availability check
    setTimeout(() => {
      const isAvailable = Math.random() > 0.3; // 70% chance available
      setStockAvailable(isAvailable);
      
      if (!isAvailable) {
        toast({
          title: "Stock Check",
          description: "Material not available. Please check stock levels.",
          variant: "destructive"
        });
      }
    }, 1000);
  };

  const handleRFIDScan = () => {
    // Simulate RFID scan
    const simulatedRFID = `RFID-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
    setIntakeOrder(prev => ({ ...prev, rfidTag: simulatedRFID }));
    
    toast({
      title: "RFID Scanned",
      description: `Tag ${simulatedRFID} captured successfully`
    });
  };

  const handleSubmitIntakeOrder = () => {
    if (!intakeOrder.truckId || !intakeOrder.sourceRawMaterialCode || !intakeOrder.rfidTag) {
      toast({
        title: "Validation Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    if (stockAvailable === false) {
      toast({
        title: "Stock Error",
        description: "Cannot create order - material not available",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Intake Order Created",
      description: `Order created for ${intakeOrder.quantity}kg of ${intakeOrder.sourceRawMaterialCode}`,
    });

    // Reset form
    setIntakeOrder({
      truckId: "",
      driverId: "",
      sourceRawMaterialCode: "",
      rfidTag: "",
      quantity: 0,
      destinationBin: "",
      deliveryVehicle: ""
    });
    setStockAvailable(null);
  };

  return (
    <Card className="bg-slate-800 border-slate-700">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2">
          <Truck className="w-5 h-5 text-cyan-400" />
          Intake Order Creation
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-slate-300">Truck ID (Plate Number)</Label>
            <Input
              value={intakeOrder.truckId}
              onChange={(e) => setIntakeOrder(prev => ({ ...prev, truckId: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Enter truck plate number"
            />
          </div>
          
          <div>
            <Label className="text-slate-300">Driver ID</Label>
            <Input
              value={intakeOrder.driverId}
              onChange={(e) => setIntakeOrder(prev => ({ ...prev, driverId: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Enter driver ID"
            />
          </div>
        </div>

        <div>
          <Label className="text-slate-300">Source Raw Material Type Code</Label>
          <Select onValueChange={handleMaterialTypeSelect}>
            <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
              <SelectValue placeholder="Select material type" />
            </SelectTrigger>
            <SelectContent className="bg-slate-700 border-slate-600">
              {materialTypes.map((material) => (
                <SelectItem key={material} value={material} className="text-white">
                  {material}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {stockAvailable === false && (
            <p className="text-red-400 text-sm mt-1">⚠️ Material not available in stock</p>
          )}
          {stockAvailable === true && (
            <p className="text-green-400 text-sm mt-1">✓ Material available</p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-slate-300">RFID Tag</Label>
            <div className="flex gap-2">
              <Input
                value={intakeOrder.rfidTag}
                onChange={(e) => setIntakeOrder(prev => ({ ...prev, rfidTag: e.target.value }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Scan or enter RFID"
                readOnly
              />
              <Button 
                onClick={handleRFIDScan}
                className="bg-cyan-600 hover:bg-cyan-700"
              >
                <Scan className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div>
            <Label className="text-slate-300">Quantity (Weight in KG)</Label>
            <Input
              type="number"
              value={intakeOrder.quantity}
              onChange={(e) => setIntakeOrder(prev => ({ ...prev, quantity: Number(e.target.value) }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Enter quantity"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label className="text-slate-300">Destination Bin (Silo #)</Label>
            <Select onValueChange={(value) => setIntakeOrder(prev => ({ ...prev, destinationBin: value }))}>
              <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                <SelectValue placeholder="Select destination" />
              </SelectTrigger>
              <SelectContent className="bg-slate-700 border-slate-600">
                {destinationBins.map((bin) => (
                  <SelectItem key={bin} value={bin} className="text-white">
                    {bin}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <Label className="text-slate-300">Delivery Vehicle or Source Point</Label>
            <Input
              value={intakeOrder.deliveryVehicle}
              onChange={(e) => setIntakeOrder(prev => ({ ...prev, deliveryVehicle: e.target.value }))}
              className="bg-slate-700 border-slate-600 text-white"
              placeholder="Enter delivery vehicle"
            />
          </div>
        </div>

        <Button 
          onClick={handleSubmitIntakeOrder}
          className="w-full bg-cyan-600 hover:bg-cyan-700 text-white"
          disabled={stockAvailable === false}
        >
          <Database className="w-4 h-4 mr-2" />
          Create Intake Order
        </Button>
      </CardContent>
    </Card>
  );
};

export default IntakeOrderForm;
