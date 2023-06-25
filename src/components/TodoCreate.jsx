const TodoCreate = () => {
    return(
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4">
          <span className="border-2 w-5 h-5 inline-block rounded-full"></span>
          <input className="w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo..." />
        </form>
    )
}

export default TodoCreate