export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-dvh">
      <div className="hidden w-1/2 flex-col justify-center gap-6 bg-elevated px-16 lg:flex">
        <div>
          <h1 className="text-3xl font-bold text-brand">Ghost AI</h1>
          <p className="mt-2 text-sm text-copy-muted">
            Collaborative system design workspace
          </p>
        </div>
        <ul className="space-y-3 text-sm text-copy-secondary">
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
            Create and manage architecture projects with your team
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
            Design systems on a shared real-time canvas
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
            Generate technical specs from your architecture graph
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-brand" />
            AI-powered design generation from natural language prompts
          </li>
        </ul>
      </div>
      <div className="flex w-full items-center justify-center bg-base px-4 py-12 lg:w-1/2">
        {children}
      </div>
    </div>
  );
}
