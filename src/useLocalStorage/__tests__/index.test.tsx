import { renderHook, act } from "@testing-library/react-hooks";

import { useLocalStorage } from "../index";

describe("useDebug tests", () => {
  it("should be defined", () => {
    expect(useLocalStorage).toBeDefined();
  });

  beforeAll(() => {
    localStorage.clear();
  });

  it("renders the hook correctly with object", () => {
    let key = "@test-object";
    const { result, unmount } = renderHook(() =>
      useLocalStorage({ test: true }, key),
    );

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual({ test: true });

    expect(typeof result.current[1]).toBe("function");
    localStorage.removeItem(key);
    unmount();
  });

  it("renders the hook correctly with initial value provided by localStorage [object]", () => {
    let key = "@test-object-storage";
    localStorage.setItem(
      "@test-object-storage",
      JSON.stringify({
        [key]: {
          storage: true,
        },
      }),
    );

    const { result, unmount } = renderHook(() => useLocalStorage({}, key));

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual({ storage: true });

    expect(typeof result.current[1]).toBe("function");
    localStorage.removeItem(key);
    unmount();
  });

  it("renders the hook correctly with number", () => {
    let key = "@test-number";
    const { result, unmount } = renderHook(() => useLocalStorage(2, key));

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual(2);

    expect(typeof result.current[1]).toBe("function");
    localStorage.removeItem(key);
    unmount();
  });

  it("renders the hook correctly with initial value provided by localStorage [number]", () => {
    let key = "@test-number-storage";
    localStorage.setItem(key, JSON.stringify({ [key]: 3 }));

    const { result, unmount } = renderHook(() => useLocalStorage(0, key));

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual(3);

    expect(typeof result.current[1]).toBe("function");
    localStorage.removeItem(key);
    unmount();
  });

  it("renders the hook correctly with string", () => {
    let key = "@test-string";
    const { result, unmount } = renderHook(() => useLocalStorage("Hello", key));

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual("Hello");

    expect(typeof result.current[1]).toBe("function");
    localStorage.removeItem(key);
    unmount();
  });

  it("renders the hook correctly with initial value provided by localStorage [string]", () => {
    let key = "@test-string-storage";
    localStorage.setItem(key, JSON.stringify({ [key]: "Hello" }));

    const { result, unmount } = renderHook(() => useLocalStorage("", key));

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual("Hello");

    expect(typeof result.current[1]).toBe("function");
    localStorage.removeItem(key);
    unmount();
  });

  it("renders the hook correctly with array", () => {
    let key = "@test-array";
    const { result, unmount } = renderHook(() => useLocalStorage([1, 2, 3], key));

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual([1, 2, 3]);

    expect(typeof result.current[1]).toBe("function");
    localStorage.removeItem(key);
    unmount();
  });

  it("renders the hook correctly with initial value provided by localStorage [array]", () => {
    let key = "@test-array-storage";
    localStorage.setItem(key, JSON.stringify({ [key]: [1, 2, 3] }));

    const { result, unmount } = renderHook(() => useLocalStorage([], key));

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual([1, 2, 3]);

    expect(typeof result.current[1]).toBe("function");
    localStorage.removeItem(key);
    unmount();
  });

  it("should update local state and storaged state", () => {
    let key = "@test-update";
    const { result, unmount } = renderHook(() => useLocalStorage([], key));

    expect(result.current[0]).toBeDefined();
    expect(result.current[0]).toEqual([]);
    expect(typeof result.current[1]).toBe("function");

    act(() => {
      result.current[1]([1, 2, 3]);
    });

    expect(result.current[0]).toEqual([1, 2, 3]);
    expect(JSON.parse(localStorage.getItem(key) ?? "{}")[key]).toEqual([1, 2, 3]);

    localStorage.removeItem(key);
    unmount();
  });
});
