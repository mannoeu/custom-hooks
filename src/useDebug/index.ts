import React from "react";
import PropTypes from "prop-types";

type UseDebugProps = {
  log: (args: any) => void;
};

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
