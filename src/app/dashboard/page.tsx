import { Footer } from '@/components/footer'
import { FormCreateLink } from '@/components/form-create-link'
import { Nav } from '@/components/nav'
import { Toaster } from 'sonner'

const DashboardPage = () => {
  return (
    <>
      <Nav />
      <main
        className='my-3 md:my-10 px-2 xl:px-0'
      >
        <h1
          className='gradient-text px-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-center m-auto mb-8'
        >Crea tu enlace personalizado</h1>
        <FormCreateLink />
      </main>
      <Toaster
        position='bottom-right'
        toastOptions={{
          duration: 2000
        }}
        theme='dark'
      />
      <Footer />
    </>
  )
}

export default DashboardPage
