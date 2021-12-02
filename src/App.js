import useFetchData from './hooks/useFetchData'
import MainLayout from './components/MainLayout/MainLayout'
import TimeCardList from './components/TimeCardList/TimeCardList'
import ProfileCard from './components/ProfileCard/ProfileCard'

const App = () => {
  const { data, fetchError } = useFetchData()
  console.log([data, fetchError])

  return (
    <>
      <MainLayout>
        <ProfileCard title="Jeremy Robson" />
        {!fetchError && data.length > 0 ? (
          <TimeCardList dataSet={data}></TimeCardList>
        ) : (
          <div>Error</div>
        )}
      </MainLayout>
    </>
  )
}

export default App
