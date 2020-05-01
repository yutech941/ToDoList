import React from "react";
import TodoCreator from "./TodoCreator";
import TodoList from "./TodoList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      //リスト表示データ
      listdata: [
        {
          id: this.createHashId(),
          title: "タイトル",
          content: "内容",
        },
      ],
      //タスク追加データ
      titleVal: "",
      contentVal: "",
    };

    this.handleChangeTitle = this.handleChangeTitle.bind(this);
    this.handleChangeContent = this.handleChangeContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  //リストのキー生成
  createHashId() {
    return Math.random().toString(36).slice(-16);
  }

  //タイトルのValue取得
  handleChangeTitle(e) {
    this.setState({
      titleVal: e.target.value,
    });
  }
  //コンテンツのValue取得
  handleChangeContent(e) {
    this.setState({
      contentVal: e.target.value,
    });
  }

  //ボタンクリックでリストにタスク追加
  handleClick() {
    let nextData = this.state.listdata;
    nextData.push({
      id: this.createHashId(),
      title: this.state.titleVal,
      content: this.state.contentVal,
    });
    this.setState({
      listdata: nextData,
      titleVal: "",
      contentVal: "",
    });
  }

  render() {
    return (
      <div>
        <div
          style={{
            margin: "100px 500px 0 500px",
          }}
        >
          <TodoCreator
            titleVal={this.state.titleVal}
            contentVal={this.state.contentVal}
            handleChangeTitle={this.handleChangeTitle}
            handleChangeContent={this.handleChangeContent}
            handleClick={this.handleClick}
          />

          {this.state.listdata.map((todo) => (
            <TodoList key={todo.id} title={todo.title} content={todo.content} />
          ))}
        </div>
      </div>
    );
  }
}
