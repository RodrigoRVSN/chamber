import { SpeakerHigh, SpeakerNone } from 'phosphor-react'
import { useState } from 'react'
import styles from './styles.module.scss'

interface AudioButtonProps {
  audioUrl: string
  durationTime: number
}

export const AudioButton = ({ audioUrl, durationTime }: AudioButtonProps) => {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayAudio = () => {
    setIsPlaying((prevState) => !prevState)

    setTimeout(() => setIsPlaying(false), durationTime * 1000)

    const audio = new Audio(audioUrl)
    !isPlaying && audio.play()
  }

  return (
    <button
      className={styles.audio__button}
      disabled={isPlaying}
      onClick={handlePlayAudio}
      data-testid="audio__button"
    >
      {isPlaying ? (
        <SpeakerHigh className={styles['audio__button--icon']} size={32} />
      ) : (
        <SpeakerNone className={styles['audio__button--icon']} size={32} />
      )}
    </button>
  )
}
