import { Poppins } from 'next/font/google';

import 'nextra-theme-docs/style.css';
import './custom.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={poppins.className}>
      <Component {...pageProps} />
    </main>
  );
}
