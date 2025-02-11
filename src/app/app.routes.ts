import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => 
            import('./components/auth/login/login.component').then((c) => c.LoginComponent) // Default to login page
    },
    {
        path: 'register',
        loadComponent: () => 
            import('./components/auth/register/register.component').then((c) => c.RegisterComponent)
    },
    {
        path: 'dashboard',
        loadComponent: () => 
            import('./components/dashboard/dashboard.component').then((c) => c.DashboardComponent)
    },
    {
        path: 'device-list',
        loadComponent: () => 
            import('./components/devices/device-list/device-list.component').then((c) => c.DeviceListComponent)
    },
    {
        path: 'device-details/:id',
        loadComponent: () => 
            import('./components/devices/device-details/device-details.component').then((c) => c.DeviceDetailsComponent)
    },
    {
        path: 'scheduling',
        loadComponent: () => 
            import('./components/scheduling/scheduling.component').then((c) => c.SchedulingComponent)
    },
    {
        path: 'logs',
        loadComponent: () => 
            import('./components/logs/logs.component').then((c) => c.LogsComponent)
    },
    {
        path: '**', 
        redirectTo: '/login'  // Redirect any unknown path to login
    }
];
