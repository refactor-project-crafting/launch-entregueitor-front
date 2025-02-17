export interface UiContextValue {
  isShowingFeedback: boolean;
  isError: boolean;
  message: string;
  setFeedbackMessage(message: string, isError?: boolean): void;
}
