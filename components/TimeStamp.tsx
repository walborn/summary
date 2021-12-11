import React from 'react'
import { parseISO, format } from 'date-fns'

interface Props {
  value: string
}

export const TimeStamp = ({ value }: Props) => (
  <time dateTime={value}>
    {format(parseISO(value), 'LLLL d, yyyy')}
  </time>
)
