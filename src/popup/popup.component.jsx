import React from 'react'

import './popup.styles.css'

import { Backdrop } from '../backdrop/backdrop.component'

const Popup = (props) => (
    <div>
        <Backdrop closed={props.closed}/>
        <div className='popup'>
            {props.children}
        </div>
    </div>
)

export default Popup