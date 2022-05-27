import { useState } from 'react'
import { AppContext } from '../Context'
import { AppUi } from './AppUi'
import '../../style.css'

function App() {
  const [isPendingSearch, setIsPendingSearch] = useState(true)
  const [searchDataValue, setSearchDataValue] = useState(null)
  const [isActiveNav, setIsActiveNav] = useState('header__nav')
  const [isActiveSearch, setIsActiveSearch] = useState(['header__search'])
  const [searchValue, setSearchValue] = useState('')
  return (
    <AppContext.Provider
      value={{
        searchDataValue,
        setSearchDataValue,
        isActiveNav,
        setIsActiveNav,
        isActiveSearch,
        setIsActiveSearch,
        searchValue,
        setSearchValue,
        isPendingSearch,
        setIsPendingSearch
      }}
    >
      <AppUi />
    </AppContext.Provider>
  )
}

export default App
