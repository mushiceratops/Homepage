import Link from "next/link";

type Props = {
  href: string;
  children: React.ReactNode;
};

export function MoreLink({ href, children }: Props) {
  return (
    <Link
      href={href}
      className="group inline-flex items-center gap-1.5 mt-5 text-sm font-semibold text-green border-b border-green-border hover:gap-3 hover:border-green transition-all duration-200"
    >
      <span className="transition-transform group-hover:translate-x-1 inline-block">
        →
      </span>
      {children}
    </Link>
  );
}
