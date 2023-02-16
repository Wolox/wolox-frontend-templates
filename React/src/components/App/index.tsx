import { withContextProvider } from "@/context/UserContext";
import { BrowserRouter } from "react-router-dom";
import Routes from '../Routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  )
}

export default withContextProvider(App);
