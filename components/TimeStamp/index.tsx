import { parseISO, format } from 'date-fns'

interface Props {
  value: string // date in iso format
}

export const TimeStamp: React.FC<Props> = ({ value }) => (
  <time dateTime={value}>
    {format(parseISO(value), 'LLLL d, yyyy')}
  </time>
)
