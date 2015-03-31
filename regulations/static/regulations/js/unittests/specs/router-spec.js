var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var jsdom = require('mocha-jsdom');

describe('Router:', function() {
    'use strict';

    var $, Backbone, Router;

    jsdom();

    before(function (){
        Backbone = require('backbone');
        $ = require('jquery');
        Backbone.$ = $;
        //Router = require('../../source/router');


        //Backbone.history.stop(); //stop the router
        //sinon.spy(Router.prototype, 'index'); //spy on our routes, and they won't get called
        //sinon.spy(Router.prototype, 'route2');

        //router = new App.Router(); // Set up the spies _before_ creating the router
        //Backbone.history.start();

    });

    xit('empty route routes to index', function(){
        Backbone.history.navigate('', trigger);
        expect(router.index).toHaveBeenCalled();
    });

    it('works', function(){

    });
});