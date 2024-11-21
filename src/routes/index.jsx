import React, { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import LoadingScreen from '../components/LoadingScreen';

// 懒加载组件
const Landing = lazy(() => import('@/Pages/Landing'));
const Dashboard = lazy(() => import('@/Pages/Dashboard'));
const Tasks = lazy(() => import('@/Pages/Tasks'));
const Focus = lazy(() => import('@/Pages/Focus'));
const Analytics = lazy(() => import('@/Pages/Analytics'));
const Profile = lazy(() => import('@/Pages/Profile'));
const Login = lazy(() => import('@/Pages/Login'));
const Register = lazy(() => import('@/Pages/Register'));

const Router = () => {
  return useRoutes([
    {
      path: '/',
      element: <Landing />
    },
    {
      path: '/app',
      element: <MainLayout />,
      children: [
        { path: 'dashboard', element: <Suspense fallback={<LoadingScreen />}><Dashboard /></Suspense> },
        { path: 'tasks', element: <Suspense fallback={<LoadingScreen />}><Tasks /></Suspense> },
        { path: 'focus', element: <Suspense fallback={<LoadingScreen />}><Focus /></Suspense> },
        { path: 'analytics', element: <Suspense fallback={<LoadingScreen />}><Analytics /></Suspense> },
        { path: 'profile', element: <Suspense fallback={<LoadingScreen />}><Profile /></Suspense> },
        { path: '', element: <Navigate to="/app/dashboard" replace /> }
      ]
    },
    {
      path: '/login',
      element: <Suspense fallback={<LoadingScreen />}><Login /></Suspense>
    },
    {
      path: '/register',
      element: <Suspense fallback={<LoadingScreen />}><Register /></Suspense>
    },
    {
      path: '*',
      element: <Navigate to="/" replace />
    }
  ]);
};

export default Router;
