import cross from './assets/images/icon-cross.svg'
import Moon from './components/Moon'


const App = () =>{
  return (
    <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain bg-gray-300 min-h-screen">
      <header className="container mx-auto px-4 pt-8"  >
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>
          <button>
            <Moon/>
          </button>
        </div>
        <form className="bg-white rounded-md overflow-hidden py-4 flex gap-4 items-center px-4 mt-8">
          <span className="border-2 w-5 h-5 inline-block rounded-full"></span>
          <input className="w-full text-gray-400 outline-none" type="text" placeholder="Create a new todo..." />
        </form>
      </header>
      <main className="container mx-auto px-4 mt-8">
        <div className="rounded-md bg-white [&>article]:p-4">
          <article className='flex gap-4 border-b border-b-gray-300' >
            <button className="border-2 w-5 h-5 inline-block rounded-full flex-none"></button>
            <p className="text-gray-600 grow">Complete online Javascript course </p>
            <button className='flex-none'>
              <img src={cross} alt="cross" />
            </button>
          </article>
          <section className='px-4 py-4 flex justify-between'>
            <span className='text-gray-400'>5 items left</span>
            <button className='text-gray-400'>Clear completed </button>
          </section>
        </div>
      </main>
      <section className="container mx-auto px-4 mt-8">
        <div className='bg-white px-4 rounded-md flex justify-center gap-4'>
          <button className='text-blue-600'>All</button>
          <button className='hover:text-blue-600'>Active</button>
          <button className='hover:text-blue-600'>Completed</button>
        </div>
      </section>
      <section className="text-center mt-8">Drag and Drop to reorder list</section>
     </div>
  )
}

export default App
