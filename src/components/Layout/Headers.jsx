import './Headers.css'
import { HeaderCartButton } from '../Layout/HeaderCartButton.jsx'

export const Header = () => {

  return (
    <>
    <header className='header'>
      <h1>Menu</h1>
      <HeaderCartButton />
    </header>
    <div className='main-image'>
      <img src='https://img.freepik.com/premium-photo/top-view-fast-food-wooden-table_23-2148262942.jpg?w=1800'/>
    </div>
    </>
  )
}