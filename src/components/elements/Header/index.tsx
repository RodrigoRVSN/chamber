import Image from 'next/image'
import Link from 'next/link'
import { FormattedMessage } from 'react-intl'
import styles from './styles.module.scss'

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <nav className={styles.header__nav}>
        <Image src="/logo.png" height={50} width={100} />

        <ul className={styles.header__items}>
          <Link href="/agents" passHref>
            <li><FormattedMessage id='agents' /></li>
          </Link>
          <Link href="/">
            <li><FormattedMessage id='home' /></li>
          </Link>
        </ul>
      </nav>
    </header>
  )
}
