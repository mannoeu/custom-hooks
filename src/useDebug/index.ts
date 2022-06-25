import React from "react";
import PropTypes from "prop-types";

type UseDebugProps = {
  log: (args: any) => void;
};

/**
 * @param { boolean } active - If true, the component will print the information by calling the 'log' function
 * @returns Returns a function that prints the received arguments to the console
 * @example
 * const { log } = useDebug();
 */

export const useDebug = (active: boolean = true): UseDebugProps => {
  const [showLogs] = React.useState<boolean>(active);

  const log = React.useCallback(
    (...args) => {
      if (showLogs && process.env.NODE_ENV !== "production") {
        console.log(...args);
      }
    },
    [showLogs],
  );

  return { log };
};

useDebug.defaultProps = {
  active: true,
};

useDebug.propTypes = {
  active: PropTypes.bool,
};
