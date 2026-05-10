function RichText({ children }) {
  return <span dangerouslySetInnerHTML={{ __html: children }} />;
}

export default RichText;
