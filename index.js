const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      if (Array.isArray(collection)) {
        // collection.forEach(element => callback(element));
        for (let i = 0; i < collection.length; i++) {
          callback.call(collection[i], i, collection);
        }
      } else {
        const entries = Object.entries(collection);
        for (let i = 0; i < entries.length; i++) {
          callback.call(entries[i][1], entries[i][0], collection);
        }
      }
      return collection;
    },

    map: function(collection, callback) {
      if (Array.isArray(collection)) {
        return collection.map(element => callback(element));
      } else {
        const result = [];
        for (let key in collection) {
          result.push(callback(collection[key]));
        }
        return result;
      }
    },

    reduce: function(collection, callback, acc) {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
