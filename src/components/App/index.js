import { useState } from 'react'
import { AppContext } from '../Context'
import { AppUi } from './AppUi'
import '../../style.css'

function App() {
  const [isActiveSearch, setIsActiveSearch] = useState(['header__search'])
  const [searchValue, setSearchValue] = useState('')

  return (
    <AppContext.Provider
      value={{
        isActiveSearch,
        setIsActiveSearch,
        searchValue,
        setSearchValue
      }}
    >
      <AppUi />
    </AppContext.Provider>
  )
}

export default App
