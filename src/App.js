import React from 'react'
import useFetchData from './hooks/useFetchData'
import MainLayout from './components/MainLayout/MainLayout'

const App = () => {
  const { data, fetchError } = useFetchData()
  console.log([data, fetchError])

  return (
    <div className="App">
      <MainLayout>
        {!fetchError && data.length > 0 ? <div>Success</div> : <div>Error</div>}
      </MainLayout>
    </div>
  )
}

export default App
