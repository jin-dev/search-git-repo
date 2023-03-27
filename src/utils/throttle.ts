
type FuncType = (...args: any[]) => any;

export function throttle(func: FuncType, delay: number): FuncType {
    let timeoutId: ReturnType<typeof setTimeout> | undefined;
    let lastArgs: any[];
  
    return function throttled(...args: any[]) {
      lastArgs = args;
  
      if (!timeoutId) {
        timeoutId = setTimeout(() => {
          func(...lastArgs);
          timeoutId = undefined;
        }, delay);
      }
    };
  }