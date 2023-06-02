export const messages = {
  'en-US': {
    cta: 'Enter',
    agents: 'Agents',
    home: 'Home',
    'see-agents': 'See agents'
  },
  'pt-BR': {
    cta: 'Entrar',
    agents: 'Agentes',
    home: 'Início',
    'see-agents': 'Ver agentes'
  }
} as const

export type IMessages = keyof typeof messages
