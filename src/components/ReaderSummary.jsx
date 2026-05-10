function ReaderSummary({ prompts, responses }) {
  const answered = Object.entries(responses).filter(([, response]) => response?.intensity != null);
  const averageConviction =
    answered.length === 0
      ? 0
      : Math.round(
          answered.reduce((total, [, response]) => total + Number(response.intensity || 0), 0) /
            answered.length,
        );

  const dominantThread =
    answered.length === 0
      ? "The book has not collected enough reflection points yet."
      : "Your answers treated intelligence less like a fixed essence and more like a question of relation, effect, and context.";

  return (
    <div className="reader-summary">
      <p className="eyebrow">Reader Summary</p>
      <h4>Your path through the essay</h4>
      <p>{dominantThread}</p>
      <div className="summary-meter">
        <span>Average convincingness</span>
        <strong>{averageConviction}%</strong>
      </div>
      {answered.length > 0 ? (
        <ul>
          {answered.map(([id, response]) => (
            <li key={id}>
              <span>{prompts[id]?.question}</span>
              <strong>{response.intensity}%</strong>
            </li>
          ))}
        </ul>
      ) : (
        <p className="summary-empty">Answer the reflection prompts while reading to generate a fuller summary.</p>
      )}
    </div>
  );
}

export default ReaderSummary;
