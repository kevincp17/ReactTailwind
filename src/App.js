// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter'
// import CounterArrow from './components/CounterArrow';
// import CounterHook from './components/CounterHook';
// import ChildName from './ParentChild/ChildName';
// import ParentName from './ParentChild/ParentName';
// import ParentComponent from './ParentChild/ParentComponent';
import EmployeeList from './List/EmployeeList';
import ChartItem from './List/ChartItem';
function App() {
  return (
    <div>
      <EmployeeList/>
      <ChartItem/>
    </div>
  );
}

export default App;