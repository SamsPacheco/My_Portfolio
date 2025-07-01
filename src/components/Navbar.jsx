import React, { useEffect, useState } from 'react'

export const Navbar = () => {
  const [isOpen, setisOpen] = useState(false)

  let offset = 80; //espacio en px del navbar 

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]'); // verifica que el click haya venido desde un enlace que apunte al ID, se usa closest para cubrir casos donde el click cae dentro de un span o strong
      if (!target) return;

      const id = target.getAttribute('href').slice(1); // extrae el id y le quita el # con el slice
      const el = document.getElementById(id);

      if (el) {
        e.preventDefault(); // cancela el scroll automatico al hacer click en el ancla
        const top = el.getBoundingClientRect().top + window.scrollY; // getBoundingClientRect().top  -> nos da la posicion relativa del elemento relativa al viewport + window.scrollY -> hace el desplazamiento
        window.scrollTo({
          top: top - offset,
          behavior: 'smooth',
        }); // hace el scroll suave y le resta lo del navbar para que este no tape parte del contenido 
      }
    };
    // limieza del listener para evitar efectos de activo en componentes que ya no existan
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [offset]);


  return (
    <nav className='text-white fixed flex justify-between items-center h-20 transition-[.3s] w-[90%] mx-auto z-10 '>

        <figure className='w-1/3 max-w-[105px] relative'>
          <img src="/logo.svg" alt="logo" className='w-full'/>
        </figure>

        <div id='navMenu' className={`fixed top-[80px] left-0 flex justify-center items-center w-full min-h-[450px] h-[90dvh] transition-all duration-300 ease-in-out md:translate-x-0 md:h-10 md:min-h-0 ${isOpen ? 'translate-x-0 flex' : 'translate-x-[100%] hidden'} bg-[#04152d] md:flex md:bg-transparent md:-z-10 md:top-5`}>
          <ul className=' flex flex-col md:flex-row relative gap-10 font-semibold'>
            <li>
              <a href="#home">Home</a>
              
            </li>
            <li>
              <a href="#about">About</a>
              
            </li>
            <li>
              <a href="#projects">Projects</a>
              
            </li>
            <li>
              <a href="#contactMe">Contact</a>
              
            </li>
          </ul>
        </div>

          <a href="https://drive.google.com/file/d/1J11oeQf6ONdGC35WfrYqEHqTkLa3uJrx/view?usp=sharing" target="_blank" rel="noopener noreferrer" className='hidden bg-amber-50 text-[#04152D] rounded-md font-semibold w-[180px] h-10 md:flex justify-center items-center gap-2 cursor-pointer'>Download CV
            <i className="uil uil-file-alt text-lg"></i>
          </a>
          {/* <i class="uil uil-file-alt"></i> */}

        {/* menu de hamburgesa */}
        <div className='md:hidden'>
          <i className="uil uil-bars text-3xl cursor-pointer" onClick={() => setisOpen(prev => !prev) }></i>
        </div>

    </nav>
  )
}
