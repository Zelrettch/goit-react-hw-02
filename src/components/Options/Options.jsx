import css from "./Options.module.css";

export default function Options({ stats, setStats, totalFeedback }) {
  function updateFeedback(option) {
    setStats({
      ...stats,
      [option]: stats[option] + 1,
    });
  }

  function handleReset() {
    setStats({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }
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
