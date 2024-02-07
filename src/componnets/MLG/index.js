import { useReducer } from "react";

const languageGreetingsList = [
  {
    id: "bfdf40eb-eec9-4a66-a493-752fe689f0d0",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png",
    buttonText: "English",
    imageAltText: "english",
  },
  {
    id: "0ceda891-2a0c-49e2-8c62-68e78180bac6",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png",
    buttonText: "Tamil",
    imageAltText: "tamil",
  },
  {
    id: "89537778-7a46-4c58-988c-0adc931d087c",
    imageUrl:
      "https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png",
    buttonText: "Telugu",
    imageAltText: "telugu",
  },
];

const reducer = (state, action) => {
  if (action.type === "setIndex") {
    return {
      ...state,
      index: action.payload,
    };
  }

  throw new Error("Errror Occured");
};

const MultiLinguialGreetings = () => {
  const [state, dispatch] = useReducer(reducer, { index: 0 });

  let { imageUrl, imageAltText } = languageGreetingsList[state.index];
  return (
    <div>
      <h1>MultiLinguialGreetings</h1>
      <button onClick={() => dispatch({ type: "setIndex", payload: 0 })}>
        English
      </button>
      <button onClick={() => dispatch({ type: "setIndex", payload: 1 })}>
        Tamil
      </button>
      <button onClick={() => dispatch({ type: "setIndex", payload: 2 })}>
        Telugu
      </button>
      <>
        <img
          style={{ height: "200px", width: "400px" }}
          src={imageUrl}
          alt={imageAltText}
        />
      </>
    </div>
  );
};

export default MultiLinguialGreetings;
