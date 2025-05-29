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
import { LayoutDashboard, FlaskConical, Factory, Users, ClipboardList, Calendar, Zap, AlertCircle, BarChart3, Shield } from 'lucide-react';
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
      case "rfid":
        return <RFIDTracking />;
      case "inventory":
        return <InventoryView />;
      case "weighbridge":
        return <TruckLogging />;
      case "alarms":
        return <AlarmsManagement />;
      case "reports":
        return <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Reports & Analytics</CardTitle>
              <CardDescription className="text-slate-400">
                Comprehensive reporting dashboard
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-white">Reports module coming soon...</div>
            </CardContent>
          </Card>;
      case "maintenance":
        return <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Maintenance Management</CardTitle>
              <CardDescription className="text-slate-400">
                Equipment maintenance and scheduling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-white">Maintenance module coming soon...</div>
            </CardContent>
          </Card>;
      case "admin":
        return <Card className="bg-slate-800 border-slate-700">
            <CardHeader>
              <CardTitle className="text-white">Administration</CardTitle>
              <CardDescription className="text-slate-400">
                System administration and user management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-white">Admin module coming soon...</div>
            </CardContent>
          </Card>;
      default:
        return <DashboardStats />;
    }
  };
  const getPageTitle = () => {
    switch (activeModule) {
      case "dashboard":
        return "Warehouse Management Dashboard";
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
      default:
        return "Warehouse Management Dashboard";
    }
  };
  const getPageDescription = () => {
    switch (activeModule) {
      case "dashboard":
        return "RFID-based inventory tracking and order management system";
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
      default:
        return "RFID-based inventory tracking and order management system";
    }
  };
  return <div className="min-h-screen bg-slate-900 text-white">
      {/* Header */}
      <div className="bg-slate-800 border-b border-slate-700 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <img alt="HERCULES Logo" className="h-20 object-fill bg-slate-800 p-2 rounded" src="/lovable-uploads/d7ddbd77-9d6b-4b6f-950a-d100156778db.png" />
            <div className="relative">
              <div className="bg-gradient-to-r from-slate-70/50 to-slate-60/3backdrop-blur-sm border border-slate-60/2 shadow-lg px-[2px] py-[2px] rounded-lg">
                <p className="bg-gradient-to-r from-white via-slate-100 to-cyan-200 bg-clip-text text-transparent tracking-wide leading-none text-lg font-thin mx-[5px] py-[5px] my-0 px-[5px] text-justify">
                  Digital Factory Management System
                </p>
                <div className="mt-1 h-px bg-gradient-to-r from-transparent via-cyan-500/60 to-transparent"></div>
              </div>
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
            <button onClick={() => setActiveModule("dashboard")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "dashboard" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </button>
            <button onClick={() => setActiveModule("material")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "material" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <FlaskConical className="w-5 h-5" />
              Material
            </button>
            <button onClick={() => setActiveModule("production")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "production" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <Factory className="w-5 h-5" />
              Production
            </button>
            <button onClick={() => setActiveModule("maintenance")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "maintenance" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <Users className="w-5 h-5" />
              Maintenance
            </button>
            <button onClick={() => setActiveModule("orders")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "orders" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <ClipboardList className="w-5 h-5" />
              Orders
            </button>
            <button onClick={() => setActiveModule("rfid")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "rfid" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <Calendar className="w-5 h-5" />
              RFID
            </button>
            <button onClick={() => setActiveModule("weighbridge")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "weighbridge" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <Zap className="w-5 h-5" />
              Weighbridge
            </button>
            <button onClick={() => setActiveModule("alarms")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "alarms" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <AlertCircle className="w-5 h-5" />
              Alarms
            </button>
            <button onClick={() => setActiveModule("reports")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "reports" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <BarChart3 className="w-5 h-5" />
              Reports
            </button>
            <button onClick={() => setActiveModule("admin")} className={`flex items-center gap-3 px-3 py-2 rounded-lg w-full text-left ${activeModule === "admin" ? "bg-slate-700 text-white" : "text-slate-300 hover:bg-slate-700"}`}>
              <Shield className="w-5 h-5" />
              Admin
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-semibold text-white mb-2">{getPageTitle()}</h2>
            <p className="text-slate-400">{getPageDescription()}</p>
          </div>

          {renderMainContent()}
        </div>
      </div>
    </div>;
};
export default Index;