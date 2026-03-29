type Props = {
  children: React.ReactNode;
};

export function SectionHeading({ children }: Props) {
  return (
    <h2 className="font-serif text-2xl font-semibold border-l-4 border-green pl-4 mb-8">
      {children}
    </h2>
  );
}
