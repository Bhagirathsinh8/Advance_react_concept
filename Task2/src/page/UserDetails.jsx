import React from 'react'
import useGetAllUser from '../Hooks/useGetAllUser';

export default function UserDetails() {
   const users = useGetAllUser();
  return (
    <div>
        {
            users.map((item)=>{
                return(
                    <>
                        <div>
                            <h2>{item.name}</h2>
                            <p>{item.email}</p>
                            <p>{item.phone}</p>
                        </div>
                    </>
                )
            })
        }
    </div>
  )
}
