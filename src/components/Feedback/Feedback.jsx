import css from "./Feedback.module.css";

export default function Feedback({ stats, totalFeedback }) {
  const extendedStats = {
    ...stats,
    total: totalFeedback,
    positive: Math.round((stats.good / totalFeedback) * 100) + "%",
  };
  return (
    <ul>
      {Object.entries(extendedStats).map(([key, value], id) => {
        return (
          <li key={id} className={css.stat}>
            {key}: {value}
          </li>
        );
      })}
    </ul>
  );
}
