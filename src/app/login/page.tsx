import { AuthButton } from '@/components/auth-button-client'
import { BackButton } from '@/components/back-button'
import { Footer } from '@/components/footer'

export default function LoginPage () {
  return (
    <>
      <main
        className='h-[95dvh] flex items-center justify-center'
      >
        <BackButton className='absolute top-3 left-3 md:top-5 md:left-5' />
        <form
          className='bg-secondary/50 shadow-table shadow-Terziary/50 pb-7 pt-5 px-3 border border-Terziary rounded-lg min-w-80'
        >
          <h1 className='text-2xl font-medium mb-4 text-center'>
            Ingresar
          </h1>
          <AuthButton />
        </form>
      </main>
      <Footer className='absolute bottom-0 w-full lg:left-[50%] lg:translate-x-[-50%]' />
    </>
  )
}
