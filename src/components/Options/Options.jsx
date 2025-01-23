import css from "./Options.module.css";

export default function Options({
  stats,
  updateFeedback,
  handleReset,
  totalFeedback,
}) {
  return (
    <div>
      {Object.keys(stats).map((opt, id) => (
        <button
          onClick={() => updateFeedback(opt)}
          className={css.btn}
          key={id}
        >
          {opt}
        </button>
      ))}
      {totalFeedback > 0 && (
        <button onClick={handleReset} className={css.btn}>
          reset
        </button>
      )}
    </div>
  );
}
