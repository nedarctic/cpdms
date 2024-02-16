import React, { Component } from "react";
import {
  selecteItem,
  addTask,
  updateTask,
  deleteItem,
  addLink
} from "./store/actions";
import { connect } from "react-redux";
import TimeLine from "react-gantt-timeline";
import "./styles.css";

class App extends Component {
  constructor(props) {
    super(props);
  }

  onUpdateTask = (item, props) => {
    this.props.dispatch(updateTask(item, props));
  };

  onSelectItem = item => {
    this.props.dispatch(selecteItem(item));
  };

  addTask = () => {
    this.props.dispatch(addTask());
  };
  onCreateLink = item => {
    this.props.dispatch(addLink(item));
  };
  delete = () => {
    this.props.dispatch(deleteItem(this.props.selectedItem));
  };

  render() {
    return (
      <div className="app-container">
        <div className="nav-container">
          <div className="mode-container-title">Construction Project and Data Management Software (CPDMS)</div>
          <div className="operation-button-container">
            <div className="mode-button" onClick={this.addTask}>
              <svg height={30} width={30} viewBox="0 0 48 48">
                <path
                  fill="silver"
                  d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22h-8v8h-4v-8h-8v-4h8v-8h4v8h8v4z"
                />
              </svg>
            </div>
            <div className="mode-button" onClick={this.delete}>
              <svg height={30} width={30} viewBox="0 0 48 48">
                <path
                  fill="silver"
                  d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm10 22H14v-4h20v4z"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="time-line-container">
          <TimeLine
            data={this.props.data}
            selectedItem={this.props.selectedItem}
            links={this.props.links}
            onUpdateTask={this.onUpdateTask}
            onCreateLink={this.onCreateLink}
            onSelectItem={this.onSelectItem}
            selectedItem={this.props.selectedItem}
          />
        </div>
      </div>
    );
  }
}

const mapProps = state => {
  console.log(state);
  return {
    data: state.data,
    links: state.links,
    selectedItem: state.selectedItem
  };
};

export default connect(mapProps)(App);
