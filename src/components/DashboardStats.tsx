
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Database, Users } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Active Orders",
      value: "24",
      unit: "orders",
      percentage: 75,
      icon: Package,
    },
    {
      title: "RFID Tags",
      value: "1,247",
      unit: "tags",
      percentage: 89,
      icon: Database,
    },
    {
      title: "Trucks in Yard",
      value: "8",
      unit: "vehicles",
      percentage: 45,
      icon: Truck,
    },
    {
      title: "Staff on Duty",
      value: "12",
      unit: "personnel",
      percentage: 67,
      icon: Users,
    }
  ];

  const CircularProgress = ({ percentage, value, unit }: { percentage: number; value: string; unit: string }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (percentage / 100) * circumference;

    return (
      <div className="relative w-32 h-32">
        <svg className="w-32 h-32 transform -rotate-90" viewBox="0 0 100 100">
          {/* Background circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgb(51 65 85)"
            strokeWidth="8"
            fill="none"
          />
          {/* Progress circle */}
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="rgb(6 182 212)"
            strokeWidth="8"
            fill="none"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="text-2xl font-bold text-white">{value}</div>
          <div className="text-xs text-slate-400">{unit}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors"
        >
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-slate-300">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-cyan-400" />
          </CardHeader>
          <CardContent className="flex items-center justify-center pb-6">
            <CircularProgress 
              percentage={stat.percentage} 
              value={stat.value} 
              unit={stat.unit}
            />
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
