import React from 'react';

export default function NavBar(props){
  return (
    <nav className='navbar navbar-inverse simons-rule'>
      <div className='navbar-header'>
        <a className='navbar-brand' href={props.url}>{props.title}</a>
      </div>
    </nav>
  )
}
