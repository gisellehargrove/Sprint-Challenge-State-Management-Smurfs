1. What problem does the context API help solve?

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
Actions are functions that dispatch to the reducers
Reducers handle the dispatches and return a new State
Store is what holds all the state for the React application.
Since the store holds every state for each component it represents the single source of data that renders the application


1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
If you have a big application with lots of components it would help to use Application state. If you have a small app it would be quicker to give each component their own state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
Redux-thunk is the middle-man between our action creator and our reducers. It is a function that returns another function.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
I like Redux. I actually understood what needs to happen and why you need to use something like redux. It is very interesting.
