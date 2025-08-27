import { useState } from "react";

export function useAuth() {
  const [user, setUser] = useState<null | { id: string; name?: string }>(null);
  return { user, setUser };
}
