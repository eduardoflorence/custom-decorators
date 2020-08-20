export function Storage(key: string): PropertyDecorator {
  return (target: any, propertyName: string) => {

    let value = target[propertyName];

    const getter = () => {
      console.log(value);
      if (value) {
        return value;
      }
      value = localStorage.getItem(key);
      return value;
    };

    const setter = (newValue) => {
      value = newValue;
      localStorage.setItem(key, newValue);
    };

    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });

  };
}
