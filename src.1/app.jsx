import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './components/menu'
import MenuItem from './components/menu_item'

console.log('Olá React!')

ReactDOM.render(
    <div>
      <Menu lastName="Valerio">
        <MenuItem name='Ramon' />
        <MenuItem name='Paulo' />
        <MenuItem name='Elisabeth' />
      </Menu>
      <Menu lastName="Pereira">
        <MenuItem name='Priscila' />
        <MenuItem name='Rita' />
        <MenuItem name='Simplório' />
      </Menu>
    </div>
    , document.getElementById('app')
  )