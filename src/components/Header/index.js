import React, { useContext } from 'react'
import logo from '../../assets/StarWars.png'
import { AppContext } from '../Context'

export const Header = () => {
  // CONTEXT

  const { isActiveSearch, setIsActiveSearch, searchValue, setSearchValue } =
    useContext(AppContext)

  const searchToggle = () => {
    isActiveSearch === 'header__search'
      ? setIsActiveSearch('header__search is-active-search')
      : setIsActiveSearch('header__search')
  }

  const onValueChange = (e) => {
    if (searchValue.length === 0) {
      setSearchValue(e.target.value)
    }
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
                placeholder="Buscar anime..."
                onChange={onValueChange}
                // value={searchValue}
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
