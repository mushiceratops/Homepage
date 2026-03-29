type Props = {
  title: string;
  children: React.ReactNode;
};

export function CvSection({ title, children }: Props) {
  return (
    <section className="py-10 border-b-4 border-double border-green-border print:border-b print:border-gray-300">
      <h2 className="font-serif text-xl font-semibold border-l-4 border-green pl-4 mb-6">
        {title}
      </h2>
      {children}
    </section>
  );
}
