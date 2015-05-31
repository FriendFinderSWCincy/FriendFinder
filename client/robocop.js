Meteor.subscribe('reports', function(){
  return Reports.find();
});


console.log(JSON.stringify(Reports.find({}, {sort: {createdAt: -1}})));
console.log(JSON.stringify(Meteor.user()));
console.log('ay', JSON.stringify(Meteor.userId()));
console.log ('Yo', JSON.stringify(Meteor.users.findOne({_id: Meteor.userId()})));
console.log ('Yo2', JSON.stringify(Meteor.users.findOne({_id: "2n98riesC5HgsszRk"})));

console.log ('Yo3', JSON.stringify(Conversations.findOne({})));
console.log(JSON.stringify(Meteor.users.find({_id: Meteor.userId()} )));