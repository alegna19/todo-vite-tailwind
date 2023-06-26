import cross from '../assets/images/icon-cross.svg'

const TodoItem = ({todo}) => {
    const {id, title, completed} = todo;

    return(
        <article className='flex gap-4 border-b border-b-gray-300' >
            <button className="border-2 w-5 h-5 inline-block rounded-full flex-none"></button>
            <p className="text-gray-600 grow">{title} </p>
            <button className='flex-none'>
              <img src={cross} alt="cross" />
            </button>
          </article>
    )
}

export default TodoItem