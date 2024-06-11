import React from 'react'
import ListGroup from './Components/ListGroup'
import Form from './Components/Form'

const App = () => {
  return (
    <div className='w-full h-[100vh] bg-slate-300 flex items-center justify-center'>
      <div className='w-[60%] h-[90%]  bg-slate-800 phone'>
        <div className='w-full h-[10%] flex items-center justify-center'>
          <h3 className='text-center text-5xl text-white font-bold'>My Todo</h3>
          </div>
          <hr />
        <div className='w-full h-[90%]  flex items-center justify-aroud flex-col'>
          <div className='w-full h-[30%] flex items-center justify-center py-2'>
            <Form/>
          </div>
          <div className='w-full h-[70%]  flex items-center justify-center'>
            <div className='w-[90%] h-[90%] flex items-center justify-center py-2 '>
              <ListGroup/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
