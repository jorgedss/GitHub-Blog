import { createContext, ReactNode, useEffect, useState } from 'react'
import { UserDataTypes, IshuesDataTypes } from '../@types/GithubDataTypes'
import { api } from '../lib/axios'

interface UserProviderProps {
  children: ReactNode
}

interface UserContextType {
  githubData: UserDataTypes | undefined
  ishuesData: IshuesDataTypes[] | undefined
  query: string
  filterIshues: (query: string) => void
  filteredIshuesData: IshuesDataTypes[] | undefined
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserProviderProps) {
  const [githubData, setGithubData] = useState<UserDataTypes>()
  const [ishuesData, setIshuesData] = useState<IshuesDataTypes[]>()

  const [filteredIshuesData, setFilteredIshuesData] =
    useState<IshuesDataTypes[]>()
  const [query, setQuery] = useState('')

  async function loadGithubData() {
    const response = await api.get('/users/jorgedss')

    setGithubData(response.data)
  }

  async function loadIshuesData() {
    const response = await api.get('/repos/jorgedss/github-blog/issues')
    setIshuesData(response.data)
  }
  useEffect(() => {
    loadGithubData()
    loadIshuesData()
  }, [])

  function filterIshues(event: string) {
    setQuery(event)
    const ishuesFiltered = ishuesData?.filter((ishue) =>
      ishue.title.toLowerCase().includes(query.toLowerCase()),
    )
    setFilteredIshuesData(ishuesFiltered)
  }

  return (
    <UserContext.Provider
      value={{
        githubData,
        ishuesData,
        query,
        filterIshues,
        filteredIshuesData,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
