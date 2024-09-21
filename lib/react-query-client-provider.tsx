'use client'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

// Create a QueryClient instance
const queryClient = new QueryClient();

export const ReactQueryClientProviders = ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);


