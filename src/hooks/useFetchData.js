import { useEffect, useState } from 'react'

const useFetchData = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:3000/data/data.json')
      setData(await response.json())
    }
    fetchData()
  }, [])

  return { data }
}

export default useFetchData
