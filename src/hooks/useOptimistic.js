import { useState } from "react";

function useOptimistic(initialState, callback) {
  const [state, setState] = useState(initialState);

  const setOptimisticState = async (newState) => {
    const previousState = state;
    setState(newState);

    try {
      await callback(newState);
    } catch (error) {
      setState(previousState);
      throw error;
    }
  };

  return [state, setOptimisticState];
}

export default useOptimistic;
