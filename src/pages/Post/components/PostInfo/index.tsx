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
import { useContext } from 'react'
import { UserContext } from '../../../../contexts/UserContext'

export function PostInfo() {
  const { ishueToShow } = useContext(UserContext)
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
      <PostTitle>{ishueToShow.title}</PostTitle>
      <Infos>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          <a href="">{ishueToShow.user.login}</a>
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          {formatterDateDistance(ishueToShow.created_at)}
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />
          {ishueToShow.comments}
          {ishueToShow.comments === 1 ? ' comentário' : ' comentários'}
        </div>
      </Infos>
    </PostInfoContainer>
  )
}
