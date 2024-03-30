import { Footer } from '@/components/footer'
import Link from 'next/link'

export default function NotFound () {
  return (
    <>
      <main
        className='h-[95dvh] grid place-content-center'
      >
        <h2
          className='gradient-text px-3 text-2xl lg:text-3xl font-bold text-center m-auto mb-3'
        >No se encontró la página</h2>
        <p
          className='text-center m-auto mb-2 text-gray-200'
        >No se pudo encontrar el recurso solicitado :(</p>
        <section
          className='flex justify-center'
        >
          <Link
            className='bg-purple-800 px-4 py-2 rounded-lg text-sm hover:bg-purple-950 transition-colors font-medium'
            href="/"
          >Página principal</Link>
        </section>
      </main>
      <Footer className='absolute bottom-0 w-full lg:left-[50%] lg:translate-x-[-50%]' />
    </>
  )
}
