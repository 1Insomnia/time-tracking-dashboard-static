import { useEffect, useState } from 'react'
const controller = new AbortController()
const { signal } = controller

const useFetchData = () => {
  const [data, setData] = useState([])
  const [fetchError, setFetchError] = useState(undefined)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/data/data.json', {
          signal
        })
        if (!response.ok) throw new Error()
        const data = await response.json()
        setFetchError(null)
        setData(data)
      } catch (error) {
        setFetchError(error)
        setData([])
        controller.abort()
      }
    }
    fetchData()
    return () => {
      controller.abort()
    }
  }, [])

  return { data, fetchError }
}

export default useFetchData
