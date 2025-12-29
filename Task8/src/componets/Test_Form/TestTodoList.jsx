import React from 'react'
import { MdDeleteForever, MdEdit } from 'react-icons/md'

export default function TestTodoList({ todos, onDelete, onEdit }) {
  return (
    <div>
      <h1 className='m-5 text-2xl font-bold'>Todo List</h1>

      {todos.length === 0 ? (
        <p className='text-red-500'>No items in the list</p>
      ) : (
        todos.map((item, index) => (
          <div
            key={index}
            className='bg-blue-100 border border-gray-500 my-2 rounded-lg flex justify-between items-center p-4'
          >
            <span>{item}</span>

            <div className='flex gap-3'>
              <button aria-label={`edit ${item}`} onClick={() => onEdit(index)}>
                <MdEdit size={25} className='hover:text-blue-600' />
              </button>

              <button
                aria-label={`delete ${item}`}
                onClick={() => onDelete(index)}
              >
                <MdDeleteForever size={30} className='hover:text-red-500' />
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  )
}
