import { useEffect, useState } from 'react'

export const useFetch = (url) => {
  const [fetchData, setFetchData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  useEffect(() => {
    const getData = async () => {
      try {
        const resp = await fetch(url)
        const data = await resp.json()
        setFetchData(data)
        setIsPending(false)
      } catch (error) {
        console.error('Ocurrio un error')
      }
    }
    getData(url)
  }, [url])
  return { fetchData, isPending, setFetchData }
}
