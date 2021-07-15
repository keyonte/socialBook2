Session.set("filter", "All");
Template.profFilter.events({

    'click .js-males'(event){
        Session.set("filter", "Male");

    },
    'click .js-females'(event){
        Session.set("filter", "Female");

    },
    'click .js-showAll'(event){
        Session.set("filter", "All");
    }

});