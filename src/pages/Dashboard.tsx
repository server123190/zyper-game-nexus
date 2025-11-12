import { StatCard } from "@/components/StatCard";
import { ServerCard } from "@/components/ServerCard";
import { Server, Users, Activity, HardDrive } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to Zyper Game Panel</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Servers"
          value="12"
          icon={Server}
          trend="+2 this month"
          trendUp={true}
        />
        <StatCard
          title="Active Users"
          value="847"
          icon={Users}
          trend="+12% from last month"
          trendUp={true}
        />
        <StatCard
          title="Total Players"
          value="2,543"
          icon={Activity}
          trend="+8% from last week"
          trendUp={true}
        />
        <StatCard
          title="Storage Used"
          value="248 GB"
          icon={HardDrive}
          trend="82% capacity"
          trendUp={false}
        />
      </div>

      <div>
        <h2 className="text-2xl font-bold mb-4">Active Servers</h2>
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
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
