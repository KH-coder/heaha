// Minimal placeholder store without external deps
export type AuthState = { user: null | { id: string; name?: string } };

export const authStore: AuthState = { user: null };
