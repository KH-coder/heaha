import * as React from "react";

type Props = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, Props>(function Select(
  { className = "", children, ...props },
  ref
) {
  return (
    <select ref={ref} className={`border rounded px-3 py-2 ${className}`} {...props}>
      {children}
    </select>
  );
});
