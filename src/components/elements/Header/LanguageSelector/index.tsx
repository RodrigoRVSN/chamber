import Link from 'next/link'
import { useRouter } from 'next/router'
import { Check, Globe } from 'phosphor-react'
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
      data-testid="language-selector__dropdown--languages"
    >
      <Globe size={30} />

      {isHover && (
        <ul>
          {languages.map(({ title, flag }) => {
            const isSelected = locale === flag

            return (
              <Link key={flag} passHref href={asPath} locale={flag}>
                <li
                  data-testid={`languages-selector__dropdown-${flag}-${isSelected}`}
                  className={isSelected ? styles.language__disabled : ''}
                >
                  {title} {isSelected && <Check size={20} />}
                </li>
              </Link>
            )
          })}
        </ul>
      )}
    </li>
  )
}
