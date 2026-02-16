import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  FolderOpen,
  FileText,
  TrendingUp,
  Hash,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  Zap,
  Globe,
  Users,
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
  RadarChart,
  Radar,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  LineChart,
  Line,
  Legend,
} from "recharts";

const stats = [
  { label: "Total Projects", value: "12", icon: FolderOpen, change: "+3 this week", up: true },
  { label: "Documents Processed", value: "847", icon: FileText, change: "+52 today", up: true },
  { label: "Avg Sentiment", value: "0.72", icon: TrendingUp, change: "+0.04", up: true },
  { label: "Top Topic", value: "Technology", icon: Hash, change: "34% of docs", up: true },
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
  { date: "Mon", analyses: 12, documents: 45 },
  { date: "Tue", analyses: 19, documents: 62 },
  { date: "Wed", analyses: 15, documents: 51 },
  { date: "Thu", analyses: 25, documents: 89 },
  { date: "Fri", analyses: 22, documents: 73 },
  { date: "Sat", analyses: 30, documents: 95 },
  { date: "Sun", analyses: 28, documents: 84 },
];

const nlpPerformance = [
  { metric: "Sentiment", score: 92 },
  { metric: "NER", score: 87 },
  { metric: "Topics", score: 78 },
  { metric: "Keywords", score: 95 },
  { metric: "Summary", score: 83 },
  { metric: "Classify", score: 88 },
];

const entityBreakdown = [
  { name: "Person", value: 312, color: "hsl(174 62% 34%)" },
  { name: "Org", value: 248, color: "hsl(24 92% 55%)" },
  { name: "Location", value: 187, color: "hsl(152 60% 42%)" },
  { name: "Date", value: 143, color: "hsl(210 15% 70%)" },
  { name: "Other", value: 96, color: "hsl(0 72% 51%)" },
];

const recentActivity = [
  { action: "Analysis completed", project: "Customer Feedback Q4", time: "2 mins ago", icon: Zap },
  { action: "Report generated", project: "Social Media Trends", time: "15 mins ago", icon: FileText },
  { action: "New project created", project: "Legal Contract Review", time: "1 hour ago", icon: FolderOpen },
  { action: "API request", project: "News Article Mining", time: "2 hours ago", icon: Globe },
  { action: "Team member added", project: "Research Papers", time: "3 hours ago", icon: Users },
];

const topKeywords = [
  { keyword: "machine learning", score: 0.94, trend: "up" },
  { keyword: "natural language", score: 0.89, trend: "up" },
  { keyword: "deep learning", score: 0.85, trend: "down" },
  { keyword: "text mining", score: 0.82, trend: "up" },
  { keyword: "sentiment", score: 0.78, trend: "up" },
  { keyword: "classification", score: 0.75, trend: "down" },
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
                  <p className={`text-xs mt-1 flex items-center gap-1 ${s.up ? "text-success" : "text-destructive"}`}>
                    {s.up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                    {s.change}
                  </p>
                </div>
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <s.icon className="h-5 w-5 text-primary" />
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Row 1: Word Freq + Sentiment */}
        <div className="grid lg:grid-cols-2 gap-6">
          <Card className="p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">Word Frequency</h3>
            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={wordFreqData}>
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis dataKey="word" tick={{ fontSize: 12 }} className="fill-muted-foreground" />
                <YAxis tick={{ fontSize: 12 }} className="fill-muted-foreground" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, color: "hsl(var(--card-foreground))" }} />
                <Bar dataKey="freq" fill="hsl(174, 62%, 34%)" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">Sentiment Breakdown</h3>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <ResponsiveContainer width="100%" height={240} className="sm:max-w-[50%]">
                <PieChart>
                  <Pie data={sentimentData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} paddingAngle={4} dataKey="value">
                    {sentimentData.map((entry, i) => (
                      <Cell key={i} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, color: "hsl(var(--card-foreground))" }} />
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
        </div>

        {/* Row 2: Activity Trend (full width) */}
        <Card className="p-6 shadow-soft">
          <h3 className="font-heading font-semibold text-card-foreground mb-4">Analysis & Document Trends</h3>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
              <XAxis dataKey="date" tick={{ fontSize: 12 }} className="fill-muted-foreground" />
              <YAxis tick={{ fontSize: 12 }} className="fill-muted-foreground" />
              <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, color: "hsl(var(--card-foreground))" }} />
              <Legend />
              <Area type="monotone" dataKey="analyses" stroke="hsl(174, 62%, 34%)" fill="hsl(174, 62%, 34%, 0.15)" strokeWidth={2} />
              <Area type="monotone" dataKey="documents" stroke="hsl(24, 92%, 55%)" fill="hsl(24, 92%, 55%, 0.1)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* Row 3: NLP Performance Radar + Entity Breakdown + Top Keywords */}
        <div className="grid lg:grid-cols-3 gap-6">
          <Card className="p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">NLP Model Performance</h3>
            <ResponsiveContainer width="100%" height={260}>
              <RadarChart data={nlpPerformance} cx="50%" cy="50%" outerRadius="70%">
                <PolarGrid className="stroke-border" />
                <PolarAngleAxis dataKey="metric" tick={{ fontSize: 11 }} className="fill-muted-foreground" />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fontSize: 10 }} className="fill-muted-foreground" />
                <Radar name="Score" dataKey="score" stroke="hsl(174, 62%, 34%)" fill="hsl(174, 62%, 34%, 0.25)" fillOpacity={0.6} />
              </RadarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">Entity Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={entityBreakdown} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                <XAxis type="number" tick={{ fontSize: 11 }} className="fill-muted-foreground" />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 11 }} width={60} className="fill-muted-foreground" />
                <Tooltip contentStyle={{ backgroundColor: "hsl(var(--card))", border: "1px solid hsl(var(--border))", borderRadius: 8, color: "hsl(var(--card-foreground))" }} />
                <Bar dataKey="value" radius={[0, 6, 6, 0]}>
                  {entityBreakdown.map((e, i) => (
                    <Cell key={i} fill={e.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card>

          <Card className="p-6 shadow-soft">
            <h3 className="font-heading font-semibold text-card-foreground mb-4">Top Keywords (TF-IDF)</h3>
            <div className="space-y-3">
              {topKeywords.map((k) => (
                <div key={k.keyword} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-card-foreground font-medium">{k.keyword}</span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      {k.score.toFixed(2)}
                      {k.trend === "up" ? (
                        <ArrowUpRight className="h-3 w-3 text-success" />
                      ) : (
                        <ArrowDownRight className="h-3 w-3 text-destructive" />
                      )}
                    </span>
                  </div>
                  <Progress value={k.score * 100} className="h-1.5" />
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Row 4: Recent Activity */}
        <Card className="p-6 shadow-soft">
          <h3 className="font-heading font-semibold text-card-foreground mb-4">Recent Activity</h3>
          <div className="space-y-3">
            {recentActivity.map((a, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <a.icon className="h-4 w-4 text-primary" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-card-foreground">{a.action}</p>
                  <p className="text-xs text-muted-foreground truncate">{a.project}</p>
                </div>
                <span className="text-xs text-muted-foreground flex items-center gap-1 flex-shrink-0">
                  <Clock className="h-3 w-3" /> {a.time}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default DashboardPage;
