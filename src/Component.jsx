import React,{useState,useRef, useEffect} from 'react'


function Component() {
    const [task,setTask] = useState([])
    const [input,setInput] = useState("")

    const inputRef = useRef()
    useEffect(()=>{
        console.log("the page has rendered")
    })

const handleInputsRef = ()=>{
  inputRef.current.focus()
  inputRef.current.style.backgroundColor="yellow"
    }
// handling inputs in the input 
    const handleInput = (event)=>{
        setInput(event.target.value)

    }

    const handlingtasks=()=>{
        if(input.trim() === "") return 
        setTask(prev=> [...prev,{
            id:Date.now(),
            text: input,
            checked: false
        }])
        setInput("")

    }

    const toggleCheck = (id)=>{
        setTask(prev=>
            prev.map(item=>
                item.id === id ? {...item,checked: !item.checked} : item
            )
        )
    }
    const handlingDeletedTask=()=>{

    }
  return (
    <div>
        <h1 className='text-4xl font-bold text-white m-4 '>TO-DO-APP</h1>
        <div>
            <input type="text" 
            ref={inputRef} 
            placeholder='Enter Your activity ...'
            value= {input}
            onChange={handleInput} 
            className='border-green-500 border-2  px-4 text-white '
            onKeyDown={e=>e.key === 'Enter' && handlingtasks() }
            onFocus={()=>{
                 inputRef.current.style.backgroundColor = "yellow"
                 inputRef.current.style.color  = "black"
            }}
        // onBlur={()=>{
        //     inputRef.current.backgroundColor="green"
        // }}
            />
            {/* this is adding a live search on the window */}
            {/* <h1>Search: {input}</h1> */}
            <button 
            onClick={handlingtasks}
            className=" border-2  rounded-2xl  border-green-500
            hover:text-white
            hover:bg-black  bg-orange-500 px-4 m-2"
            >Add</button>
            <br />
            <br />
        <ul className='text-white m-2 p-2'>
            {task.map((item)=>(
               <li key={item.id}>
                
                <input type="checkbox"
                checked={item.checked}
                onChange={()=>  toggleCheck(item.id)}
                 />
                 <span className= {item.checked ? 'line-through text-gray-500' : "" }>
                 {item.text}
                 </span>
               </li>
            
            

)

)
}
<input type="" />

        </ul>
        </div>
    </div>
    
  )
}

export default Component 