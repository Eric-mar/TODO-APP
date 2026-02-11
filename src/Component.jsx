import React,{useState} from 'react'


function Component() {
    const [task,setTask] = useState([])
    const [input,setInput] = useState("")
// handling inputs in the input 
    const handleInput = (event)=>{
        setInput(event.target.value)

    }

    const handlingtasks=()=>{
        if(input.trim() === "") return 
        setTask(prev=> [...prev,input])
        setInput("")

    }
    const handlingDeletedTask=()=>{

    }
  return (
    <div>
        <h1 className='text-4xl font-bold text-white m-4 '>TO-DO-APP</h1>
        <div>
            <input type="text"  
            placeholder='Enter Your activity ...'
            value= {input}
            onChange={handleInput} 
            className='border-green-500 border-2  px-4 text-white '
            onKeyDown={e=>e.key === 'Enter' && handlingtasks() }
            />
            {/* this is adding a live search on the window */}
            {/* <h1>Search: {input}</h1> */}
            <button 
            className=" border-2  rounded-2xl  border-green-500 bg-orange-500 px-4 m-2"
            onClick={ handlingtasks }
            >Add</button>
            <br />
            <br />
        <ul className='text-white m-2 p-2'>
            {task.map((item,index)=>{
               <li key={index}>{item}</li>
            

})}
        </ul>
        </div>
    </div>
    
  )
}

export default Component 