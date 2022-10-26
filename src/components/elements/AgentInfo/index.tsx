import Image from 'next/image'
import React from 'react'
import { Agent } from '@App/core/types/IAgent'
import { AudioButton } from '../AudioButton'
import styles from './styles.module.scss'

interface AgentInfoProps {
  agent: Agent
}

const AgentInfo = ({ agent }: AgentInfoProps) => {
  return (
    <section className={styles.agent__wrapper}>
      <section className={styles.agent__container}>
        <div className={styles.agent__portrait}>
          <Image width={800} height={900} src={agent.fullPortraitV2} />
          <Image
            className={styles.agent__background}
            src={agent.background}
            layout="fill"
          />
        </div>

        <div>
          <div className={styles.agent__title}>
            <h1>{agent.displayName}</h1>
            <AudioButton
              audioUrl={agent.voiceLine.mediaList[0].wave}
              durationTime={agent.voiceLine.maxDuration}
            />
          </div>

          <p className={styles.agent__description}>{agent.description}</p>

          <div className={styles['agent__role--title']}>
            <Image src={agent.role.displayIcon} width={30} height={30} />
            <span>{agent.role.displayName}</span>
          </div>
          <p>{agent.role.description}</p>
        </div>
        {agent.characterTags?.map((tag) => (
          <div key={tag}>
            <p>{tag}</p>
          </div>
        ))}
      </section>

      {agent.abilities.map((ability) => (
        <div key={ability.slot}>
          <p>{ability.displayName}</p>
          <p>{ability.description}</p>
          <Image src={ability.displayIcon} width={100} height={100} />
        </div>
      ))}
    </section>
  )
}

export default AgentInfo
