import './App.css';
import Header from './components/Header';
import Summaries from './components/Summaries';
import CustomizedInputBase from './components/CustomizedInputBase';
import Input from '@mui/material/Input';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Input /> */}
      {/* <Summary /> */}
      <CustomizedInputBase />
      <Summaries />
    </div>
  );
}

export default App;
