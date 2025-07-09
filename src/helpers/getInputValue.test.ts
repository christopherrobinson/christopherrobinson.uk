describe('getInputValue', () => {
  it('should return the value from an input event', () => {
    const event = { currentTarget: { value: 'Test Value' } } as React.ChangeEvent<HTMLInputElement>;

    expect(getInputValue(event)).toBe('Test Value');
  });

  it('should return the value from a select event', () => {
    const event = { currentTarget: { value: 'Option 1' } } as React.ChangeEvent<HTMLSelectElement>;

    expect(getInputValue(event)).toBe('Option 1');
  });
});
