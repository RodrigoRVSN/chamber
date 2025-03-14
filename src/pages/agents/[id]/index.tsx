import { GetStaticPaths, GetStaticPropsContext } from 'next'
import Head from 'next/head'
import AgentInfo from '@App/components/elements/AgentInfo'
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

export default function AgentPage({ agent }: IAgents) {
  return (
    <>
      <Head>
        <title>{agent.displayName} | Valorant</title>
      </Head>
      <AgentInfo agent={agent} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async ({
  locales,
  defaultLocale
}) => {
  const response = await fetch(
    `https://valorant-api.com/v1/agents/?language=${defaultLocale}`
  )
  const { data } = await response.json()

  const paths: PathsProps[] = (locales || []).map((locale) => ({
    params: {
      locale,
      id: data[0].uuid
    }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({
  locale,
  params
}: GetStaticPropsContext) {
  const localeSuffix = `language=${locale}`

  const response = await fetch(
    `https://valorant-api.com/v1/agents/${params?.id}/?${localeSuffix}`
  )
  const { data } = await response.json()

  return { props: { agent: data } }
}
