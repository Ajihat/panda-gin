import { AuthProvider } from "context/AuthContext/AuthContext";
import { AppProvider } from "context/AppContext/AppContext";
import { ProductsProvider } from "context/ProductsContext/ProductsContext";
import { ShoppingCartProvider } from "context/ShoppingCartContext/ShoppingCartContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <AuthProvider>
            <AppProvider>
                <ProductsProvider>
                    <ShoppingCartProvider>{children}</ShoppingCartProvider>
                </ProductsProvider>
            </AppProvider>
        </AuthProvider>
    );
};
