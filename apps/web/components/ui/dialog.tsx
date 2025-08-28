import { ReactNode } from "react";

type Props = { open?: boolean; onClose?: () => void; children: ReactNode };

export function Dialog({ open = false, onClose, children }: Props) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50" onClick={onClose}>
      <div className="bg-white p-4 rounded" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
