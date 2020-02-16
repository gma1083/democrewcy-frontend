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

export interface Group {
  name: string,
  description: string
};

export const groupData: Group[] = [{
  name: 'Larrys',
  description: 'da larrys group'
}, {
  name: 'Not Larrys',
  description: 'not da larrys group'
}, {
  name: 'Democrewcy',
  description: 'coding stuff'
}];

export interface User {
  firstName: string,
  lastName: string
};

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