import React, { useState } from 'react';

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


export async function getStaticProps() {
  // Preload all translations
  return {
    props: {
      allTranslations: translations, // Pass all translations to the page
    },
  };
}

export default function Home({ allTranslations } : { allTranslations: any }) {
  const [locale, setLocale] = useState('en'); // Default to English

  const toggleLocale = () => {
    setLocale(locale === 'en' ? 'es' : 'en');
  };

  // Access the current translations based on the locale
  const content = allTranslations[locale];

  return (
    <div>
      <h1>{content.greeting}</h1>
      <p>{content.content}</p>
      <button onClick={toggleLocale}>{locale === 'en' ? 'Switch to Spanish' : 'Cambiar a inglés'}</button>
    </div>
  );
}


