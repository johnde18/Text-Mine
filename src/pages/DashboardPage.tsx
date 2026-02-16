import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import {
  FolderOpen,
  FileText,
  TrendingUp,
  Hash,
  ArrowUpRight,
} from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  AreaChart,
  Area,
} from "recharts";

const stats = [
  { label: "Total Projects", value: "12", icon: FolderOpen, change: "+3 this week" },
  { label: "Documents Processed", value: "847", icon: FileText, change: "+52 today" },
  { label: "Avg Sentiment", value: "0.72", icon: TrendingUp, change: "Positive" },
  { label: "Top Topic", value: "Technology", icon: Hash, change: "34% of docs" },
];

const wordFreqData = [
  { word: "data", freq: 142 },
  { word: "analysis", freq: 118 },
  { word: "model", freq: 97 },
  { word: "text", freq: 89 },
  { word: "learning", freq: 76 },
  { word: "processing", freq: 68 },
  { word: "language", freq: 61 },
  { word: "sentiment", freq: 54 },
];

const sentimentData = [
  { name: "Positive", value: 45, color: "hsl(152 60% 42%)" },
  { name: "Neutral", value: 35, color: "hsl(210 15% 70%)" },
  { name: "Negative", value: 20, color: "hsl(0 72% 51%)" },
];

const trendData = [
  { date: "Mon", analyses: 12 },
  { date: "Tue", analyses: 19 },
  { date: "Wed", analyses: 15 },
  { date: "Thu", analyses: 25 },
  { date: "Fri", analyses: 22 },
  { date: "Sat", analyses: 30 },
  { date: "Sun", analyses: 28 },
];

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground text-sm">Welcome back. Here's your analytics overview.</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((s) => (
            <Card key={s.label} className="p-5 shadow-soft hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground">{s.label}</p>
                  <p className="text-2xl font-heading font-bold text-card-foreground mt-1">{s.value}</p>
                  <p className="text-xs text-primary mt-1 flex items-center gap-1">
                    <ArrowUpRight className="h-3 w-3" /> {s.change}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Word Frequency */}
          <Card className="p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">Word Frequency</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={wordFreqData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 90%)" />
                <XAxis dataKey="word" tick={{ fontSize: 12 }} stroke="hsl(210 10% 50%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(210 10% 50%)" />
                <Tooltip />
                <Bar dataKey="freq" fill="hsl(174 62% 34%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          {/* Sentiment Breakdown */}
          <Card className="p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">Sentiment Breakdown</h3>
            <div className="flex items-center gap-6">
              <ResponsiveContainer width="50%" height={240}>
                <PieChart>
                  <Pie
                    data={sentimentData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {sentimentData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
              <div className="space-y-3">
                {sentimentData.map((s) => (
                  <div key={s.name} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                    <span className="text-sm text-card-foreground">{s.name}</span>
                    <span className="text-sm font-semibold text-card-foreground">{s.value}%</span>
                  </div>
                ))}
              </div>
            </div>
          </Card>

          {/* Analysis Trend */}
          <Card className="p-6 shadow-soft lg:col-span-2">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">Analysis Activity</h3>
            <ResponsiveContainer width="100%" height={240}>
              <AreaChart data={trendData}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 90%)" />
                <XAxis dataKey="date" tick={{ fontSize: 12 }} stroke="hsl(210 10% 50%)" />
                <YAxis tick={{ fontSize: 12 }} stroke="hsl(210 10% 50%)" />
                <Tooltip />
                <Area
                  type="monotone"
                  dataKey="analyses"
                  stroke="hsl(174 62% 34%)"
                  fill="hsl(174 62% 34% / 0.15)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
