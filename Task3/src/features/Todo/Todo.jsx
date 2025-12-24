import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, deleteTodo } from "./todoSlice";
import { IoIosAddCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export default function Todo() {
  const [inputData, setInputData] = useState("");
const {todos} = useSelector((store) => store.todo);
const dispatch = useDispatch();

  const handleInput = (e) => {
    setInputData(e.target.value);
  };

  const submitHandler = () => {
    console.log(inputData);
    dispatch(addTodo(inputData));
    setInputData("");
  };
    

const deleteItem = (index) => {
  dispatch(deleteTodo(index));
};

  return (
    <div className="flex justify-center items-center">
           <div className="text-center my-5 border border-gray-300 shadow-2xl w-md h-full p-3 ">
      <h1 className="text-2xl mb-5 font-bold">Task - 2 Todo </h1>
      <div className="border flex justify-between items-center p-3 rounded-2xl">
        <div>
         <input
        type="text"
        placeholder="Enter List item"
        value={inputData}
        onChange={handleInput}
        className="w-90 p-2 rounded-lg border-transparent focus:border-gray-400 outline-none"
      />
        </div>
      <button onClick={submitHandler} className="mr-1"><IoIosAddCircle  size={30} className="hover:text-lime-500"/></button>
      </div>

      <h1 className="m-5 text-2xl font-bold">Todo List</h1>

      {todos.length === 0 ? (
        <p className="text-red-500">No items in the list</p>
      ) : (
        todos.map((item, index) => {
          return (
            <>
              <div
                key={index}
                style={{
                  // padding: "4px",
                  display: "flex",
                  gap: "10px",
                  alignItems: "center",
                  
                }}
                className="bg-blue-100 border border-gray-500 my-2 rounded-lg justify-between p-4"
              >
                {item}
                <button
                  onClick={() => {
                    deleteItem(index);
                  }}
                >
                  <MdDeleteForever size={30} className="hover:text-red-500" />
                </button>
              </div>
            </>
          );
        })
      )}
    </div>
    </div>

 
  );
}
