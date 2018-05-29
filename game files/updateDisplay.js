var initParams = false;
var disposeParams = false;
var updateParams = false;

var app = angular.module('goodLuck', []);
app.controller('displayCtrl', function($scope) {
    $scope.parameters = {};
    $scope.display = false;

    $scope.init = function () {
        if (initParams && !$scope.display) {
            if (game.level.selected.type == "platform") {
                $scope.parameters = game.level.platforms[game.level.selected.index];
                initParams = false;
            } else if (game.level.selected.type == "spikes") {
                $scope.parameters = game.level.spikes[game.level.selected.index];
                initParams = false;
            } else if (game.level.selected.type == "trigger") {
                $scope.parameters = game.level.triggers[game.level.selected.index];
                initParams = false;
            } else if (game.level.selected.type == "key") {
                $scope.parameters = game.level.keys[game.level.selected.index];
                initParams = false;
            } else if (game.level.selected.type == "player") {
                $scope.parameters = {
                    spawnX: game.level.spawnX,
                    spawnY: game.level.spawnY,
                    col: game.level.col
                }
                initParams = false;
            }
            initParams = false;
            $scope.display = true;
            console.log("Initialized");
        }
    }

    $scope.update = function () {
        if (updateParams) {
            if (game.level.selected.type == "platform") {
                $scope.parameters = game.level.platforms[game.level.selected.index];
            } else if (game.level.selected.type == "spikes") {
                $scope.parameters = game.level.spikes[game.level.selected.index];
            } else if (game.level.selected.type == "trigger") {
                $scope.parameters = game.level.triggers[game.level.selected.index];
            } else if (game.level.selected.type == "key") {
                $scope.parameters = game.level.keys[game.level.selected.index];
            } else if (game.level.selected.type == "player") {
                $scope.parameters.spawnX = game.level.spawnX;
                $scope.parameters.spawnY = game.level.spawnY;
                $scope.parameters.col = game.level.col;
            }
            console.log($scope.parameters);
            $scope.display = true;
            updateParams = false;
        }
        if ($scope.display) {
            console.log("display is on");
            if (game.level.selected.type == "platform") {
                game.level.platforms[game.level.selected.index].x = $scope.parameters.x;
                game.level.platforms[game.level.selected.index].y = $scope.parameters.y;
                game.level.platforms[game.level.selected.index].w = $scope.parameters.w;
                game.level.platforms[game.level.selected.index].h = $scope.parameters.h;
                game.level.platforms[game.level.selected.index].col = $scope.parameters.col;
                game.level.platforms[game.level.selected.index].topCol = $scope.parameters.topCol;
                game.level.platforms[game.level.selected.index].dx = $scope.parameters.dx;
                game.level.platforms[game.level.selected.index].dy = $scope.parameters.dy;
                game.level.platforms[game.level.selected.index].xSpeed = $scope.parameters.xSpeed;
                game.level.platforms[game.level.selected.index].ySpeed = $scope.parameters.ySpeed;
                game.level.platforms[game.level.selected.index].homeX = $scope.parameters.x;
                game.level.platforms[game.level.selected.index].homeY = $scope.parameters.y;
                $("#parameters").html('X: <input type="text" ng-model="parameters.x"><br>Y: <input type="text" ng-model="parameters.y"><br>Width: <input type="text" ng-model="parameters.w"><br> Height: <input type="text" ng-model="parameters.h"><br>Colour: <input type="text" ng-model"parameters.col"><br>Top Colour: <input type="text" ng-model="parameters.col"><br>Dx: <input type="text" ng-model="parameters.dx"><br>Dy: <input type="text" ng-model="parameters.dy"><br>XSpeed: <input type="text" ng-model="parameters.xSpeed"><br>YSpeed: <input type="text" ng-model="parameters.ySpeed">');
            } else if (game.level.selected.type == "spikes") {
                game.level.spikes[game.level.selected.index].x = $scope.parameters.x;
                game.level.spikes[game.level.selected.index].y = $scope.parameters.y;
                game.level.spikes[game.level.selected.index].w = $scope.parameters.w;
                game.level.spikes[game.level.selected.index].r = $scope.parameters.r;
                game.level.spikes[game.level.selected.index].col = $scope.parameters.col;
                game.level.spikes[game.level.selected.index].dx = $scope.parameters.dx;
                game.level.spikes[game.level.selected.index].dy = $scope.parameters.dy;
                game.level.spikes[game.level.selected.index].xSpeed = $scope.parameters.xSpeed;
                game.level.spikes[game.level.selected.index].ySpeed = $scope.parameters.ySpeed;
                game.level.spikes[game.level.selected.index].homeX = $scope.parameters.x;
                game.level.spikes[game.level.selected.index].homeY = $scope.parameters.y;
                $("#parameters").html('X: <input type="text" ng-model="parameters.x"><br>Y: <input type="text" ng-model="parameters.y"><br>Number: <input type="text" ng-model="parameters.w"><br>Rotation (1-4): <input type="text" ng-model="parameters.r"><br>Colour: <input type="text" ng-model="parameters.col"><br>Dx: <input type="text" ng-model="parameters.dx"><br>Dy: <input type="text" ng-model="parameters.dy"><br>XSpeed: <input type="text" ng-model="parameters.xSpeed"><br>YSpeed: <input type="text" ng-model="parameters.ySpeed">');
            } else if (game.level.selected.type == "trigger") {
                game.level.triggers[game.level.selected.index].x = $scope.parameters.x;
                game.level.triggers[game.level.selected.index].y = $scope.parameters.y;
                game.level.triggers[game.level.selected.index].w = $scope.parameters.w;
                game.level.triggers[game.level.selected.index].h = $scope.parameters.h;
                game.level.triggers[game.level.selected.index].func = $scope.parameters.func;
                $("#parameters").html('X: <input type="text" ng-model="parameters.x"><br>Y: <input type="text" ng-model="parameters.y"><br>Width: <input type="text" ng-model="parameters.w"><br>Height: <input type="text" ng-model="parameters.h"><br>Function: <input type="text" ng-model="parameters.func">');
            } else if (game.level.selected.type == "key") {
                game.level.keys[game.level.selected.index].x = $scope.parameters.x;
                game.level.keys[game.level.selected.index].y = $scope.parameters.y;
                game.level.keys[game.level.selected.index].doorX = $scope.parameters.doorX;
                game.level.keys[game.level.selected.index].doorY = $scope.parameters.doorY;
                game.level.keys[game.level.selected.index].w = $scope.parameters.w;
                game.level.keys[game.level.selected.index].h = $scope.parameters.h;
                $("#parameters").html('Key X: <input type="text" ng-model="parameters.x"><br>Key Y:<input type="text" ng-model="parameters.y"><br>Door X: <input type="text" ng-model="parameters.doorX"><br>Door Y: <input type="text" ng-model="parameters.doorY"><br>Width: <input type="text" ng-model="parameters.w"><br>Height: <input type="text" ng-model="parameters.h">');
            } else if (game.level.selected.type == "player") {
                game.level.spawnX = $scope.parameters.spawnX;
                game.level.spawnY = $scope.parameters.spawnY;
                game.level.col = $scope.parameters.col;
                console.log($scope.parameters.col);
                $("#parameters").html('X: <input type="number" ng-model="parameters.spawnX"><br>Y: <input type="number" ng-model="parameters.spawnY"><br>Colour: <input type="text" ng-model="parameters.col">');
            }
        }
    }

    $scope.dispose = function () {
        if (disposeParams) {
            $scope.display = false;
            $scope.parameters = {};
            $scope.ids = [];
            disposeParams = false;
            updateParams = false;
            console.log("Disposing");
        }
    }

    $scope.run = function () {
        $scope.dispose();
        $scope.init();
        $scope.update();
    }
})