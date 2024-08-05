import styled from 'styled-components'

export const PostContentContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 2.5rem 2rem;
  font-size: ${({ theme }) => theme.fontSize['text-m']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-weight: 400;
`
