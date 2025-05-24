import { Button, Input } from "@mono/components";
import { Button as Button1 } from "@mono/components/Button";
import { Input as Input1 } from "@mono/components/Input";
import { Button as Button2, Input as Input2 } from "@mono/components2";
import "@mono/components2/style.css";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Button size="small">Hello</Button>
        <Button>Hello</Button>
        <Button size="large">Hello</Button>
        <Input value={"Hello"} />
      </div>
      <div>
        <Button1 size="small">Hello</Button1>
        <Button1>Hello</Button1>
        <Button1 size="large">Hello</Button1>
        <Input1 value={"Hello"} />
      </div>
      <div>
        <Button2>Hello2</Button2>
        <Input2 value={"Hello2"} />
      </div>
    </>
  );
}

export default App;
