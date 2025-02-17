import useUiContext from "../../ui/context/useUiContext";
import "./Feedback.css";

const Feedback: React.FC = () => {
  const { message, isError } = useUiContext();

  return (
    <div className="feedback-container">
      <div className={`feedback feedback--${isError ? "error" : "ok"}`}>
        {message}
      </div>
    </div>
  );
};

export default Feedback;
