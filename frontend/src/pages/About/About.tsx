import { Helmet } from 'react-helmet-async';

import { AboutSlider } from 'components/AboutSlider/AboutSlider';
import { Header } from 'components/Header/Header';
import { Submenu } from 'components/Submenu/Submenu';
import { Motto } from 'components/Motto/Motto';
import { AnimatedPageLink } from 'components/AnimatedPageLink/AnimatedPageLink';

import { useActiveCategory } from 'pages/useActiveCategory';

import aboutPicture from 'assets/about1.jpg';
import philosophyPicture from 'assets/about2.jpg';
import processusPicture from 'assets/panda-head-big.svg';
import sustainabilityPicture from 'assets/about3.jpg';

import { aboutUsSubmenu } from 'data/aboutUsSubmenu/aboutUsSubmenu';

import './About.sass';

export const About = () => {
	const { activeCategory } = useActiveCategory('.about__category');
	return (
		<div className='about'>
			<Helmet>
				<title>About us | Panda Gin</title>
				<meta
					name='description'
					content='Discover the Panda Gin history, our philosophy, processus and sustainabilty'
				/>
			</Helmet>
			<AboutSlider />
			<div className='about__inner'>
				<Submenu data={aboutUsSubmenu} activeCategory={activeCategory} />
				<div className='about__categories'>
					<section className='about__category' id='about'>
						<div className='about__category-picture'>
							<img src={aboutPicture} alt='panda-bottle' className='about__category-img' />
						</div>
						<div className='about__category-text'>
							<Header bigTitle='Panda Family' smallTitle='Who we are' alignment='left' />
							<p className='about__category-paragraph about__category-paragraph--two-columns'>
								United by a common passion for high quality spirits, four friends decided to unite to
								create a unique gin. After eight months of research and development, the four riders
								found the perfect balance and created the first litchi-based gin worldwide, Panda Gin.
								Said gin is produced accordingly to traditional methods, in one of the oldest distillery
								in Belgium (dated 1836), and benefits from the Hautes Fagnes’ water, known as one of the
								purest of Europe.
							</p>
						</div>
					</section>
					<section className='about__category' id='philosophy'>
						<div className='about__category-text about__category-text--small'>
							<Header bigTitle='Our philosophy' smallTitle='Panda vision' alignment='left' />
							<p className='about__category-paragraph'>
								Satisfy our customers with an innovative and qualitative product.
							</p>
							<p className='about__category-paragraph'>
								Respect our obligation to develop a more efficient, stronger and more sustainable
								business for future generations, by protecting the Panda Gin brand, by respecting our
								commitments, by acting as a responsible entrepreneur.
							</p>
							<p className='about__category-paragraph'>
								Food cultivation is too dependent on the use of toxic chemicals and other methods that
								are unsustainable. We support methods that are sustainable and that reduce environmental
								degradation, maintain the productivity of the land over time, and support the economic
								viability of operations.
							</p>
						</div>
						<div className='about__category-picture about__category-picture--big'>
							<img src={philosophyPicture} alt='panda-bottle' className='about__category-img ' />
						</div>
						<Motto />
					</section>
					<section className='about__category about__category--nopading' id='processus'>
						<div className='about__category-picture about__category-picture--absolute'>
							<img
								src={processusPicture}
								alt='panda-bottle'
								className='about__category-img about__category-img--big'
							/>
						</div>
						<div className='about__category-text'>
							<Header bigTitle='Our processus' smallTitle='Know-how' alignment='left' />
							<p className='about__category-paragraph '>
								Panda Gin’s recipe results in our love for high-quality spirits and the need to create a
								totally new product. Months of research have been necessary for the perfect combination
								of flavors from our botanicals.
							</p>
							<p className='about__category-paragraph '>
								We’ve analyzed the molecules of our ingredients, identified the aromatic profile and
								defined which was the best distillation process.
							</p>
							<p className='about__category-paragraph '>
								This process allows us to control precisely the quality and savor of our gin. Some of
								our botanicals, such as the juniper berry, is crushed and macerated in basic alcohol
								before being transformed in the alembic. They give depth and roundness, rich and candid
								flavors.
							</p>
							<p className='about__category-paragraph '>
								Then, our litchi, cherry, orange peel and star anise – among others – infusion gives our
								alcohol those fruity, vivid and rich notes. The more delicate plants, such as rosemary
								and basil, are macerated separately. This allows for the oils and aromatic components to
								be eliminated from plant material. The plants are then filtered and added to the
								alembic, which ultimately gives the gin its herbaceous notes.
							</p>
							<p className='about__category-paragraph '>
								We’re using a Pot Stills’ alembic – also know as <em>alambics continus</em> – to distil
								our recipe six times. When out of the alembic, the alcohol content exceeds 90°.{' '}
								<strong>Panda Gin contains 0% sugar</strong>. We also make sure to preserve the
								individual qualities of our organic berries.
							</p>
							<p className='about__category-paragraph '>
								The distillation process ends with the help a multi-tray grinding column. This precise
								control allows us to perfectly balance the final recipe. We produce everything on site,
								from distillation to bottling.
							</p>
							<p className='about__category-paragraph '>
								Since its creation in 2017, Panda Gin has never ceased to amaze professionals and
								amateurs. We proudly wear our double gold medal from the famous CWSA 2020 competition,
								our two stars from ITQI 2018, our bronze medal at the Word Gin Awards 2021, our IF desin
								award 2021 and our bronze medal at the World Trophy 2021.
							</p>
						</div>
					</section>
					<section className='about__category' id='sustainability'>
						<div className='about__category-text about__category-text--small'>
							<Header
								bigTitle='Our efforts for a better world'
								smallTitle='Sustainability'
								alignment='right'
							/>
							<p className='about__category-paragraph about__category-paragraph--right'>
								Ecology and organic are for us a way of taking care of our planet
							</p>
							<AnimatedPageLink alignment='flex-end' />
						</div>
						<div className='about__category-picture about__category-picture--big'>
							<img src={sustainabilityPicture} alt='panda-bottle' className='about__category-img ' />
						</div>
					</section>
				</div>
			</div>
		</div>
	);
};
