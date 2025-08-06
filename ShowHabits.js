import React, { useState, useEffect } from "react";

const ShowHabits = () => {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });
  const [newHabit, setNewHabit] = useState("");

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = () => {
    if (!newHabit.trim()) return;
    setHabits((prev) => [
      ...prev,
      { id: Date.now(), name: newHabit, done: false },
    ]);
    setNewHabit("");
  };

  const toggleDone = (id) => {
    setHabits((prev) =>
      prev.map((habit) =>
        habit.id === id ? { ...habit, done: !habit.done } : habit
      )
    );
  };


  const deleteHabit = (id) => {
    setHabits((prev) => prev.filter((habit) => habit.id !== id));
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>Your Habits</h2>
      <input
        placeholder="New Habit"
        value={newHabit}
        onChange={(e) => setNewHabit(e.target.value)}
        style={{ marginRight: 10 }}
      />
      <button onClick={addHabit}>Add Habit</button>

      {habits.length === 0 ? (
        <p>No habits yet. Add some!</p>
      ) : (
        <ul style={{ marginTop: 20 }}>
          {habits.map((habit) => (
            <li key={habit.id} style={{ marginBottom: 8 }}>
              <input
                type="checkbox"
                checked={habit.done}
                onChange={() => toggleDone(habit.id)}
              />
              <span
                style={{
                  marginLeft: 8,
                  textDecoration: habit.done ? "line-through" : "none",
                }}
              >
                {habit.name}
              </span>
              <button
                onClick={() => deleteHabit(habit.id)}
                style={{ marginLeft: 12 }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ShowHabits;
