import { useSearchParams } from "react-router-dom";
import { AppContext } from "./AppContext";
import { useDetectDevice } from "./hooks/useDetectDevice";
import HomePage from "./pages/HomePage";
import { i18nEs } from "../data/i18n/es";
import { i18nEng } from "../data/i18n/en";

export const CvApp = () => {
  const { isMobile } = useDetectDevice();
  const [searchParams] = useSearchParams();

  const language = searchParams.get("language");
  let i18n;
  if (language == 'es') {
    i18n = i18nEs
  } else {
    i18n = i18nEng
  }

  const context = {
    isMobile,
    i18n
  }

  return (
    <AppContext.Provider value={context}>
      <HomePage />
    </AppContext.Provider>
  )
}
export default CvApp;