import { useState, useEffect } from "react";

import css from "./App.module.css";
import Description from "../Description/Description";
import Feedback from "../Feedback/Feedback";
import Options from "../Options/Options";
import Notification from "../Notification/Notification";

export default function App() {
  const [stats, setStats] = useState(() => {
    const storedStats = window.localStorage.getItem("stats");
    return (
      JSON.parse(storedStats) ?? {
        good: 0,
        neutral: 0,
        bad: 0,
      }
    );
  });

  useEffect(() => {
    window.localStorage.setItem("stats", JSON.stringify(stats));
  }, [stats]);

  const totalFeedback = stats.good + stats.neutral + stats.bad;

  return (
    <div className={css.feedbackContainer}>
      <Description />
      <Options
        stats={stats}
        setStats={setStats}
        totalFeedback={totalFeedback}
      />
      {totalFeedback ? (
        <Feedback stats={stats} totalFeedback={totalFeedback} />
      ) : (
        <Notification />
      )}
    </div>
  );
}
