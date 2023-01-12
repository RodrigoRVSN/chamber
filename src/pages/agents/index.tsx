import { GetStaticPropsContext } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@App/core/styles/Agents.module.scss'
import { Agent } from '@App/core/types/IAgent'

interface IAgents {
  agents: Agent[]
}

export default function Agents({ agents }: IAgents): JSX.Element {
  return (
    <main className={styles.agents__container}>
      {agents.map((agent) => (
        <Link
          className={styles.agent__wrapper}
          key={agent.uuid}
          passHref
          href={`/agents/${agent.uuid}`}
        >
          <Image
            alt={agent.displayName}
            src={agent.displayIcon}
            height={100}
            width={100}
          />

          <div className={styles.agent__info}>
            <div className={styles.display__name}>
              <p>{agent.displayName}</p>
              <Image
                alt={agent.role.displayName}
                src={agent.role.displayIcon}
                height={30}
                width={30}
              />
            </div>

            <span data-testid={`agents__role-name--${agent.displayName}`}>
              {agent.role.displayName}
            </span>
          </div>
        </Link>
      ))}
    </main>
  )
}

export async function getStaticProps(ctx: GetStaticPropsContext) {
  const localeSuffix = `language=${ctx.locale}`

  const response = await fetch(
    `https://valorant-api.com/v1/agents?${localeSuffix}&isPLayableCharacter=true`
  )
  const { data } = await response.json()

  return { props: { agents: data } }
}
