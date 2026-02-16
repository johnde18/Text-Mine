import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Download, FileText, Hash, Brain, Tags, Layers, Search, BarChart3 } from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar,
} from "recharts";

const overviewStats = [
  { label: "Words", value: "2,847" },
  { label: "Sentences", value: "142" },
  { label: "Paragraphs", value: "18" },
  { label: "Vocabulary Richness", value: "0.68" },
  { label: "Avg Sentence Length", value: "20.1" },
  { label: "Reading Level", value: "Grade 12" },
];

const sentimentData = [
  { name: "Positive", value: 52, color: "hsl(152 60% 42%)" },
  { name: "Neutral", value: 31, color: "hsl(210 15% 70%)" },
  { name: "Negative", value: 17, color: "hsl(0 72% 51%)" },
];

const emotionData = [
  { emotion: "Joy", score: 35 },
  { emotion: "Trust", score: 28 },
  { emotion: "Anticipation", score: 22 },
  { emotion: "Sadness", score: 8 },
  { emotion: "Fear", score: 4 },
  { emotion: "Anger", score: 3 },
];

const entities = [
  { text: "Google", type: "ORG", count: 12 },
  { text: "San Francisco", type: "LOC", count: 8 },
  { text: "Sundar Pichai", type: "PER", count: 6 },
  { text: "2024", type: "DATE", count: 15 },
  { text: "Alphabet", type: "ORG", count: 5 },
  { text: "California", type: "LOC", count: 4 },
  { text: "DeepMind", type: "ORG", count: 7 },
  { text: "London", type: "LOC", count: 3 },
];

const entityColors: Record<string, string> = {
  PER: "bg-accent/15 text-accent border-accent/30",
  ORG: "bg-primary/15 text-primary border-primary/30",
  LOC: "bg-success/15 text-success border-success/30",
  DATE: "bg-warning/15 text-warning border-warning/30",
};

const topics = [
  { id: 1, label: "Artificial Intelligence", keywords: ["AI", "machine learning", "neural", "deep learning", "model"], weight: 34 },
  { id: 2, label: "Business Strategy", keywords: ["revenue", "market", "growth", "investment", "strategy"], weight: 26 },
  { id: 3, label: "Technology Infrastructure", keywords: ["cloud", "server", "data center", "computing", "platform"], weight: 22 },
  { id: 4, label: "Product Development", keywords: ["product", "feature", "release", "update", "launch"], weight: 18 },
];

const keywords = [
  { word: "artificial intelligence", score: 0.94 },
  { word: "machine learning", score: 0.88 },
  { word: "cloud computing", score: 0.82 },
  { word: "data analytics", score: 0.78 },
  { word: "neural networks", score: 0.74 },
  { word: "deep learning", score: 0.71 },
  { word: "natural language", score: 0.68 },
  { word: "computer vision", score: 0.64 },
];

const topicRadarData = topics.map((t) => ({ topic: t.label.split(" ")[0], weight: t.weight }));

const ResultsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Analysis Results</h1>
            <p className="text-muted-foreground text-sm">Project: Tech Industry Report Q4 2025</p>
          </div>
          <Button variant="outline" size="sm">
            <Download className="h-4 w-4 mr-1" /> Export Report
          </Button>
        </div>

        <Tabs defaultValue="overview">
          <TabsList className="flex-wrap h-auto gap-1 p-1">
            <TabsTrigger value="overview"><FileText className="h-3.5 w-3.5 mr-1" />Overview</TabsTrigger>
            <TabsTrigger value="sentiment"><Brain className="h-3.5 w-3.5 mr-1" />Sentiment</TabsTrigger>
            <TabsTrigger value="entities"><Tags className="h-3.5 w-3.5 mr-1" />Entities</TabsTrigger>
            <TabsTrigger value="topics"><Layers className="h-3.5 w-3.5 mr-1" />Topics</TabsTrigger>
            <TabsTrigger value="keywords"><Search className="h-3.5 w-3.5 mr-1" />Keywords</TabsTrigger>
            <TabsTrigger value="summary"><Hash className="h-3.5 w-3.5 mr-1" />Summary</TabsTrigger>
          </TabsList>

          {/* Overview */}
          <TabsContent value="overview" className="mt-6">
            <div className="grid sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {overviewStats.map((s) => (
                <Card key={s.label} className="p-4 text-center shadow-soft">
                  <p className="text-2xl font-heading font-bold text-card-foreground">{s.value}</p>
                  <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Sentiment */}
          <TabsContent value="sentiment" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 shadow-soft">
                <h3 className="font-heading font-semibold text-card-foreground mb-4">Polarity Distribution</h3>
                <div className="flex items-center gap-6">
                  <ResponsiveContainer width="55%" height={220}>
                    <PieChart>
                      <Pie data={sentimentData} cx="50%" cy="50%" innerRadius={55} outerRadius={85} paddingAngle={4} dataKey="value">
                        {sentimentData.map((e, i) => <Cell key={i} fill={e.color} />)}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="space-y-3">
                    {sentimentData.map((s) => (
                      <div key={s.name} className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full" style={{ background: s.color }} />
                        <span className="text-sm text-card-foreground">{s.name}: {s.value}%</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
              <Card className="p-6 shadow-soft">
                <h3 className="font-heading font-semibold text-card-foreground mb-4">Emotion Detection</h3>
                <ResponsiveContainer width="100%" height={220}>
                  <BarChart data={emotionData} layout="vertical">
                    <CartesianGrid strokeDasharray="3 3" stroke="hsl(210 15% 90%)" />
                    <XAxis type="number" tick={{ fontSize: 12 }} stroke="hsl(210 10% 50%)" />
                    <YAxis dataKey="emotion" type="category" tick={{ fontSize: 12 }} stroke="hsl(210 10% 50%)" width={80} />
                    <Tooltip />
                    <Bar dataKey="score" fill="hsl(24 92% 55%)" radius={[0, 6, 6, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </Card>
            </div>
          </TabsContent>

          {/* Entities */}
          <TabsContent value="entities" className="mt-6">
            <Card className="p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-card-foreground mb-4">Named Entities</h3>
              <div className="flex flex-wrap gap-3 mb-6">
                {entities.map((e) => (
                  <Badge key={e.text} variant="outline" className={`px-3 py-1.5 text-sm ${entityColors[e.type]}`}>
                    {e.text} <span className="ml-1.5 text-xs opacity-70">{e.type} ({e.count})</span>
                  </Badge>
                ))}
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted-foreground font-medium">Entity</th>
                      <th className="text-left py-2 text-muted-foreground font-medium">Type</th>
                      <th className="text-right py-2 text-muted-foreground font-medium">Frequency</th>
                    </tr>
                  </thead>
                  <tbody>
                    {entities.sort((a, b) => b.count - a.count).map((e) => (
                      <tr key={e.text} className="border-b border-border/50">
                        <td className="py-2 text-card-foreground font-medium">{e.text}</td>
                        <td className="py-2"><Badge variant="outline" className={`text-xs ${entityColors[e.type]}`}>{e.type}</Badge></td>
                        <td className="py-2 text-right text-card-foreground">{e.count}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>

          {/* Topics */}
          <TabsContent value="topics" className="mt-6">
            <div className="grid lg:grid-cols-2 gap-6">
              <Card className="p-6 shadow-soft">
                <h3 className="font-heading font-semibold text-card-foreground mb-4">Topic Distribution</h3>
                <ResponsiveContainer width="100%" height={280}>
                  <RadarChart data={topicRadarData}>
                    <PolarGrid stroke="hsl(210 15% 90%)" />
                    <PolarAngleAxis dataKey="topic" tick={{ fontSize: 12 }} stroke="hsl(210 10% 50%)" />
                    <PolarRadiusAxis tick={{ fontSize: 10 }} stroke="hsl(210 10% 50%)" />
                    <Radar dataKey="weight" stroke="hsl(174 62% 34%)" fill="hsl(174 62% 34% / 0.2)" strokeWidth={2} />
                  </RadarChart>
                </ResponsiveContainer>
              </Card>
              <Card className="p-6 shadow-soft">
                <h3 className="font-heading font-semibold text-card-foreground mb-4">Topics & Keywords</h3>
                <div className="space-y-4">
                  {topics.map((t) => (
                    <div key={t.id} className="p-4 rounded-lg bg-muted/50 border border-border">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-semibold text-card-foreground text-sm">{t.label}</span>
                        <span className="text-xs text-primary font-semibold">{t.weight}%</span>
                      </div>
                      <div className="w-full h-1.5 rounded-full bg-muted">
                        <div className="h-full rounded-full gradient-primary" style={{ width: `${t.weight}%` }} />
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-2">
                        {t.keywords.map((k) => (
                          <span key={k} className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{k}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </TabsContent>

          {/* Keywords */}
          <TabsContent value="keywords" className="mt-6">
            <Card className="p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-card-foreground mb-4">Extracted Keywords (TF-IDF)</h3>
              <div className="space-y-3">
                {keywords.map((k) => (
                  <div key={k.word} className="flex items-center gap-4">
                    <span className="text-sm font-medium text-card-foreground w-40 truncate">{k.word}</span>
                    <div className="flex-1 h-3 rounded-full bg-muted overflow-hidden">
                      <div
                        className="h-full rounded-full gradient-primary transition-all duration-500"
                        style={{ width: `${k.score * 100}%` }}
                      />
                    </div>
                    <span className="text-sm font-semibold text-primary w-12 text-right">{k.score.toFixed(2)}</span>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          {/* Summary */}
          <TabsContent value="summary" className="mt-6">
            <Card className="p-6 shadow-soft">
              <h3 className="font-heading font-semibold text-card-foreground mb-4">Extractive Summary</h3>
              <div className="prose prose-sm max-w-none text-card-foreground leading-relaxed space-y-3">
                <p>
                  The technology industry continues to witness unprecedented growth in artificial intelligence applications,
                  with major players like Google and DeepMind leading advancements in machine learning and neural network architectures.
                </p>
                <p>
                  Cloud computing infrastructure remains a critical investment area, with companies allocating significant
                  resources toward expanding data center capacity to support the growing demand for AI workloads.
                </p>
                <p>
                  Product development cycles are accelerating, with organizations leveraging AI-powered tools to streamline
                  the development process and deliver features faster to market, resulting in improved competitive positioning.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </DashboardLayout>
  );
};

export default ResultsPage;
