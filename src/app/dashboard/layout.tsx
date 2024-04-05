import { Footer } from '@/components/footer'
import { Nav } from '@/components/nav'
import { ProtectedRoute } from '@/components/protected-route'
import { ProviderContextUserLinks } from '@/context/user-links-context'
import { type ReactNode } from 'react'

const DashboardLayout = ({ children }: {
  children: ReactNode
}) => {
  return (
    <ProtectedRoute>
      <ProviderContextUserLinks>
        <Nav />
        {children}
        <Footer />
      </ProviderContextUserLinks>
    </ProtectedRoute>
  )
}

export default DashboardLayout
