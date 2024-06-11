import React from 'react'
import { MdDeleteForever, MdEdit } from 'react-icons/md'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo, editInState, removerFromState} from '../feature/todo/todoSlice';


const ListItems = ({todo}) => {

  const {isSuccess} = useSelector(state => state.todo);

  const dispatch = useDispatch();

  const handleDelete = (_id) => {
    dispatch(deleteTodo(_id));
    if(isSuccess){
      dispatch(removerFromState(_id))
    }
  }

  const handleEdit = (todo) => {
    console.log("Edit");
    dispatch(editInState(todo))
  }
  return (
    <li className='w-[100%] h-[15rem] bg-white flex items-center justify-center my-1 p-2 py-5 xs:h-[15rem]'>
    <div className='w-[75%] h-[100%] flex items-start justify-center flex-col pl-2'>
      <h3 className='font-bold text-2xl sm:text-2xl xs:text-4xl'>Title : {todo.title}</h3>
      <h6 className='text-2xl sm:text-2xl xs:text-3xl'>Description : {todo.description}</h6>
    </div>
    <div className='w-[15%] h-[100%] flex items-center justify-around sm:w-[20%] xs:w-[25%]'>
      {/* <button className=' p-3 bg-orange-500 text-white font-semibold flex items-center justify-center text-2xl'>Complete</button> */}
      <button className=' p-3 bg-orange-600 text-white font-semibold flex items-center justify-cente sm:p-5 xs:p-5' onClick={()=>handleEdit(todo)}><MdEdit className='text-3xl font-bold sm:text-5xl xs:text-7xl'/></button>
      <button className=' p-3 bg-red-600 text-white font-semibold flex items-center justify-center  sm:p-5 xs:p-5' onClick={()=>handleDelete(todo._id)}><MdDeleteForever className='text-3xl font-bold sm:text-5xl xs:text-7xl'/></button>
    </div>
  </li>
  )
}

export default ListItems
