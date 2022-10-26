import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import { IntlProvider } from 'react-intl'
import { Header } from '@App/components/elements/Header'
import { IMessages, messages } from '@App/core/config/translate'
import '@App/core/styles/global.scss'

function MyApp ({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  return (
    <IntlProvider locale={locale || 'en-US'} messages={messages[locale as IMessages]}>
        <Header/>
       <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
