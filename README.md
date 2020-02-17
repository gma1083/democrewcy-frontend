# To Run
> npm run install; npm run start

# context/index.tsx
Here we create our context. Think of it as a store of data. The interface *Store* is the shape of our data, defined with types from *types.tsx*. The reducer will perform actions on the state, and when the state is update the components that consume this state will re-render. We use the *React.createContext()* api to initiate the 'store'. It comes with a Provider and a Consumer component, one 'provides' data to it's children and the other 'consumes' data sent down by the parent. We define the AppProvider to pass the state and dispatch method to it's children (whichever component we call AppConsumer with in our render).

# context/actions.tsx
Define action creators to return objects describine what we're going to do

# context/reducer.tsx
Here we perform the state change by returning a new state object with our action applied.

# App.tsx
Public/Private route rendering

# /pages
Main views of the app

# /pages/Home
Home page. Renders whatever task we're currently running.

# Typescript/Code types
1. Make sure you have Simple React Snippets install
2. In your file type *sfc* and hit enter
3. Fill in the name, and interface
4. Use React.useState() for state
5. Make a dispatch call to update the context
6. To change the context data, look at it's interface the types it's composed of

# Context Flow
1. Define an action
2. Define a reducer
3. Dispatch action from component
4. Action flows to context
5. Context receives action
6. Context fires reducer to update state
7. React components with props from context re-render

# On Deck
1. Update *config/types* and *context* to match payloads from models
2. Create Forms for each task in */components/Tasks/* (example code in CreateEvent)
   Don't worry about submit, need to fix design for that
3. Set context from backend when user signs in
4. Create Actions + Reducers for more functionality
