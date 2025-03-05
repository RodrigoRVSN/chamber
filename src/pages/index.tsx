import Head from 'next/head'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import { useTranslateMessage } from '@core/helpers/useTranslateMessage'
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
            src="https://cmsassets.rgpub.io/sanity/files/dsfx7636/news/409ab2fc369ba5e1fe50bac10c6676d7d1365a9f.mp4"
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
