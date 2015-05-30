  Template.description.events({
    'click #descriptionFormSubmit': function(e, t) {
        e.preventDefault();

        var description = $('#description').val();



          Meteor.users.update(Meteor.userId(), {$set: {"profile.description": description, "profile.hasFilledOutDescription": true}});
          Router.go('activities');

        return false;
      }
  });