import React, { useState } from 'react'
import {
    TextField
} from '@material-ui/core'

import './pokedex.styles.css'

import Popup from '../popup/popup.component'

import Card from '../card/card.component'

const Pokedex = ({ cards, onAdd, closed }) => {
    const [filter, setFilter] = useState('')

    const filterChangeHandler = (event) => {
        const value = event.target.value
        setFilter(value)
    }

    const pokemon = [...cards]
    const filterPokemon = pokemon.filter(monster =>
        monster.name.toLowerCase().includes(filter.toLocaleLowerCase())
    )
    return (

        <Popup closed={closed}>
            <div className='pokemoncard-box'>
                <TextField
                    variant='outlined'
                    className='input-text'
                    onChange={(event) => filterChangeHandler(event)} />
                {
                    filterPokemon.map(({ imageUrl, id, name, hp }) =>
                        <Card
                            onAdd={onAdd}
                            id={id}
                            key={id}
                            hp={hp}
                            name={name}
                            imageUrl={imageUrl} />)
                }


            </div>
        </Popup>
    )
}

export default Pokedex