import { news } from "@/data/news";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function NewsSection() {
  return (
    <section className="py-16 border-b-4 border-double border-green-border">
      <SectionHeading>Recent News</SectionHeading>
      <ul className="list-none">
        {news.map((item, i) => (
          <li
            key={i}
            className="flex gap-5 px-2 py-3 rounded border-b border-surface last:border-0 text-sm hover:bg-green-light hover:pl-4 transition-all duration-200"
          >
            <span className="text-text-sub whitespace-nowrap min-w-[80px]">
              {item.date}
            </span>
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
