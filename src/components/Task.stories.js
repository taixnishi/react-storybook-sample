import React from "react";

import Task from "./Task";
/**
 * Taskに対する3つのテスト用の状態を管理
 * ・Default
 * ・Pinned
 * ・Archived
 */

// torybook にコンポーネントを認識させるために必須。default export
export default {
  component: Task,// コンポーネント自体
  title: "Task",// StoryBookのサイドバーの見出し
};

const Template = (args) => <Task {...args} />;

/* 各状態のことをストーリーとして呼ぶ
 * ストーリーとは特定の状態で、描画された要素(例: プロパティをしてしたコンポーネント等)を返す関数
 * Reactの状態を持たない関数コンポーネントのようなもの
 * -----------------------
 * ストーリの定義方法
 * テスト用の状態ごとに、ストーリを生成する関数をエクスポートする
 */

// Template.bind({})で関数のコピーを作成する。
// 同じ実装を使いながら、エクスポートされたそれぞれのストーリーに独自のプロパティを設定することができる
export const Default = Template.bind({});
Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2021, 0, 1, 9, 0),
  },
};

export const Pinned = Template.bind({});
Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived = Template.bind({});

Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};


const longTitleString = `This task's name is absurdly large. In fact, I think if I keep going I might end up with content overflow. What will happen? The star that represents a pinned task could have text overlapping. The text could cut-off abruptly when it reaches the star. I hope not!`;

export const LongTitle = Template.bind({});
LongTitle.args = {
  task: {
    ...Default.args.task,
    title: longTitleString,
  },
};