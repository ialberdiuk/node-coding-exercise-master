### Application written in NODE JS to remove duplicated objects/fields from their application JSON Schema

**Assumptions**

To remove duplicated views (scenes) I did not iterate as I noticed the payload does not contain more than two views as much by scene

Loadsh (isEqual) has been only used to remove the views. It makes sense to remove same deep equal objects to avoid repeated views. However, for the properties 'objects' and their nested array of objects 'fields' I removed based on the equality of the key property value. It means I do not remove based on the equality of the whole object. I noticed that most of these objects contained the same values for their key-pairs but the _id. I assume the expectation of the challenge is to remove these as well. Also, I managed to sort the array of objects before iterate. It helps to delete the duplicated ones if any is found as it will be the next element with the property 'key' being duplicated

I would have loved to code unit test scenes (views) and fields (objects) but it was a bit time consuming. Anyway, I managed to cover 97.72% of the lines and 100% of the functions according to Jest coverage.

**Note**

With more time I would have counted repeated fields of the JSON programmatically in the unit tests instead of hardcoding (total props deleted)

npm i

npm start

npm run test

