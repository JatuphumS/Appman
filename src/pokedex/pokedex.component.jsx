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
        monster.name.toLowerCase().includes(filter.toLocaleLowerCase()) ||
        monster.type.toLowerCase().includes(filter.toLocaleLowerCase())
    )
    console.log(filterPokemon)
    return (

        <Popup closed={closed}>
            <div className='pokemoncard-box'>
                <TextField
                    variant='outlined'
                    style={{
                        borderColor:'#e6e6e6'
                    }}
                    onChange={(event) => filterChangeHandler(event)} />
                {
                    filterPokemon.map(({ imageUrl, id, name, hp, attacks, weaknesses }) =>
                        <Card
                            onAdd={onAdd}
                            id={id}
                            key={id}
                            hp={hp !== 'None' ? hp : 0}
                            attacks={attacks ? attacks : []}
                            weaknesses={weaknesses ? weaknesses : []}
                            name={name}
                            imageUrl={imageUrl} />)
                }


            </div>
        </Popup>
    )
}

export default Pokedex