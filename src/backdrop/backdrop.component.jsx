import React from 'react'

import './backdrop.styles.css'


export const Backdrop = ({closed}) => <div className='backdrop' onClick={closed}/>