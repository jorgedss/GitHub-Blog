import { createContext, ReactNode, useEffect, useState } from 'react'
import {
  UserDataTypes,
  IshuesDataTypes,
  RepositoryTypes,
} from '../@types/GithubDataTypes'
import { api } from '../lib/axios'

interface UserProviderProps {
  children: ReactNode
}

interface UserContextType {
  githubData: UserDataTypes
  ishuesData: IshuesDataTypes[]
  repositoriesNameList: string[]
  handleChangeRepository: (reporitory: string) => void

  idPostToShow: number
  ishueToShow: IshuesDataTypes

  handleChangeIdPostToShow: (id: number) => void
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

  const [idPostToShow, setIdPostToShow] = useState(() => {
    const savedValue = localStorage.getItem('postId')
    return savedValue !== null ? JSON.parse(savedValue) : 0
  })

  const [repositories, setRepositories] = useState<RepositoryTypes[]>([])

  const repositoriesNameList = repositories.map(
    (repositories) => repositories.name,
  )

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [repository, setRepository] = useState('github-blog')

  async function loadGithubData() {
    const response = await api.get('/users/jorgedss')
    setGithubData(response.data)
  }

  async function loadIshuesData() {
    const response = await api.get(
      `/repos/jorgedss/${repository}/issues?state=all`,
    )
    setIshuesData(response.data)
  }

  function handleChangeRepository(repository: string) {
    setRepository(repository)
  }

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get('/users/jorgedss/repos')

      const responseData = response.data

      if (JSON.stringify(responseData) !== JSON.stringify(repositories)) {
        setRepositories(response.data)
        localStorage.setItem('repositories', JSON.stringify(repositories))
      }
    }

    loadRepositories()
  }, [repositories])

  useEffect(() => {
    localStorage.setItem('ishuesData', JSON.stringify(ishuesData))
  }, [ishuesData])

  useEffect(() => {
    localStorage.setItem('postId', JSON.stringify(idPostToShow))
  }, [idPostToShow])

  useEffect(() => {
    loadGithubData()
    loadIshuesData()
  }, [repository])

  function handleChangeIdPostToShow(id: number) {
    setIdPostToShow(id)
  }
  const ishueToShow = ishuesData.find((ishue) => ishue.id === idPostToShow)!
  return (
    <UserContext.Provider
      value={{
        githubData,
        ishuesData,
        idPostToShow,
        handleChangeIdPostToShow,
        ishueToShow,
        repositoriesNameList,
        handleChangeRepository,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
