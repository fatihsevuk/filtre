

var app=angular.module('myApp' , []);

app.controller('myCtrl' , function ($scope) {

  $scope.customer=[

    {
      ad:'ahmet',
      yas:35
    },

    {
      ad:'kadir',
      yas:23
    },

    {
      ad:'yasin',
      yas:12
    },

    {
      ad:'james',
      yas:45
    },

    {
      ad:'tarık',
      yas:26
    }



  ];

  $scope.order='yas';

});