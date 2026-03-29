type Props = {
  href: string;
  children: React.ReactNode;
};

export function SnsButton({ href, children }: Props) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-xs font-semibold px-3 py-1.5 border border-green-border rounded text-green bg-white hover:bg-green hover:text-white hover:border-green hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
    >
      {children}
    </a>
  );
}
