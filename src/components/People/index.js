import { useFetch } from '../../hook/UseFetch'
import { Loader } from '../Loader'
import { Person } from './Person'

export const People = () => {
  const { fetchData, isPending } = useFetch('https://swapi.dev/api/people')
  console.log(fetchData && fetchData.results)
  return (
    <div className="container">
      <section className="capitulos">
        <h1>Capitulos Recientes</h1>
        {/* <div className="grid">
          {isPending ? <Loader /> : <Person fetchData={fetchData} />}
        </div> */}
      </section>
    </div>
  )
}
