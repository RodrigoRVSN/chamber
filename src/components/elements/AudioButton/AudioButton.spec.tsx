import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { AudioButton } from '.'

// eslint-disable-next-line @typescript-eslint/no-empty-function
window.HTMLMediaElement.prototype.play = async () => {}

describe('<AudioButton />', () => {
  it('should be able to active the AudioButton', () => {
    render(<AudioButton audioUrl="a.mp4" durationTime={4000} />)

    const button = screen.getByTestId('audio__button')
    expect(button).toHaveProperty('disabled', false)

    fireEvent.click(button)
    expect(button).toHaveProperty('disabled', true)
  })
})
