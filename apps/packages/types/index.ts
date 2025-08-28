export type ID = string;
export type Timestamp = string;

export type User = {
  id: ID;
  email: string;
  name?: string;
  points?: number;
};

export type Activity = {
  id: ID;
  title: string;
  description?: string;
};

export type Booking = {
  id: ID;
  userId: ID;
  activityId: ID;
  status: "active" | "cancelled";
};
