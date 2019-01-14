import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        "Hello, I'm Mark": "Hello, I'm Mark",
        EN: "EN",
        "Lorem ipsum dolor sit amet, an duis aeque impedit nam. Possit honestatis dissentiunt sea et, alterum invidunt periculis ea quo.":
          "Lorem ipsum dolor sit amet, an duis aeque impedit nam. Possit honestatis dissentiunt sea et, alterum invidunt periculis ea quo.",
        "Take notes with this app fully backed by mongoDB and Node":
          "Take notes with this app fully backed by mongoDB and Node",
        "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.":
          "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
      }
    },
    es: {
      translations: {
        "Hello, I'm Mark": "Hola, soy Mark Spanish",
        EN: "ES",
        "Lorem ipsum dolor sit amet, an duis aeque impedit nam. Possit honestatis dissentiunt sea et, alterum invidunt periculis ea quo.":
          "Spanish ipsum dolor sit amet, an duis aeque impedit nam. Possit honestatis dissentiunt sea et, alterum invidunt periculis ea quo.",
        "Take notes with this app fully backed by mongoDB and Node":
          "Toma notas con esta aplicacion hecha con mongoDB y Node",
        "Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing.":
          "Spanish sheets containing Lorem Ipsum passages, and more recently with desktop publishing."
      }
    }
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;
