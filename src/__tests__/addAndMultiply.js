import {addAndMultiply} from '../addAndMultiply'


test('Should work', async () => {
  const actual = await addAndMultiply(1, 2, 3);
  expect(actual).toEqual(9);
})
