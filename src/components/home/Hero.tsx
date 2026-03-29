import { profile } from "@/data/profile";
import { SnsButton } from "@/components/ui/SnsButton";
import { Avatar } from "@/components/home/Avatar";

export function Hero() {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:items-center md:text-left gap-10 py-12 border-b-4 border-double border-green-border">
      <Avatar name={profile.name.ja} />

      <div>
        <h1 className="font-serif text-3xl font-semibold mb-1 tracking-wide">
          {profile.name.ja} / {profile.name.en}
        </h1>
        <p className="text-sm text-text-sub mb-4">{profile.title}</p>
        <div className="flex flex-wrap justify-center md:justify-start gap-3">
          {profile.sns.map(({ label, url }) => (
            <SnsButton key={label} href={url}>
              {label}
            </SnsButton>
          ))}
        </div>
      </div>
    </div>
  );
}
