import {
  hasArguments,
  validateArguments,
} from './helpers/index'

import { ifElse } from '../helpers/index'

interface ElementObject {
  type: string;
  props: object;
}

export default (
  type: string,
  config: object,
  ...args: any[]
): ElementObject => {
  const rawChildren: object[] = hasArguments(args) ? [...args] : [];
  const children: object[] = validateArguments(rawChildren)
  const props: object = ifElse(
    hasArguments(children),
    Object.assign({}, config, { children }),
    config,
  )
  return { type, props }
}
