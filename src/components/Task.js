import React from "react";
import PropTypes from "prop-types";


// サーバーを起動したり、フロントエンドアプリケーションを起動したりすることなく、コンポーネントを作りあげることができる
const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label
        htmlFor="checkd"
        className="checkbox"
        aria-label={`archiveTask-${id}`}
      >
        <input
          type="checkbox"
          disabled={true}
          name="checked"
          id={`archiveTask-${id}`}
          checked={state === "TASK_ARCHIVED"}
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(id)}
        ></span>
      </label>

      <label htmlFor="title" aria-label={title} className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          name="title"
          placeholder={"Input title"}
          style={{ textOverflow: 'ellipsis' }}
        />
      </label>

      {state !== "TASK_ARCHIVED" && (
        <button
          className="pin-button"
          onClick={() => onPinTask(id)}
          id={`pinTask-${id}`}
          aria-label={`pinTask-${id}`}
          key={`pinTask-${id}`}
        >
          <span className={`icon-star`} />
        </button>
      )}
    </div>
  );
};

// 型定義により開発中にタスクコンポーネントが間違って使用された際、警告が表示
// TypeScript など JavaScript の型システムで作成する方法もある
Task.propTypes = {
  // composition of the task
  task: PropTypes.shape({
    // Id of the Task
    id: PropTypes.string.isRequired,
    // title of the Task
    title: PropTypes.string.isRequired,
    // Current state of the Task
    state: PropTypes.string.isRequired,
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func,
};

export default Task;
