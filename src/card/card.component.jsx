import React from 'react'
import {
    IconButton,
    LinearProgress,
} from '@material-ui/core'
import {
    AddCircleOutline,
    Delete,
    ChildCare
} from '@material-ui/icons'

import './card.styles.css'



const Card = ({ name, imageUrl, hp, id, onAdd, onDelete, remove, attacks, weaknesses }) => {
    let str = 0
    let weak = 0
    const damage = []
    attacks.map(value => {
        if (value.damage.trim() !== '') {
            damage.push(
                parseInt(value.damage.substr(0, 2)))
        } else {
            damage.push(0)
        }
    })

    const dmgCal = damage.reduce((acc, current) => acc + current, 0)

    const happiness = parseInt(((hp / 10) + (dmgCal / 10) + 10 - (weak)) / 5)

    const iconHappiness = []
    for (let i = 1; i <= happiness; i++) {
        iconHappiness.push(i)
    }
    

    if (attacks.length === 1) {
        str = 50
    } else if (attacks.length === 2) {
        str = 100
    }

    if (weak.length === 1) {
        weak = 100
    }



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
                        value={str} variant='determinate' />
                </div>
                <div className='option-card'>
                    <span>WEAK</span>
                    <LinearProgress
                        style={{
                            height: '25px',
                            width: '300px',
                            marginLeft: '20px'
                        }}
                        value={weak} variant='determinate' />
                </div>
                <div className='happiness'>
                    {
                        iconHappiness.map((el,index)=> <ChildCare fontSize='large' />)
                    }
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