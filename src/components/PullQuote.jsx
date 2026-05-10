function PullQuote({ quote, attribution }) {
  return (
    <blockquote className="pull-quote">
      <p>&ldquo;{quote}&rdquo;</p>
      {attribution && <cite>{attribution}</cite>}
    </blockquote>
  );
}

export default PullQuote;
