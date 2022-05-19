export interface ITodoItem {
  name: string;
  id: number;
  createdAt: Date;
  updatedAt: Date;
  isCompleted: boolean;
  expiresAt?: Date;
}
