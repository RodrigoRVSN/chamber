import Link from 'next/link'
import { useRouter } from 'next/router'
import { Globe } from 'phosphor-react'
import { useState } from 'react'
import { languages } from './LanguageSelector.data'
import styles from './styles.module.scss'

export const LanguageSelector = () => {
  const [isHover, setIsHover] = useState(false)
  const { asPath, locale } = useRouter()

  const handleDisableDropdown = () => {
    setIsHover(false)
  }

  const handleEnableDropdown = () => {
    setIsHover(true)
  }

  return (
    <li
      className={styles.language__selector_container}
      onMouseOver={handleEnableDropdown}
      onMouseLeave={handleDisableDropdown}
    >
      <Globe size={30} />

      {isHover && (
        <ul>
          {languages.map(({ title, flag }) => (
            <Link key={flag} passHref href={asPath} locale={flag}>
              <li className={locale === flag ? styles.language__disabled : '#'}>
                {title}
              </li>
            </Link>
          ))}
        </ul>
      )}
    </li>
  )
}