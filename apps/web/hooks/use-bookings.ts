import { useEffect, useState } from "react";

export function useBookings() {
  const [items, setItems] = useState<any[]>([]);
  useEffect(() => {
    // TODO: fetch bookings
  }, []);
  return { items, setItems };
}
