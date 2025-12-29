// import React, { useState } from "react";
// import { IoIosAddCircle } from "react-icons/io";
// import TestTodoList from "./TestTodoList";

// export default function TestForm1() {
//   const [inputData, setInputData] = useState("");
//   const [todos, setTodos] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     console.log("Form submitted with data:", inputData);
//     setTodos([...todos, inputData]);
//     setInputData("");
//   };
//   return (
//     <div>
//       <h1>Test Form Component 1</h1>

//         <div className="border flex justify-between items-center p-3 my-3 rounded-2xl">
//              <form className="" onSubmit={submitHandler}>
//         <input
//           type="text"
//           placeholder="Enter something"
//           value={inputData}
//           onChange={(e) => setInputData(e.target.value)}
//           className="w-90 p-2 rounded-lg outline-none"
//         />
//         <button className="mr-1 " aria-label="add item">
//                 <IoIosAddCircle
//                   size={30}
//                   //   className={`hover:text-lime-500 ${
//                     //     editIndex !== null ? "text-blue-600" : ""
//                     //   }`}
//                     />

//               </button>
//       </form>
//         </div>

//         <div>
//             <TestTodoList todos={todos}/>
//         </div>

//     </div>
//   );
// }

import React, { useState } from 'react'
import { IoIosAddCircle } from 'react-icons/io'
import TestTodoList from './TestTodoList'

export default function TestForm1() {
  const [inputData, setInputData] = useState('')
  const [todos, setTodos] = useState([])
  const [editIndex, setEditIndex] = useState(null)

  const submitHandler = (e) => {
    e.preventDefault()

    if (!inputData.trim()) return

    if (editIndex !== null) {
      const updatedTodos = [...todos]
      updatedTodos[editIndex] = inputData
      setTodos(updatedTodos)
      setEditIndex(null)
    } else {
      setTodos([...todos, inputData])
    }

    setInputData('')
  }

  const deleteHandler = (index) => {
    setTodos(todos.filter((_, i) => i !== index))
  }

  const editHandler = (index) => {
    setInputData(todos[index])
    setEditIndex(index)
  }

  return (
    <div>
      <h1>Test Form Component 1</h1>

      <div className='border flex justify-between items-center p-2 my-3 rounded-2xl'>
        <form onSubmit={submitHandler}>
          <div className='flex justify-between w-full items-center'>
            <input
              type='text'
              placeholder='Enter something'
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
              className='w-100  rounded-lg outline-none '
            />

            <button type='submit' aria-label='add item'>
              <IoIosAddCircle size={30} />
            </button>
          </div>
        </form>
      </div>

      <div>
        <TestTodoList
          todos={todos}
          onDelete={deleteHandler}
          onEdit={editHandler}
        />
      </div>
    </div>
  )
}
