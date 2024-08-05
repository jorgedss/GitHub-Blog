import { createContext, ReactNode, useEffect, useState } from 'react'
import { UserDataTypes, IshuesDataTypes } from '../@types/GithubDataTypes'
import { api } from '../lib/axios'

interface UserProviderProps {
  children: ReactNode
}

interface UserContextType {
  githubData: UserDataTypes
  ishuesData: IshuesDataTypes[]
  query: string
  idPostToShow: number
  ishueToShow: IshuesDataTypes
  filterIshues: (query: string) => void
  handleChangeIdPostToShow: (id: number) => void
  filteredIshuesData: IshuesDataTypes[] | undefined
}

export const UserContext = createContext({} as UserContextType)

export function UserContextProvider({ children }: UserProviderProps) {
  const [githubData, setGithubData] = useState<UserDataTypes>(
    {} as UserDataTypes,
  )
  const [ishuesData, setIshuesData] = useState<IshuesDataTypes[]>(() => {
    const savedValue = localStorage.getItem('ishuesData')
    return savedValue != null ? JSON.parse(savedValue) : []
  })

  useEffect(() => {
    localStorage.setItem('ishuesData', JSON.stringify(ishuesData))
  }, [ishuesData])

  const [filteredIshuesData, setFilteredIshuesData] =
    useState<IshuesDataTypes[]>()

  const [query, setQuery] = useState('')

  const [idPostToShow, setIdPostToShow] = useState(() => {
    const savedValue = localStorage.getItem('postId')
    return savedValue !== null ? JSON.parse(savedValue) : 0
  })

  useEffect(() => {
    localStorage.setItem('postId', JSON.stringify(idPostToShow))
  }, [idPostToShow])

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

  function handleChangeIdPostToShow(id: number) {
    setIdPostToShow(id)
  }
  const ishueToShow = ishuesData.find((ishue) => ishue.id === idPostToShow)!

  return (
    <UserContext.Provider
      value={{
        githubData,
        ishuesData,
        query,
        filterIshues,
        filteredIshuesData,
        idPostToShow,
        handleChangeIdPostToShow,
        ishueToShow,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
