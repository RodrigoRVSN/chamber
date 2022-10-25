import { GetStaticPaths, GetStaticPropsContext } from 'next'
import Image from 'next/image'
import { FormattedMessage } from 'react-intl'
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
      <h1>{agent.displayName}</h1>
      <p>{agent.description}</p>
      <Image width={200} height={300} src={agent.fullPortrait}/>
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
