import React from 'react';
import ReactDOM from 'react-dom'
import '../src/react-confirm-pro.scss';
import { onConfirm } from '../src/index.tsx';
import "./demo.scss";

const defaultOptions = {
  title: (
    <h3>
      Are you sure?
    </h3>
  ),
  description: (
    <p>Do you really want to delete this records? This process cannot be undone.</p>
  ),
  onSubmit: () => {
    alert("Submit")
  },
  onCancel: () => {
    alert("Cancel")
  },
};

const CustomUI = ({
  onSubmit,
  onCancel
}) => (
  <div className="custom-ui">
    <h3>Are you sure?</h3>
    <p>Do you really want to delete this records? This process cannot be undone.</p>
    <div>
      <button onClick={onSubmit}>Yes</button>
      <button onClick={onCancel}>No</button>
    </div>
  </div>
)

function ReactConfirmProDemo() {
  const onClickLight = () => {
    onConfirm({
      ...defaultOptions,
    })
  };
  const onClickDark = () => {
    onConfirm({
      ...defaultOptions,
      type: "dark",
      btnSubmit: "Press Enter",
      btnCancel: "Press Escape",
      keyboardEvents: {
        escape: true,
        submit: true
      }
    })
  };
  const onClickCustomUI = () => {
    onConfirm({
      ...defaultOptions,
      customUI: CustomUI,
      className: "my-custom-ui-container"
    })
  };
  const onClickCustomButtons = () => {
    onConfirm({
      ...defaultOptions,
      buttons: ({ onSubmit, onCancel }) => (
        <div className="custom-buttons">
          <button onClick={onSubmit}>YES</button>
          <button onClick={onCancel}>NO</button>
        </div>
      ),
    })
  };
  return (
    <div className="react-confirm-pro__preview">
      <h1>React Confirm Pro</h1>
      <div className="react-confirm-pro__actions">
        <button type="button" onClick={onClickLight}>Light</button>
        <button type="button" onClick={onClickDark}>Dark</button>
      </div>
      <div className="react-confirm-pro__actions">
        <button type="button" onClick={onClickCustomUI}>Custom UI</button>
        <button type="button" onClick={onClickCustomButtons}>Custom Buttons</button>
      </div>
    </div>
    
  );
}

const rootEl = document.getElementById('root')
ReactDOM.render(<ReactConfirmProDemo />, rootEl)