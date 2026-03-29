import { profile } from "@/data/profile";

export function Footer() {
  return (
    <footer className="bg-green text-white text-center py-8 px-6">
      <div className="flex justify-center gap-4 flex-wrap mb-4">
        {profile.footerSns.map(({ label, url, icon: Icon }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-xs font-semibold opacity-75 hover:opacity-100 hover:-translate-y-0.5 transition-all duration-200 inline-flex items-center gap-1 tracking-wide"
          >
            <Icon size={12} />
            {label}
          </a>
        ))}
      </div>
      <p className="text-xs opacity-55">&copy; 2026 Sohei Tsukahara</p>
    </footer>
  );
}
