# To Run
> npm run install; npm run start

# context.tsx
Here we create our context. Think of it as a store of data. The interface `Store` is the shape of our data, defined with types from `types.tsx`. The reducer will perform actions on the state, and when the state is update the app re-renders. We use the `React.createContext()` api to initiate the 'store'. It comes with a Provider and a Consumer. We make the AppProvider which passes the state and dispatch method to it's children (whichever component we wrap with AppConsumer).

# App.tsx
Public/Private route rendering

# /pages
Main views of the app

# /pages/group
Main view of a group. Component `Group` consumes the context and we unpack it to pass all of it down to the Presentation layer.

# Typescript/Code types
1. Make sure you have Simple React Snippets install
2. In your file type `sfc` and hit enter
3. Fill in the name, and interface
4. Use React.useState() for state
5. Make a dispatch call to update the context
6. To change the context data, look at it's interface the types it's composed of