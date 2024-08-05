import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Infos, PostInfoContainer, PostInfoLinks, PostTitle } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { formatterDateDistance } from '../../../../utils/formatter'

interface PostInfoProps {
  title: string
  comments: number
  createdAt: string
}

export function PostInfo({ comments, createdAt, title }: PostInfoProps) {
  return (
    <PostInfoContainer>
      <PostInfoLinks>
        <div>
          <FontAwesomeIcon icon={faChevronLeft} />
          <a href="/"> VOLTAR</a>
        </div>
        <div>
          <a href="https://github.com/jorgedss/github-blog"> VER NO GITHUB</a>

          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
        </div>
      </PostInfoLinks>
      <PostTitle>{title}</PostTitle>
      <Infos>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          jorgedss
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formatterDateDistance(createdAt)}
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          {comments}
          {comments === 1 ? ' comentário' : ' comentários'}
        </div>
      </Infos>
    </PostInfoContainer>
  )
}
