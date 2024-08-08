import styled from 'styled-components'

export const IshuesCardListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    margin: 0 auto;

    display: grid;
    max-width: 54rem;

    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }

  @media only screen and (max-width: 699px) {
    main {
      grid-template-columns: 1fr;
    }
  }
`
