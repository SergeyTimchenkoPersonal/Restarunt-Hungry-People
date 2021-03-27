import React from 'react'
import './Icon.scss'

const Icon = ({ href, name }) => (
	<a href={href} className={`icon`}>
		<img src={`static/icons/${name}.svg`} alt={name} />
	</a>
)

export default Icon
