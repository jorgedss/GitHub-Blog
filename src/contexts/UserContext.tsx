import { createContext, ReactNode, useEffect, useState } from 'react'
import { UserDataTypes } from '../@types/UserDataTypes'
import { api } from '../lib/axios'

interface UserProviderProps {
  children: ReactNode
}

interface UserContextType {
  githubData: UserDataTypes | undefined
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserProviderProps) {
  const [githubData, setGithubData] = useState<UserDataTypes>()

  async function loadGithubData() {
    const response = await api.get('/users/jorgedss')

    setGithubData(response.data)

    console.log(response.data)
  }

  useEffect(() => {
    loadGithubData()
  }, [])

  return (
    <UserContext.Provider value={{ githubData }}>
      {children}
    </UserContext.Provider>
  )
}
