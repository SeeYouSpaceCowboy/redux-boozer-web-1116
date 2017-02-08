import React from 'react'

import { connect } from 'react-redux'
import { fetchCocktails } from '../actions/index'

class CocktailsIndex extends React.Component {
  render() {
    const cocktails = this.props.cocktails

    return (
        <div>
        </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    cocktails: state.cocktails
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
