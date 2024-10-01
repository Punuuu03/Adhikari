// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Define your translations
const resources = {
  en: {
    translation: {
      welcome: "Welcome to EduPlatform",
      description: "The best place to enhance your skills and unlock your potential. Join now to access world-class courses!",
      exploreCourses: "Explore Courses",
      whyLearnWithUs: "Why Learn with Us?",
      expertInstructors: "Expert Instructors",
      expertDescription: "Learn from industry leaders with real-world experience.",
      flexibleLearning: "Flexible Learning",
      flexibleDescription: "Study at your own pace, on any device, anytime, anywhere.",
      wideRangeCourses: "Wide Range of Courses",
      wideDescription: "Choose from hundreds of courses across a wide variety of topics.",
      joinLearners: "Join Over 100,000 Learners Today",
      startLearning: "Start learning and get certified in the most sought-after skills in the industry.",
      getStarted: "Get Started for Free",
      footerText: "© 2024 EduPlatform. All rights reserved.",
    },
  },
  es: {
    translation: {
      welcome: "Bienvenido a EduPlatform",
      description: "El mejor lugar para mejorar tus habilidades y desbloquear tu potencial. ¡Únete ahora para acceder a cursos de clase mundial!",
      exploreCourses: "Explorar Cursos",
      whyLearnWithUs: "¿Por qué aprender con nosotros?",
      expertInstructors: "Instructores Expertos",
      expertDescription: "Aprenda de líderes de la industria con experiencia en el mundo real.",
      flexibleLearning: "Aprendizaje Flexible",
      flexibleDescription: "Estudia a tu propio ritmo, en cualquier dispositivo, en cualquier momento y en cualquier lugar.",
      wideRangeCourses: "Amplia Gama de Cursos",
      wideDescription: "Elija entre cientos de cursos en una amplia variedad de temas.",
      joinLearners: "Únete a más de 100,000 estudiantes hoy",
      startLearning: "Comienza a aprender y obtén certificación en las habilidades más demandadas en la industria.",
      getStarted: "Empieza gratis",
      footerText: "© 2024 EduPlatform. Todos los derechos reservados.",
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
  });

export default i18n;
