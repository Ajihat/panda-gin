import { AuthProvider } from 'context/AuthContext/AuthContext';
import { AppProvider } from 'context/AppContext/AppContext';
import { TopSliderProvider } from 'context/TopSliderContext/TopSliderContext';
import { CartPopupProvider } from 'context/CartPopupContext/CartPopupContext';
import { LoginPopupProvider } from 'context/LoginPopupContext/LoginPopupContext';
import { SubscribeProvider } from 'context/SubscribePopupContext/SubscribePopupContext';
import { CurtainProvider } from 'context/CurtainContext/CurtainContext';
import { NavBarsProvider } from 'context/NavBarsContext/NavBarsContext';
import { ProductsProvider } from 'context/ProductsContext/ProductsContext';
import { ShoppingCartProvider } from 'context/ShoppingCartContext/ShoppingCartContext';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<AuthProvider>
			<NavBarsProvider>
				<TopSliderProvider>
					<CartPopupProvider>
						<CurtainProvider>
							<AppProvider>
								<SubscribeProvider>
									<LoginPopupProvider>
										<ProductsProvider>
											<ShoppingCartProvider>{children}</ShoppingCartProvider>
										</ProductsProvider>
									</LoginPopupProvider>
								</SubscribeProvider>
							</AppProvider>
						</CurtainProvider>
					</CartPopupProvider>
				</TopSliderProvider>
			</NavBarsProvider>
		</AuthProvider>
	);
};
