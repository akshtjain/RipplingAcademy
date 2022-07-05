import './styles/App.css';

import { ShoppingProvider } from './context/ShoppingListContext';
import FastCart from './components/FastCart';
function App() {
  return (
    <ShoppingProvider>
      <FastCart/>
    </ShoppingProvider>
    
  );
}

export default App;
