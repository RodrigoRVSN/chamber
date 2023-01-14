/* eslint-disable @typescript-eslint/no-var-requires */
import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it, vi } from 'vitest'
import { LanguageSelector } from '.'
import { languages } from './LanguageSelector.data'

const actualLocale = 'pt-BR'

vi.mock('next/router', () => ({
  useRouter() {
    return {
      locale: actualLocale,
      asPath: '/agents'
    }
  }
}))

describe('<LanguageSelector />', () => {
  it('should be able to display languages itens in mouse hover', () => {
    render(<LanguageSelector />)

    fireEvent.mouseOver(
      screen.getByTestId('language-selector__dropdown--languages')
    )

    languages.forEach(({ flag, title }) => {
      expect(screen.getByText(title)).toBeTruthy()
      expect(
        screen.getByTestId(
          `languages-selector__dropdown-${flag}-${flag === actualLocale}`
        )
      ).toBeTruthy()
    })
  })
})
