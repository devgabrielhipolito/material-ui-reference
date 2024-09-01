import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./routes/index.tsx";
import { AppThemeProvider } from "./shared/contexts";
import { MenuLateral } from "./shared/components/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppThemeProvider>
      <BrowserRouter>
        <MenuLateral children={<AppRoutes />} />
      </BrowserRouter>
    </AppThemeProvider>
  </StrictMode>
);
