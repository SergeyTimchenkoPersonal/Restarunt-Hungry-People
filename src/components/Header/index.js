import React from 'react'
import Title from '../Title'
import Button from '../Button'
import Subtitle from '../Subtitle'
import Icon from '../Icon'
import Arrow from '../Arrow'
import './Header.scss'

const Header = () => (
	<div className='header-container'>
		<header className='header'>
			<nav className='header-nav'>
				<ul className='header-nav-menu'>
					<li className='header-nav-menu-item'>
						<a href='/'>Home</a>
					</li>
					<li className='header-nav-menu-item'>
						<a href='/'>About</a>
					</li>
					<li className='header-nav-menu-item'>
						<a href='/'>Team</a>
					</li>
					<li className='header-nav-menu-item'>
						<a href='/'>Booking</a>
					</li>
				</ul>
				<div className='header-logo-container'>
					<div className='header-logo'></div>
				</div>
				<ul className='header-nav-menu'>
					<li className='header-nav-menu-item'>
						<a href='/'>Menu</a>
					</li>
					<li className='header-nav-menu-item'>
						<a href='/'>Galerie</a>
					</li>
					<li className='header-nav-menu-item'>
						<a href='/'>Events</a>
					</li>
					<li className='header-nav-menu-item'>
						<a href='/'>Contact</a>
					</li>
				</ul>
			</nav>
			<div className='header-content'>
				<div className='header-content-col col-1'>
					<span className='header-content-schedule'>Mon - Fri: 8PM - 10PM, Sat - Sun: 8PM - 3AM</span>
				</div>
				<div className='header-content-col col-2'>
					<div className='header-main'>
						<Subtitle>RESTAURANT</Subtitle>
						<Title>hungry people</Title>
						<div className='header-buttons'>
							<Button>BOOK TABLE</Button>
							<Button>EXPLORE</Button>
						</div>
					</div>
					<Arrow />
				</div>
				<div className='header-content-col col-3'>
					<div className='social-icons'>
						<Icon href='/' name='facebook' />
						<Icon href='/' name='twitter' />
						<Icon href='/' name='instagram' />
					</div>
				</div>
			</div>
		</header>
	</div>
)

export default Header
