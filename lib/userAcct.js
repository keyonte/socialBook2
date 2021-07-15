import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

const userSubmit = function(error, state){
    if (!error) {
        if (state === "signIn") {
            Meteor.logoutOtherClients();
        }
        if (state === "signUp") {

        }
    }
}
const userLogOut = function(){
    if (FlowRouter.getRouteName() != "index")
    FlowRouter.go("index");
}
Accounts.onLogout(function(){
    if(FlowRouter.getRouteName() != "index")
    FlowRouter.go("index");
});

AccountsTemplates.configure({
    showForgotPasswordLink: true,
    onSubmitHook: userSubmit,
    onLogoutHook: userLogOut

});
var pwd = AccountsTemplates.removeField('password');
AccountsTemplates.removeField('email');
AccountsTemplates.addFields([
    {
        _id: "username",
        type: "text",
        displayName: "username",
       required: true,
      miniLenght: 5,
    },
    {
        _id: 'email',
        type: 'email',
        displayName: "email",
        required: true,
        re: /.+@(.+){2,}\.(.+){2,}/,
        errStr: 'Invalid email',
    },
    
    pwd
]);