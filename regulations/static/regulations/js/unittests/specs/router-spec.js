var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var sinonChai = require('sinon-chai');
var jsdom = require('mocha-jsdom');

chai.use(sinonChai);

describe('Router:', function() {
    'use strict';

    var $, Backbone, RegsRouter;

    var loadSpy;

    jsdom();

    before(function (){
        Backbone = require('backbone');
        $ = require('jquery');
        Backbone.$ = $;
        RegsRouter = require('../../source/router');

        console.log(RegsRouter);
        console.log(RegsRouter.loadSection(1084));

        //loadSpy = sinon.spy();
        loadSpy = sinon.spy(RegsRouter, 'loadSection');


        //Backbone.history.stop(); //stop the router
        //Backbone.history.start({ pushState: true });

    });

    it('/section route routes to /section', function(){
        //this.router.bind('route:loadSection', this.loadSpy);
        Backbone.history.navigate('1005-3/2014-20681', {trigger: true});
        expect(RegsRouter.loadSection).to.be.ok;
        expect(loadSpy).to.have.been.called();
    });

});