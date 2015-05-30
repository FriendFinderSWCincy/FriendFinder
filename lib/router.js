Router.map(function(){

	this.route('home', {path: '/'});
	this.route('signup', {path: 'signup'});

	this.route('profile', {path: 'profile'});
	this.route('signupPage', {path: 'signupPage'});
	this.route('description', {path: 'description'});
	this.route('preferences', {path: 'preferences'});
	this.route('activities', {path: 'activities'});
	this.route('swipe', {path: 'swipe'});


	this.route('newMessage', {path:'newMessage'});
	this.route('messages', {path:'messages'});
	this.route('chatbox', {path:'chatbox'});

    this.route('swipe1', {path: 'swipe1'});
    this.route('swipe2', {path: 'swipe2'});
    this.route('swipe3', {path: 'swipe3'});
    this.route('swipe4', {path: 'swipe4'});
    this.route('swipe5', {path: 'swipe5'});
    this.route('Activities1', {path: 'Activities1'});

});

Router.configure({
	layoutTemplate: 'layout'
});