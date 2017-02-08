import React from 'react';
import NavBar from './nav_bar';
import CocktailsIndex from './cocktails_index'

export default (props) => {
    return (
      <div>
        < NavBar  title="Boozr" url="/" />
        <div className='container'>
           Hello From the App Component
        </div>
        <CocktailsIndex />
      </div>
    )
};
