const _ = require('lodash');
const fs = require('fs');
const mock = require('../mock_application.json');

const sortArray = (arr) => arr.sort((a, b) => {
  const x = a?.key;
  const y = b?.key;

  if (!x || !y) {
    throw new Error('The array of objects does not contain the property key, it cannot be sorted');
  }

  return ((x < y) ? -1 : ((x > y) ? 1 : 0));
});

const findRepeatedViews = (mockObject) => {
  let arrScenes = mockObject?.versions[0]?.scenes;

  if (arrScenes && arrScenes.length > 1) {
    // revert Sort array fields
    arrScenes = sortArray(arrScenes);
    arrScenes.forEach((item) => {
      // The payload contains as much 2 scenes that is why I do not sort, neither iterate
      if (item?.views && item?.views.length === 2) {
        if (_.isEqual(item.views[0], item.views[1])) {
          item.views.pop();
        }
      }
    });
  }

  return mockObject;
};

const findRepeatedFieldsFromItem = (item) => {
  let arrFields = item?.fields;

  if (arrFields && arrFields.length > 1) {
    // Sort array fields
    arrFields = sortArray(arrFields);
    arrFields.forEach((i, index) => {
      if (arrFields[index]?.key === arrFields[index + 1]?.key) {
        arrFields.splice(index, 1);
      }
    });
  }

  return mock;
};

const findRepeatedObjects = () => {
  let arrObjects = mock?.versions[0]?.objects;
  if (arrObjects && arrObjects.length > 1) {
    // Sort array objects
    arrObjects = sortArray(arrObjects);
    let isObjectDeleted;

    arrObjects.forEach((item, index) => {
      if (arrObjects[index]?.key === arrObjects[index + 1]?.key) {
        arrObjects.splice(index, 1);
        isObjectDeleted = true;
      }

      if (!isObjectDeleted) {
        findRepeatedFieldsFromItem(item);
        isObjectDeleted = false;
      }
    });
  }

  return mock;
};

const removeRepeatedParams = () => {
  const cleanApplicationJSON = JSON.stringify(findRepeatedViews(findRepeatedObjects()));
  fs.writeFileSync('./clean_application.json', cleanApplicationJSON);
  return cleanApplicationJSON;
};

module.exports = {
  removeRepeatedParams,
  findRepeatedViews,
  findRepeatedFieldsFromItem,
  findRepeatedObjects,
};
