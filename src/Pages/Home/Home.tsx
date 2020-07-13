// REACT
import React from 'react'

// ESTILOS
import Styles from './Home.module.scss'

// ASSETS
import World from 'Assets/world.svg'
import Sat from 'Assets/satelite.svg'

// COMPONENTES
import Stars from 'Components/Stars/Stars'

const Home: React.FC = () => {
	return (
		<section className={Styles.page}>
			<Stars/>
			<img src={World} className={Styles.world} alt='World' />
			{'satel'.split('').map((_char: string, index: number) => (
				<div className={Styles.satsContainer} key={index}>
					<img src={Sat} className={Styles.sats} alt='Satelite' />
				</div>
			))}
		</section>
	)
}

export default Home
