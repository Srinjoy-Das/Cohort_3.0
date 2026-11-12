import React from 'react'
import Form from './components/Form'
import RHF from './components/RHF'

const App = () => {
  return (
    <div className='h-screen bg-gray-400 flex flex-col justify-center items-center'>
      <h1 className='mb-3'>Product Entry Form</h1>
      {/*<Form />*/}
      <RHF />
    </div>
  )
}

export default App
