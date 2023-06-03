import { useIntl } from 'react-intl'
import { messages } from '../config/translate'

type MessagesType = keyof (typeof messages)[keyof typeof messages]

export const useTranslateMessage = (id: MessagesType) => {
  const { formatMessage } = useIntl()

  return formatMessage({ id })
}
