/*
 mixins

 This file adds helpful mixins to the Lodash library.

 */


//Return a defaultValue if value is null or undefined
_.mixin({
  isNullOrUndefined: function (value, defaultValue) {
    return _.isNull(value) || _.isUndefined(value) ? defaultValue : value;
  }
});

//Return a new object after applying a mapper function recursively to all properties.
_.mixin({
  mapObjectDeep: function (obj, mapper) {
    return mapper(_.mapValues(obj, function (o) {
      return _.isObject(o) ? _.mapObjectDeep(o, mapper) : o;
    }));
  }
});

//Return a new object with all properties converted to camelCase instead of TitleCase or snake_case.
_.mixin({
  camelCaseObject: function (obj) {

    var mapper = function (o) {
      return _.mapKeys(o, function (val, key) { return _.camelCase(key); })
    }

    return _.mapObjectDeep(obj, mapper);
  }
});

//Return a collection of objects with all properties converted to camelCase instead of TitleCase or snake_case.
_.mixin({
  mapCamelCase: function (col) {
    return _.map(col, function (o) {
      return _.camelCaseObject(o);
    })
  }
});
