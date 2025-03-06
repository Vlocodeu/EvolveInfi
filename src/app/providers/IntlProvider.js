"use client";

import { NextIntlClientProvider } from "next-intl";
import { useEffect, useState } from "react";

export default function IntlProvider({ children, locale }) {
  const [messages, setMessages] = useState(null);

  useEffect(() => {
    fetch(`/message/${locale}.json`) // ✅ Now fetching from /message/
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch(() => setMessages({})); // ✅ Fallback if JSON file is missing
  }, [locale]);

  if (!messages) return <p>Loading translations...</p>; // ✅ Prevent errors during loading

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
