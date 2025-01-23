import { useState, useEffect } from "react";

import "./App.css";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

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
    <div>
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
