import illustrationMobile from "../static/images/illustration-woman-online-mobile.svg";
import illustrationDesktop from "../static/images/illustration-woman-online-desktop.svg";
import bgPatternMobile from "../static/images/bg-pattern-mobile.svg";
import bgPatternDesktop from "../static/images/bg-pattern-desktop.svg";
import boxIcon from "../static/images/illustration-box-desktop.svg";
import InfoPopupComponent from "./InfoPopupComponent";
import useBreakpoint from "../hooks/useBreakpoint";

const questionsAndAnswers = [
  {
    question: "How many team members can I invite?",
    answer:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    question: "What is the maximum file upload size?",
    answer:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    question: "Can I cancel my subscription?",
    answer:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    question: "Do you provide additional support?",
    answer:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function Card() {
  const { isAboveMd } = useBreakpoint("md");

  return (
    <div className="relative m-4 flex w-full flex-col items-center gap-y-8 rounded-3xl bg-white md:mx-14 md:h-[500px] md:w-[900px] md:flex-row">
      <img
        src={boxIcon}
        alt="Box icon"
        className="absolute left-0 top-[59%] hidden -translate-x-1/2 -translate-y-1/2 md:block"
      />
      <div
        className="
          md:overflow-hiddenmd:bg-[left_calc(140%)_center]
          flex h-full flex-col items-center justify-center 
          bg-no-repeat pb-8 
          md:basis-1/2 md:bg-[length:150%] md:bg-[left_calc(140%)_center]"
        style={{
          backgroundImage: isAboveMd
            ? `url(${bgPatternDesktop})`
            : `url(${bgPatternMobile})`,
        }}
      >
        <picture>
          <source media="(min-width: 768px)" srcSet={illustrationDesktop} />
          <img
            src={illustrationMobile}
            alt="Illustration"
            className="-mt-28 h-[185px] w-[243px] md:-ml-36 md:-mt-0 md:h-auto md:min-w-[450px]"
          />
        </picture>
      </div>
      <div className="flex h-full w-full max-w-[342px] flex-col justify-center px-6 pb-12 text-center md:basis-1/2 md:pb-0 md:pl-4 md:text-left">
        <h1 className="text-bold text-3xl font-bold text-black md:mb-6">FAQ</h1>
        {questionsAndAnswers.map((x) => (
          <InfoPopupComponent
            key={x.question}
            question={x.question}
            answer={x.answer}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
