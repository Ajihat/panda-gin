import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/AppContext/AppContext";
import { ProductsProvider } from "./context/ProductsContext/ProductsContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <AuthProvider>
        <AppProvider>
            <ProductsProvider>
                <Router>
                    <App />
                </Router>
            </ProductsProvider>
        </AppProvider>
    </AuthProvider>
);
