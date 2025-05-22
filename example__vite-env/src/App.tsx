import "./App.css";

function App() {

  return (
    <>
      <div>
        <div>
          __APP_INFO__ is <pre>{JSON.stringify(__APP_INFO__, null, 4)}</pre>
        </div>
        <div>
          import.meta.env is{" "}
          <pre>{JSON.stringify(import.meta.env, null, 4)}</pre>
        </div>
      </div>
    </>
  );
}

export default App;
