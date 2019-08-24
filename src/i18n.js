import i18n from "i18next"
import { initReactI18next } from "react-i18next"

// the translations
// (tip move them in a JSON file and import them)
const resources = {
  en: {
    translation: {
      "Hey I’m Anibal, Software Developer.":
        "Hey I’m Anibal, Software Developer.",
      "I love build products":
        "I love building products that users will love to interact with.",
      "Get In Touch": "Get In Touch",
      "about-me": "About Me",
      "about-me-desc":
        "Since I knew the power of software I knew this is what I wanted to do, I have worked with several clients remotely and love creating digital products that escale. In my spare time I love doing sports such as calisthenics, being outdoor, and learning about tech!",
      "exprience-title": "Experience",
      "tech-title": "Technologies",
      "tech-recent":
        "These are some of the technologies I have worked recently with",
      "backend-tech": "Back-end Technologies",
      "frontend-tech": "Front-End Technologies",
      "exp-card-the-inside":
        "Startup based in NYC with more than 10,000 products, I was challenged with the migration from Shopify due to its limitations, Worked as a front-end developer using technologies such as Laravel, GraphQL, React and following Best SEO practices.",
      "exp-card-slicknotes":
        "Full Stack App for iOS and Android, you can create accounts and save your notes, the technologies used are Apollo GraphQL, React Native, Styled-Components and Expo",
      "exp-card-android-games":
        "Developed Android games using game engine Unity, c# and Photoshop, these games are published on the Google PlayStore.",
      "exp-card-headnews":
        "Browse for news from different countries and languages, app made with newsAPI, React, Redux, Redux Thunk & Sass",
      "exp-card-huddle":
        "Landing page for Huddle, I took the mockup and converted it using Sass and semantic HTML5",
      "exp-card-password-generator":
        "Safely create new passwords. Made with React and Sass",
      "resume-txt": "Resume",
    },
  },
  es: {
    translation: {
      "Hey I’m Anibal, Software Developer.":
        "Hey soy Anibal, Software Developer.",
      "I love build products":
        "Me encanta desarrollar productos que los usuarios amaran",
      "Get In Touch": "Contáctame",
      "about-me": "Sobre Mi",
      "about-me-desc":
        "Desde que conocí el poder de crear software supe que esto es lo que quiero hacer, trabajó con múltiples clientes de manera remota y me encanta crear productos digitales que escalan. En mi tiempo libre me gusta hacer deportes como calistenia, estar al aire libre y aprender nuevas tecnologías",
      "exprience-title": "Experiencia",
      "tech-title": "Tecnologías",
      "tech-recent":
        "Estas son algunas de las tecnologías con las que he trabajado recientemente",
      "backend-tech": "Tecnologías Back-end",
      "frontend-tech": "Tecnologías Front-End",
      "exp-card-the-inside":
        "Startup con sede en NY con más de 10,000 productos, me desafiaron con la migración desde Shopify debido a sus limitaciones. Trabajé como desarrollador front-end utilizando tecnologías como Laravel, GraphQL, React.",
      "exp-card-slicknotes":
        "Aplicación Full Stack para iOS y Android, puede crear cuentas y guardar sus notas, las tecnologías utilizadas son Apollo GraphQL, React Native, Styled-Components y Expo",
      "exp-card-android-games":
        "Juegos de Android desarrollados con el motor de juegos Unity, c# y Photoshop, estos juegos estan publicados en Google PlayStore.",

      "exp-card-headnews":
        "Agregador de noticias, busca noticias de diferentes países, idiomas y fuentes, esta aplicación fue realizada con React, Redux, Redux Thunk, Sass y NewsAPI",
      "exp-card-huddle":
        "Landing page para Huddle, tomé la maqueta y la convertí en codigo usando Sass y HTML5 semántico",
      "exp-card-password-generator":
        "Crea nuevas contraseñas de manera segura. Hecho con React y Sass.",
      "resume-txt": "Curriculum",
    },
  },
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  })

export default i18n
