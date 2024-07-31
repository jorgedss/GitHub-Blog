import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;

  main {
    max-width: 54rem;
    width: 100%;
    margin: 0 auto;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
  }
`
