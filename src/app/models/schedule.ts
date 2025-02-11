export interface Schedule {
    id: number;
    deviceId: number;
    action: 'turn_on' | 'turn_off' | 'restart';
    scheduledTime: Date;
    status: 'pending' | 'completed' | 'failed';
  }
  