import {
  PostCardHeader,
  PostCardTitle,
  PostCardContent,
  PostCardContainer,
} from './styles'

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
        <span>{createdAt}</span>
      </PostCardHeader>
      <PostCardContent>{body}</PostCardContent>
    </PostCardContainer>
  )
}
