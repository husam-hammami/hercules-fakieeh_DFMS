
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
  TrendingDown, 
  Package, 
  Factory, 
  Truck, 
  AlertTriangle, 
  Clock, 
  Target,
  Activity,
  Database,
  Layers,
  Gauge,
  Users,
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
    { name: "Product A", value: 45, color: "#4F46E5" },
    { name: "Product B", value: 35, color: "#818CF8" },
    { name: "Product C", value: 20, color: "#C7D2FE" },
  ];

  // Material Usage
  const materialUsageData = [
    { name: "Corn", value: 50, color: "#4F46E5" },
    { name: "Soy", value: 30, color: "#818CF8" },
    { name: "Wheat", value: 20, color: "#C7D2FE" },
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

  // Key Performance Indicators
  const keyMetrics = [
    {
      title: "Total Orders",
      value: "124",
      icon: Package,
      color: "text-indigo-400",
      bgColor: "bg-indigo-500",
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
      color: "text-yellow-400",
      bgColor: "bg-yellow-500",
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
      color: "text-cyan-400",
      bgColor: "bg-cyan-500",
    },
  ];

  const chartConfig = {
    efficiency: { label: "Efficiency", color: "#06b6d4" },
    target: { label: "Target", color: "#10b981" },
    intake: { label: "Intake", color: "#3b82f6" },
    outloading: { label: "Outloading", color: "#10b981" },
    production: { label: "Production", color: "#f59e0b" },
    output: { label: "Output (tons)", color: "#4F46E5" },
    consumption: { label: "Energy (kWh)", color: "#818CF8" },
  };

  return (
    <div className="space-y-6">
      {/* Key Metrics Row */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {keyMetrics.map((metric, index) => (
          <Card key={index} className="bg-slate-800 border-slate-700">
            <CardContent className="p-6">
              <div className="flex flex-col items-center text-center gap-2">
                <div className={`p-3 rounded-lg ${metric.bgColor}/20 ${metric.color}`}>
                  <metric.icon className="w-8 h-8" />
                </div>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
                <p className="text-sm text-slate-400">{metric.title}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts Row 1 */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Product Distribution */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Package className="w-5 h-5 text-indigo-400" />
              Product Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <PieChart>
                <Pie
                  data={productDistributionData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {productDistributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="mt-4 flex justify-center gap-4">
              {productDistributionData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }} 
                  />
                  <span className="text-xs text-slate-300">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Monthly Production */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Calendar className="w-5 h-5 text-blue-400" />
              Monthly Production
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <BarChart data={monthlyProductionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Bar 
                  dataKey="production" 
                  fill="#4F46E5" 
                  name="Production (tons)"
                  radius={[2, 2, 0, 0]} 
                />
              </BarChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Material Usage */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-green-400" />
              Material Usage
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <PieChart>
                <Pie
                  data={materialUsageData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  innerRadius={40}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}%`}
                >
                  {materialUsageData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <ChartTooltip content={<ChartTooltipContent />} />
              </PieChart>
            </ChartContainer>
            <div className="mt-4 flex justify-center gap-4">
              {materialUsageData.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div 
                    className="w-3 h-3 rounded-full" 
                    style={{ backgroundColor: item.color }} 
                  />
                  <span className="text-xs text-slate-300">{item.name}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 2 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Weekly Output Trend */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-yellow-400" />
              Weekly Output Trend
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <LineChart data={weeklyOutputData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="week" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Line 
                  type="monotone" 
                  dataKey="output" 
                  stroke="#4F46E5" 
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ChartContainer>
          </CardContent>
        </Card>

        {/* Weekly Energy Consumption */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-purple-400" />
              Weekly Energy Consumption
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig} className="h-[300px]">
              <AreaChart data={energyConsumptionData}>
                <defs>
                  <linearGradient id="colorConsumption" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#818CF8" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#818CF8" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="day" stroke="#9ca3af" />
                <YAxis stroke="#9ca3af" />
                <ChartTooltip content={<ChartTooltipContent />} />
                <Area 
                  type="monotone" 
                  dataKey="consumption" 
                  stroke="#818CF8" 
                  fillOpacity={1}
                  fill="url(#colorConsumption)" 
                />
              </AreaChart>
            </ChartContainer>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row 3 */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Order Status Distribution */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Package className="w-5 h-5 text-cyan-400" />
              Order Status Distribution
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex justify-between items-center">
              <ChartContainer config={chartConfig} className="h-[300px] w-[60%]">
                <PieChart>
                  <Pie
                    data={orderStatusData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    dataKey="value"
                  >
                    {orderStatusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <ChartTooltip content={<ChartTooltipContent />} />
                </PieChart>
              </ChartContainer>
              <div className="space-y-4 w-[35%]">
                {orderStatusData.map((status, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div 
                      className="w-4 h-4 rounded" 
                      style={{ backgroundColor: status.color }} 
                    />
                    <div>
                      <p className="text-sm font-medium text-white">{status.name}</p>
                      <p className="text-sm text-slate-400">{status.value}%</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Storage Capacity Utilization */}
        <Card className="bg-slate-800 border-slate-700">
          <CardHeader>
            <CardTitle className="text-white flex items-center gap-2">
              <Database className="w-5 h-5 text-green-400" />
              Storage Capacity Utilization
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
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
