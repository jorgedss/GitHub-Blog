import styled from 'styled-components'

export const PostCardContainer = styled.div`
  height: 16.25rem;

  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;
  gap: 1.25rem;
  border-radius: 6px;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
`

export const PostCardHeader = styled.header`
  display: flex;
  gap: 1rem;
  span {
    color: ${({ theme }) => theme.colors['base-span']};
    font-size: ${({ theme }) => theme.fontSize['text-s']};
  }

  div {
    display: flex;
    flex: 1;
  }

  button {
    color: ${({ theme }) => theme.colors['base-title']};
    font-size: ${({ theme }) => theme.fontSize['title-m']};
    font-weight: bold;

    text-decoration: none;
    background: none;
    border: none;

    &:hover {
      text-decoration: underline;
    }
  }
`

export const PostCardContent = styled.div`
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: ${({ theme }) => theme.fontSize['text-m']};

  display: -webkit-box;
  -webkit-line-clamp: 4;
  overflow: hidden;
  -webkit-box-orient: vertical;
`
