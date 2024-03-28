import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { PublicLinksContainer } from '@/components/public-links-container'
import { Nav } from '@/components/nav'

export default function Home () {
  return (
    <>
      <Nav />
      <Header />
      <main className='my-3 md:my-14 mt-10'>
        <PublicLinksContainer />
      </main>
      <Footer />
    </>
  )
}
