// const heading = React.createElement(
//   "h1",
//   { },
//   "Hello form React"
// );

// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);

/* const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello from React"
);

console.log(heading); //return object

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);  */ //pass object to create h1 tag which is understand the browser

//render method is responsible to take the object and put it up and convert into the tag and put it into the DOM

/* -------------- Nested Elements----------- */

/* 
*
*
* <div id="parent">
*   <div id="child">
*       <h1></h1>
*   </div>
* </div>
*
*

*/

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm a h1 tag")
//   )
// );

// console.log(parent); //object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

// ----------------another nested element example-------------

/*
 *
 *
 * <div id="parent">
 *   <div id="child">
 *       <h1></h1>
 *       <p></p>
 *   </div>
 *   <div id="child">
 *       <h1></h1>
 *       <p></p>
 *   </div>
 * </div>
 *
 *
 */

// const parent = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement("h1", {}, "I'm a h1 tag"),
//     React.createElement("p", {}, "This is nested paragraph")
//   )
// );

/* this look so messy for that JSX will come to the picture */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("p", {}, "This is nested paragraph"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm a h1 tag"),
    React.createElement("p", {}, "This is nested paragraph"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);
