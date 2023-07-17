import { useEffect, useState } from 'react'
import IconMoon from './IconMoon'
import IconSun from './IconSun';

const initialStateDarkMode = localStorage.getItem("theme") === "dark";

const Header = () => {
  const [darkMode, setDarkMode] = useState(initialStateDarkMode);

  useEffect(() => {
    if(darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem('theme', 'dark')
    }else{
      document.documentElement.classList.remove("dark");
      localStorage.setItem('theme', 'light')

    }
  }, [darkMode])

    return(
    <header className="container mx-auto px-4 pt-8 md:max-w-xl"  >
        <div className="flex justify-between">
          <h1 className="uppercase text-white text-3xl font-semibold tracking-[0.5em]">Todo</h1>
          <button onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <IconSun/> : <IconMoon/> } 
          </button>
        </div>
      </header>
    )
}

export default Header