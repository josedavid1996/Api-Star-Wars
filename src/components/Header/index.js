import React, { useContext } from 'react'
import logo from '../../assets/StarWars.png'
import { AppContext } from '../Context'

export const Header = () => {
  // CONTEXT

  const {
    setSearchDataValue,
    isActiveSearch,
    setIsActiveSearch,
    searchValue,
    setSearchValue,
    setIsPendingSearch
  } = useContext(AppContext)

  const searchToggle = () => {
    isActiveSearch === 'header__search'
      ? setIsActiveSearch('header__search is-active-search')
      : setIsActiveSearch('header__search')
  }

  const onValueChange = (e) => {
    setSearchValue(e.target.value)
  }
  const handlesubmit = async (e) => {
    e.preventDefault()
    if (searchValue.length === 0) {
      alert('Tienes que poner un nombre de anime')
      return
    }
    try {
      const resp = await fetch(
        `https://api.jikan.moe/v4/anime?q=${searchValue}&sfw`
      )
      const data = await resp.json()
      setSearchDataValue(data)
      setIsPendingSearch(false)
      setSearchValue('')
      setIsActiveSearch('header__search')
    } catch (error) {
      console.error('Ocurrio un error')
    }
  }
  const resetHome = () => {
    setSearchDataValue(null)
    setIsPendingSearch(true)
  }

  return (
    <>
      <div className="container__header">
        <header className="header">
          <figure className="header__logo" onClick={resetHome}>
            <img src={logo} alt="logo" />
          </figure>
          <form onSubmit={handlesubmit} className={isActiveSearch}>
            <div className="search__group">
              <input
                type="text"
                name="search"
                placeholder="Buscar anime..."
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
