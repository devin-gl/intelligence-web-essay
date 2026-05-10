function ReaderPrompt({ id, question, response, onAnswer }) {
  const intensity = response?.intensity || 50;

  const setIntensity = (nextIntensity) => {
    onAnswer(id, { answer: "Convincingness", intensity: Number(nextIntensity) });
  };

  return (
    <div className="reader-prompt">
      <p>{question}</p>
      <label>
        <span>Convincingness</span>
        <input
          type="range"
          min="0"
          max="100"
          value={intensity}
          onChange={(event) => setIntensity(event.target.value)}
        />
      </label>
      <small>{intensity}% convincing</small>
    </div>
  );
}

export default ReaderPrompt;
