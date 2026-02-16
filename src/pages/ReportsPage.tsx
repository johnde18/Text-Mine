import DashboardLayout from "@/components/DashboardLayout";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  FileBarChart,
  Download,
  Eye,
  Calendar,
  FileText,
  FileSpreadsheet,
  File,
  Search,
  Filter,
} from "lucide-react";

const reports = [
  {
    id: 1,
    name: "Q4 Customer Sentiment Report",
    project: "Customer Feedback Q4",
    type: "PDF",
    generatedAt: "Feb 14, 2026",
    size: "2.4 MB",
    pages: 24,
    icon: FileText,
  },
  {
    id: 2,
    name: "NLP Research Topic Distribution",
    project: "Research Papers - NLP",
    type: "Excel",
    generatedAt: "Feb 13, 2026",
    size: "1.1 MB",
    pages: 8,
    icon: FileSpreadsheet,
  },
  {
    id: 3,
    name: "Social Media Weekly Digest",
    project: "Social Media Trends",
    type: "PDF",
    generatedAt: "Feb 12, 2026",
    size: "5.7 MB",
    pages: 42,
    icon: FileText,
  },
  {
    id: 4,
    name: "Entity Extraction Summary",
    project: "Legal Contract Review",
    type: "CSV",
    generatedAt: "Feb 11, 2026",
    size: "890 KB",
    pages: null,
    icon: File,
  },
  {
    id: 5,
    name: "Keyword Frequency Export",
    project: "Product Reviews Analysis",
    type: "JSON",
    generatedAt: "Feb 10, 2026",
    size: "340 KB",
    pages: null,
    icon: File,
  },
  {
    id: 6,
    name: "Full Analysis Bundle",
    project: "News Article Mining",
    type: "PDF",
    generatedAt: "Feb 9, 2026",
    size: "12.3 MB",
    pages: 86,
    icon: FileBarChart,
  },
];

const typeColors: Record<string, string> = {
  PDF: "bg-destructive/10 text-destructive",
  Excel: "bg-success/10 text-success",
  CSV: "bg-primary/10 text-primary",
  JSON: "bg-warning/10 text-warning",
};

const ReportsPage = () => {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-heading font-bold text-foreground">Reports</h1>
            <p className="text-muted-foreground text-sm">Generated reports and data exports.</p>
          </div>
          <Button className="gap-2 w-full sm:w-auto">
            <FileBarChart className="h-4 w-4" /> Generate Report
          </Button>
        </div>

        {/* Search & Filter */}
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search reports..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-input bg-card text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            />
          </div>
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" /> Filter
          </Button>
        </div>

        {/* Reports List - responsive table/card hybrid */}
        <div className="space-y-3">
          {reports.map((r) => (
            <Card key={r.id} className="p-4 shadow-soft hover:shadow-md transition-shadow">
              <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                {/* Icon + Info */}
                <div className="flex items-center gap-3 flex-1 min-w-0">
                  <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                    <r.icon className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-heading font-semibold text-card-foreground text-sm truncate">{r.name}</h3>
                    <p className="text-xs text-muted-foreground truncate">{r.project}</p>
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 flex-wrap sm:flex-nowrap text-xs text-muted-foreground">
                  <Badge variant="secondary" className={`text-[10px] px-2 py-0.5 ${typeColors[r.type]}`}>
                    {r.type}
                  </Badge>
                  <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {r.generatedAt}</span>
                  <span>{r.size}</span>
                  {r.pages && <span>{r.pages} pages</span>}
                </div>

                {/* Actions */}
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
                    <Eye className="h-3.5 w-3.5" /> View
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1.5 text-xs">
                    <Download className="h-3.5 w-3.5" /> Download
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </DashboardLayout>
  );
};

export default ReportsPage;
