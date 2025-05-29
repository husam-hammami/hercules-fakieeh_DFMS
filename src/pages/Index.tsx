
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
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">H</span>
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">HERCULES</h1>
              <p className="text-xs text-slate-400">Industrial Management System</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-slate-300">Hello, ASM</span>
            <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
            <div className="px-3 py-1 bg-cyan-500 text-white text-xs rounded">
              v2.0
            </div>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-slate-800 min-h-screen border-r border-slate-700">
          <nav className="p-4 space-y-2">
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-3">Navigation</div>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-slate-700 text-white">
              <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
              Dashboard
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              Factory KPIs
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              Lines Overview
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              Line 2 EPPs
            </a>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-300 hover:bg-slate-700">
              <div className="w-2 h-2 bg-slate-600 rounded-full"></div>
              Reports
            </a>
            
            <div className="text-xs text-slate-400 uppercase tracking-wider mb-3 mt-6">Warehouse Module</div>
            <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg bg-cyan-600 text-white">
              <div className="w-2 h-2 bg-white rounded-full"></div>
              RFID Tracking
            </a>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">Warehouse Management Report</h2>
            <p className="text-slate-400">RFID-based inventory tracking and order management system</p>
          </div>

          <DashboardStats />

          <Tabs defaultValue="orders" className="mt-8">
            <TabsList className="grid w-full grid-cols-4 bg-slate-800 border border-slate-700 p-1 rounded-lg">
              <TabsTrigger 
                value="orders" 
                className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-slate-300 rounded-md"
              >
                Order Management
              </TabsTrigger>
              <TabsTrigger 
                value="rfid"
                className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-slate-300 rounded-md"
              >
                RFID Tracking
              </TabsTrigger>
              <TabsTrigger 
                value="inventory"
                className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-slate-300 rounded-md"
              >
                Inventory
              </TabsTrigger>
              <TabsTrigger 
                value="trucks"
                className="data-[state=active]:bg-cyan-600 data-[state=active]:text-white text-slate-300 rounded-md"
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
    </div>
  );
};

export default Index;
