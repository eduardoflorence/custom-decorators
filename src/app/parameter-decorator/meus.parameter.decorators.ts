// Decorator Factory
export function Required(): ParameterDecorator {
  // Decorator Function
  return (target: any, key: string, index: number) => {
    const metadataKey = `__required_${key}_parameters`;  // __required_add_parameters

    // Inject metadata on class
    if (Array.isArray(target[metadataKey])) {
      target[metadataKey].push(index);
    } else {
      target[metadataKey] = [index];
    }

  };
}

// Decorator Factory
export function Validate(): MethodDecorator {
  // Decorator Function
  return (target: any, key: string, descriptor: PropertyDescriptor) => {
    console.log(target);

    const originalMethod = descriptor.value;

    // override original method
    descriptor.value = function(...args: any[]): void {
      const metadataKey = `__required_${key}_parameters`;
      const arrRequired = target[metadataKey]; // Array

      arrRequired?.forEach(index => {
        const arg = args[index];
        if (arg === null || arg === undefined) {
          throw new Error(`Ausência do ${index + 1}º parâmetro do método ${key} da classe ${target.constructor.name}`);
        }
      });

      originalMethod.apply(this, args);
    };

    return descriptor;

  };
}
