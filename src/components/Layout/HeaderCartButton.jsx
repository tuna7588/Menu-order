import './HeaderCartButton.css'
import { CartIcon } from '../Cart/CartIcon.jsx'

export const HeaderCartButton = () => {
  return (
    <>
    <button className='button'>
      <span className='icon'>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className='badge'>4</span>
    </button>
    </>
  )
}