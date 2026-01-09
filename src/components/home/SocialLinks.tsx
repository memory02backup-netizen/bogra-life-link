import { Facebook, Mail, Youtube, Users } from "lucide-react";

const socialLinks = [
  {
    href: "https://www.facebook.com/bobdo.official",
    icon: Facebook,
    label: "পেজ",
    color: "bg-blue-500",
    shadowColor: "shadow-blue-500/30",
  },
  {
    href: "https://www.facebook.com/groups/BOBO.BD",
    icon: Users,
    label: "গ্রুপ",
    color: "bg-blue-600",
    shadowColor: "shadow-blue-600/30",
  },
  {
    href: "mailto:bobdo.bd@gmail.com",
    icon: Mail,
    label: "ইমেইল",
    color: "bg-red-500",
    shadowColor: "shadow-red-500/30",
  },
  {
    href: "https://www.youtube.com/@BOBDO",
    icon: Youtube,
    label: "ইউটিউব",
    color: "bg-red-600",
    shadowColor: "shadow-red-600/30",
  },
];

const SocialLinks = () => {
  return (
    <div className="flex justify-center gap-3 px-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="social-btn bg-card"
          >
            <div className={`social-btn-icon ${link.color} shadow-lg ${link.shadowColor}`}>
              <Icon className="w-6 h-6" />
            </div>
            <span className="text-xs font-medium text-foreground">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};

export default SocialLinks;
