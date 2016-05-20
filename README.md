# react-stateless-input
Alternative to refs for your inputs inside your **React stateless components**, of course you can use this snippet with or without React and with any library.

## What is it ?

It's just two lines of ES6+ :
```js
let o, i, l = document.querySelectorAll('input:not([type=submit])')
for (i of l) { o = { ...o, [i.name]: i.value } } return o
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
    const { email, password } = inputs()
    login(email, password)
  }

  return(
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email"/>
      <input type="password" name="password" placeholder="Password"/>
      <input type="submit"/>
    </form>
  )

}

export default Login
```
