import Alert from "./components/Alert";
import Button from "./components/Button";

const App = () => {
  return (
    <div>
      <Alert>
        Hello <span>World</span>
      </Alert>
      <Button text="primary" btnClassName="btn-primary" />
      <Button text="secondary" btnClassName="btn-secondary" />
      <Button text="success" btnClassName="btn-success" />
      <Button text="danger" btnClassName="btn-danger" />
    </div>
  );
};

export default App;
