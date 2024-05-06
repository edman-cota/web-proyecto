import Router from './router';
import { NavigationProvider } from './hooks/useNavigate';

function App() {
  return (
    <NavigationProvider>
      <Router />
    </NavigationProvider>
  );
}

export default App;
