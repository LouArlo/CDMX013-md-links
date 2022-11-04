const {extFile} = require ('../extFile');

describe('testear extFile', () => {
  test ('extFile es una función?', () => {
    expect ( typeof extFile).toBe('function')
  })
  test ('extrae la extención', () => {
    expect(extFile('C:\Users\Laboratoria\Desktop\LABORATORIA\CDMX013-md-links\test\mdtest\test.md')).toBe('.md')
  })
} )