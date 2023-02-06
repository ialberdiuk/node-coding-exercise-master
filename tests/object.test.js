const { findRepeatedObjects } = require('../src/check.payload')
// Mock created from the original one removed the only repeated one
const mockWithoutRepeteadObject = require('./mocks/objects/no-repeated-objects.json')
// Mock was taken from the original array of objects and another object was included to the array of objects 
const mockTwoRepeatedObjects = require('./mocks/objects/two-repeated-objects.json')
// Mock taken from origin application JSON scheme, it contains only one repeated
const mockObjects = require('./mocks/objects/objects.json')


describe('testing-removed-duplicated-objects', () => {
  test('it should remove one repeated objects as key property has been found twice in the array of objects', () => {
    const originalLength = mockObjects.objects.length
    const response = findRepeatedObjects(mockObjects)
    // To have only one view as the repeated has been removed
    const totalDuplicatedObjectsRemoved = 1
    expect(originalLength - totalDuplicatedObjectsRemoved).toEqual(response.versions[0].objects.length);
  });

  test('it should remove two repeated objects as key property has been found twice in the array of objects', () => {
    const originalLength = mockTwoRepeatedObjects.objects.length
    const response = findRepeatedObjects(mockTwoRepeatedObjects)
    totalDuplicatedObjectsRemoved = 2
    expect(originalLength - totalDuplicatedObjectsRemoved).toEqual(response.versions[0].objects.length);
  });

  test('it should not remove any object as key property is unique for each key-pairs in the array of objects', () => {
    const originalLength = mockWithoutRepeteadObject.objects.length
    const response = findRepeatedObjects(mockWithoutRepeteadObject)
    expect(originalLength).toEqual(response.versions[0].objects.length);
  });
})  
