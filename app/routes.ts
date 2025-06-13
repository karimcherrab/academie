import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"), // ✅ route 1: /
  route("/registrations/cherrabkarim/kkk", "Layout/RegistrationsPage.tsx"), // ✅ route 2
    route("/confirmation", "routes/ThanksPage.tsx"), // ✅ route 1: /

] satisfies RouteConfig;
