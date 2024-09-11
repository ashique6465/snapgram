import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import AuthProvider from "./context/AuthContext";
import { QeuryProvider } from "./lib/react-query/QeuryProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
  <QeuryProvider>
    <AuthProvider>
    <App />
    </AuthProvider>
  </QeuryProvider>
  </BrowserRouter>
);
