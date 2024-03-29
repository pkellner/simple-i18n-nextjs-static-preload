import React, {useEffect, useState} from 'react';

const translations = {
  en: {
    greeting: "Hello",
    content: "This is a simple content page supporting English and Spanish.",
    switch: "Switch to Spanish",
  },
  es: {
    greeting: "Hola",
    content: "Esta es una página de contenido simple que admite inglés y español.",
    switch: "Cambiar a inglés",
  },
};

export async function getStaticProps({ locale } : { locale: string }) {
  return {
    props: {
      allTranslations: translations, // Pass all translations to the page
      locale, // this is from build system
    },
  };
}

export default function Home({ allTranslations, locale } : { allTranslations: any, locale: string }) {
  const [language, setLanguage] = useState<string>(locale); // Initialize with the current locale

  const [showResult, setShowResult] = useState(false);
  useEffect(() => {
    const defaultBrowserLocale = navigator.language;
    setLanguage(defaultBrowserLocale);
    setShowResult(true);
  },[])

  const toggleLocale = () => {
    const newLocale = language === "en" ? "es" : "en";
    setLanguage(newLocale);
  };

  // Access the current translations based on the locale
  const content = allTranslations[language];

  return showResult && (
    <div>
      <h1>{content.greeting}</h1>
      <p>{content.content}</p>
      <button onClick={toggleLocale}>{locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}</button>
    </div>
  );
}


