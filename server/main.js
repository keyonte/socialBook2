import { Meteor } from 'meteor/meteor';
import '../lib/collection.js';
import '../lib/userAcct.js';

Meteor.startup(() => {
  // code to run on server at startup
});

Meteor.publish('profData', function(){
  return profilesdb.find({}, {
    // fields: {pOwn: 1} // 0 hides the field and 1 shows the field
  });
});

Meteor.publish('noUser', function(){
  return profilesdb.find({}, {
    fields: {pPic:1, pFisrt:1, pLast:1, pAge:1} // 0 hides the field and 1 shows the field
  });
});