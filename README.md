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

The home page the user is brought to - currently just renders the View Dashboard task. It's also the first time we see a component subscribing to context.

    <AppConsumer>
        {(ctx: any) =>  <HomePresentation {...ctx} {...props} />}
    </App`enter code here`Consumer>
This is how we use the consumer to get context, then we render a component and pass down ctx and all props to it. We'll use this pattern whenever a component needs to use the context.
  

# /pages/LandingPage

Probably rename to LoginPage cause we do that here using the Form library from antd, it allows us to validate the input on submit. In the handleSubmit method we can make async calls to the backend and dispatch actions to update the ui state. We'll follow this pattern for every task form.

    const  LandingPageLoginView:  React.SFC<LandingPageProps> = (props) => {
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

Here we dynamically render the activeTask running in the app on a sub route under /tasks. This gives the task it's own route on /tasks/:taskId. We subscribe to context so we can dynamically render the activeTask.

  
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
**EmptyCard**
- **HorizontallyScrollable**: A small wrapper that allows us to continuously scroll left and right when data overflows the elements size.
- **PrivateRoute**: A component that uses security to render a component if the user has the allowed role to see it.
- **PublicRoute**: Renders a component for anyone to see.
- **RelatedAction**: A button with multi-level menus.
- **SequenceTask**: A way to string together a multi-page single task, or group together many tasks into one. 
- **Sidebar**: Provides the user with their friend messages and group links. Above that is the TaskBar.
- **Task**: A presentational wrapper component that all tasks should be wrapped in.  
- **TaskBar**: A dank AutoComplete search box from ant design. I loaded up the task json as the data source, so when you click on the task it updates the context activeTask to that, causing the app to re-route and render the task.

## Tasks
These components use the task framework. We will get the view/edit pages as a two for one deal since we can disable the form items for the view. This allows us to repurpose one component to get create, read, update, delete (if we want it). To start creating a task look at CreateEvent as an example to see how to use the ant design Form. All you need to do is define whatever form items you want, and I found all the possible types and put them in CreateEvent so we can just take from that example. Inside of the form you have a validate function. Remember the form validation from the landing page? More of that.

**Current Tasks**:
- CreateEvent
- CreateGroup
- CreateMotion
- CreateUser
- SequenceTaskExample
- ViewDashboard
- ViewGroup
- ViewProfile

  

# Context Flow

1. Define an action constant
2. Define an action creator
3. Define a reducer
4. Dispatch action from component
5. Action flows to context
6. Context receives action
7. Context fires reducer to update state
8. React components with props from context re-render


# To Do
1. Full details for all tasks we want. When the create and edit tasks run we are going to display the view task afterwords.
2. This means we'll want the data mapped to state, and for that we need data types because typescript, define them in `config/types.tsx`
3. Forms completely filled out, validated, making async backend calls, and any dispatching 

