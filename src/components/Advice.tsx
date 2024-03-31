import "./advice.css";

interface AdviceProps {
  advice: [];
}

const Advice = ({ advice }: AdviceProps) => {
  return (
    <>
      {advice?.map((x) => {
        return (
          <div key={x.id}>
            <p>Advice #{x.id}</p>
            <h2>'{x.advice}'</h2>
          </div>
        );
      })}
    </>
  );
};

export default Advice;
