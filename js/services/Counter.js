angular.module(appName).factory('Counter', function() {
    return {
        getList: function(userId) {
            return data;
        }
    };
});

var data = [
    { name:'Beef', number: 2, inc: 1 },
    { name:'Pork', number: 3, inc: 1 },
    { name:'Chicken', number: 4, inc: 1 },
    { name:'Fish', number: 5, inc: 1 },
    { name:'Tomato', number: 8, inc: 1 },
    { name:'Lettuce', number: 9, inc: 1 }
];