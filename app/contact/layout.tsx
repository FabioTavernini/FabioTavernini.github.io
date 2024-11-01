export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4">
        <h2 className="m-4 text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">Contact me</h2>
        {children}
    </section>
  );
}
