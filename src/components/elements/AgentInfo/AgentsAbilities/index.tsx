import Image from 'next/image'
import { useState } from 'react'
import { Ability } from '@App/core/types/IAgent'
import styles from './styles.module.scss'

interface AgentsAbilitiesProps {
  abilities: Ability[]
}

export const AgentsAbilities = ({ abilities }: AgentsAbilitiesProps) => {
  const [abilitySelected, setAbilitySelected] = useState(0)

  const handleSelectAbility = (index: number) => {
    setAbilitySelected(index)
  }

  return (
    <section className={styles.abilities__wrapper}>
      <div className={styles.abilities__container}>
        {abilities.map((ability, index) => (
          <button
            key={ability.slot}
            className={`${abilitySelected === index && styles.oi} ${
              styles.abilities__button
            } `}
            onClick={() => handleSelectAbility(index)}
          >
            <Image src={ability.displayIcon} width={60} height={60} />
          </button>
        ))}
      </div>

      <h1>{abilities[abilitySelected].displayName}</h1>
      <p>{abilities[abilitySelected].description}</p>
    </section>
  )
}
