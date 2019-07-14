export const testing: any = createDecorator() as any

function createDecorator(): any {
  return function decoratorFactory(): any {
    let decoratorArguments: any[]

    const decorator = function logProperty<T>(target: any, key: string, descriptor: TypedPropertyDescriptor<T>) {
      console.log(`@testing ${key} descriptor:`, descriptor)
    }

    return decorator.apply(null, arguments as any)
  }
}
