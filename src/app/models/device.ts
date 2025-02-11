export interface Device {
    id: number;
    name: string;
    type: string;
    status: 'online' | 'offline' | 'maintenance';
    ipAddress: string;
    location: string;
    lastUpdated: Date;
  }
  