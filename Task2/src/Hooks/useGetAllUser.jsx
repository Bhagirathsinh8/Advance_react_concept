import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

const useGetAllUser = () => {

    const [users, setUsers] = useState([]);
    
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/users"
        );
        console.log(res.data);
        setUsers(res.data);
      } catch (error) {
        console.log("error" + error);
      }
    };
    fetchUser();
    
  }, []);

  return users;
}

export default useGetAllUser;
