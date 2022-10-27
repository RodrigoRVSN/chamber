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
    <section className={styles.agents__container}>
      {agents.map((agent) => (
        <Link key={agent.uuid} passHref href={`/agents/${agent.uuid}`}>
          <a className={styles.agent__wrapper}>
            <Image src={agent.displayIcon} height={100} width={100} />
            <div className={styles.agent__info}>
              <div className={styles.display__name}>
                <p>{agent.displayName}</p>
                <Image src={agent.role.displayIcon} height={30} width={30} />
              </div>

              <span>{agent.role.displayName}</span>
            </div>
          </a>
        </Link>
      ))}
    </section>
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
