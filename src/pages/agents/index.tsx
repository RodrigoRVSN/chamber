import { GetStaticPropsContext } from 'next'
import { FormattedMessage } from 'react-intl'
import { Agent } from '@App/core/types/IAgent'

interface IAgents {
  agents: Agent[]
}

export default function Agents ({ agents }: IAgents): JSX.Element {
  return (
    <>
      {agents.map(agent => (
        <div key={agent.uuid}>
          <p>{agent.displayName}</p>
          <p>{agent.description}</p>
        </div>
      ))}
      <FormattedMessage id='cta' />
    </>
  )
}

export async function getStaticProps (ctx: GetStaticPropsContext) {
  const localeSuffix = `language=${ctx.locale}`

  const response = await fetch(`https://valorant-api.com/v1/agents?${localeSuffix}`)
  const { data } = await response.json()

  return { props: { agents: data } }
}
