const { removeRepeatedParams } = require('../src/check.payload')
const mockApplicationSchema = require('./mocks/application/mock-app-schema.json')
const mockCleanApplicationSchema = require('./mocks/application/clean-application-schema.json')
const lodash = require('lodash')

describe('testing-removed-duplicated-objects', () => {
  test('it should remove repeated objects and repeated fields as well as the repeated views', () => {
    const response = removeRepeatedParams()
    // To have only one view as the repeated has been removed
    const totalDuplicatedViewsRemoved = 1
    expect(JSON.parse(response).versions[0].scenes[0].views.length + totalDuplicatedViewsRemoved).toEqual(mockApplicationSchema.versions[0].scenes[0].views.length)
    expect(mockCleanApplicationSchema).toEqual(JSON.parse(response))
  });
})  