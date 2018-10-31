const hasArguments = (args: any[]): boolean => args.length > 0

const propNotFalsy = (prop: object | null | boolean): boolean => !!prop

const validateArguments = (props: any[]): any[] => props.filter(propNotFalsy)

export {
  hasArguments,
  propNotFalsy,
  validateArguments,
}
