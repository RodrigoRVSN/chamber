import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import React from 'react'
import { IntlProvider } from 'react-intl'
import { IMessages, messages } from '@App/core/config/translate'

function MyApp ({ Component, pageProps }: AppProps) {
  const { locale } = useRouter()

  return (
    <IntlProvider locale={locale || 'en-US'} messages={messages[locale as IMessages]}>
       <Component {...pageProps} />
    </IntlProvider>
  )
}

export default MyApp
