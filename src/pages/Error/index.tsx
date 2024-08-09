import Lottie from 'lottie-react'

import errorAnimation from '../../assets/errorAnimation.json'

import { ErrorPage, Message } from './styles'

export function Error() {
  return (
    <ErrorPage>
      <Message>
        Página não encontrada
        <span>
          Verifique sua URL ou volte para página inicial clicando
          <a href="/"> aqui</a>
        </span>
      </Message>
      <div className="animation">
        <Lottie animationData={errorAnimation} loop={true} />
      </div>
    </ErrorPage>
  )
}
