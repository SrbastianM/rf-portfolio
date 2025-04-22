import { type RouteConfig, route, index } from '@react-router/dev/routes';

export default [
  index('../pages/HomePage.tsx'),
  route('about', '../pages/about.tsx'),
] satisfies RouteConfig;
