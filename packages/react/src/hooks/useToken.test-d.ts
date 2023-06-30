import { expectTypeOf, test } from 'vitest'

import { useToken } from './useToken.js'

test('select data', async () => {
  const result = useToken({
    select(data) {
      return data?.name
    },
  })
  expectTypeOf(result.data).toEqualTypeOf<string | undefined>()
})
