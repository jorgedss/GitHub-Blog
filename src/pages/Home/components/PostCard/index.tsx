import {
  PostCardHeader,
  PostCardTitle,
  PostCardContent,
  PostCardContainer,
} from './styles'
import Markdown from 'react-markdown'
import { formatterDateDistance } from '../../../../utils/formatter'

interface PostCardProps {
  body: string
  title: string
  createdAt: string
}

export function PostCard({ body, title, createdAt }: PostCardProps) {
  return (
    <PostCardContainer>
      <PostCardHeader>
        <PostCardTitle>
          <a href="/13232">{title}</a>
        </PostCardTitle>
        <span>{formatterDateDistance(createdAt)}</span>
      </PostCardHeader>
      <PostCardContent>
        <Markdown>{body}</Markdown>
      </PostCardContent>
    </PostCardContainer>
  )
}
