
'use client';

import { useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter();

  useEffect(() => {
    
    const checkUserLoggedIn = async () => {
      try {
        const response = await axios.get("/api/frontend", {
          withCredentials: true,
        });

        if (response.status === 200) {
          // User is logged in, check the current path
          const currentPath = window.location.pathname;
          if (currentPath === '/login' || currentPath === '/register') {
            window.history.back();
          }
        }
      } catch (error) {
        console.error(error);
        // If the API call fails, ensure that the user is redirected if on a protected route
        const currentPath = window.location.pathname;
        if (currentPath !== '/login' && currentPath !== '/register') {
          router.push('/login'); // Redirect to login page
        }
      }
    };

    checkUserLoggedIn();
  }, [router]);


  return <>{children}</>;
};
