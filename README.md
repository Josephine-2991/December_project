## Summary: JavaScript Basics, DOM, and React Basics

When using JavaScript in the context of the webpage, one thing that has to happen is the manipulation of the HTML elements on the webpage. For instance, the webpage can be altered using JavaScript by locating the element inside the DOM. The DOM highlights the elements of the webpage in the form of a tree that the script understands.
JavaScript targets elements using the following methods:
•	By ID, which targets one unique element and is the fastest technique
•	By tag name, which finds all elements of the same type
•   By class name
•	Using CSS selectors
•	BY HTML Object Collections
Finding elements by ID tends to be preferred because the identifier immediately points to a specific element. Other approaches may involve a variety of elements, all of which have to be handled separately.
At the core of the DOM, there is the document object. The document object is the entire webpage and is where every DOM transaction takes place. Using the document object, JavaScript has the ability to locate elements, modify text and style, append and delete elements, and write to the page. The document object, in a way, gives JavaScript complete control of the webpage.

## What is React and How It Works

React is a JavaScript library and not a framework. This implies it concentrates on a single area or task—the construction of user interfaces—but does not impose a set of strict guidelines on how an application can be organized as a whole. This means developers can use React with other tools or libraries to build different components of an application separately.
React is referred to as declarative for UI construction. That means you tell React what you want your UI to look like given the current state of the data. When you change the data, React updates the display for you automatically.
In React, the UI is driven by a concept called “state.” State is simply a data point that may vary as time progresses. As a developer, I do not work directly with DOM manipulations. I make a modification to the state, and React automatically renders my UI. This is easier to understand as I work toward a final result rather than focusing on a step-by-step DOM manipulation.


## Why React Is Fast

Altering the browser’s DOM directly takes time. This can lead to a poor user experience. This problem is resolved by using something called the Virtual DOM in React. The Virtual DOM preserves a copy of the UI in memory. When any data changes, it checks the new data with the previous data. The changed portions are then altered in the actual DOM. This takes place in something called tree reconciliation.
In a world without React, changing the UI forces you to render substantial parts of the page, which might undo input and consume resources. With React, only what’s changed is updated, and everything else is left untouched.

Components and the Other Concepts in React
React Apps rely on components. Components are reusable JavaScript functions which are reusable piece of UI. They receive input in terms of props and generate UI following that description. Components can contain other components. They also have their own UI state. Smaller components are used to build large applications.
React is named “React” because it reacts to changes in data. It senses changes in the state and automatically updates the view.

In conclusion, the power of React is in the data - UI mindset shift, trusting React to perform the DOM work, and component predictability and reusability. With this mindset understood and accepted, working with React becomes easy and delightful.


## Common React Hooks

React Hooks enable function components to handle state and effects as well as optimization with a clean and structured approach. Some common React hooks include:

1.	UseState 
The purpose of the `useState` hook is to add state variables to a component. State is a representation of the data that changes with time. The usage of the `useState` hook entails an initial value passed to it, in return; it provides an object containing the current state and a setter to update it. The setter can be named using a prefix of ‘set’ to meet the requirement. You are able to call the `useState` hook multiple times in a component.

2.	UseEffect 
This React hook is used to execute side-effect actions, for example, fetching data, dealing with the DOM, and adding an event listener. Generally, it automatically runs after each update, but there is a way to customize its execution through a dependency array. Another important feature provided by useEffect is cleanup, especially when unmounting components.

3.	UseRef 
This allows you to create a reference to a DOM node or a value that persists across renders. It is often used to directly interact with elements, such as focusing an input and/or clearing its value.

4.	UseCallback 
This React hook enhances the performance of the application by not recreating the callback functions every time the component re-renders. This is especially useful when transferring functions from the parent components to the child components.

5.	The useMemo 
This function is similar to the useCallback function, and it is used for 
memoizing the results of expensive function calls that are not necessary.

6.	UseContext
This is useful in preventing the "prop drilling" problem by enabling the sharing of data among multiple levels of components without the need to explicitly pass props.

7.	UseReducer 
This a substitute for useState when dealing with complex logic involving updates to the state, achieved through reducers. All the hooks combined make the applications built using React efficient, comprehensible, and maintainable.

