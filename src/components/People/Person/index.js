import React from 'react'

export const Person = ({ fetchData, nextPagination, previPagination }) => {
  return (
    <div className="seccion__table ">
      <h1>People</h1>
      <table className="tabla">
        <thead>
          <tr>
            <th>Name</th>
            <th>Height</th>
            <th>Mass</th>
            <th>Hair color</th>
            <th>Birth year</th>
          </tr>
        </thead>
        <tbody>
          {fetchData &&
            fetchData.map((person) => {
              return (
                <>
                  <tr className="contenido__tabla">
                    <td>{person.name}</td>
                    <td>{person.height}</td>
                    <td>{person.mass}</td>
                    <td>{person.hair_color}</td>
                    <td>{person.birth_year}</td>
                  </tr>
                </>
              )
            })}
        </tbody>
      </table>
      <div className="group__btns">
        <button className="btn" onClick={previPagination}>
          Anterior
        </button>
        <button className="btn" onClick={nextPagination}>
          Siguiente
        </button>
      </div>
    </div>
  )
}
