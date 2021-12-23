import React from 'react'
import NextHead from 'next/head'

interface Props {
  title: string
}

export const Head: React.FC<Props> = ({ title }) => (
  <NextHead>
    <meta charSet="UTF-8" />
    <title>{title}</title>
    <meta
      name="keywords"
      content="резюме, summary, Южаков Борис, Yuzhakov Boris"
    />
    <meta
      name="description"
      content="Резюме. Такое, каким его хотел видеть я"
    />
    <meta
      name="viewport"
      content="initial-scale=1.0, width=device-width"
    />
    <link rel="icon" sizes="192x192" href="/touch-icon.png" />
    <link rel="apple-touch-icon" href="/touch-icon.png" />
    <link rel="mask-icon" href="/favicon-mask.svg" color="#49B882" />
    <link rel="icon" href="/favicon.png" />
    <meta property="og:image" content="/favicon.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta name="yandex-verification" content="1b46776c88d34ab0" />
  </NextHead>
)
