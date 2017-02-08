import React from 'react'

import { connect } from 'react-redux'
import { fetchCocktails } from './actions'

class CocktailsIndex extends React.Component {
  render() {
    return (
        <div>

        </div>
    )
  }
}

function mapStateToProps() {
  return {
  }
}

function mapDispatchToProps() {
  return {
    fetchCocktails: function(){
      let action = fetchCocktails()
      dispatch( action )
    }
  }
}

export default connect( map addCocktail )( CocktailsIndex )
