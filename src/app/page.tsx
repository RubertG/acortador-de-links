import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { LinksContainer } from '@/components/links-container'
import { Nav } from '@/components/nav'

export default function Home () {
  return (
    <>
      <Nav />
      <Header />
      <main className='my-3 md:my-14 mt-10'>
        <LinksContainer />
      </main>
      <Footer />
    </>
  )
}
