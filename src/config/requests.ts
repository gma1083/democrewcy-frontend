
export const getClassNames = () => ({
  method: 'get',
  url: `/mira/`
});

export const getClassProperties = (className: string) => ({
  method: 'get',
  url: `/mira/${className}`
});


export const createMotion = (motion: any) => ({
  method: 'post',
  url: '/createMotion',
  data: {
    className: 'Motion',
    title: motion.title,
    description: motion.description, 
    group: motion.group, 
    allowedVoteOptions: motion.allowedVoteOptions
  }
});

export const createEvent = (event: any) => ({
  method: 'post',
  url: '/createEvent',
  data: {
    className: 'Event',
    name: event.name,
    description: event.description,
    startTime: new Date(event.startDate).toString(),
    endTime: new Date(event.endTime).toString(),
    group: event.group,
  }
});

export const createGroup = (group: any) => ({
  method: 'post',
  url: '/mira/put',
  data: {
    className: 'Group',
    name: group.name,
    description: group.description,
    positions: group.positions,
    users: group.users,
    subGroups: group.subGroups
  }
});

export const createUser = (user: any) => ({
  method: 'post',
  url: '/createAccount',
  data: { 
    className: 'User',
    firstName: user.firstName, 
    lastName: user.lastName, 
    email: user.email, 
    password: user.password, 
    birthDate: user.birthDate
  } 
});

export const getUserWithPositionsPopulated = (userId: string) => ({
  method: 'post',
  url: `/mira/get`,
  data: {
    className: 'User',
    id: userId,
    positions: { 
      group: true
    }
  },
});

export const getUsers = () => ({
  method: 'post',
  url: '/mira/getInstances',
  data: {
    className: 'User',
    page: 0,
    pageSize: 100
  }
})