# 01 - React.createElement

In this example, I learned how to create elements using `React.createElement` without JSX.

## 📘 Key Notes
- `React.createElement` is the function React uses under the hood.
- Example:
  ```js
  const element = React.createElement(
    'h1',
    { className: 'title' },
    'Hello React without JSX!'
  );

