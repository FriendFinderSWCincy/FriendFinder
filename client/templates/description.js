  Template.description.events({
    'click #descriptionFormSubmit': function(e, t) {
        e.preventDefault();

        var description = $('#description').val();
        Meteor.users.update(Meteor.userId(), {$set: {"profile.img": "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large"}});
          
          Meteor.users.update(Meteor.userId(), {$set: {"profile.description": description, "profile.hasFilledOutDescription": true}});
          
          Meteor.users.update(Meteor.userId(), {$set: {"profile.activities": activities, "profile.hasFilledOutActivities": true}}); //temp
          console.log(Meteor.user());
          console.log(Meteor.userId());
          //also set up image while we are at it.
          Meteor.users.update(Meteor.userId(), {$set: {"profile.img": "http://graph.facebook.com/" + Meteor.user().services.facebook.id + "/picture/?type=large"}});
          console.log(Meteor.user());
          Router.go('home');

        return false;
      }
  });