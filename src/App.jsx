import ComponentWithRedux from './components/ComponentWithRedux';
import '../src/main.css';

function App() {
  return (
    <div className="maindiv" style={{ backgroundColor: `#fff` }}>
      <h1 className="text-center">Redux + createAsyncThunk</h1>
      <ComponentWithRedux />
    </div>
  );
}

export default App;
