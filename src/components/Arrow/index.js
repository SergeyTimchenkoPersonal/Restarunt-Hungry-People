import React from 'react'
import './Arrow.scss'

const Arrow = ({ href, name }) => (
	<a href='/' className='arrow-icon-container'>
		<div className='arrow-icon'>
			<img src='static/icons/arrow-down.svg' alt='arrow-down' />
		</div>
	</a>
)

export default Arrow
