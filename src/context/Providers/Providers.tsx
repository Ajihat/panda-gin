import { AuthProvider } from "../AuthContext/AuthContext";
import { AppProvider } from "../AppContext/AppContext";
import { ProductsProvider } from "../ProductsContext/ProductsContext";
import { ShoppingCartProvider } from "../ShoppingCartContext/ShoppingCartContext";

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
