import React from 'react'

export const Book = (props) => {
  return (
    <>
        <div>Book title : {props.title}</div>
        <div>Book Author : {props.author}</div>
    </>
  )
}
