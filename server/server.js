if (Meteor.isServer) {

  Meteor.startup(function() {

    return Meteor.methods({

      clearConversations: function() {

        return Conversations.remove({});

      }

    });

  });

}