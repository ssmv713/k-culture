import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
import * as en from "./en";
import * as ko from "./ko";
import * as ch from "./ch";
import * as vi from "./vi";
import * as th from "./th";
import * as sp from "./sp";

const resources: Resource = {
  en: {
    ...en,
  },
  ko: {
    ...ko,
  },
  ch: {
    ...ch,
  },
  vi: {
    ...vi,
  },
  th: {
    ...th,
  },
  sp: {
    ...sp,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko", // 초기 설정 언어
  debug: true,
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
