angular.module('providers', [])
  .provider('sample', function(appConstants, anotherProvider){

    this.configureOptions = function(options){
      if(options.allow){
        anotherProvider.register(appConstants.ALLOW);
      } else {
        anotherProvider.register(appConstants.DENY);
      }
    };

    this.$get = function(){};
  });
