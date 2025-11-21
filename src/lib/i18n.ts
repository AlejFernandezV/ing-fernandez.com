import spanish from "../i18n/es.json";
import english from "../i18n/en.json";

export const getI18N = ({
  currentLocale,
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === "en") return english;
  return spanish;
};
