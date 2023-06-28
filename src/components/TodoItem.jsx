import cross from '../assets/images/icon-cross.svg'
import check from '../assets/images/icon-check.svg'

const TodoItem = ({todo, removeTodo, updateTodo}) => {
    const {id, title, completed} = todo;

    return(
        <article className='flex gap-4 border-b border-b-gray-300' >
            <button className={`h-5 w-5 flex justify-center items-center flex-none rounded-full border-2 
            ${completed 
              ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
              : "inline-block"
            }`} onClick={() => updateTodo(id)}>
              {completed &&  <img src={check} alt="check" /> }
             
            </button>
            <p className={`text-gray-600 grow ${completed && "line-through"}`}>{title} </p>
            <button className='flex-none'>
              <img src={cross} alt="cross" onClick={() => removeTodo(id)} />
            </button>
          </article>
    )
}

export default TodoItem