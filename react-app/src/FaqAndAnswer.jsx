import "./index.css";
import { QuestionsData, AnswersData } from "../faqData";

export function FaqAndAnswer({ openQuestion, handleClick }) {
  return (
    <>
      <div className="faq-container">
        <div className="logo">
          <img src="/images/icon-star.svg" alt="" />
          <h1>FAQs</h1>
        </div>
        <div className="questions">
          {QuestionsData.map((item) => {
            const isOpen = openQuestion === item.id;
            const foundAnswer = AnswersData.find(
              (answer) => answer.id === item.id,
            );
            return (
              <>
                <div className="main-container">
                  <div className="question-item" key={item.id}>
                    <p className="question">{item.question}</p>
                    <button
                      onClick={() => handleClick(item)}
                      aria-expanded={isOpen}
                      aria-label={item.question}
                    >
                      <img
                        src={
                          isOpen
                            ? "./images/icon-minus.svg"
                            : "./images/icon-plus.svg"
                        }
                        alt=""
                      />
                    </button>
                  </div>
                  {isOpen && foundAnswer && (
                    <p className="answer">{foundAnswer.answer}</p>
                  )}
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
