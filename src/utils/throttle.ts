/* eslint-disable @typescript-eslint/no-explicit-any */

// Define the function type for this throttled function
type FuncType = (...args: any[]) => any;

export function throttle(func: FuncType, delay: number): FuncType {
  // Initialize the timeout ID and arguments 
  let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let lastArgs: any[];

    // Return the throttled function with the specified delay
    return function throttled(...args: any[]) {
      // Store the current arguments for the function call
      lastArgs = args;
  
      // If there is no timeout ID, set a new timeout for the function call 
      // with the specified delay
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          // Call the original function with the last stored argument and reset the timeout ID
          func(...lastArgs);
          timeoutId = undefined;
        }, delay);
      }
    };
  }