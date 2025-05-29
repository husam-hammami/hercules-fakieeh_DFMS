
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderManagement from "@/components/OrderManagement";
import RFIDTracking from "@/components/RFIDTracking";
import InventoryView from "@/components/InventoryView";
import TruckLogging from "@/components/TruckLogging";
import DashboardStats from "@/components/DashboardStats";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Warehouse Management System
          </h1>
          <p className="text-gray-600">
            RFID-based inventory tracking and order management
          </p>
        </div>

        <DashboardStats />

        <Tabs defaultValue="orders" className="mt-8">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="orders">Order Management</TabsTrigger>
            <TabsTrigger value="rfid">RFID Tracking</TabsTrigger>
            <TabsTrigger value="inventory">Inventory</TabsTrigger>
            <TabsTrigger value="trucks">Truck Logging</TabsTrigger>
          </TabsList>

          <TabsContent value="orders" className="mt-6">
            <OrderManagement />
          </TabsContent>

          <TabsContent value="rfid" className="mt-6">
            <RFIDTracking />
          </TabsContent>

          <TabsContent value="inventory" className="mt-6">
            <InventoryView />
          </TabsContent>

          <TabsContent value="trucks" className="mt-6">
            <TruckLogging />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
