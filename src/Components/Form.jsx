import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../feature/todo/todoSlice";


const Form = () => {

  const {edit} = useSelector(state => state.todo);

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    title : "",
    description : "",
  });

  const {title, description} = formData;
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(edit.isEdit){
      dispatch(updateTodo({
        _id : edit.todo._id,
        title,
        description
      }))
    }else{
      dispatch(addTodo(formData));
    }
    setFormData({
      title : "",
      description : ""
    })
  }

  useEffect(()=>{
    setFormData({
      title : edit.todo.title,
      description : edit.todo.description
    })
  },[edit])


  return (
    <div className="w-[90%] h-[100%] flex items-center justify-center  md:w-[100%] sm:w-[100%] xs:w-[100%]">
      <form action="" className="w-[100%] h-[100%] flex items-center justify-around flex-col  md:w-[100%] sm:w-[100%]" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Title Here"
        className="w-[80%] p-5 text-xl  sm:text-2xl xs:text-3xl "
        name='title'
        value={title}
        onChange={handleChange}
      />
      <textarea
        placeholder="Enter Description Here"
        className="w-[80%] p-5 text-xl sm:text-2xl xs:text-3xl"
        name='description'
        value={description}
        onChange={handleChange}
      ></textarea>
    
      <button className="w-[80%] font-bold text-white bg-slate-900 p-5 text-2xl sm:text-2xl xs:text-4xl xs:py-6">
        Submit
      </button>
      </form>
    </div>
  );
};

export default Form;
