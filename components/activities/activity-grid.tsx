import { ReactNode } from "react";

export function ActivityGrid({ children }: { children: ReactNode }) {
  return <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">{children}</div>;
}
