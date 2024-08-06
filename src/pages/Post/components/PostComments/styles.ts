import styled from 'styled-components'

export const PostCommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;

  header {
    font-size: ${({ theme }) => theme.fontSize['title-m']};
    color: ${({ theme }) => theme.colors['base-title']};
    font-weight: bold;
  }
`
export const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 6px;
  padding: 1rem;
  border-top: 2px solid ${({ theme }) => theme.colors.blue};
`
