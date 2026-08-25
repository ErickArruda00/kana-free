export type Locale = "en" | "pt-BR";

export const defaultLocale: Locale = "en";

type Messages = {
  headline: string;
  lede: string;
  syllabaries: string;
  repeat: string;
  yes: string;
  no: string;
  start: string;
  back: string;
  check: string;
  doneTitle: string;
  doneText: string;
  backHome: string;
  language: string;
  english: string;
  portuguese: string;
};

export const messages: Record<Locale, Messages> = {
  en: {
    headline: "Practice the sound of each character",
    lede: "Select one or more syllabaries and type the matching romaji.",
    syllabaries: "Syllabaries",
    repeat: "Repeat",
    yes: "Yes",
    no: "No",
    start: "Start",
    back: "Back",
    check: "Check",
    doneTitle: "Session complete",
    doneText: "You got every character in this round right.",
    backHome: "Back to start",
    language: "Language",
    english: "English",
    portuguese: "Portuguese (Brazil)",
  },
  "pt-BR": {
    headline: "Pratique o som de cada caractere",
    lede: "Selecione um ou mais silabários e digite o romaji correspondente.",
    syllabaries: "Silabários",
    repeat: "Repetir",
    yes: "Sim",
    no: "Não",
    start: "Começar",
    back: "Voltar",
    check: "Verificar",
    doneTitle: "Sessão completa",
    doneText: "Você acertou todos os caracteres desta rodada.",
    backHome: "Voltar ao início",
    language: "Idioma",
    english: "Inglês",
    portuguese: "Português (Brasil)",
  },
};
