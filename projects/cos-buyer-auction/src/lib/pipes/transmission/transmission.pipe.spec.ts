import { CosTransmissionPipe } from 'cos-buyer-auction';

describe('TransmissionPipe', () => {
  const pipe = new CosTransmissionPipe();

  it('transforms -1 to "N/A Transmission"', () => {
    expect(pipe.transform(-1)).toBe('N/A Transmission');
  });

  it('transforms 0 to "Manual Transmission"', () => {
    expect(pipe.transform(0)).toBe('Manual Transmission');
  });

  it('transforms 1 to "Automatic Transmission"', () => {
    expect(pipe.transform(1)).toBe('Automatic Transmission');
  });

  it('transforms 2 to "SemiAutomatic Transmission"', () => {
    expect(pipe.transform(2)).toBe('SemiAutomatic Transmission');
  });

  it('transforms 3 to "N/A Transmission"', () => {
    expect(pipe.transform(3)).toBe('N/A Transmission');
  });
});
