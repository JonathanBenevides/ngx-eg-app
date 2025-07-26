import { IdGenerator } from './id-generator.pipe';

describe('IdGenerator', () => {
  it('create an instance', () => {
    const pipe = new IdGenerator();
    expect(pipe).toBeTruthy();
  });
});
