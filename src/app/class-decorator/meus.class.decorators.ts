// Decorator Factory
export function AutoUnsubscribe(): ClassDecorator {
  // Decorator Function
  return (target): void => {

    const destroyOriginal = target.prototype.ngOnDestroy;

    // override original ngOnDestroy
    target.prototype.ngOnDestroy = function(): void {

      // Procura por propriedades que receberam assinatura de um observable
      for (const prop of Object.keys(this)) {
        const property = this[prop];
        if (property && (typeof property.unsubscribe === 'function')) {
          property.unsubscribe();
          console.log(`unsubscribe ${prop}`);
        }
      }

      // Executa as instruções de ngOnDestroy da classe
      // onde o decorator foi aplicado
      if (destroyOriginal) {
        destroyOriginal.apply(this);
      }
    };

  };

}
