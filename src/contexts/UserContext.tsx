import { createContext, ReactNode, useEffect, useState } from 'react'
import { UserDataTypes, IshuesDataTypes } from '../@types/GithubDataTypes'
import { api } from '../lib/axios'

interface UserProviderProps {
  children: ReactNode
}

interface UserContextType {
  githubData: UserDataTypes | undefined
  ishuesData: IshuesDataTypes[] | undefined
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserProviderProps) {
  const [githubData, setGithubData] = useState<UserDataTypes>()
  const [ishuesData, setIshuesData] = useState<IshuesDataTypes[]>()

  async function loadGithubData() {
    const response = await api.get('/users/jorgedss')

    setGithubData(response.data)

    // console.log(response.data)
  }

  async function loadIshuesData() {
    const response = await api.get('/repos/jorgedss/github-blog/issues')
    setIshuesData(response.data)
  }
  useEffect(() => {
    loadGithubData()
    loadIshuesData()
  }, [])

  return (
    <UserContext.Provider value={{ githubData, ishuesData }}>
      {children}
    </UserContext.Provider>
  )
}
