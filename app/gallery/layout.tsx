export default function LayoutMedia({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <main className="mx-auto max-w-4xl px-4">
      {children}
    </main>
  )
}