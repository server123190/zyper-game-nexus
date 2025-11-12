import { NavLink } from "react-router-dom";
import { 
  LayoutDashboard, 
  Server, 
  Users, 
  Settings, 
  Database,
  FolderOpen,
  Activity
} from "lucide-react";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Servers", href: "/servers", icon: Server },
  { name: "Users", href: "/users", icon: Users },
  { name: "Database", href: "/database", icon: Database },
  { name: "Files", href: "/files", icon: FolderOpen },
  { name: "Activity", href: "/activity", icon: Activity },
  { name: "Settings", href: "/settings", icon: Settings },
];

export const Sidebar = () => {
  return (
    <div className="flex h-screen w-64 flex-col border-r border-border bg-card">
      <div className="flex h-16 items-center border-b border-border px-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Zyper
        </h1>
      </div>
      
      <nav className="flex-1 space-y-1 p-4">
        {navigation.map((item) => (
          <NavLink
            key={item.name}
            to={item.href}
            className={({ isActive }) =>
              cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
                isActive
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )
            }
          >
            <item.icon className="h-5 w-5" />
            {item.name}
          </NavLink>
        ))}
      </nav>
      
      <div className="border-t border-border p-4">
        <div className="flex items-center gap-3 rounded-lg bg-muted px-3 py-2">
          <div className="h-8 w-8 rounded-full bg-primary" />
          <div className="flex-1 text-sm">
            <p className="font-medium">Admin User</p>
            <p className="text-xs text-muted-foreground">admin@zyper.dev</p>
          </div>
        </div>
      </div>
    </div>
  );
};
