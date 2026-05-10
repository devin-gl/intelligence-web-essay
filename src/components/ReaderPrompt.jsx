function ReaderPrompt({ id, question, options = [], response, onAnswer }) {
  const answer = response?.answer || "";
  const intensity = response?.intensity || 50;

  const setAnswer = (nextAnswer) => {
    onAnswer(id, { answer: nextAnswer, intensity });
  };

  const setIntensity = (nextIntensity) => {
    onAnswer(id, { answer, intensity: Number(nextIntensity) });
  };

  return (
    <div className="reader-prompt">
      <p>{question}</p>
      <div className="prompt-options">
        {options.map((option) => (
          <button
            className={answer === option ? "is-selected" : ""}
            key={option}
            onClick={() => setAnswer(option)}
          >
            {option}
          </button>
        ))}
      </div>
      <label>
        <span>Conviction</span>
        <input
          type="range"
          min="0"
          max="100"
          value={intensity}
          onChange={(event) => setIntensity(event.target.value)}
        />
      </label>
      {answer && (
        <small>
          Local reflection only: {answer}, {intensity}% conviction.
        </small>
      )}
    </div>
  );
}

export default ReaderPrompt;
