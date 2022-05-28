import { useContext, useState } from 'react'
import { useFetch } from '../../hook/UseFetch'
import { AppContext } from '../Context'
import { Loader } from '../Loader'
import { Person } from './Person'

export const People = () => {
  const { onValueChange, searchValue, setSearchValue } = useContext(AppContext)

  const [pagination, setPagination] = useState(1)

  const { fetchData, isPending } = useFetch(
    `https://swapi.dev/api/people?page=${pagination}`
  )

  const previPagination = () => {
    if (pagination <= 1) return
    setPagination(pagination - 1)
  }
  const nextPagination = () => {
    if (pagination >= 9) return
    setPagination(pagination + 1)
  }
  return (
    <section className="people">
      {isPending ? (
        <Loader />
      ) : (
        <Person
          fetchData={fetchData && fetchData.results}
          previPagination={previPagination}
          nextPagination={nextPagination}
        />
      )}
    </section>
  )
}
