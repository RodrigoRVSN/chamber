import { GetStaticPaths, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
import { AudioButton } from '@App/components/elements/AudioButton'
import { Agent } from '@App/core/types/IAgent'

interface PathsProps {
  params: {
    id: string
    locale: string
  }
}

interface IAgents {
  agent: Agent
}

export default function AgentPage ({ agent }: IAgents) {
  return (
    <>
      <AudioButton
        audioUrl={agent.voiceLine.mediaList[0].wave}
        durationTime={agent.voiceLine.maxDuration}
      />

      <h1>{agent.displayName}</h1>
      <p>{agent.description}</p>

      <Image width={300} height={200} src={agent.fullPortraitV2} />

      <span>{agent.role.description}</span>
      <Image src={agent.role.displayIcon} width={100} height={100} />
      <span>{agent.role.displayName}</span>

      <Image src={agent.background} width={100} height={100} />

      {agent.abilities.map(ability => (
        <div key={ability.slot}>
          <p>{ability.displayName}</p>
          <p>{ability.description}</p>
          <Image src={ability.displayIcon} width={100} height={100} />
        </div>
      ))}

      {agent.characterTags?.map(tag => (
        <div key={tag}>
          <p>{tag}</p>
        </div>
      ))}

      <FormattedMessage id='cta' />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({ locales, defaultLocale }) => {
  const response = await fetch(`https://valorant-api.com/v1/agents/?language=${defaultLocale}`)
  const { data } = await response.json()

  const paths = locales?.map(locale => ({
    params: {
      locale,
      id: data[0].uuid
    }
  })) as PathsProps[]

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps ({ locale, params }: GetStaticPropsContext) {
  const localeSuffix = `language=${locale}`

  const response = await fetch(`https://valorant-api.com/v1/agents/${params?.id}/?${localeSuffix}`)
  const { data } = await response.json()

  return { props: { agent: data } }
}
