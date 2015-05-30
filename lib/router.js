Router.map(function(){

	this.route('home', {path: '/'});
	this.route('signup', {path: 'signup'});
	this.route('profile', {path: 'profile'});
	this.route('signupPage', {path: 'signupPage'});
	this.route('description', {path: 'description'});
	this.route('preferences', {path: 'preferences'});
	this.route('activities', {path: 'activities'});
	this.route('swipe', {path: 'swipe'});

});

Router.configure({
	layoutTemplate: 'layout'
});