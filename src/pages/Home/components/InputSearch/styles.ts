import styled from 'styled-components'

export const InputLabels = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-size: ${({ theme }) => theme.fontSize['title-m']};
    font-weight: bold;
  }

  span {
    color: ${({ theme }) => theme.colors['base-span']};
    font-size: ${({ theme }) => theme.fontSize['text-s']};
  }
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
  max-width: 54rem;
  width: 100%;
  margin: 4.5rem auto 3rem;

  input {
    display: flex;
    align-items: center;
    padding: 0.75rem 1rem;
    border-radius: 0.375rem;
    background: ${({ theme }) => theme.colors['base-input']};
    border: 1px solid ${({ theme }) => theme.colors['base-label']};

    font-size: 1rem;
    color: ${({ theme }) => theme.colors['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`
