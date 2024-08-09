import styled from 'styled-components'

export const ErrorPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 18.5rem);
  margin-top: -5rem;
  gap: 2rem;

  .animation {
    width: 20rem;
  }
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-size: 2rem;
  color: ${({ theme }) => theme.colors['base-title']};
  font-weight: bold;

  span {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.fontSize['text-s']};

    a {
      text-decoration: none;
      font-weight: bold;
      color: ${({ theme }) => theme.colors.blue};

      &:hover {
        text-decoration: underline;
      }
    }
  }
`
