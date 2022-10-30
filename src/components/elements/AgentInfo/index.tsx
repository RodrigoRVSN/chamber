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
    <main className={styles.agent__wrapper}>
      <section className={styles.agent__container}>
        <div className={styles.agent__portrait}>
          <Image
            alt={agent.displayName}
            width={500}
            height={500}
            src={agent.fullPortrait}
          />
          <Image
            fill
            className={styles.agent__background}
            src={agent.background}
            alt=""
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
            <p key={tag}>{tag}</p>
          ))}

          <p className={styles.agent__description}>{agent.description}</p>

          <div className={styles['agent__role--title']}>
            <Image
              src={agent.role.displayIcon}
              width={30}
              height={30}
              alt={agent.role.displayName}
            />
            <span>{agent.role.displayName}</span>
          </div>
          <p>{agent.role.description}</p>
        </div>
      </section>

      <AgentsAbilities abilities={agent.abilities} />
    </main>
  )
}

export default AgentInfo
