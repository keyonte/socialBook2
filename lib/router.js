import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

BlazeLayout.setRoot('.container');

const normal = FlowRouter.group();
const loggedIn = FlowRouter.group({
    triggersEnter: [
        function(context, redirect){
            if (!Meteor.userId()){
                if (context.route.name != 'index')
                redirect('index');

            }
        }
    ]
});


normal.route('/', {
    name: 'index',
    action() {
        BlazeLayout.render('app_layout', {nav: 'nav', header: 'signInForm'});

    },
    waitOn() {
        return Meteor.subscribe('noUser');
    }
});

loggedIn.route('/profiles', {
    name: "allProfiles",
    action() {
        BlazeLayout.render('app_layout', {nav: 'nav', mainBody:'myAccounts'});
    },

    waitOn(params) {
        return Meteor.subscribe('profData', params.pid);
    }
});

loggedIn.route('/profile/:pid', {
    name:"individualProfile",
    action(params) {
        let theProfile = profilesdb.find();
        BlazeLayout.render('app_layout', {nav: 'nav', mainBody:'viewProfile'});
    },
    waitOn(params) {
        return Meteor.subscribe('proDat', params.pid);
    }
});


FlowRouter.route('*', {
    action() {
        BlazeLayout.render('app_layout', {mainBody:'notFound'});
    }
});
