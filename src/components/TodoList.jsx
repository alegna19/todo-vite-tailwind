import cross from '../assets/images/icon-cross.svg'

const TodoList = () => {
    return(
        <div className="rounded-t-md bg-white [&>article]:p-4 mt-8">
          <article className='flex gap-4 border-b border-b-gray-300' >
            <button className="border-2 w-5 h-5 inline-block rounded-full flex-none"></button>
            <p className="text-gray-600 grow">Complete online Javascript course </p>
            <button className='flex-none'>
              <img src={cross} alt="cross" />
            </button>
          </article>
        </div>
    )
}

export default TodoList