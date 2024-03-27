import Link from 'next/link'

export const Header = () => {
  return (
    <header
        className='my-3 md:my-10 px-2 xl:px-0'
      >
        <h1
          className='gradient-text px-3 text-5xl md:text-6xl lg:text-7xl font-bold text-center m-auto'
        >Acortador de enlaces</h1>
        <p
          className='text-gray-300 sm:text-center px-2 md:px-0 mt-4 max-w-3xl m-auto text-sm'
        >
          Abrevia y personaliza tu URL de manera totalmente gratuita. Podrás realizar un seguimiento de todos los clics que se hagan en tu enlace y ver la fecha en que se llevaron a cabo. Además, tienes la opción de utilizar enlaces abreviados de otros usuarios para mayor comodidad.
        </p>
        <footer
        className='flex items-center justify-center mt-4'
        >
          <Link
            href='/dashboard'
            className='bg-purple-800 px-4 py-2 rounded-lg text-sm hover:bg-purple-950 transition-colors font-medium'
          >
            Crear URL personalizada
          </Link>
        </footer>
      </header>
  )
}
