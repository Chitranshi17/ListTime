import React, { useEffect } from 'react'
import ListItems from './ListItems'
import { useDispatch, useSelector } from 'react-redux'
import { getTodos } from '../feature/todo/todoSlice';

const ListGroup = () => {

  const {allTodos , isLoading, isSuccess, isError} = useSelector(state => state.todo);
  const dispatch = useDispatch();
  
  useEffect(()=>{
    dispatch(getTodos());
  },[])
  
  if(!allTodos){
    return (
      <div className='w-full h-100vh bg-slate-800'>
        <h3 className='text-white font-bold text-2xl text-center'>Todo Not Here Yet!!</h3>
      </div>
    )
  }

  if(allTodos.length === 0){
    return (
      <div className='w-full h-100vh bg-slate-800'>
        <h3 className='text-white font-bold text-2xl text-center'>Todo Not Here Yet!!</h3>
      </div>
    )
  }

  if(isLoading){
    return (
      <div className='w-full h-100vh bg-slate-800'>
      <h3 className='text-white font-bold text-2xl text-center'>Loading Here...</h3>
      </div>
    )
  }


  if(isError){
    return (
      <div className='w-full h-100vh bg-slate-800'>
        <h3 className='text-white font-bold text-2xl text-center'>Something Went Wrong!!</h3>
      </div>
    )
  }


  return (
    <ul  className='w-[80%] h-[100%] flex items-center bg-slate-900 justify-center py-3 flex-col overflow-y-scroll lg:w-[90%] md:w-[100%] sm:w-[100%] xs:w-[90%]'>
      {
        allTodos.map(todo => <ListItems key={todo._id} todo={todo}/>)
      }
    </ul>
  )
}

export default ListGroup
