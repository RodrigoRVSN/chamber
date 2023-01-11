import { fireEvent, render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { AgentsAbilities } from '.'
import { abilitesMock } from './AgentAbilities.mock'

describe('<AgentsAbilities />', () => {
  it('should be able to render and change abilities correctly', () => {
    render(<AgentsAbilities abilities={abilitesMock} />)

    expect(screen.getByText(abilitesMock[0].displayName)).toBeTruthy()
    expect(screen.getByText(abilitesMock[0].description)).toBeTruthy()

    expect(screen.queryByText(abilitesMock[1].displayName)).toBeFalsy()

    fireEvent.click(screen.getByAltText(abilitesMock[1].displayName))
    expect(screen.queryByText(abilitesMock[1].displayName)).toBeTruthy()
    expect(screen.getByText(abilitesMock[1].description)).toBeTruthy()
  })
})
