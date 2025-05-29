
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeftRight, Plus } from "lucide-react";

interface BulkTransfer {
  id: string;
  sourceSilo: string;
  destinationSilo: string;
  quantity: number;
  status: "pending" | "in-progress" | "completed" | "failed";
  createdAt: Date;
}

const BulkTransferManagement = () => {
  const { toast } = useToast();
  const [transfers, setTransfers] = useState<BulkTransfer[]>([
    {
      id: "BT-001",
      sourceSilo: "Silo #1",
      destinationSilo: "Silo #3",
      quantity: 500,
      status: "completed",
      createdAt: new Date(Date.now() - 3600000)
    },
    {
      id: "BT-002", 
      sourceSilo: "Silo #2",
      destinationSilo: "Silo #4",
      quantity: 750,
      status: "in-progress",
      createdAt: new Date(Date.now() - 1800000)
    }
  ]);

  const [newTransfer, setNewTransfer] = useState({
    sourceSilo: "",
    destinationSilo: "",
    quantity: 0
  });

  const siloOptions = [
    "Silo #1 - Steel Rod",
    "Silo #2 - Aluminum Sheet", 
    "Silo #3 - Copper Wire",
    "Silo #4 - Feed Mix Base",
    "Bin A - Wheat Storage",
    "Bin B - Corn Storage"
  ];

  const getStatusColor = (status: BulkTransfer['status']) => {
    switch (status) {
      case "pending": return "bg-yellow-900 text-yellow-300 border-yellow-700";
      case "in-progress": return "bg-blue-900 text-blue-300 border-blue-700";
      case "completed": return "bg-green-900 text-green-300 border-green-700";
      case "failed": return "bg-red-900 text-red-300 border-red-700";
      default: return "bg-slate-700 text-slate-300 border-slate-600";
    }
  };

  const handleCreateTransfer = () => {
    if (!newTransfer.sourceSilo || !newTransfer.destinationSilo || newTransfer.quantity <= 0) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields with valid values",
        variant: "destructive"
      });
      return;
    }

    if (newTransfer.sourceSilo === newTransfer.destinationSilo) {
      toast({
        title: "Validation Error",
        description: "Source and destination cannot be the same",
        variant: "destructive"
      });
      return;
    }

    const transfer: BulkTransfer = {
      id: `BT-${String(transfers.length + 1).padStart(3, '0')}`,
      ...newTransfer,
      status: "pending",
      createdAt: new Date()
    };

    setTransfers([...transfers, transfer]);
    setNewTransfer({ sourceSilo: "", destinationSilo: "", quantity: 0 });

    toast({
      title: "Bulk Transfer Created",
      description: `Transfer ${transfer.id} created successfully`
    });
  };

  const updateTransferStatus = (transferId: string, newStatus: BulkTransfer['status']) => {
    setTransfers(transfers.map(transfer => 
      transfer.id === transferId 
        ? { ...transfer, status: newStatus }
        : transfer
    ));

    toast({
      title: "Status Updated",
      description: `Transfer ${transferId} status updated to ${newStatus}`
    });
  };

  return (
    <div className="space-y-6">
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <Plus className="w-5 h-5 text-green-400" />
            Create Bulk Transfer
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <div>
              <Label className="text-slate-300">Source Silo</Label>
              <Select onValueChange={(value) => setNewTransfer(prev => ({ ...prev, sourceSilo: value }))}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select source" />
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

            <div>
              <Label className="text-slate-300">Destination</Label>
              <Select onValueChange={(value) => setNewTransfer(prev => ({ ...prev, destinationSilo: value }))}>
                <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                  <SelectValue placeholder="Select destination" />
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

            <div>
              <Label className="text-slate-300">Quantity (KG)</Label>
              <Input
                type="number"
                value={newTransfer.quantity}
                onChange={(e) => setNewTransfer(prev => ({ ...prev, quantity: Number(e.target.value) }))}
                className="bg-slate-700 border-slate-600 text-white"
                placeholder="Enter quantity"
              />
            </div>
          </div>

          <Button 
            onClick={handleCreateTransfer}
            className="w-full bg-green-600 hover:bg-green-700 text-white"
          >
            Create Transfer
          </Button>
        </CardContent>
      </Card>

      <Card className="bg-slate-800 border-slate-700">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <ArrowLeftRight className="w-5 h-5 text-cyan-400" />
            Bulk Transfer History
          </CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow className="border-slate-700">
                <TableHead className="text-slate-300">Transfer ID</TableHead>
                <TableHead className="text-slate-300">Source</TableHead>
                <TableHead className="text-slate-300">Destination</TableHead>
                <TableHead className="text-slate-300">Quantity (KG)</TableHead>
                <TableHead className="text-slate-300">Status</TableHead>
                <TableHead className="text-slate-300">Created</TableHead>
                <TableHead className="text-slate-300">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {transfers.map((transfer) => (
                <TableRow key={transfer.id} className="border-slate-700">
                  <TableCell className="text-cyan-400 font-mono">{transfer.id}</TableCell>
                  <TableCell className="text-white">{transfer.sourceSilo}</TableCell>
                  <TableCell className="text-white">{transfer.destinationSilo}</TableCell>
                  <TableCell className="text-white">{transfer.quantity}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(transfer.status)}>
                      {transfer.status}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-slate-300">{transfer.createdAt.toLocaleString()}</TableCell>
                  <TableCell>
                    <div className="flex gap-2">
                      {transfer.status === "pending" && (
                        <Button 
                          size="sm" 
                          onClick={() => updateTransferStatus(transfer.id, "in-progress")}
                          className="bg-blue-600 hover:bg-blue-700"
                        >
                          Start
                        </Button>
                      )}
                      {transfer.status === "in-progress" && (
                        <Button 
                          size="sm" 
                          onClick={() => updateTransferStatus(transfer.id, "completed")}
                          className="bg-green-600 hover:bg-green-700"
                        >
                          Complete
                        </Button>
                      )}
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

export default BulkTransferManagement;
