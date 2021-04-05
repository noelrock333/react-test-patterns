import { createContext } from 'react';

const MyContextStore = createContext({
  counter: 0,
});

export default MyContextStore;