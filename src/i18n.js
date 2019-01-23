import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      translations: {
        about: "About",
        portfolio: "Portfolio",
        technologies: "Technologies",
        resume: "Resume",
        LANGUAGE: "ENGLISH",
        "Hey, I'm Aníbal!": "Hey, I'm Aníbal!",
        looking:
          "Always looking for excting new projects where I can contribute with my abilities!",
        about: "About",
        who:
          "Full Stack Web Developer. A self motivated, fast leaner and hard working person, I love web development and learning new technologies. My focus is bringing an awesome user experience into all my projects. I have a bachelor in business where I specialized in digital marketing, that's why I pay close attention to the details that improve engagement.",

        headnews:
          "Browse for news from different countries and languages, app made with newsAPI, React, Redux, Redux Thunk & Sass",

        notes:
          "Save your notes in the cloud safely, I created a RESTful API that connects to a React App, I made this app using the MERN Stack and the MVC Pattern",

        huddle:
          "Landing page for Huddle, I took the mockup and converted it using Sass and semantic HTML5",
        reactPassword: "Safely create new passwords. Made with React and Sass",
        frontend:
          "I love writing applications in React and using Redux for state management, it's important for me to create maintainable code",
        backend:
          "I can create RESTful APIs and I like to write clean and understandable code using the MVC Pattern.",

        use: "What I use"
      }
    },
    es: {
      translations: {
        about: "Sobre mí",
        portfolio: "Portafolio",
        technologies: "Tecnologías",
        resume: "Curriculum",
        LANGUAGE: "SPANISH",
        "Hey, I'm Aníbal!": "Hola, soy Aníbal",
        looking:
          "¡Siempre buscando nuevos proyectos emocionantes en los que pueda contribuir con mis habilidades!",
        about: "Sobre mí",
        who:
          "Desarrollador Web Full Stack. Persona autodidacta y trabajadora. Me encanta el desarrollo web y aprender nuevas tecnologías. Mi enfoque esta en brindar una experiencia de usuario increíble en todos mis proyectos. Soy graduado de Ing. en Administración con mención en marketing, donde me enfoque en lo digital por lo cual le presto mucha atención a todos los detalles que mejoran el engagement y la experiencia de usuario.",
        headnews:
          "Agregador de noticias, busca noticias de diferentes países, idiomas y fuentes, esta aplicación fue realizada con React, Redux, Redux Thunk, Sass y NewsAPI",

        notes:
          "Guarda tus notas en la nube de forma segura, creé una RESTful API que se conecta a una aplicación de React, para realizar esta aplicación utilicé el MERN Stack",
        huddle:
          "Landing page para Huddle, tomé la maqueta y la convertí en codigo usando Sass y HTML5 semántico",
        reactPassword:
          "Crea nuevas contraseñas de manera segura. Hecho con React y Sass.",

        frontend:
          "Me encanta escribir aplicaciones en React y usar Redux para la administración del estado, es importante para mí crear código mantenible",
        backend:
          "Puedo crear RESTFful APIs y me gusta escribir código limpio y comprensible usando el patrón MVC.",

        use: "Lo que uso"
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
