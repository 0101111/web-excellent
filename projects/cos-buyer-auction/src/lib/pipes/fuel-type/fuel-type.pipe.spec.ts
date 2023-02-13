import { CosFuelTypePipe } from 'cos-buyer-auction';

describe('FuelTypePipe', () => {
  const pipe = new CosFuelTypePipe();

  it('transforms -1 to "N/A"', () => {
    expect(pipe.transform(-1)).toBe('N/A');
  });

  it('transforms 0 to "Gasoline"', () => {
    expect(pipe.transform(0)).toBe('Gasoline');
  });

  it('transforms 1 to "Diesel"', () => {
    expect(pipe.transform(1)).toBe('Diesel');
  });

  it('transforms 2 to "Ethanol"', () => {
    expect(pipe.transform(2)).toBe('Ethanol');
  });

  it('transforms 3 to "NaturalGas"', () => {
    expect(pipe.transform(3)).toBe('NaturalGas');
  });

  it('transforms 4 to "BioDiesel"', () => {
    expect(pipe.transform(4)).toBe('BioDiesel');
  });

  it('transforms 5 to "Electric"', () => {
    expect(pipe.transform(5)).toBe('Electric');
  });

  it('transforms 6 to "Hybrid"', () => {
    expect(pipe.transform(6)).toBe('Hybrid');
  });

  it('transforms 7 to "BioFuel"', () => {
    expect(pipe.transform(7)).toBe('BioFuel');
  });

  it('transforms 8 to "Hydrogen"', () => {
    expect(pipe.transform(8)).toBe('Hydrogen');
  });
});
