import React,{useState} from 'react'
import { useQuery } from '@apollo/client'
import {GET_TASKS}  from '../graphql/Querries'

function Home() {

  const [task,setTask]= useState("");

const {loading,error,data,refetch} = useQuery(GET_TASKS,
  // {
  //   variables:
  //     { title: task },
  // }
  );
  // getTask();

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  if(data){
    console.log(data);
  }
  return (
   <h1>hello</h1>
  // <div className="home">
  //     <input type="text" placeholder='Add task..' onChange={(event) => { setTask(event.target.value)}} />
  //   <button onClick={()=>getTask()} >Add</button>
  // </div>
   )
}

export default Home;
