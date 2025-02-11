export interface User {
    id: number;
    name: string;
    email: string;
    password?: string; // Optional for security reasons
    role: 'admin' | 'user';
    createdAt: Date;
  }
  