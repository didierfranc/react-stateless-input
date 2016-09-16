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

## How to use it?

Just call the function to get an object containing each input as a key and its value as the corresponding value.
It is possible to provide a form name to filter the inputs for only that form. The second argument is a boolean; setting it to true will exclude disabled inputs.

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
    // const { email, password, choice, test, disabled } = inputs(null, true)
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
    <form id="thirdForm">
      <input type="text" name="disabled" placeholder="Disabled" disabled />
    </form>
  )

}

export default Login
```
