import { en } from "./en";

export const ua: typeof en = {
  header: {
    language: {
      languageLabel: "Мова",
      english: "Англійська",
      ukrainian: "Українська",
    },
  },
  pages: {
    about: "Про нас",
  },
  settings: {
    myCabinet: "Мій кабінет",
    logout: "Вийти",
  },
  registrationScreen: {
    registrationLabel: "Регестрація",
    emailLabel: "Email",
    passwordLabel: "Пароль",
    confirmPasswordLabel: "Підтвердити пароль",
    submitLabel: "Підтвердити реєстрацію",
    errors: {
      required: "Обовязкове поле",
      invalidEmailAddress: "Email некоректно вказаний",
      chooseLongerPassword: "Виберіть довший пароль, щонайменьше 8 символів",
      passwordsNotMatch: "Паролі не співпадають",
      duplicatingEmail: "Користувач з таким Email вже існує!",
    },
  },
  loginScreen: {
    loginLabel: "Вхід",
    emailLabel: "Email",
    passwordLabel: "Пароль",
    submitLabel: "Ввійти",
    errors: {
      required: "Обовязкове поле",
      invalidEmailAddress: "Email некоректно вказаний",
      invalidCredentials: "Неправильні данні для входу",
    },
  },
  aboutUs: {
    title: "Пр нас",
  },
};
