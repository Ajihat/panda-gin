import { AuthProvider } from 'context/AuthContext/AuthContext';
import { TopSliderProvider } from 'context/TopSliderContext/TopSliderContext';
import { CartPopupProvider } from 'context/CartPopupContext/CartPopupContext';
import { LoginPopupProvider } from 'context/LoginPopupContext/LoginPopupContext';
import { SubscribeProvider } from 'context/SubscribePopupContext/SubscribePopupContext';
import { CurtainProvider } from 'context/CurtainContext/CurtainContext';
import { NavBarsProvider } from 'context/NavBarsContext/NavBarsContext';
import { ProductsProvider } from 'context/ProductsContext/ProductsContext';
import { ShoppingCartProvider } from 'context/ShoppingCartContext/ShoppingCartContext';
import { MobileMenuProvider } from 'context/MobileMenuContext/MobileMenuContext';
import { CocktailsProvider } from 'context/CocktailsContext/CocktailsContext';
import { CocktailPopupProvider } from 'context/CocktailPopupContext/CocktailPopupContext';

export const Providers = ({ children }: { children: React.ReactNode }) => {
	return (
		<CocktailsProvider>
			<CocktailPopupProvider>
				<AuthProvider>
					<NavBarsProvider>
						<TopSliderProvider>
							<MobileMenuProvider>
								<CartPopupProvider>
									<CurtainProvider>
										<SubscribeProvider>
											<LoginPopupProvider>
												<ProductsProvider>
													<ShoppingCartProvider>{children}</ShoppingCartProvider>
												</ProductsProvider>
											</LoginPopupProvider>
										</SubscribeProvider>
									</CurtainProvider>
								</CartPopupProvider>
							</MobileMenuProvider>
						</TopSliderProvider>
					</NavBarsProvider>
				</AuthProvider>
			</CocktailPopupProvider>
		</CocktailsProvider>
	);
};
