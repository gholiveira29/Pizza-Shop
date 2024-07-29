import { RouterProvider } from 'react-router-dom';
import { Toaster } from 'sonner';

import '@/global.css';
import { router } from './routes';
import { ThemeProvider } from './components/theme/theme-provider';

export function App() {
    return (
        <>
            <ThemeProvider storageKey="pizzashop-theme" defaultTheme="dark">
                <Toaster
                    richColors
                    duration={5000}
                    expand
                    position="top-right"
                    theme="system"
                />
                <RouterProvider router={router} />
            </ThemeProvider>
        </>
    );
}
