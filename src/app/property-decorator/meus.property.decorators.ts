// Decorator Factory
export function Storage(keyStorage: string): PropertyDecorator {
  // Decorator Function
  return (target: any, propertyName: string) => {

    let value = target[propertyName];

    const getter = () => {
      if (!(value === null || value === undefined)) {
        return value;
      }
      value = localStorage.getItem(keyStorage);
      return value;
    };

    const setter = (newValue) => {
      value = newValue;
      localStorage.setItem(keyStorage, newValue);
    };

    // override property definition
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

  };
}
