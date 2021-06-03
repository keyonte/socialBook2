import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.container');

// Create index route
FlowRouter.route('/', {
    name: 'index',
    action() {
        // Do something here
        // After route is followed
        BlazeLayout.render('app_layout', {nav: 'nav', header: 'signInForm'});
    },
    waitOn(){
        return Meteor.subscribe('noUser');
    }
});

// Create profiles route
FlowRouter.route('/profiles', {
    name:"allProfiles",
    action() {
        BlazeLayout.render('app_layout', {nav: 'nav', mainBody:'myAccounts'});
    },
    waitOn(params) {
      return Meteor.subscribe('profData');
    }
});

// Create profile route to show an indiviual profile
FlowRouter.route('/profile/:pid', {
    action(params) {
        BlazeLayout.render('app_layout', {nav: 'nav', mainBody:'viewProfile'});
    },
    waitOn(params) {
      return Meteor.subscribe('proDat', params.pid);
    }
});

// Create 404 route (catch-all)
FlowRouter.route('*', {
    action() {
        // Show 404 error page
        BlazeLayout.render('app_layout', {mainBody: 'notFound'});
    }
});