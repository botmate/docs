import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { TbBrandTelegram } from 'react-icons/tb';
import { Logo } from './components/logo';

const config: DocsThemeConfig = {
	logo: <Logo />,
	project: {
		link: 'https://github.com/botmate/botmate',
	},
	chat: {
		link: 'https://t.me/chatbotmate',
		icon: <TbBrandTelegram fontSize={24} fill='currentColor' />,
	},
	docsRepositoryBase: 'https://github.com/botmate/docs',
	footer: {
		text: 'BotMate',
	},
};

export default config;
