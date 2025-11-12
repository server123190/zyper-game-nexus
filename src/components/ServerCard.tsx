import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Play, Square, RotateCw, Cpu, HardDrive, Network } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServerCardProps {
  name: string;
  game: string;
  status: "online" | "offline" | "starting";
  cpu: number;
  memory: number;
  players: string;
  ip: string;
}

export const ServerCard = ({ name, game, status, cpu, memory, players, ip }: ServerCardProps) => {
  const statusConfig = {
    online: { variant: "success" as const, label: "Online" },
    offline: { variant: "destructive" as const, label: "Offline" },
    starting: { variant: "warning" as const, label: "Starting" },
  };

  return (
    <Card className="p-6 bg-gradient-to-br from-card to-card/50 border-border/50 hover:border-primary/50 transition-all">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold mb-1">{name}</h3>
          <p className="text-sm text-muted-foreground">{game}</p>
        </div>
        <Badge variant={statusConfig[status].variant}>
          {statusConfig[status].label}
        </Badge>
      </div>

      <div className="space-y-3 mb-4">
        <div className="flex items-center gap-2 text-sm">
          <Cpu className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">CPU:</span>
          <span className="font-medium">{cpu}%</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <HardDrive className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Memory:</span>
          <span className="font-medium">{memory} MB</span>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <Network className="h-4 w-4 text-primary" />
          <span className="text-muted-foreground">Players:</span>
          <span className="font-medium">{players}</span>
        </div>
        <div className="text-xs text-muted-foreground font-mono bg-muted/50 px-2 py-1 rounded">
          {ip}
        </div>
      </div>

      <div className="flex gap-2">
        {status === "offline" ? (
          <Button size="sm" className="flex-1">
            <Play className="h-4 w-4 mr-1" />
            Start
          </Button>
        ) : (
          <>
            <Button size="sm" variant="outline" className="flex-1">
              <RotateCw className="h-4 w-4 mr-1" />
              Restart
            </Button>
            <Button size="sm" variant="destructive" className="flex-1">
              <Square className="h-4 w-4 mr-1" />
              Stop
            </Button>
          </>
        )}
      </div>
    </Card>
  );
};
