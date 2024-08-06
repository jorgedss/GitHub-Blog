import styled from 'styled-components'

export const PostInfoContainer = styled.div`
  padding: 2rem;
  border-radius: 6px;

  box-shadow: 0 0 2px rgba(0, 0, 0, 0.2);
  background: ${({ theme }) => theme.colors['base-profile']};
`

export const PostInfoLinks = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    a {
      color: ${({ theme }) => theme.colors.blue};
      font-size: ${({ theme }) => theme.fontSize.link};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
        transition: 0.2s;
      }
    }

    svg {
      width: 0.75rem;
      height: 0.75rem;
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`

export const PostTitle = styled.div`
  margin-top: 1.25rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.colors['base-title']};
  font-size: ${({ theme }) => theme.fontSize['title-l']};
  font-weight: bold;
  display: flex;
  align-items: center;
  gap: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 6px;
  }
`

export const Infos = styled.div`
  display: flex;
  gap: 2rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors['base-text']};

    &:hover {
      text-decoration: underline;
    }
  }
`
