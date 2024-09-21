'use client'
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';
import { useEffect, ReactNode } from 'react';
import { toast } from '@/hooks/use-toast';

interface AuthWrapperProps {
  children: ReactNode;
}

const AuthWrapper: React.FC<AuthWrapperProps> = ({ children }) => {
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push('/'); // Redirect to home page if user is authenticated
      toast({title:"authentication",description:"you are logged in successfully"})
    }
  }, [user, router]);

  // Render nothing while checking authentication
  if (user) return null;

  return <>{children}</>; // Render children if not authenticated
};

export default AuthWrapper;
