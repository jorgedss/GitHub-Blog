import { createContext, ReactNode, useEffect, useState } from 'react'
import { UserDataTypes } from '../@types/UserDataTypes'

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
    const response = await fetch('http://api.github.com/users/jorgedss')
    const data = await response.json()

    setGithubData(data)

    console.log(data)
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
