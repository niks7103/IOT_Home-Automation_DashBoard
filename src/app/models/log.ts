export interface Log {
    id: number;
    deviceId: number;
    action: string;
    timestamp: Date;
    status: 'success' | 'error';
    message: string;
  }
  