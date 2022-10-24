import React from 'react'
import { users } from '../data/users'

export default function User( { firstname, lastname, adress, salary }) {
  const cards_style = {
    border: '2px solid black',
    borderRadius: '10px',
    backgroundColor: 'yellow',
    padding: '10px',
    margin: '10px',
    width: '200px'
  }
  
  return (
      <div style={cards_style}>
        <p>first name: {firstname}</p>
        <p>last name: {lastname}</p>
        <p>adress: {adress}</p>
        <p>salary: {salary}</p>
      </div>
  )
}
