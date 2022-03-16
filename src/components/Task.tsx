import React, { useState } from "react"
import { Draggable} from 'react-beautiful-dnd'
import { List, Type, X } from "react-feather"
import Button from "./Button"
import './css/Task.css'
interface IProps {
  id: number
  idx: number
  content: string
  onDelete: () => void
}

function Task({ id, idx, content, onDelete }: IProps) {
  const [lock, setlock] = useState(true)
  const check = lock; 
const[Edit, setEdit]= useState(false)

const hendleEdit=()=>
{

}
   const handleLock = () =>{
    const check = lock; 
    if(check == false){
      setlock(true)
     }
     else{
      setlock(false)
     }
   }
   console.log('check',check)
  return (
    <div>

  {lock?(  
    <Draggable index={idx} draggableId={id.toString()}>
    { (provided) => (
      <li className={`
      card group dark:(bg-gray-600)
      `} 
        ref={provided.innerRef}
        {...provided.draggableProps}
        {...provided.dragHandleProps}
      >
        <p  onDoubleClick={hendleEdit} className="text-gray-800 dark:text-gray-200">{content}</p>
        <Button 
          onClick={onDelete}
          className="w-6 h-6 absolute top-1 right-6 hidden group-hover:block"
          floating 
        >
          <X className="w-5 h-5" />
        </Button>
        <Button 
          onClick={handleLock}
         
          className="w-6 h-6 absolute top-1 right-1 hidden group-hover:block"
          floating 
        >
          <i title="Unlock" className="w-5 h-5 fa-solid fa-unlock"></i>
        </Button>
      </li>
    )}
    </Draggable>):(    <Draggable index={idx} draggableId={id.toString()}>
    { (provided) => (
      <li className={`
      card group dark:(bg-gray-700)
      `} 
      ref={provided.innerRef}
 
      {...provided.dragHandleProps}
      >
        <p  onDoubleClick={hendleEdit} className="cursor-pointer text-gray-800 dark:text-gray-200">{content}</p>
        <Button 
          onClick={onDelete}
          className="w-6 h-6 absolute top-1 right-6 hidden group-hover:block"
          floating 
        >
          <X className="w-5 h-5" />
        </Button>
        <Button 
          onClick={handleLock}
         
          className="w-6 h-6 absolute top-1 right-1 hidden group-hover:block"
          floating 
        >
          <i title="Lock" className="w-5 h-5 fa-solid fa-lock"></i>
        </Button>
      </li>
    )}
    </Draggable>)}
    </div>
  )
}

export default Task