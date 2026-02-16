import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  FolderOpen,
  Plus,
  MoreVertical,
  FileText,
  Clock,
  TrendingUp,
  Search,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projects = [
  {
    id: 1,
    name: "Customer Feedback Q4",
    description: "Sentiment analysis of Q4 customer reviews across all platforms.",
    documents: 234,
    lastUpdated: "2 hours ago",
    sentiment: 0.78,
    status: "active",
    progress: 85,
    topics: ["satisfaction", "pricing", "support"],
  },
  {
    id: 2,
    name: "Research Papers - NLP",
    description: "Topic modeling and keyword extraction from 50+ NLP research papers.",
    documents: 52,
    lastUpdated: "1 day ago",
    sentiment: 0.65,
    status: "active",
    progress: 100,
    topics: ["transformers", "attention", "BERT"],
  },
  {
    id: 3,
    name: "Social Media Trends",
    description: "Real-time tracking of social media mentions and sentiment shifts.",
    documents: 1847,
    lastUpdated: "5 mins ago",
    sentiment: 0.42,
    status: "processing",
    progress: 62,
    topics: ["viral", "brand", "engagement"],
  },
  {
    id: 4,
    name: "Legal Contract Review",
    description: "Entity recognition and clause extraction from legal documents.",
    documents: 89,
    lastUpdated: "3 days ago",
    sentiment: 0.55,
    status: "completed",
    progress: 100,
    topics: ["compliance", "terms", "liability"],
  },
  {
    id: 5,
    name: "Product Reviews Analysis",
    description: "Comparative sentiment analysis across competitor product reviews.",
    documents: 456,
    lastUpdated: "12 hours ago",
    sentiment: 0.71,
    status: "active",
    progress: 45,
    topics: ["quality", "features", "value"],
  },
  {
    id: 6,
    name: "News Article Mining",
    description: "Daily news aggregation with topic clustering and trend detection.",
    documents: 3200,
    lastUpdated: "30 mins ago",
    sentiment: 0.58,
    status: "active",
    progress: 90,
    topics: ["politics", "tech", "economy"],
  },
];

const statusColors: Record<string, string> = {
  active: "bg-primary/10 text-primary",
  processing: "bg-warning/10 text-warning",
  completed: "bg-success/10 text-success",
};

const ProjectsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Projects</h1>
            <p className="text-muted-foreground text-sm">Manage your text mining projects.</p>
          </div>
          <Button className="gap-2 w-full sm:w-auto">
            <Plus className="h-4 w-4" /> New Project
          </Button>
        </div>

        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search projects..."
            className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
          />
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {projects.map((p) => (
            <Card key={p.id} className="p-5 shadow-soft hover:shadow-md transition-shadow group">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <FolderOpen className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-card-foreground text-sm">{p.name}</h3>
                    <Badge variant="secondary" className={`text-[10px] px-1.5 py-0 mt-0.5 ${statusColors[p.status]}`}>
                      {p.status}
                    </Badge>
                  </div>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="opacity-0 group-hover:opacity-100 transition-opacity p-1 rounded hover:bg-muted">
                      <MoreVertical className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Open</DropdownMenuItem>
                    <DropdownMenuItem>Share</DropdownMenuItem>
                    <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <p className="text-xs text-muted-foreground mb-3 line-clamp-2">{p.description}</p>

              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1"><FileText className="h-3 w-3" /> {p.documents} docs</span>
                  <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {p.lastUpdated}</span>
                </div>

                <div>
                  <div className="flex items-center justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Progress</span>
                    <span className="font-medium text-card-foreground">{p.progress}%</span>
                  </div>
                  <Progress value={p.progress} className="h-1.5" />
                </div>

                <div className="flex items-center gap-1.5 flex-wrap">
                  {p.topics.map((t) => (
                    <Badge key={t} variant="outline" className="text-[10px] px-1.5 py-0">
                      {t}
                    </Badge>
                  ))}
                  <span className="ml-auto flex items-center gap-1 text-xs text-primary">
                    <TrendingUp className="h-3 w-3" /> {p.sentiment.toFixed(2)}
                  </span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ProjectsPage;
