import Markdown from 'react-markdown'
import { PostContentContainer } from './styles'
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'

export function PostContent() {
  const { ishueToShow } = useContext(UserContext)

  return (
    <PostContentContainer>
      <Markdown>{ishueToShow.body}</Markdown>
    </PostContentContainer>
  )
}
