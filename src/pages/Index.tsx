import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import OrderManagement from "@/components/OrderManagement";
import RFIDTracking from "@/components/RFIDTracking";
import InventoryView from "@/components/InventoryView";
import TruckLogging from "@/components/TruckLogging";
import DashboardStats from "@/components/DashboardStats";
import MaterialManagement from "@/components/MaterialManagement";
import ProductionManagement from "@/components/ProductionManagement";
import AlarmsManagement from "@/components/AlarmsManagement";
import OrdersManagement from "@/components/OrdersManagement";
import StorageManagement from "@/components/StorageManagement";
import { LayoutDashboard, FlaskConical, Factory, Users, ClipboardList, Calendar, Zap, AlertCircle, BarChart3, Shield, Database } from 'lucide-react';

const Index = () => {
  const [activeModule, setActiveModule] = useState("dashboard");

  const renderMainContent = () => {
    switch (activeModule) {
      case "dashboard":
        return <DashboardStats />;
      case "material":
        return <MaterialManagement />;
      case "production":
        return <ProductionManagement />;
      case "orders":
        return <OrdersManagement />;
      case "storage":
        return <StorageManagement />;
      case "rfid":
        return <RFIDTracking />;
      case "inventory":
        return <InventoryView />;
      case "weighbridge":
        return <TruckLogging />;
      case "alarms":
        return <AlarmsManagement />;
      case "reports":
        return <Card className="industrial-card">
            <CardHeader>
              <CardTitle className="text-zinc-100">Reports & Analytics</CardTitle>
              <CardDescription className="text-zinc-400">
                Comprehensive reporting dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-zinc-200">Reports module coming soon...</div>
            </CardContent>
          </Card>;
      case "maintenance":
        return <Card className="industrial-card">
            <CardHeader>
              <CardTitle className="text-zinc-100">Maintenance Management</CardTitle>
              <CardDescription className="text-zinc-400">
                Equipment maintenance and scheduling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-zinc-200">Maintenance module coming soon...</div>
            </CardContent>
          </Card>;
      case "admin":
        return <Card className="industrial-card">
            <CardHeader>
              <CardTitle className="text-zinc-100">Administration</CardTitle>
              <CardDescription className="text-zinc-400">
                System administration and user management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-zinc-200">Admin module coming soon...</div>
            </CardContent>
          </Card>;
      default:
        return <DashboardStats />;
    }
  };

  const getPageTitle = () => {
    switch (activeModule) {
      case "dashboard":
        return "Production Intelligence Dashboard";
      case "material":
        return "Material Management";
      case "production":
        return "Production Management";
      case "orders":
        return "Orders Management";
      case "rfid":
        return "RFID Tracking System";
      case "inventory":
        return "Inventory Management";
      case "weighbridge":
        return "Weighbridge Management";
      case "alarms":
        return "Alarms & Notifications";
      case "reports":
        return "Reports & Analytics";
      case "maintenance":
        return "Maintenance Management";
      case "admin":
        return "System Administration";
      case "storage":
        return "Storage Management";
      default:
        return "Production Intelligence Dashboard";
    }
  };

  const getPageDescription = () => {
    switch (activeModule) {
      case "dashboard":
        return "Real-time production monitoring, KPI tracking, and operational intelligence";
      case "material":
        return "Material inventory, codes, and specifications management";
      case "production":
        return "Production monitoring, batch recipes, and output tracking";
      case "orders":
        return "Order processing, ERP synchronization, and fulfillment";
      case "rfid":
        return "Real-time RFID tracking and location monitoring";
      case "inventory":
        return "Stock levels, movements, and warehouse operations";
      case "weighbridge":
        return "Vehicle weighing, truck logging, and weight management";
      case "alarms":
        return "System alerts, notifications, and alarm management";
      case "reports":
        return "Analytics, reporting, and business intelligence";
      case "maintenance":
        return "Equipment maintenance, scheduling, and work orders";
      case "admin":
        return "User management, system settings, and configuration";
      case "storage":
        return "Real-time monitoring of silo and bin levels";
      default:
        return "Real-time production monitoring, KPI tracking, and operational intelligence";
    }
  };

  return <div className="min-h-screen industrial-bg-main text-zinc-100">
      {/* Header */}
      <div className="industrial-header px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img alt="HERCULES Logo" className="h-20 object-fill bg-zinc-800/60 p-2 rounded-lg backdrop-blur-sm border border-zinc-700/50" src="/lovable-uploads/d7ddbd77-9d6b-4b6f-950a-d100156778db.png" />
            <div className="relative">
              <div className="bg-gradient-to-br from-zinc-800/60 via-zinc-700/40 to-zinc-900/60 backdrop-blur-md border border-zinc-600/30 shadow-2xl px-4 py-3 rounded-xl">
                <p className="bg-gradient-to-r from-zinc-100 via-zinc-200 to-cyan-200 bg-clip-text text-transparent tracking-wide leading-tight text-center text-base mx-0 py-0 font-thin">
                  Digital Factory Management System
                </p>
                <div className="mt-2 h-px bg-gradient-to-r from-transparent via-cyan-500/80 to-transparent shadow-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-blue-500/5 rounded-xl pointer-events-none"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <span className="text-sm text-zinc-300 block">Production Manager</span>
              <span className="text-xs text-zinc-400">Online • Shift A</span>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center shadow-lg shadow-cyan-500/25">
              <span className="text-white text-sm font-semibold">AM</span>
            </div>
            <img alt="Company Logo" className="h-12 w-12 object-contain" src="/lovable-uploads/ec2b9239-e496-49dc-bdbc-64957dd5f459.png" />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 industrial-bg-sidebar min-h-screen">
          <nav className="p-4 space-y-2">
            <button onClick={() => setActiveModule("dashboard")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "dashboard" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
            <button onClick={() => setActiveModule("material")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "material" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <FlaskConical className="w-5 h-5" />
              Material
            </button>
            <button onClick={() => setActiveModule("storage")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "storage" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <Database className="w-5 h-5" />
              Storage
            </button>
            <button onClick={() => setActiveModule("production")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "production" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <Factory className="w-5 h-5" />
              Production
            </button>
            
            <button onClick={() => setActiveModule("orders")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "orders" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <ClipboardList className="w-5 h-5" />
              Orders
            </button>
            <button onClick={() => setActiveModule("rfid")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "rfid" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <Calendar className="w-5 h-5" />
              RFID
            </button>
            <button onClick={() => setActiveModule("weighbridge")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "weighbridge" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <Zap className="w-5 h-5" />
              Weighbridge
            </button>
            <button onClick={() => setActiveModule("alarms")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "alarms" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <AlertCircle className="w-5 h-5" />
              Alarms
            </button>
            <button onClick={() => setActiveModule("reports")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "reports" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <BarChart3 className="w-5 h-5" />
              Reports
            </button>
            <button onClick={() => setActiveModule("admin")} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg w-full text-left transition-all duration-200 ${activeModule === "admin" ? "bg-gradient-to-r from-zinc-700 to-zinc-600 text-zinc-100 shadow-lg" : "text-zinc-300 hover:bg-zinc-800/60 hover:text-zinc-100"}`}>
              <Shield className="w-5 h-5" />
              Admin
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6 bg-gradient-to-br from-zinc-950/50 via-zinc-900/30 to-zinc-950/50">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-3xl font-bold text-zinc-100 mb-2 bg-gradient-to-r from-zinc-100 to-cyan-200 bg-clip-text text-transparent">
                  {getPageTitle()}
                </h2>
                
              </div>
              {activeModule === "dashboard" && <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-green-500/20 border border-green-500/30 rounded-lg backdrop-blur-sm">
                    <span className="text-green-400 text-sm font-medium">System Operational</span>
                  </div>
                  <div className="text-right">
                    <div className="text-zinc-100 text-sm font-medium">
                      {new Date().toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                    </div>
                    <div className="text-zinc-400 text-xs">
                      {new Date().toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                  })}
                    </div>
                  </div>
                </div>}
            </div>
          </div>

          {renderMainContent()}
        </div>
      </div>
    </div>;
};

export default Index;
