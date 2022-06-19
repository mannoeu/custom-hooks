import { renderHook, act } from "@testing-library/react-hooks";

import { useDebug } from "../index";

describe("useDebug tests", () => {
  it("should be defined", () => {
    expect(useDebug).toBeDefined();
  });

  it("renders the hook correctly", () => {
    const { result, unmount } = renderHook(() => useDebug());

    expect(result.current.log).toBeDefined();
    expect(typeof result.current.log).toBe("function");
    unmount();
  });

  it("should not print to console for receiving 'false' with parameter", () => {
    jest.spyOn(global.console, "log").mockImplementation();
    const { result, unmount } = renderHook(() => useDebug(false));

    act(() => {
      result.current.log("logged-info-data");
    });

    expect(console.log).toBeCalledTimes(0);
    unmount();
  });

  it("should print the data in the console if NODE_ENV is different of production", () => {
    jest.spyOn(global.console, "log").mockImplementation();
    const { result, unmount } = renderHook(() => useDebug());

    act(() => {
      result.current.log("logged-info-data");
    });

    if (process.env.NODE_ENV !== "production") {
      expect(console.log).toHaveBeenCalledWith("logged-info-data");
    } else {
      expect(console.log).toBeCalledTimes(0);
    }
    unmount();
  });
});
