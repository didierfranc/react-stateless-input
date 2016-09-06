# react-stateless-input
Alternative to refs for your inputs and selects inside your **React stateless components**, of course you can use this snippet with or without React and with any library.

## What is it ?

It's just a few lines of ES6+ :
```js
const baseSelector = formName ? `#${formName} ` : '';
const inputs = document.querySelectorAll(`${baseSelector}input:not([type=submit])`);
const selects = document.querySelectorAll(`${baseSelector}select`);
return [...inputs, ...selects].reduce((acc, cur) => (
  {
    ...acc,
    [cur.name]: cur.value,
  }
), {});
```

## Example

```js
npm install -S react-stateless-input
```
*Login.js*
```js
import React from 'react'
import inputs from 'react-stateless-input'

const Login = (props) => {

  const handleSubmit = (e) => {
    e.preventDefault()
    const { email, password, choice } = inputs("mainForm")
    // const { email, password, choice, test } = inputs()
    login(email, password)
  }

  return(
    <form id="mainForm" onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email"/>
      <input type="password" name="password" placeholder="Password"/>
      <select name="choice">
        <option value="1">#1</options>
        <option value="2">#2</options>
      </select>
      <input type="submit"/>
    </form>
    <form id="secondForm">
      <input type="text" name="test" placeholder="Test"/>
    </form>
  )

}

export default Login
```
