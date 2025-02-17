import { PropsWithChildren, useCallback, useMemo, useState } from "react";
import UiContext from "./UiContext";
import { UiContextValue } from "./types";

const UiContextProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const [isShowingFeedback, setIsShowingFeedback] = useState(false);
  const [isError, setIsError] = useState(false);
  const [message, setMessage] = useState("");

  const setFeedbackMessage = useCallback((message: string, isError = false) => {
    setIsError(isError);
    setMessage(message);
    setIsShowingFeedback(true);

    setTimeout(() => {
      setIsShowingFeedback(false);
      setMessage("");
    }, 2000);
  }, []);

  const uiContextValue: UiContextValue = useMemo(
    () => ({
      isShowingFeedback,
      isError,
      message,
      setFeedbackMessage,
    }),
    [isError, isShowingFeedback, message, setFeedbackMessage]
  );

  return (
    <UiContext.Provider value={uiContextValue}>{children}</UiContext.Provider>
  );
};

export default UiContextProvider;
