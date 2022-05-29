import { useContext, useEffect, useState } from 'react'
import { useFetch } from '../../hook/UseFetch'
import { useModal } from '../../hook/useModal'
import { AppContext } from '../Context'
import { Loader } from '../Loader'
import { Modal } from '../Modal'
import { Person } from './Person'

export const People = () => {
  const [pagination, setPagination] = useState(1)
  const [dataModal, setDataModal] = useState(null)
  const [fetchData, isPending, setFetchData] = useFetch(
    `https://swapi.dev/api/people?page=${pagination}`
  )
  const [person] = useFetch(`https://swapi.dev/api/people?page=${pagination}`)

  const { searchValue } = useContext(AppContext)
  const [isOpen, openModal, closeModal] = useModal(false)
  const dataFiltro = (input) => {
    const filtro =
      person &&
      person.results.filter(
        (item) =>
          item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()) ||
          item.height.toString().includes(input.toString())
      )
    !filtro ? <h1>No hay </h1> : setFetchData({ results: [...filtro] })
  }
  useEffect(() => {
    dataFiltro(searchValue)
  }, [searchValue])

  const previPagination = () => {
    if (pagination <= 1) return
    setPagination(pagination - 1)
  }
  const nextPagination = () => {
    if (pagination >= 9) return
    setPagination(pagination + 1)
  }
  const getValueModal = (e) => {
    const filtroDataModal = fetchData.results.filter(
      (item) => item.name === e.target.id
    )
    setDataModal(filtroDataModal)
    openModal()
  }
  return (
    <>
      <section className="people">
        {isPending ? (
          <Loader />
        ) : (
          <Person
            fetchData={fetchData && fetchData.results}
            previPagination={previPagination}
            nextPagination={nextPagination}
            getValueModal={getValueModal}
          />
        )}
      </section>
      {dataModal && (
        <Modal isOpen={isOpen} closeModal={closeModal}>
          {dataModal.map((person) => {
            return (
              <>
                <h2>{person.name}</h2>
                <div className="group__data">
                  <p>
                    <span>Height </span>= {person.height}
                  </p>
                  <p>
                    <span>Mass</span> = {person.mass}
                  </p>
                  <p>
                    <span>Hair color</span> = {person.hair_color}
                  </p>
                  <p>
                    <span>Skin color</span> = {person.skin_color}
                  </p>
                  <p>
                    <span>Eye color</span> = {person.eye_color}
                  </p>
                  <p>
                    <span>Bitht year</span> = {person.birth_year}
                  </p>
                  <p>
                    <span>Gender = </span>
                    {person.gender}
                  </p>
                </div>
              </>
            )
          })}
        </Modal>
      )}
    </>
  )
}
