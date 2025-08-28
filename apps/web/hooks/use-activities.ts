import { useEffect, useState } from "react";

export function useActivities() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    // TODO: fetch activities
  }, []);
  return { items, setItems };
}
