import { SectionHeading } from "@/components/ui/SectionHeading";
import { activities } from "@/data/activities";

export const metadata = {
  title: "Activities | Sohei Tsukahara",
};

const TYPE_LABEL: Record<string, string> = {
  outreach: "Outreach",
  writing: "Technical Writing",
  other: "Other",
};

export default function ActivitiesPage() {
  const outreach = activities.filter((a) => a.type === "outreach");
  const writing = activities.filter((a) => a.type === "writing");
  const other = activities.filter((a) => a.type === "other");

  const groups = [
    { key: "outreach", label: "Outreach", items: outreach },
    { key: "writing", label: "Technical Writing", items: writing },
    { key: "other", label: "Other Activities", items: other },
  ].filter((g) => g.items.length > 0);

  return (
    <>
      <SectionHeading>Activities</SectionHeading>

      {groups.map((group) => (
        <section
          key={group.key}
          className="py-10 border-b-4 border-double border-green-border last:border-0"
        >
          <h3 className="font-serif text-lg font-semibold border-l-4 border-green pl-3 mb-4">
            {group.label}
          </h3>
          <ul className="list-none">
            {group.items.map((activity, i) => (
              <li
                key={i}
                className="flex gap-5 px-2 py-3 rounded border-b border-surface last:border-0 text-sm hover:bg-green-light hover:pl-4 transition-all duration-200"
              >
                <span className="text-text-sub whitespace-nowrap min-w-[80px]">
                  {activity.date ?? ""}
                </span>
                <span>
                  {activity.url ? (
                    <a
                      href={activity.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {activity.title}
                    </a>
                  ) : (
                    activity.title
                  )}
                  {activity.venue && (
                    <span className="text-text-sub ml-2 text-xs">
                      @ {activity.venue}
                    </span>
                  )}
                </span>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  );
}
