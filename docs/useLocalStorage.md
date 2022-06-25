# `useLocalStorage` 🐛

React Hook for state storage with persistence using browser localStorage.

## Usage

```jsx
import { useLocalStorage } from "@mannoeu/custom-hooks";

const Demo = ({ url }) => {
  const [character, setCharacter] = useLocalStorage("Mike", "@character");

  const handleChange = ({ target }) => {
    const { value } = target;
    setCharacter(value);
  };

  return (
    <div>
      <p>Hi, {character}</p>
      <select name="character" value={character} onChange={handleChange}>
        {["Mike", "Will", "Eleven", "Max", "Dustin", "Lucas"].map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};
```

## Reference

```ts
useLocalStorage(key: string, initialValue: any);
```

## Props

| Prop name    | Default value | Description                                                                   | Example values                                                              |
| ------------ | ------------- | ----------------------------------------------------------------------------- | --------------------------------------------------------------------------- |
| key          | ""            | Unique key for the value persisted in storage.                                | <ul><li>@language</li><li>#persist_token</l><li>@persist:avatar</l></ul>    |
| initialValue | undefined     | An initial value for the variable if it has not yet been persisted to storage | <ul><li><pre>{}</pre></li><li><pre>[]</pre></l><li><pre>null</pre></l></ul> |
