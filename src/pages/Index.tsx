
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 animate-fade-in">
            Warehouse Management System
          </h1>
          <p className="text-xl text-gray-300 font-medium">
            RFID-based inventory tracking and order management
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <DashboardStats />

        <Tabs defaultValue="orders" className="mt-8">
          <TabsList className="grid w-full grid-cols-4 bg-slate-800/50 border border-slate-700 backdrop-blur-lg p-2 rounded-xl">
            <TabsTrigger 
              value="orders" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-500 data-[state=active]:to-purple-500 data-[state=active]:text-white text-gray-300 font-semibold transition-all duration-300 rounded-lg"
            >
              Order Management
            </TabsTrigger>
            <TabsTrigger 
              value="rfid"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-500 data-[state=active]:to-pink-500 data-[state=active]:text-white text-gray-300 font-semibold transition-all duration-300 rounded-lg"
            >
              RFID Tracking
            </TabsTrigger>
            <TabsTrigger 
              value="inventory"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-red-500 data-[state=active]:text-white text-gray-300 font-semibold transition-all duration-300 rounded-lg"
            >
              Inventory
            </TabsTrigger>
            <TabsTrigger 
              value="trucks"
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-green-500 data-[state=active]:to-blue-500 data-[state=active]:text-white text-gray-300 font-semibold transition-all duration-300 rounded-lg"
            >
              Truck Logging
            </TabsTrigger>
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
