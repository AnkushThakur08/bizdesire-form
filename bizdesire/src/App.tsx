import UserForm from "./components/form";
import { Provider } from "react-redux";
import "./App.css";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <div className="App">
          <h1>Candidate Document Submission Form</h1>
          <UserForm />
        </div>
      </Provider>
    </>
  );
}

export default App;
