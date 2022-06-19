# `useDebug` 🐛

React hook that returns a function that logs arguments in a different production environment.

## Usage

```jsx
import { useEffect, useState } from "react";
import { useDebug } from "@mannoeu/custom-hooks";

const Demo = ({ url }) => {
  const [data, setData] = useState([{ name: "foo" }, { name: "bar" }]);
  const debug = useDebug();

  useEffect(() => {
    debug.log("Load data =>", data);
  }, []);

  const handleClick = (item) => {
    debug.log("Click item =>", item);
  };

  return (
    <div>
      {data?.map((item, index) => (
        <p key={index} onClick={() => handleClick(item)}>
          {item?.name}
        </p>
      ))}
    </div>
  );
};
```

## Reference

```ts
useDebug(active: boolean);
```
