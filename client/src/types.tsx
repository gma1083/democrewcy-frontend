export interface Event {
  name: string, 
  description: string, 
  startTime: string, 
  endTime: string
};

export interface Position {
  title: string,
  description: string
};

export interface Motion {
  title: string,
  description: string,
  proposedBy: Position
};

export interface Member {
  name: string,
  position: Position
};


export interface User {
  firstName: string,
  lastName: string
};


export interface Group {
  name: string,
  description: string,
  events: Event[],
  members: Member[],
  motions: Motion[],
};

export interface Task {
  key: string,
  title: string,
  component: string
};

export const taskData: Task[] = [{
  key: "create-group",
  title: 'Create a Group',
  component: 'CreateGroup'
},
{
  key: "create-user",
  title: 'Create a User',
  component: 'CreateUser'
},
{
  key: "create-event",
  title: 'Create an Event',
  component: 'CreateEvent'
},
{
  key: "create-motion",
  title: 'Create a Motion',
  component: 'CreateMotion'
},
{
  key: "view-my-profile",
  title: 'View my Profile',
  component: 'ViewProfile'
},
{
  key: "view-a-profile",
  title: 'View a Profile',
  component: 'ViewProfile'
}];

export const userData: User[] = [{
  firstName: 'larry',
  lastName: 'carter'
}, {
  firstName: 'larry',
  lastName: 'johnson'
}, {
  firstName: 'larry',
  lastName: 'fitz'
}, {
  firstName: 'larry',
  lastName: 'arnold'
}, {
  firstName: 'larry',
  lastName: 'bird'
}, {
  firstName: 'larry',
  lastName: 'jerry'
}, {
  firstName: 'larry',
  lastName: 'poppins'
}, {
  firstName: 'larry',
  lastName: 'david'
}];

export const eventData: Event[] = [{
  name: 'party time', 
  description: 'get crunk', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'chill time', 
  description: 'get chill', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'bday time', 
  description: 'bday party time', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'movie', 
  description: 'watch it', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'vegas', 
  description: 'win big', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'behamas', 
  description: 'git tan', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}, {
  name: 'antarctica', 
  description: 'git cold', 
  startTime: new Date().toString(), 
  endTime: new Date().toString()
}];

export const memberData: Member[] = [{
  name: 'tommy.pastrami',
  position: {
    title: 'President',
    description: 'prez'
  },
}, {
  name: 'bella.mortadella',
  position: {
    title: 'Vice President',
    description: 'vice'
  },
}, {
  name: 'johnny.roastbeef',
  position: {
    title: 'Janitor',
    description: 'janitor'
  },
}, {
  name: 'tammi.salami',
  position: {
    title: 'Secretary',
    description: 'sec'
  },
}, {
  name: 'shleeb.fleeb',
  position: {
    title: 'Speaker of the House',
    description: 'spkr'
  },
}, {
  name: 'butt.sniffer',
  position: {
    title: 'President Pro Tempore of the Senate',
    description: 'ppts'
  },
}, {
  name: 'jimmy.butthole',
  position: {
    title: 'Secretary of State',
    description: 'ss'
  },
}, {
  name: 'hugh.jass',
  position: {
    title: 'Secretary of the Treasury',
    description: 'st'
  },
}, {
  name: 'icee.weiner',
  position: {
    title: 'Secretary of Defense',
    description: 'sd'
  },
}];
 
export const motionData: Motion[] = [{
  title: 'do the thing',
  description: 'you know wut',
  proposedBy: {
    title: 'President',
    description: 'yeah boi'
  }
}, {
  title: 'not do the thing',
  description: 'not happenin',
  proposedBy: {
    title: 'Vice President',
    description: 'yeah dawg'
  }
}, {
  title: 'maybe do it',
  description: 'possible',
  proposedBy: {
    title: 'Secretary',
    description: 'not sure'
  }
}, {
  title: 'most likely do it',
  description: 'likely',
  proposedBy: {
    title: 'Temporeum Dude',
    description: 'tempo'
  }
}, {
  title: 'Poker',
  description: 'win big',
  proposedBy: {
    title: 'President',
    description: 'ya boi'
  }
}];

export const groupData: Group[] = [{
  name: 'Larrys',
  description: 'da larrys group',
  events: eventData,
  members: memberData,
  motions: motionData
}, {
  name: 'Not Larrys',
  description: 'not da larrys group',
  events: eventData,
  members: memberData,
  motions: motionData
}, {
  name: 'Democrewcy',
  description: 'coding stuff',
  events: eventData,
  members: memberData,
  motions: motionData
}];