import { ServerCard } from "@/components/ServerCard";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

const Servers = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold mb-2">Servers</h1>
          <p className="text-muted-foreground">Manage all your game servers</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Create Server
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <ServerCard
          name="Survival SMP"
          game="Minecraft 1.20.1"
          status="online"
          cpu={45}
          memory={4096}
          players="24/50"
          ip="mc.zyper.dev:25565"
        />
        <ServerCard
          name="Creative Build"
          game="Minecraft 1.20.1"
          status="online"
          cpu={23}
          memory={2048}
          players="8/30"
          ip="creative.zyper.dev:25566"
        />
        <ServerCard
          name="PvP Arena"
          game="Minecraft 1.20.1"
          status="starting"
          cpu={67}
          memory={3072}
          players="0/40"
          ip="pvp.zyper.dev:25567"
        />
        <ServerCard
          name="Rust Main"
          game="Rust"
          status="online"
          cpu={78}
          memory={8192}
          players="145/200"
          ip="rust.zyper.dev:28015"
        />
        <ServerCard
          name="CS2 Competitive"
          game="Counter-Strike 2"
          status="offline"
          cpu={0}
          memory={0}
          players="0/10"
          ip="cs2.zyper.dev:27015"
        />
        <ServerCard
          name="Valheim World"
          game="Valheim"
          status="online"
          cpu={34}
          memory={4096}
          players="6/10"
          ip="valheim.zyper.dev:2456"
        />
        <ServerCard
          name="Terraria Server"
          game="Terraria"
          status="online"
          cpu={12}
          memory={512}
          players="3/8"
          ip="terraria.zyper.dev:7777"
        />
        <ServerCard
          name="ARK: Survival"
          game="ARK"
          status="offline"
          cpu={0}
          memory={0}
          players="0/70"
          ip="ark.zyper.dev:27015"
        />
      </div>
    </div>
  );
};

export default Servers;
