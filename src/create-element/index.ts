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
  const rawChildren: any[] = hasArguments(args) ? [...args] : [];
  const children: any[] = validateArguments(rawChildren)
  const props: object = ifElse(
    hasArguments(children),
    Object.assign({}, config, { children }),
    config,
  )
  return { type, props }
}
