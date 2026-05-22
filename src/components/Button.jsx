import './Button.css'

import { Link } from 'react-router-dom'

const Button = ({ id, text, link}) => {
  return (
    <>
        {link ? (
          <Link id={id} className='button' to={link}>
            {text}  
          </Link>
        ) : (
          <button id={id} className='button'>{text}</button>
        )}
    </>
  )
}

export default Button