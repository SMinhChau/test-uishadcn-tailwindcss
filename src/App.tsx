import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import Login from "@/pages";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Login />
    </ThemeProvider>
  );
}

export default App;
