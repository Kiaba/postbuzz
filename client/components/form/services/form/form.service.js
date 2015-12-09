'use strict';

angular.module('postbuzzApp')
  .service('FormService', function () {
    this.hasError = function(form, field) {
      if(form.$submitted == false) {
        return false;
      }
      return form[field].$invalid;
    };
  });
