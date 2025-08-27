import { ReactNode } from "react";

export function Card({ children }: { children: ReactNode }) {
  return <div className="rounded border p-4">{children}</div>;
}
