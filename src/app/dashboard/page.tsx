import { FormCreateLink } from '@/components/form-create-link'
import { UserLinksContainer } from '@/components/user-links-container'

const DashboardPage = () => {
  return (
    <main
      className='my-3 md:my-10 px-2 xl:px-0'
    >
      <h1
        className='gradient-text px-3 text-2xl sm:text-4xl lg:text-5xl font-bold text-center m-auto mb-5 md:mb-8'
      >Crear mi enlace personalizado</h1>
      <FormCreateLink />
      <UserLinksContainer />
    </main>
  )
}

export default DashboardPage
