"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import useAuthStore from "@/stores/authStore";
import { DASHBOARD_ROUTE, LOGIN_ROUTE } from "@/constants/routes";
import { ROLE_ADMIN } from "@/constants/userRoles";

const AdminPage = () => {
  const router = useRouter();
  const { user, isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.replace(LOGIN_ROUTE);
      return;
    }

    if (!user?.roles?.includes(ROLE_ADMIN)) {
      router.replace(LOGIN_ROUTE);
      return;
    }

    router.replace(DASHBOARD_ROUTE);
  }, [isAuthenticated, user, router]);

  return null;
};

export default AdminPage;