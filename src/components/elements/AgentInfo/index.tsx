import Image from 'next/image'
import React from 'react'
import { Agent } from '@App/core/types/IAgent'
import { AudioButton } from '../AudioButton'
import { AgentsAbilities } from './AgentsAbilities'
import styles from './styles.module.scss'

interface AgentInfoProps {
  agent: Agent
}

const AgentInfo = ({ agent }: AgentInfoProps) => {
  return (
    <section className={styles.agent__wrapper}>
      <section className={styles.agent__container}>
        <div className={styles.agent__portrait}>
          <Image width={1000} height={1000} src={agent.fullPortrait} />
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

          {agent.characterTags?.map((tag) => (
            <div key={tag}>
              <p>{tag}</p>
            </div>
          ))}

          <p className={styles.agent__description}>{agent.description}</p>

          <div className={styles['agent__role--title']}>
            <Image src={agent.role.displayIcon} width={30} height={30} />
            <span>{agent.role.displayName}</span>
          </div>
          <p>{agent.role.description}</p>
        </div>
      </section>

      <AgentsAbilities abilities={agent.abilities} />
    </section>
  )
}

export default AgentInfo
