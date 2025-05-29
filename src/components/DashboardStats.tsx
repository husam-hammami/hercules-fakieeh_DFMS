
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { Progress } from "@/components/ui/progress";
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
  TrendingDown, 
  Package, 
  Factory, 
  Truck, 
  AlertTriangle, 
  Clock, 
  Target,
  Activity,
  Database
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

  // Inventory Levels Data
  const inventoryData = [
    { material: "Raw Material A", current: 750, capacity: 1000 },
    { material: "Raw Material B", current: 420, capacity: 800 },
    { material: "Finished Product", current: 280, capacity: 500 },
    { material: "Packaging", current: 650, capacity: 700 },
  ];

  // Order Status Distribution
  const orderStatusData = [
    { name: "Completed", value: 65, color: "#10b981" },
    { name: "In Progress", value: 25, color: "#3b82f6" },
    { name: "Pending", value: 8, color: "#f59e0b" },
    { name: "Delayed", value: 2, color: "#ef4444" },
  ];

  // Daily Throughput
  const throughputData = [
    { day: "Mon", intake: 120, outloading: 115, production: 110 },
    { day: "Tue", intake: 135, outloading: 128, production: 125 },
    { day: "Wed", intake: 142, outloading: 138, production: 140 },
    { day: "Thu", intake: 128, outloading: 135, production: 132 },
    { day: "Fri", intake: 155, outloading: 150, production: 148 },
    { day: "Sat", intake: 95, outloading: 92, production: 90 },
    { day: "Sun", intake: 65, outloading: 68, production: 65 },
  ];

  // Key Metrics
  const keyMetrics = [
    {
      title: "Overall Equipment Effectiveness",
      value: "87.5%",
      change: "+2.3%",
      trend: "up",
      icon: Factory,
      color: "text-green-400",
    },
    {
      title: "Production Rate",
      value: "142 units/hr",
      change: "+5.2%",
      trend: "up",
      icon: Activity,
      color: "text-blue-400",
    },
    {
      title: "Quality Score",
      value: "98.2%",
      change: "-0.1%",
      trend: "down",
      icon: Target,
      color: "text-purple-400",
    },
    {
      title: "Energy Efficiency",
      value: "92.1%",
      change: "+1.8%",
      trend: "up",
      icon: TrendingUp,
      color: "text-cyan-400",
    },
  ];

  const chartConfig = {
    efficiency: { label: "Efficiency", color: "#06b6d4" },
    target: { label: "Target", color: "#10b981" },
    intake: { label: "Intake", color: "#3b82f6" },
    outloading: { label: "Outloading", color: "#10b981" },
    production: { label: "Production", color: "#f59e0b" },
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-slate-700 ${metric.color}`}>
                    <metric.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">{metric.value}</p>
                    <p className="text-sm text-slate-400">{metric.title}</p>
                  </div>
                </div>
                <div className={`flex items-center gap-1 ${metric.trend === 'up' ? 'text-green-400' : 'text-red-400'}`}>
                  {metric.trend === 'up' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />}
                  <span className="text-sm font-medium">{metric.change}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Production Efficiency Trend */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Factory className="w-5 h-5 text-blue-400" />
              Production Efficiency Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <AreaChart data={productionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="time" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area
                  type="monotone"
                  dataKey="efficiency"
                  stroke="#06b6d4"
                  fill="#06b6d4"
                  fillOpacity={0.3}
                  strokeWidth={2}
                />
                <Line
                  type="monotone"
                  dataKey="target"
                  stroke="#10b981"
                  strokeWidth={2}
                  strokeDasharray="5 5"
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Order Status Distribution */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Package className="w-5 h-5 text-green-400" />
              Order Status Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <PieChart>
                <Pie
                  data={orderStatusData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {orderStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Daily Throughput */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Truck className="w-5 h-5 text-purple-400" />
              Daily Throughput Analysis
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={throughputData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar dataKey="intake" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                <Bar dataKey="outloading" fill="#10b981" radius={[2, 2, 0, 0]} />
                <Bar dataKey="production" fill="#f59e0b" radius={[2, 2, 0, 0]} />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Inventory Levels */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-cyan-400" />
              Storage Capacity Utilization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {inventoryData.map((item, index) => {
              const percentage = (item.current / item.capacity) * 100;
              const getColor = (percent: number) => {
                if (percent >= 90) return "bg-red-500";
                if (percent >= 70) return "bg-yellow-500";
                return "bg-green-500";
              };

              return (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white text-sm font-medium">{item.material}</span>
                    <span className="text-slate-400 text-sm">
                      {item.current}/{item.capacity} tons
                    </span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-300 ${getColor(percentage)}`}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <div className="text-right text-xs text-slate-400">
                    {percentage.toFixed(1)}% utilized
                  </div>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </div>

      {/* System Alerts */}
      <Card className="bg-slate-800 border-slate-700 border-l-4 border-l-yellow-500">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-yellow-400" />
            System Alerts & Notifications
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg">
              <Clock className="w-4 h-4 text-yellow-400" />
              <div>
                <p className="text-white text-sm font-medium">Maintenance Due: Line 2</p>
                <p className="text-slate-400 text-xs">Scheduled maintenance in 2 hours</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg">
              <Database className="w-4 h-4 text-orange-400" />
              <div>
                <p className="text-white text-sm font-medium">Low Inventory: Raw Material B</p>
                <p className="text-slate-400 text-xs">Current level: 420/800 tons (52%)</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-slate-700 rounded-lg">
              <Target className="w-4 h-4 text-green-400" />
              <div>
                <p className="text-white text-sm font-medium">Production Target Achieved</p>
                <p className="text-slate-400 text-xs">Daily target exceeded by 5.2%</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashboardStats;
