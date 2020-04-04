import React from 'react'
import Button from '@material-ui/core/Button'
import axios from 'axios'

import './App.css'

import Pokedex from './pokedex/pokedex.component'
import Card from './card/card.component'
import zIndex from '@material-ui/core/styles/zIndex'


class App extends React.Component {
  state = {
    showPokedex: false,
    cards: [],
    pokemondex: []
  }

  async componentDidMount() {
    const option = {
      url: `http://localhost:3030/api/cards`,
      method: 'get',
    }
    const res = await axios(option)
    let cards = []
    if (res.status === 200) {
      cards = [...res.data.cards]
    }
    this.setState({
      cards: cards
    })
  }


  showPokedexHandler = () => {
    this.setState({ showPokedex: true })
  }
  closePokedexHandler = () => {
    this.setState({ showPokedex: false })
  }

  addPokemonHandler = (id) => {
    const card = [...this.state.cards]
    const pokemondex = this.state.pokemondex
    const pokemon = card.find(poke => poke.id === id)

    pokemondex.push(pokemon)
    this.setState({
      pokemondex: pokemondex
    })
  }
  deletePokemonCardHandler = (id) => {
    let pokemondex = this.state.pokemondex
    const index = pokemondex.findIndex(poke => poke.id === id)
    pokemondex.splice(index, 1)
    this.setState({
      pokemondex: pokemondex
    })
  }

  filterCard = (cards, pokemondex) => {
    let array1 = [...cards]

    for (var i = 0; i < pokemondex.length; i++) {
      let index = array1.indexOf(pokemondex[i]);
      if (index > -1) {
        array1.splice(index, 1);
      }
    }
    return array1
  }

  render() {
    const { pokemondex, cards } = this.state
    const filterCard = this.filterCard(cards, pokemondex)
    // console.log(cards)
    return (
      <div className='pocket'>
          {
            pokemondex.length > 0 ?
              pokemondex.map(({ imageUrl, id, name, hp, attacks, weaknesses }) =>
                <Card
                  remove
                  onDelete={this.deletePokemonCardHandler}
                  id={id}
                  key={id}
                  attacks={attacks ? attacks : []}
                  weaknesses={weaknesses ? weaknesses : []}
                  hp={hp !== 'None' ? hp : 0}
                  name={name}
                  imageUrl={imageUrl} />)
              :
              null
          }


        {
          this.state.showPokedex ?
            <Pokedex
              closed={this.closePokedexHandler}
              cards={filterCard}
              onAdd={this.addPokemonHandler}
            /> : null
        }
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          marginBottom: '10px',
          margin: 'auto'
        }}>
          <Button
            onClick={this.showPokedexHandler}
            className='btn btn-add' variant="contained">MY Pokedex</Button>
        </div>
      </div>
    )
  }

}

export default App
