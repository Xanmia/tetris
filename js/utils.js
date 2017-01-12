"use strict";

$.util = {};

window.requestAnimFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

$.utils = {
    contain: function (e) {
        var inbounds = true;
        if (e.y > $.H - e.h) {
            e.y = $.H - e.h;
            inbounds = false;
        }
        else if (e.y < 0) {
            e.y = e.h;
            // e.velocityY = 0;
            inbounds = false;
        }
        if (e.x < 0) {
            e.x = 0;
            inbounds = false;
        }
        else if (e.x > $.W - e.w) {
            e.x = $.W - e.w;
            inbounds = false;

        }
        return inbounds;
    },

    pickRandomFromObject: function (obj) {
        var keys = Object.keys(obj);
        return obj[keys[keys.length * Math.random() << 0]];
    },

    rotateArray: function (matrix) {
        var ret = [];

        for (var i = 0; i < matrix.length; i++) {
            ret[i] = [];
            for (var j = 0; j < matrix[i].length; j++) {
                ret[i][j] = matrix[matrix[i].length - j - 1][i];
            }
        }

        return ret;
    },

    norm: function (value, min, max) {
        return (value - min) / (max - min);
    },

    lerp: function (norm, min, max) {
        return (max - min) * norm + min;
    },

    map: function (value, sourceMin, sourceMax, destMin, destMax) {
        return utils.lerp(utils.norm(value, sourceMin, sourceMax), destMin, destMax);
    },

    clamp: function (value, min, max) {
        return Math.min(Math.max(value, min), max);
    }
}


