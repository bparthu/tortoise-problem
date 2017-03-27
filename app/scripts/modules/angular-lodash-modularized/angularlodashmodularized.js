'use strict';

/**
 * @ngdoc service
 * @name angularLodashModularized.lodash
 * @description
 * A factory to replace ngLodash, since Restangular already includes lodash as a dependency. This factory simply
 * wraps the globally scoped lodash object ("_") with a "lodash" factory that can be injected as a dependency.
 */
angular.module('angularLodashModularized', [])
    .factory('lodash', function () {
        return window._;
    });
