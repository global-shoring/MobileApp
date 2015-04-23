/**
 * Created by Janardhan on 03-04-2015.
 */

define(['angular','src/modules/news/controllers/newsController'],
    function(angular, newsController){

        return angular.module('adp.mobile.newsModule',[])
            .controller('adp.mobile.controllers.newsController', newsController);
    });
