import { useState } from 'react'
import useFetchData from './hooks/useFetchData'
import MainLayout from './components/MainLayout/MainLayout'
import TimeCardList from './components/TimeCardList/TimeCardList'
import ProfileCard from './components/ProfileCard/ProfileCard'

const App = () => {
  const { data } = useFetchData()
  const [filter, setFilter] = useState({
    filter: 'daily',
    name: 'Day'
  })

  return (
    <>
      <MainLayout>
        <ProfileCard title="Jeremy Robson" setFilter={setFilter} />
        {data.length > 0 ? (
          <TimeCardList dataSet={data} filter={filter}></TimeCardList>
        ) : (
          <div>Error</div>
        )}
      </MainLayout>
    </>
  )
}

export default App
