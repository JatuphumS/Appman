import React from 'react'
import {
    IconButton,
    LinearProgress,
} from '@material-ui/core'
import {
    AddCircleOutline,
    Delete
} from '@material-ui/icons'

import './card.styles.css'

const Card = ({ name, imageUrl, hp, id, onAdd, onDelete, remove}) => {

    return (
        <div className='card'>
            <div
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
                className='img' />
            <div className='details-card' >
                <span className='text-name'>{name}</span>
                <div className='option-card'>
                    <span>HP</span>
                    <LinearProgress
                        style={{
                            height: '25px',
                            width: '300px',
                            marginLeft: '20px',
                        }}
                        value={hp > 100 ? 100 : hp} variant='determinate' />
                </div>
                <div className='option-card'>
                    <span>STR</span>
                    <LinearProgress
                        style={{
                            height: '25px',
                            width: '300px',
                            marginLeft: '20px'
                        }}
                        value={100} variant='determinate' />
                </div>
                <div className='option-card'>
                    <span>WEAK</span>
                    <LinearProgress
                        style={{
                            height: '25px',
                            width: '300px',
                            marginLeft: '20px'
                        }}
                        value={100} variant='determinate' />
                </div>
            </div>
            <IconButton
                onClick={() => remove ? onDelete(id) : onAdd(id)}
                className='btn-card'
                aria-label="Delete" >
                {
                    remove ?
                        <Delete fontSize='large' />
                        :
                        <AddCircleOutline fontSize='large' />
                }
            </IconButton>
        </div>
    )
}



export default Card