import Head from 'next/head'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { useTranslateMessage } from '@core/helpers/getMessage'
import styles from '@core/styles/Home.module.scss'

export default function Home() {
  const title = useTranslateMessage('home')

  return (
    <>
      <Head>
        <title>{title} | Valorant</title>
      </Head>

      <main className={styles.home__cta_container}>
        <video
          autoPlay
          height="100%"
          width="100%"
          muted
          loop
          disablePictureInPicture
          controlsList="nodownload"
        >
          <source
            src="https://assets.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt714eaee50b90fc27/62cc7dcc6a8fb133b0ff7e55/VALORANT_ANNO22_SHATTERED_16x9_27s.mp4"
            type="video/mp4"
          />
        </video>

        <Link
          href="/agents"
          passHref
          className={styles.home__cta_button}
          data-testid="home__button--see-agents"
        >
          <FormattedMessage id="see-agents" />
        </Link>
      </main>
    </>
  )
}
