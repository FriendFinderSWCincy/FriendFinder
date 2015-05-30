  Template.activities.events({
    'click #activitiesFormSubmit': function(e, t) {
        e.preventDefault();


        var activitiesCheckbox = $("input:checkbox:checked");
        var activities = [];

        for (var i = 0; i < activitiesCheckbox.length; i++){
        	console.log(i);
        	var activityId = activitiesCheckbox[i].id;
        	var activityText = $.trim($("label[for='" + activityId+ "']").text());
        	activities.push(activityText);
        	console.log(activities);
	        Meteor.users.update(Meteor.userId(), {$set: {"profile.activities": activities, "profile.hasFilledOutActivities": true}});
          	Router.go('swipe');
        }

/*
        var KiteGliding   = $('label[for=KiteGliding]').text();
        var Movies  = $('label[for=Movies]').text();
        var Dancing   = $('label[for=KiteGliding]').text();
        var KiteGliding   = $('label[for=KiteGliding]').text();
		var or_this = $('#pre-payment').next('label').text();
		//console.log(activities);
*/

          //Meteor.users.update(Meteor.userId(), {$set: {"profile.description": description}});
          //Router.go('activities');

        return false;
      }
  });




var text    = $('label[for=pre-payment]').text();
var or_this = $('#pre-payment').next('label').text();