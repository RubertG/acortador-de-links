import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { ProviderContextUserLinks } from '@/context/user-links-context'
import { type ReactNode } from 'react'

const DashboardLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <ProviderContextUserLinks>
      <Nav />
      {children}
      <Footer />
    </ProviderContextUserLinks>
  )
}

export default DashboardLayout
