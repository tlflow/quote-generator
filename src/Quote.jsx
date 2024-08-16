function Quote({ text, author }) {

  return (
    <div className="quote">
      <div className="playfair-display-text quote-text">{text}</div>
      <div className="quote-author">&mdash; {author}</div>
    </div>
  );
}

export default Quote;
