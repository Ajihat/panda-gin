import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { AppProvider } from "./context/AppContext/AppContext";
import { ProductsProvider } from "./context/ProductsContext/ProductsContext";
import { AuthProvider } from "./context/AuthContext/AuthContext";
import { ShoppingCartProvider } from "./context/ShoppingCartContext/ShoppingCartContext";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <AuthProvider>
        <AppProvider>
            <ProductsProvider>
                <ShoppingCartProvider>
                    <Router>
                        <App />
                    </Router>
                </ShoppingCartProvider>
            </ProductsProvider>
        </AppProvider>
    </AuthProvider>
);
