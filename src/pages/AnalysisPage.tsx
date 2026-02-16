import DashboardLayout from "@/components/DashboardLayout";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Upload, Link as LinkIcon, Play, FileText } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AnalysisPage = () => {
  const [text, setText] = useState("");
  const navigate = useNavigate();

  const handleRun = () => {
    navigate("/results");
  };

  return (
    <DashboardLayout>
      <div className="space-y-6 max-w-4xl">
        <div>
          <h1 className="text-2xl font-heading font-bold text-foreground">New Analysis</h1>
          <p className="text-muted-foreground text-sm">Upload or enter text to begin processing.</p>
        </div>

        {/* Input Section */}
        <Card className="p-6 shadow-soft">
          <h2 className="font-heading font-semibold text-card-foreground mb-4">Step 1: Input Text</h2>
          <Tabs defaultValue="paste">
            <TabsList className="mb-4">
              <TabsTrigger value="paste"><FileText className="h-4 w-4 mr-1" />Paste Text</TabsTrigger>
              <TabsTrigger value="upload"><Upload className="h-4 w-4 mr-1" />Upload File</TabsTrigger>
              <TabsTrigger value="url"><LinkIcon className="h-4 w-4 mr-1" />Enter URL</TabsTrigger>
            </TabsList>
            <TabsContent value="paste">
              <Textarea
                placeholder="Paste your English text here for analysis..."
                className="min-h-[200px] font-body"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </TabsContent>
            <TabsContent value="upload">
              <div className="border-2 border-dashed border-border rounded-xl p-12 text-center hover:border-primary/50 transition-colors cursor-pointer">
                <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                <p className="text-sm text-muted-foreground">Drag & drop files here or click to browse</p>
                <p className="text-xs text-muted-foreground mt-1">Supports TXT, PDF, DOCX, CSV</p>
              </div>
            </TabsContent>
            <TabsContent value="url">
              <input
                type="url"
                placeholder="https://example.com/article"
                className="w-full h-12 px-4 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-ring"
              />
            </TabsContent>
          </Tabs>
        </Card>

        {/* Config Section */}
        <Card className="p-6 shadow-soft">
          <h2 className="font-heading font-semibold text-card-foreground mb-4">Step 2: Configure Pipeline</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Preprocessing</h3>
              {["Stopword Removal", "Lemmatization", "Stemming", "Case Normalization"].map((opt) => (
                <div key={opt} className="flex items-center justify-between">
                  <Label className="text-sm text-card-foreground">{opt}</Label>
                  <Switch defaultChecked={opt !== "Stemming"} />
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground">Analysis Modules</h3>
              {["Sentiment Analysis", "Entity Recognition", "Topic Modeling", "Keyword Extraction", "Summarization"].map((opt) => (
                <div key={opt} className="flex items-center justify-between">
                  <Label className="text-sm text-card-foreground">{opt}</Label>
                  <Switch defaultChecked />
                </div>
              ))}
            </div>
          </div>
        </Card>

        <Button variant="hero" size="xl" onClick={handleRun} className="w-full sm:w-auto">
          <Play className="h-5 w-5 mr-2" /> Run Analysis
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default AnalysisPage;
