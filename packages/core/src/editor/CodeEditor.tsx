import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import requestCompletion from "./requestCompletion";

const CodeEditor = () => {
  const [code, setCode] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  const getSuggestions = async (inputText) => {
    const prompt = `Translate the following code snippet into a description:\n\n${inputText}\n\nDescription: `;
    const completion = await requestCompletion(prompt);

    if (completion) {
      // 在此处处理 GPT-3.5-turbo 返回的建议
      setSuggestions([{ text: completion }]);
    }
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    getSuggestions(value);
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const inputProps = {
    value: code,
    onChange: (event, { newValue }) => setCode(newValue),
    placeholder: "Type your code here"
  };

  return (
    <Autosuggest
      suggestions={suggestions}
      onSuggestionsFetchRequested={onSuggestionsFetchRequested}
      onSuggestionsClearRequested={onSuggestionsClearRequested}
      getSuggestionValue={(suggestion) => suggestion.text}
      renderSuggestion={(suggestion) => <div>{suggestion.text}</div>}
      inputProps={inputProps}
    />
  );
};

export default CodeEditor;
