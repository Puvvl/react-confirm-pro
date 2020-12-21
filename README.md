# react-confirm-pro
Dialog callable component for React [Live demo](https://puvvl.github.io/react-confirm-pro/index.html)|[Examples](#user-content-code-examples)

[![npm version](https://badge.fury.io/js/react-confirm-pro.svg)](https://badge.fury.io/js/react-confirm-pro)

## Getting started

#### Install with NPM:

```
$ npm install react-confirm-pro --save
```

#### Install with Yarn:

```
$ yarn add react-confirm-pro
```
#### Options
| Attribute           | Type                                                                                                                                                                                 | Default                                                                                    | Description                                                                                                                                                                    |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| duration            | number                                                                                                                                                                               | 0\.4                                                                                       | Animation duration\.                                                                                                                                                           |
| delay               | number                                                                                                                                                                               | 0\.2                                                                                       | Animation body delay                                                                                                                                                           |
| animate             | \{<div style="margin\-left: 15px">in?: <a href="https://animate.style/" target="_blank">string</a>;<br/>out?: <a href="https://animate.style/" target="_blank">string</a>;</div>\} | \{<div style="margin\-left: 15px">in: "animate_fadeIn",<br/>out: "animate_fadeOut"</div>\} | For using custom in/out animation read the guide on <a href="https://animate.style/" target="_blank">Animate\.css</a><br />in: on Enter animation<br/>out: on Leave animation |
| className           | string                                                                                                                                                                               | \-                                                                                         | Container className                                                                                                                                                            |
| onClickOutside      | \(\) => void                                                                                                                                                                         | \-                                                                                         | Outside handler                                                                                                                                                                |
| closeOnClickOutside | boolean                                                                                                                                                                              | true                                                                                       | Outside check                                                                                                                                                                  |
| keyboardEvents      | \{<div style="margin\-left: 15px">escape?: boolean;<br/>submit?: boolean;</div>\}                                                                                                    | \{<div style="margin\-left: 15px">escape: true;<br/>submit: false</div>\}                  | Keyboard events                                                                                                                                                                |
| customUI            | \(\{<div style="margin\-left: 15px">onClose?: \(\) => void;<br/>onCancel: \(\) => void;<br/>onSubmit: \(\) => void;</div> \}\) => React\.ReactNode;                                  | \-                                                                                         | Custom Ui component                                                                                                                                                            |
| children            | React\.ReactNode\[\]                                                                                                                                                                 | \-                                                                                         | Children components                                                                                                                                                            |
| buttons             | \(\{<div style="margin\-left: 15px">onClose?: \(\) => void;<br/>onCancel: \(\) => void;<br/>onSubmit: \(\) => void;</div>\}\) => React\.ReactNode\[\];                               | \-                                                                                         | Action buttons                                                                                                                                                                 |
| title               | string<br />React\.ReactNode                                                                                                                                                         | \-                                                                                         | Component title                                                                                                                                                                |
| description         | string<br />React\.ReactNode                                                                                                                                                         | \-                                                                                         | Component description                                                                                                                                                          |
| onSubmit            | \(\) => void;                                                                                                                                                                        | \-                                                                                         | Submit action                                                                                                                                                                  |
| onCancel            | \(\) => void;                                                                                                                                                                        | \-                                                                                         | Cancel action                                                                                                                                                                  |
| closeButton         | React\.ReactNode                                                                                                                                                                     | \-                                                                                         | Close icon                                                                                                                                                                     |
| type                | light<br />dark                                                                                                                                                                      | light                                                                                      | Style type                                                                                                                                                                     |
| btnCancel           | string                                                                                                                                                                               | Cancel                                                                                     | Cancel button label                                                                                                                                                            |
| btnSubmit           | string                                                                                                                                                                               | Submit                                                                                     | Submit button label                                                                                                                                                            |

#### Code examples

[Other examples](https://github.com/Puvvl/react-confirm-pro/tree/main/example)

**Default example:**
```javascript
import React from 'react';
import ReactDOM from 'react-dom'
import { onConfirm } from 'react-confirm-pro';

function ReactConfirmProDemo() {
  const onClickLight = () => {
    onConfirm({
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
    })
  };
  return (
    <button type="button" onClick={onClick}>Click</button>
  );
}

const rootEl = document.getElementById('root')
ReactDOM.render(<ReactConfirmProDemo />, rootEl)
```

**Custom UI:**

```javascript
import React from 'react';
import ReactDOM from 'react-dom'
import { onConfirm } from 'react-confirm-pro';

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

function ReactCustomUIDemo() {
  const onClick = () => {
    onConfirm({
      onSubmit: () => {
        alert("Submit")
      },
      onCancel: () => {
        alert("Cancel")
      },
      customUI: CustomUI,
      className: "my-custom-ui-container"
    })
  };
  return (
	  <button onClick={onClick}>Click</button>
  );
}

const rootEl = document.getElementById('root')
ReactDOM.render(<ReactConfirmProDemo />, rootEl)
```
