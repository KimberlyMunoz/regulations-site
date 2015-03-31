var expect = require('chai').expect;
var jsdom = require('mocha-jsdom');

/*
var MainView = require('../../source/views/main/main-view');
var Router = require('../../source/router');
var SidebarView = require('../../source/views/sidebar/sidebar-view');
var HeaderView = require('../../source/views/header/header-view');
var DrawerView = require('../../source/views/drawer/drawer-view');
var AnalyticsHandler = require('../../source/views/analytics-handler-view');

//Other libaries just including for coverage
var BreakawayEvents = require('../../source/events/breakaway-events');
var DrawerEvents = require('../../source/events/drawer-events');
var GaEvents = require('../../source/events/ga-events');
var HeaderEvents = require('../../source/events/header-events');
var MainEvents = require('../../source/events/main-events');
var ScrollStop = require('../../source/events/scroll-stop');
var SidebarEvents = require('../../source/events/sidebar-events');
*/

describe('App Init:', function() {
    'use strict';

    var $, app, regulation;

    jsdom();

    before(function (){
        $ = require('jquery');
        regulation = require('../../source/regulations');
        app = require('../../source/app-init');
    });

    beforeEach(function(){

    });

    xit('calls router', function(){

    });

});