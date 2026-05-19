import { useState } from 'react'
import './App.css'

let nextId = 1

export default function App() {
  const [tasks, setTasks] = useState([])
  const [input, setInput] = useState('')

  function addTask() {
    const text = input.trim()
    if (!text) return
    setTasks(prev => [...prev, { id: nextId++, text, done: false }])
    setInput('')
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, done: !t.done } : t)
    )
  }

  function deleteTask(id) {
    setTasks(prev => prev.filter(t => t.id !== id))
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter') addTask()
  }

  const remaining = tasks.filter(t => !t.done).length

  return (
    <div className="board">
      <div className="card">
        <h1 className="title">タスクボード</h1>

        <div className="input-row">
          <input
            className="task-input"
            type="text"
            placeholder="タスクを入力..."
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="add-btn" onClick={addTask}>追加</button>
        </div>

        {tasks.length > 0 && (
          <p className="summary">
            {remaining > 0 ? `残り ${remaining} 件` : '全て完了！'}
          </p>
        )}

        <ul className="task-list">
          {tasks.map(task => (
            <li key={task.id} className={`task-item ${task.done ? 'done' : ''}`}>
              <input
                type="checkbox"
                className="checkbox"
                checked={task.done}
                onChange={() => toggleTask(task.id)}
              />
              <span className="task-text">{task.text}</span>
              <button
                className="delete-btn"
                onClick={() => deleteTask(task.id)}
                aria-label="削除"
              >
                ×
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="empty">タスクがありません。追加してみましょう！</p>
        )}
      </div>
    </div>
  )
}
