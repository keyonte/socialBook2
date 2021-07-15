Template.signInForm.helpers({
    username(){
        return Meteor.user().username;
    }
});