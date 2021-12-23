import cn from 'classnames'

import styles from './index.module.scss'

interface Props {
  className?: string
  disabled?: boolean
  red?: boolean
  green?: boolean
  blue?: boolean
}
export const Button: React.FC<Props> = ({ className, disabled, red, green, blue, ...others }) => (
  <button
    {...others}
    disabled={disabled}
    className={cn(
      styles.root,
      {
        [styles.disabled]: disabled,
        [styles.red]: red,
        [styles.green]: green,
        [styles.blue]: blue,
      },
      className,
    )}
  />
)
