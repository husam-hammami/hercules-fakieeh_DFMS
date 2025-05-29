
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
        return <Card className="floating-card">
            <CardHeader>
              <CardTitle>Reports & Analytics</CardTitle>
              <CardDescription>
                Comprehensive reporting dashboard with advanced analytics
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-white/90 text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                Reports module coming soon...
              </div>
            </CardContent>
          </Card>;
      case "maintenance":
        return <Card className="floating-card">
            <CardHeader>
              <CardTitle>Maintenance Management</CardTitle>
              <CardDescription>
                Equipment maintenance and predictive scheduling
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-white/90 text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                Maintenance module coming soon...
              </div>
            </CardContent>
          </Card>;
      case "admin":
        return <Card className="floating-card">
            <CardHeader>
              <CardTitle>System Administration</CardTitle>
              <CardDescription>
                Advanced system configuration and user management
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-white/90 text-center p-8">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                Admin module coming soon...
              </div>
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

  const navigationItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard", glow: "cyan" },
    { id: "material", icon: FlaskConical, label: "Material", glow: "blue" },
    { id: "storage", icon: Database, label: "Storage", glow: "purple" },
    { id: "production", icon: Factory, label: "Production", glow: "green" },
    { id: "orders", icon: ClipboardList, label: "Orders", glow: "orange" },
    { id: "rfid", icon: Calendar, label: "RFID", glow: "pink" },
    { id: "weighbridge", icon: Zap, label: "Weighbridge", glow: "yellow" },
    { id: "alarms", icon: AlertCircle, label: "Alarms", glow: "red" },
    { id: "reports", icon: BarChart3, label: "Reports", glow: "indigo" },
    { id: "admin", icon: Shield, label: "Admin", glow: "violet" }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground tech-pattern">
      {/* Enhanced background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-400/10 via-transparent to-transparent rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-400/8 via-transparent to-transparent rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-gradient-to-br from-blue-400/6 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        <div className="absolute top-10 right-1/3 w-64 h-64 bg-gradient-to-br from-indigo-400/8 via-transparent to-transparent rounded-full blur-2xl animate-pulse delay-3000"></div>
      </div>

      {/* Header */}
      <div className="relative z-10 glass-effect border-b border-slate-700/30 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="relative group">
              <img 
                alt="HERCULES Logo" 
                className="h-20 object-fill p-2 rounded-xl glass-effect hover-lift group-hover:shadow-cyan-500/20" 
                src="/lovable-uploads/d7ddbd77-9d6b-4b6f-950a-d100156778db.png" 
              />
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-transparent to-purple-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="relative">
              <div className="glass-effect neon-border px-8 py-4 rounded-2xl hover-lift">
                <p className="soft-title text-lg font-bold tracking-wide leading-tight text-center">
                  Digital Factory Management System
                </p>
                <div className="mt-3 h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-purple-500/5 rounded-2xl pointer-events-none"></div>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-right">
              <span className="text-base text-slate-200 block font-semibold">Production Manager</span>
              <span className="text-sm text-cyan-300 flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                Online • Shift A
              </span>
            </div>
            <div className="relative group">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl flex items-center justify-center shadow-lg hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300 cursor-pointer">
                <span className="text-white text-lg font-bold">AM</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
            </div>
            <img 
              alt="Company Logo" 
              className="h-16 w-16 object-contain hover-lift cursor-pointer" 
              src="/lovable-uploads/ec2b9239-e496-49dc-bdbc-64957dd5f459.png" 
            />
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Enhanced Sidebar */}
        <div className="w-72 min-h-screen sidebar-gradient border-r border-slate-600/20">
          <div className="absolute inset-0 industrial-bg opacity-40"></div>
          <nav className="relative z-10 p-6 space-y-3">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveModule(item.id)}
                className={`
                  flex items-center gap-4 px-4 py-3 rounded-xl w-full text-left font-medium transition-all duration-300 nav-item-glow relative
                  ${activeModule === item.id 
                    ? "glass-effect text-white border border-cyan-400/20 shadow-lg shadow-cyan-500/10 scale-105" 
                    : "text-slate-300 hover:text-white hover:glass-effect hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/5"
                  }
                `}
              >
                <div className={`
                  p-2 rounded-lg transition-all duration-300
                  ${activeModule === item.id 
                    ? "bg-gradient-to-r from-cyan-400 to-blue-500 shadow-lg shadow-cyan-500/20" 
                    : "bg-slate-700/50 group-hover:bg-gradient-to-r group-hover:from-cyan-400/40 group-hover:to-blue-500/40"
                  }
                `}>
                  <item.icon className="w-5 h-5" />
                </div>
                <span className="text-base">{item.label}</span>
                {activeModule === item.id && (
                  <div className="absolute right-2 w-2 h-8 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full shadow-lg shadow-cyan-500/30"></div>
                )}
              </button>
            ))}
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 relative z-10">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <div className="slide-in-glow">
                <h2 className="text-4xl font-bold text-slate-100 mb-3 soft-title">
                  {getPageTitle()}
                </h2>
                <p className="text-slate-400 text-lg font-medium">
                  {getPageDescription()}
                </p>
              </div>
              {activeModule === "dashboard" && (
                <div className="flex items-center gap-6">
                  <div className="glass-effect px-6 py-3 rounded-xl border border-green-400/20 hover-lift">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse shadow-lg shadow-green-400/50"></div>
                      <span className="text-green-300 font-semibold">System Operational</span>
                    </div>
                  </div>
                  <div className="text-right glass-effect px-6 py-3 rounded-xl">
                    <div className="text-slate-200 font-semibold text-base">
                      {new Date().toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </div>
                    <div className="text-cyan-300 text-sm font-medium">
                      {new Date().toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        second: '2-digit'
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="slide-in-glow">
            {renderMainContent()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
