import './app.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Menu from './components/menu'
import MenuItem from './components/menu_item'
import Contador from './components/contador'
import Field from './components/field'

console.log('Olá React!')

ReactDOM.render(
    <div>
      <Menu lastName="Valerio">
        <MenuItem name='Paulo' />
        <MenuItem name='Elisabeth' />
        <MenuItem name='Josie' />
      </Menu>
      <Menu lastName="Pereira">
        <MenuItem name='Ramon' />
        <MenuItem name='Priscila' />
        <MenuItem name='Rita' />
        <MenuItem name='Simplório' />
      </Menu>
      <hr />
      <Contador label='Contador' initialValue={10} />
      <Field initialValue="" />
    </div>
    , document.getElementById('app')
  )