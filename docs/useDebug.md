# `useDebug` 🐛

React hook that returns a function that logs arguments. You can control log visibility/hiding by sending the active parameter (true or false).
Don't worry, when `process.env.NODE_ENV === "production"` will not log.

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

## Props

| Prop name | Default value | Description                                                                | Example values                                                                      |
| --------- | ------------- | -------------------------------------------------------------------------- | ----------------------------------------------------------------------------------- |
| active    | `true`        | Defines if the logs should be shown or not in the development environment. | <ul><li>Enable logs: `useDebug()`</li><li>Disable logs: `useDebug(false)`</li></ul> |
