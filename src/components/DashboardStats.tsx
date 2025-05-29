
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Truck, Package, Database, Users } from "lucide-react";

const DashboardStats = () => {
  const stats = [
    {
      title: "Active Orders",
      value: "24",
      icon: Package,
      description: "Currently processing"
    },
    {
      title: "Trucks in Yard",
      value: "8",
      icon: Truck,
      description: "Arrived today"
    },
    {
      title: "RFID Tags Active",
      value: "1,247",
      icon: Database,
      description: "Currently tracked"
    },
    {
      title: "Staff on Duty",
      value: "12",
      icon: Users,
      description: "Current shift"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <Card key={index} className="transition-all hover:shadow-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              {stat.title}
            </CardTitle>
            <stat.icon className="h-4 w-4 text-gray-400" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <p className="text-xs text-gray-500">{stat.description}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default DashboardStats;
