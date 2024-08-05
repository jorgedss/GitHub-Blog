import Markdown from 'react-markdown'
import { PostContentContainer } from './styles'

interface PostContentProps {
  content: string
}

export function PostContent({ content }: PostContentProps) {
  return (
    <PostContentContainer>
      <Markdown>{content}</Markdown>
    </PostContentContainer>
  )
}
