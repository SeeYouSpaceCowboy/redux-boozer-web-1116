import React from 'react'

import { connect } from 'react-redux'
import { fetchCocktails } from '../actions/index'

class CocktailsIndex extends React.Component {

  componentDidMount(){
    this.props.fetchCocktails()
  }

  render() {
    const cocktails = this.props.cocktails
    return (
        <div>
          <ul>
            {cocktails.map((cocktail) => <li key={cocktail.id}>{cocktail.name}</li>)}
          </ul>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchCocktails: function(){
      let action = fetchCocktails()
      dispatch( action )
    }
  }
}

export default connect( mapStateToProps, mapDispatchToProps )( CocktailsIndex )
