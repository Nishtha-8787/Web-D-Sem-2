(/*<div id="msg">
  Hello React Learners!  
</div>*/)

const reactElement = React. createElement("div",{id:"msg"},
    "Hello React Learners!");

    const root= ReactDOM.createElement(document.getElementById("root"));
    root.render(reactElement);