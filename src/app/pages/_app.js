// pages/_app.js
import { IntlProvider } from "next-intl";

export default function App({ Component, pageProps }) {
  return (
    <IntlProvider messages={pageProps.messages} locale={pageProps.locale}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export async function getStaticProps({ locale }) {
  const messages = await import(`../locales/${locale}.json`);
  return {
    props: {
      messages: messages.default,
      locale,
    },
  };
}
