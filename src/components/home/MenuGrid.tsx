import { Link } from "react-router-dom";
import {
  Search,
  UserPlus,
  Users,
  Heart,
  Building2,
  Cross,
  Award,
  Bell,
  AlertCircle,
  Info,
} from "lucide-react";

const menuItems = [
  { path: "/find-donor", icon: Search, label: "ডোনার খুঁজুন", gradient: "from-red-500 to-red-600" },
  { path: "/become-donor", icon: UserPlus, label: "ডোনার হন", gradient: "from-pink-500 to-pink-600" },
  { path: "/volunteer", icon: Users, label: "স্বেচ্ছাসেবক", gradient: "from-orange-500 to-orange-600" },
  { path: "/donation", icon: Heart, label: "অনুদান", gradient: "from-rose-500 to-rose-600" },
  { path: "/hospitals", icon: Building2, label: "হাসপাতাল", gradient: "from-blue-500 to-blue-600" },
  { path: "/first-aid", icon: Cross, label: "প্রাথমিক চিকিৎসা", gradient: "from-green-500 to-green-600" },
  { path: "/certificate", icon: Award, label: "সার্টিফিকেট", gradient: "from-amber-500 to-amber-600" },
  { path: "/notice", icon: Bell, label: "নোটিশ", gradient: "from-purple-500 to-purple-600" },
  { path: "/emergency", icon: AlertCircle, label: "জরুরি", gradient: "from-red-600 to-red-700" },
  { path: "/about", icon: Info, label: "আমাদের সম্পর্কে", gradient: "from-slate-500 to-slate-600" },
];

const MenuGrid = () => {
  return (
    <div className="px-4">
      <h2 className="section-title">সেবাসমূহ</h2>
      <div className="grid-menu">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.path}
              to={item.path}
              className="menu-item"
            >
              <div className={`menu-item-icon bg-gradient-to-br ${item.gradient}`}>
                <Icon className="w-7 h-7 text-white" />
              </div>
              <span className="text-sm font-medium text-foreground text-center">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MenuGrid;
