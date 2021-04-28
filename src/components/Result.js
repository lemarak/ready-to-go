const Result = ({ result }) => {
  return <div className={`box-result ${result ? "good" : "bad"}`}>No Way</div>;
};

export default Result;
