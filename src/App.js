import './App.css';
import Counter from './components/Counter';
import MyContextStore from './MyContextStore';
import useCounter from './components/Counter/useCounter';
import AddButton from './components/AddButton';
import CounterDisplay from './components/CounterDisplay';
import Sum from './components/Sum';

function App() {
  const { dispatch, counter } = useCounter();
  return (
    <MyContextStore.Provider value={{ dispatch, counter }}>
      <div className="App">
        <Counter />
        <CounterDisplay />
        <AddButton />
        <CounterDisplay />
        <AddButton />
        <Sum />
      </div>
    </MyContextStore.Provider>
  );
}

export default App;
