import React from 'react'

export default function Lists(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        {props.lists.map(ele => 
        <ul type={ele.type}>
            <li>{ele.name}</li>
        </ul>
        )}
    </div>
  )
}
