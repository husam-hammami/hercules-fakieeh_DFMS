
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Database, Users, TrendingUp } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Active Orders",
      value: "24",
      icon: Package,
      description: "Currently processing",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-500/10 to-cyan-500/10"
    },
    {
      title: "Trucks in Yard",
      value: "8",
      icon: Truck,
      description: "Arrived today",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/10"
    },
    {
      title: "RFID Tags Active",
      value: "1,247",
      icon: Database,
      description: "Currently tracked",
      gradient: "from-pink-500 to-red-500",
      bgGradient: "from-pink-500/10 to-red-500/10"
    },
    {
      title: "Staff on Duty",
      value: "12",
      icon: Users,
      description: "Current shift",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/10"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card 
          key={index} 
          className="relative overflow-hidden bg-slate-800/50 border-slate-700 backdrop-blur-lg transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105 group"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${stat.bgGradient} opacity-50`}></div>
          <CardHeader className="relative flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
              {stat.title}
            </CardTitle>
            <div className={`p-2 rounded-lg bg-gradient-to-r ${stat.gradient}`}>
              <stat.icon className="h-4 w-4 text-white" />
            </div>
          </CardHeader>
          <CardContent className="relative">
            <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent`}>
              {stat.value}
            </div>
            <p className="text-xs text-gray-400 mt-1 flex items-center gap-1">
              <TrendingUp className="h-3 w-3 text-green-400" />
              {stat.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
