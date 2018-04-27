export const addAndMultiply = async (augend: number, addend: number, multiplier: number) => {
  const {multiply} = await import('./multiply');
  return multiply(augend + addend, multiplier);
}
