import Image from 'next/image'
import styles from './index.module.scss'

interface Props {
  value: StaticImageData
  size: number
}

export const Avatar: React.FC<Props> = ({ value, size }) => (
  <Image
    className={styles.root}
    src={value}
    width={size}
    height={size}
    alt="avatar"
  />
)
