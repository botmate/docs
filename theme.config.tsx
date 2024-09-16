import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { FaTelegram } from 'react-icons/fa6';
import { Logo } from './components/logo';

const config: DocsThemeConfig = {
  logo: <Logo />,
  head: (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      <meta
        property="og:title"
        content="BotMate Docs"
      />
      <meta
        property="og:description"
        content="Documentation for BotMate"
      />
      <meta
        property="og:type"
        content="website"
      />
      <meta
        property="og:url"
        content="https://docs.botmate.dev"
      />
      <meta
        property="og:image"
        content="https://docs.botmate.dev/og-image.png"
      />
      <link rel="icon" href="/favicon.ico" />
    </>
  ),
  project: {
    link: 'https://github.com/botmate/botmate',
  },
  chat: {
    link: 'https://t.me/chatbotmate',
    icon: (
      <FaTelegram
        fontSize={24}
        fill="currentColor"
      />
    ),
  },
  docsRepositoryBase:
    'https://github.com/botmate/docs',
  footer: {
    text: 'BotMate',
  },
};

export default config;
