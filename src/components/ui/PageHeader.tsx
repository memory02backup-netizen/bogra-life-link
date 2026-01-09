import { LucideIcon } from "lucide-react";

interface PageHeaderProps {
  icon: LucideIcon;
  title: string;
  subtitle?: string;
  gradient?: string;
}

const PageHeader = ({ icon: Icon, title, subtitle, gradient = "from-primary to-red-600" }: PageHeaderProps) => {
  return (
    <div className="page-header">
      <div className={`page-header-icon bg-gradient-to-br ${gradient}`}>
        <Icon className="w-8 h-8" />
      </div>
      <h1 className="text-2xl font-bold text-foreground">{title}</h1>
      {subtitle && <p className="text-muted-foreground mt-1">{subtitle}</p>}
    </div>
  );
};

export default PageHeader;
