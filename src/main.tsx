import { createRoot } from "react-dom/client";
import App from "./app/App.tsx";
import { ThemeProvider } from "./app/provider/ThemeProvider.tsx";
import { LanguageProvider } from "./app/provider/LanguageContext.tsx";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </ThemeProvider>
);
