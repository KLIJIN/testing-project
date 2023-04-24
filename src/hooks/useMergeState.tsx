import { useState } from "react";

export function useMergeState(initial: any) {
  const [state, setState] = useState(initial);

  const mergeState = (changes: any) => {
    setState((prev: any) => {
      // debugger;
      return {
        ...prev,
        ...changes,
      };
    });
  };

  return [state, mergeState];
}
