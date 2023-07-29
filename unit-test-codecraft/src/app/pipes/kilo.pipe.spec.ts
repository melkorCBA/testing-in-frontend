import { KiloPipe } from './kilo.pipe';

describe('Pipe: KiloPipe', () => {
  let pipe: KiloPipe | null;

  beforeEach(() => {
    pipe = new KiloPipe();
  });

  afterEach(() => {
    pipe = null;
  });

  it('should return input when input is less than 1k', () => {
    expect(pipe?.transform(900)).toEqual('900');
  });
  it('should return with "k" when input is not less than 1k', () => {
    expect(pipe?.transform(1900)).toEqual('1.9k');
  });
});
