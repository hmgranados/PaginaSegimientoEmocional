import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {AxiosInterceptor} from "./interceptor";
import {
    QueryClient,
    QueryClientProvider,
} from '@tanstack/react-query'
import {RouterProvider} from "./routes";
import { SnackbarProvider } from 'notistack';
import {SnackbarUtilsConfigurator} from "./components";

AxiosInterceptor();

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
        <SnackbarProvider maxSnack={2}>
            <SnackbarUtilsConfigurator />
            <RouterProvider />
        </SnackbarProvider>
    </QueryClientProvider>
  </StrictMode>,
)
