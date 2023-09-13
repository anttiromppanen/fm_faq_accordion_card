import { useState } from "react";
import arrow from "../static/images/icon-arrow-down.svg";

interface Props {
  question: string;
  answer: string;
}

function InfoPopupComponent({ question, answer }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-userDividerBlue">
      <details className="w-full py-4" onToggle={() => setIsOpen(!isOpen)}>
        <summary className="list-none text-sm">
          <div className="flex items-center justify-between">
            <p className={`text-userTextVeryDarkBlue ${isOpen && "font-bold"}`}>
              {question}
            </p>
            <img
              src={arrow}
              alt="Arrow icon"
              className={`ml-2 h-2 transition-all duration-300 ${
                isOpen && "rotate-180"
              }`}
            />
          </div>
        </summary>
        <div className="mt-2 text-left">
          <p className="text-xs text-userTextDarkBlue">{answer}</p>
        </div>
      </details>
    </div>
  );
}

export default InfoPopupComponent;
