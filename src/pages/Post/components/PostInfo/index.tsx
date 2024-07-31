import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Infos, PostInfoContainer, PostInfoLinks, PostTitle } from './styles'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export function PostInfo() {
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
      <PostTitle>JavaScript data types and data structures</PostTitle>
      <Infos>
        <div>
          <FontAwesomeIcon icon={faGithub} />
          jorgedss
        </div>
        <div>
          <FontAwesomeIcon icon={faCalendarDay} />
          Há um dia
        </div>
        <div>
          <FontAwesomeIcon icon={faComment} />5 comentários
        </div>
      </Infos>
    </PostInfoContainer>
  )
}
