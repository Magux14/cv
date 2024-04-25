import { AppContext } from "./AppContext";
import { useDetectDevice } from "./hooks/useDetectDevice";
import HomePage from "./pages/HomePage";

export const CvApp = () => {
  const { isMobile } = useDetectDevice();
  const context = {
    isMobile
  }

  return (
    <AppContext.Provider value={context}>
      <HomePage />
    </AppContext.Provider>
  )
}
export default CvApp;