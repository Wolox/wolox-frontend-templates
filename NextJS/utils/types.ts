export type Nullable<T> = T | null;

// TODO: Change this interface to your current backend api standard
export interface ApiErrorI {
  code: number | string;
  description: string;
}
