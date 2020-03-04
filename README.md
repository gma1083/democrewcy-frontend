# Democrewcy

**To Run**

> npm run install; npm run start

  Time for a top-down run through of the code. You can follow on along in vs code.
  
# index.tsx

Here we render our app within a router and provide it with the context. This means that any component rendered in App can consume the context.

  

# App.tsx

Public/Private route rendering using higher order components and the routes config file to render each main page of the app. 

    const  CurrentComponent  = (Pages  as any)[route.name] ||  Pages.LandingPage;

This basically uses the Pages module exports as an object that can be indexed by a string and returns it's export. This is why we still need to instantiate (</>) it when we write:
  

    <PublicRoute
	    exact={route.exact}
	    path={route.route}
	    component={(props: any) =>  <CurrentComponent {...props} />}
	    key={`navroute-${route.route}`}
    />


# Pages


# /pages/Home

Currently just renders the ViewDashboard task. If we have an activeTask running though, redirect to the /tasks route to let the task page handle the task.
  

# /pages/LandingPage

Probably rename to LoginPage cause we do that here using the Form library from antd, it allows us to validate the input on submit. In the handleSubmit method we can make async calls to the backend and dispatch actions to update the ui state. We'll follow this pattern for every task form.

	  const  handleSubmit  =  async (e  :  FormEvent) => {
	    e.preventDefault();
    
	    props.form.validateFields(async (err  : any, values  : any) => 			{
		    if (!err) {
			    try {
				    const { email, password } =  values;
				    const  payload  = { email, password }
				    const  result  =  await  axios.post('auth/login', payload);
				    props.dispatch(setUser(result.data.accountId))
				    notification.success({message: 'Welcome!'})
			    }
			    catch (err) {
					message.error('Unable to log in. Please check yourself.')
	       }
       } 
       // more code
       
 



# /pages/Tasks

Here we dynamically render the activeTask running in the app on a sub route under /tasks. This gives the task it's own route on /tasks/:taskId. We subscribe to context so we can dynamically render the activeTask. It also redirects to the home page if no activeTask is set. When we hit the 'cancel' button in a task, it clears the activeTask state. So when this component re-renders, it routes us back to /home.

Task rendering: 
1. Do we have an activeTask?
2. Render a route with path /tasks/:taskId
3. Use TaskLayout to wrap the current task
4. What form to render in the task?
5. For 'create' tasks, just render the form using ActiveTask
6. If it's not a 'create', then it's an 'edit' or 'view', in which case we need some task context in order to run. 
7. If we do have that task context then render the form using ActiveTask
8. If we do not have task context, we need to use our ContextSelector component. It will allow the user to pick an instance which we will set as the task context.

  
  # Config
  

# config/tasks.tsx

Every ui task we want to do is required to have a config entry here. We load the task data into context, and then pages/Tasks uses it as well as the activeTask context variable to determine which component to select. It ain't much, but it's honest work.

  

# config/axios.tsx

Create the axios instance we will use to make http request in the app

  

# config/routes.tsx

All /pages components should have a route entry in here. This is what we use to render the pages in App.tsx

  

# config/types.tsx

All data types the app needs should go here.

  

# config/axios.tsx

Create the axios instance we will use to make http request in the app



  # Components

## Common
- **Actions** The footer for the form displaying in the active task. Has configurations to conditionally render the buttons if they are not needed for edit/create tasks, does not show buttons for view task.
- **ContextSelector** This form will render a Selector of instances, allowing the user to click one, and submit. We will use this instance as taskCtx on our context. Useful for our view and edit tasks if they do not have an instance to run on. Note: setFieldsValue and getFieldValue are methods supplied by antd Form, we pass them down to the Selector, so it knows what to do when we select an item.
- **EmptyCard**
- **HorizontallyScrollable**: A small wrapper that allows us to continuously scroll left and right when data overflows the elements size.
- **PrivateRoute**: A component that uses security to render a component if the user has the allowed role to see it.
- **PublicRoute**: Renders a component for anyone to see.
- **:wrench: RelatedAction**: A button with multi-level menus.
- **:wrench: SequenceTask**: A way to string together a multi-page single task, or group together many tasks into one . 
- **Selector**: Given a className, it will retreive all instances and put them in an antd Select, allowing us to pick things. Currently you can actually pick as many things as you want. But only the first thing you picked will be used. TODO: enforce singleSelect and multiSelect options.
- **Sidebar**: Provides the user with their friend messages and group links. Above that is the TaskBar.
- **TaskLayout**: A presentational wrapper component that all tasks are wrapped in. Look in the tasks page. We render this component with a form, all dynamically based on the active task from context.  
- **TaskBar**: A dank AutoComplete search box from ant design. uses the tasks in context so that when you click on the task it updates the context activeTask, causing the app to re-route and render the task.

## tasks
These are just forms. The main examples are CreateEvent and CreateUser. Just copy and paste to get started. Here are the steps to remember:
1. Copy an example form
2. Do a barrel roll (export the form from /tasks/index)
3. Define your form items, and their variables and rules
4. Implement handleSubmit validations, async request, dispatch, setState, etc.
5. Implement cancel

**Current Tasks**:
- CreateEvent
- CreateGroup
- CreateMotion
- CreateUser
- :wrench: Do Not Click - SequenceTaskExample
- ViewDashboard
- ViewGroup
- ViewProfile

  

# Context Flow

1. Define an action constant (what string describes what you want to do?)
2. Define an action creator (function that returns action object, what is your payload if any?)
3. Define a reducer (how will your action change the state of the app?)
4. Dispatch action from component (what component dispatches the action? onClick?)
7. Action flows to AppProvider reducer to update state
8. React components re-render with props from context 

