import { ReactNode } from "react";

export function BookingCard({ children }: { children: ReactNode }) {
  return <div className="border rounded p-4">{children}</div>;
}
