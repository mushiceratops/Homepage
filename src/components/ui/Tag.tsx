type Props = {
  children: React.ReactNode;
};

export function Tag({ children }: Props) {
  return (
    <span className="text-xs px-3 py-1 bg-green-light text-green rounded-full font-semibold hover:bg-green hover:text-white transition-colors cursor-default">
      {children}
    </span>
  );
}
