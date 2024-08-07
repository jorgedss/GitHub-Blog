import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { UserContextProvider } from '../../contexts/UserContext'

export function DefaultLayout() {
  return (
    <>
      <Header />
      <UserContextProvider>
        <Outlet />
      </UserContextProvider>
    </>
  )
}
