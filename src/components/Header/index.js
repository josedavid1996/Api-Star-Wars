import React, { useContext } from 'react'
import logo from '../../assets/StarWars.png'
import { AppContext } from '../Context'

export const Header = () => {
  // CONTEXT
  const { isActiveSearch, setIsActiveSearch, setSearchValue, searchValue } =
    useContext(AppContext)

  // FUNCION PARA MOSTRAR Y OCULTAR EL INPUT DEL SEARCH
  const searchToggle = () => {
    isActiveSearch === 'header__search'
      ? setIsActiveSearch('header__search is-active-search')
      : setIsActiveSearch('header__search')
  }
  // FUNCION PARA OBTENER EL VALOR DEL INPUT
  const onValueChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <>
      <div className="container__header">
        <header className="header">
          <figure className="header__logo">
            <img src={logo} alt="logo" />
          </figure>
          <form className={isActiveSearch}>
            <div className="search__group">
              <input
                type="text"
                name="search"
                placeholder="search by name or by height..."
                onChange={onValueChange}
                value={searchValue}
                autoComplete="off"
              />
              <i className="fa-solid fa-magnifying-glass "></i>
            </div>
          </form>
          <i
            className="fa-solid fa-magnifying-glass icons"
            onClick={searchToggle}
          ></i>
        </header>
      </div>
    </>
  )
}
