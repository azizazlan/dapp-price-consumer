import Metamaskonboard from './metamaskonboard';
import Priceconsumer from './priceconsumer';

function App() {
  const { ethereum } = window;
  if (!ethereum) {
    return (
      <div>
        <Metamaskonboard />
      </div>
    );
  }
  return (
    <div>
      <Priceconsumer />
    </div>
  );
}

export default App;
