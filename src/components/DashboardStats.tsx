
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { 
  LineChart, 
  Line, 
  AreaChart, 
  Area, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  ResponsiveContainer 
} from "recharts";
import { 
  TrendingUp, 
  Package, 
  Factory, 
  Truck, 
  AlertTriangle, 
  Clock, 
  Activity,
  Database,
  Layers,
  Gauge,
  Calendar
} from "lucide-react";

const DashboardStats = () => {
  // Production Performance Data
  const productionData = [
    { time: "06:00", efficiency: 85, target: 90 },
    { time: "08:00", efficiency: 92, target: 90 },
    { time: "10:00", efficiency: 88, target: 90 },
    { time: "12:00", efficiency: 95, target: 90 },
    { time: "14:00", efficiency: 89, target: 90 },
    { time: "16:00", efficiency: 93, target: 90 },
    { time: "18:00", efficiency: 87, target: 90 },
  ];

  // Weekly Output Trend
  const weeklyOutputData = [
    { week: "Week 1", output: 105 },
    { week: "Week 2", output: 142 },
    { week: "Week 3", output: 120 },
    { week: "Week 4", output: 158 },
  ];

  // Energy Consumption Data
  const energyConsumptionData = [
    { day: "Mon", consumption: 45 },
    { day: "Tue", consumption: 62 },
    { day: "Wed", consumption: 60 },
    { day: "Thu", consumption: 68 },
    { day: "Fri", consumption: 91 },
    { day: "Sat", consumption: 74 },
    { day: "Sun", consumption: 78 },
  ];

  // Monthly Production Data
  const monthlyProductionData = [
    { month: "Jan", production: 115 },
    { month: "Feb", production: 148 },
    { month: "Mar", production: 175 },
    { month: "Apr", production: 135 },
    { month: "May", production: 195 },
  ];

  // Product Distribution
  const productDistributionData = [
    { name: "Product A", value: 45, color: "#06b6d4" },
    { name: "Product B", value: 35, color: "#3b82f6" },
    { name: "Product C", value: 20, color: "#6366f1" },
  ];

  // Material Usage
  const materialUsageData = [
    { name: "Corn", value: 50, color: "#06b6d4" },
    { name: "Soy", value: 30, color: "#3b82f6" },
    { name: "Wheat", value: 20, color: "#6366f1" },
  ];

  // Storage Capacity Utilization
  const storageData = [
    { material: "Raw Material A", current: 750, capacity: 1000 },
    { material: "Raw Material B", current: 420, capacity: 800 },
    { material: "Finished Product", current: 280, capacity: 500 },
    { material: "Packaging", current: 650, capacity: 700 },
  ];

  // Order Status Distribution
  const orderStatusData = [
    { name: "Completed", value: 65, color: "#10b981" },
    { name: "In Progress", value: 25, color: "#06b6d4" },
    { name: "Pending", value: 8, color: "#f59e0b" },
    { name: "Delayed", value: 2, color: "#ef4444" },
  ];

  // Key Performance Indicators
  const keyMetrics = [
    {
      title: "Total Orders",
      value: "124",
      icon: Package,
      color: "text-cyan-400",
      bgColor: "bg-cyan-500",
    },
    {
      title: "Materials",
      value: "36",
      icon: Layers,
      color: "text-blue-400",
      bgColor: "bg-blue-500",
    },
    {
      title: "Units Produced",
      value: "15,600",
      icon: Factory,
      color: "text-green-400",
      bgColor: "bg-green-500",
    },
    {
      title: "Efficiency",
      value: "92%",
      icon: Gauge,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500",
    },
    {
      title: "Last Batch",
      value: "10:42 AM",
      icon: Clock,
      color: "text-purple-400",
      bgColor: "bg-purple-500",
    },
    {
      title: "Active Trucks",
      value: "8",
      icon: Truck,
      color: "text-emerald-400",
      bgColor: "bg-emerald-500",
    },
  ];

  const chartConfig = {
    efficiency: { label: "Efficiency (%)", color: "#06b6d4" },
    target: { label: "Target (%)", color: "#10b981" },
    output: { label: "Output (tons)", color: "#3b82f6" },
    consumption: { label: "Energy (kWh)", color: "#6366f1" },
    production: { label: "Production (tons)", color: "#06b6d4" },
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700 hover:bg-slate-750 transition-colors">
            <CardContent className="p-4">
              <div className="flex flex-col items-center text-center gap-3">
                <div className={`p-3 rounded-lg ${metric.bgColor}/20 ${metric.color}`}>
                  <metric.icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xl font-bold text-white">{metric.value}</p>
                  <p className="text-xs text-slate-400 mt-1">{metric.title}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Production Efficiency */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-cyan-400" />
              Production Efficiency
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <LineChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9ca3af" fontSize={10} />
                <YAxis stroke="#9ca3af" fontSize={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="efficiency" 
                  stroke="#06b6d4" 
                  strokeWidth={2}
                  dot={{ r: 3 }}
                />
                <Line 
                  type="monotone" 
                  dataKey="target" 
                  stroke="#10b981" 
                  strokeWidth={2}
                  strokeDasharray="5 5"
                  dot={{ r: 3 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Weekly Output */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <Factory className="w-4 h-4 text-blue-400" />
              Weekly Output
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <BarChart data={weeklyOutputData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9ca3af" fontSize={10} />
                <YAxis stroke="#9ca3af" fontSize={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="output" 
                  fill="#3b82f6" 
                  radius={[2, 2, 0, 0]} 
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Energy Consumption */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <Activity className="w-4 h-4 text-indigo-400" />
              Energy Consumption
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[200px]">
              <AreaChart data={energyConsumptionData}>
                <defs>
                  <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9ca3af" fontSize={10} />
                <YAxis stroke="#9ca3af" fontSize={10} />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="consumption" 
                  stroke="#6366f1" 
                  fillOpacity={1}
                  fill="url(#colorConsumption)" 
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Secondary Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Product Distribution & Material Usage */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <Package className="w-4 h-4 text-cyan-400" />
              Product Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <ChartContainer config={chartConfig} className="h-[180px] w-[60%]">
                <PieChart>
                  <Pie
                    data={productDistributionData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    dataKey="value"
                  >
                    {productDistributionData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
              <div className="space-y-3 w-[35%]">
                {productDistributionData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded" 
                      style={{ backgroundColor: item.color }} 
                    />
                    <div>
                      <p className="text-xs font-medium text-white">{item.name}</p>
                      <p className="text-xs text-slate-400">{item.value}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Order Status */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader className="pb-2">
            <CardTitle className="text-white flex items-center gap-2 text-sm">
              <Calendar className="w-4 h-4 text-green-400" />
              Order Status
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between">
              <ChartContainer config={chartConfig} className="h-[180px] w-[60%]">
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={60}
                    dataKey="value"
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
              <div className="space-y-3 w-[35%]">
                {orderStatusData.map((status, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-3 h-3 rounded" 
                      style={{ backgroundColor: status.color }} 
                    />
                    <div>
                      <p className="text-xs font-medium text-white">{status.name}</p>
                      <p className="text-xs text-slate-400">{status.value}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Storage Utilization */}
      <Card className="bg-slate-800 border-slate-700">
        <CardHeader className="pb-2">
          <CardTitle className="text-white flex items-center gap-2 text-sm">
            <Database className="w-4 h-4 text-blue-400" />
            Storage Capacity Utilization
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {storageData.map((item, index) => {
              const percentage = (item.current / item.capacity) * 100;
              const getColor = (percent: number) => {
                if (percent >= 90) return "bg-red-500";
                if (percent >= 70) return "bg-yellow-500";
                return "bg-green-500";
              };

              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-xs font-medium">{item.material}</span>
                    <span className="text-slate-400 text-xs">
                      {percentage.toFixed(0)}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full transition-all duration-300 ${getColor(percentage)}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-slate-400">
                    {item.current}/{item.capacity} tons
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* System Alerts */}
      <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-yellow-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-white flex items-center gap-2 text-sm">
            <AlertTriangle className="w-4 h-4 text-yellow-400" />
            System Alerts & Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg">
              <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <div>
                <p className="text-white text-xs font-medium">Maintenance Due: Line 2</p>
                <p className="text-slate-400 text-xs">Scheduled in 2 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg">
              <Database className="w-4 h-4 text-orange-400 flex-shrink-0" />
              <div>
                <p className="text-white text-xs font-medium">Low Inventory Alert</p>
                <p className="text-slate-400 text-xs">Raw Material B (52%)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg">
              <TrendingUp className="w-4 h-4 text-green-400 flex-shrink-0" />
              <div>
                <p className="text-white text-xs font-medium">Target Achieved</p>
                <p className="text-slate-400 text-xs">Daily target +5.2%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
