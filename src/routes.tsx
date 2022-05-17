import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import { Page404 } from './pages/Page404';
import { LandingPage } from './pages/LandingPage';
import { SearchResults } from './pages/SearchResults';
import { Dashboard } from './pages/Dashboard';
import { LogoOnlyLayout } from './layouts/LogoOnlyLayout';
import { DashboardLayout } from './layouts/dashboard';
import { Page401 } from './pages/Page401';
import { Page500 } from './pages/Page500';

export function Router(): React.ReactElement | null {
    return useRoutes([
        {
            path: '/dashboard',
            element: <DashboardLayout />,
            children: [{ path: '/dashboard', element: <Dashboard /> }]
        },
        {
            path: '/',
            element: <LandingPage />
        },
        {
            path: '/searchresults/:searchQuery',
            element: <SearchResults />
        },
        {
            path: '/',
            element: <LogoOnlyLayout />,
            children: [
                { path: '404', element: <Page404 /> },
                { path: '401', element: <Page401 /> },
                { path: '500', element: <Page500 /> },
                { path: '/', element: <Navigate to="/dashboard" /> },
                { path: '*', element: <Navigate to="/404" /> }
            ]
        },
        { path: '*', element: <Navigate to="/404" replace /> }
    ]);
}
