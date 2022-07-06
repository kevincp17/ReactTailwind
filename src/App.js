// import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter'
// import CounterArrow from './components/CounterArrow';
// import CounterHook from './components/CounterHook';
// import ChildName from './ParentChild/ChildName';
// import ParentName from './ParentChild/ParentName';
// import ParentComponent from './ParentChild/ParentComponent';
// import EmployeeList from './List/EmployeeList';
// import ChartItem from './List/ChartItem';
// import EmployeeForm from './form/EmployeeForm';
// import ChartList from './form/ChartList';
import CartListRedux from './View/CartListReduce';
import CartListToolkit from './View/CartListToolkit';
import RegionView from './ViewAPI/regionView';
import CountryView from './ViewAPI/countryView'
import LocationView from './ViewAPI/locationView'
import DepartmentView from './ViewAPI/departmentView'
import EmployeeView from './ViewAPI/employeeView'
import JobView from './ViewAPI/jobView';
import DependentView from './ViewAPI/dependentView';
function App() {
  return (
    <div>
      <RegionView/>
      <CountryView/>
      <LocationView/>
      <DepartmentView/>
      <EmployeeView/>
      <JobView/>
      <DependentView/>
    </div>
  );
}

export default App;