import React from 'react'

const Input = ({ id, type, name, placeholder }) => {
  return (
    <div className='input-control'>
      <label htmlFor={id}>
        {name}
        </label>
      <input id={id} type={type} name={name} placeholder={placeholder} />
    </div>
  )
}

export default Input