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
        <button onClick={() => updateFeedback(opt)} key={id}>
          {opt}
        </button>
      ))}
      {totalFeedback > 0 && <button onClick={handleReset}>reset</button>}
    </div>
  );
}
