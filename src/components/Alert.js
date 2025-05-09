import React from 'react'

export default function Alert(props) {
  return (
    props.alert && <div className={`alert alert-${props.alert.type}`} role="alert">
       <strong>{props.alert.head}:</strong> {props.alert.msg}
        </div>
  )
}
