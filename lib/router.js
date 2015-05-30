Router.map(function(){

	this.route('home', {path: '/'});
	this.route('report', {path: 'report'});
	this.route('signup', {path: 'signup'});
	this.route('done', {path: 'done'});
	this.route('newMessage', {path:'newMessage'});
	this.route('messages', {path:'messages'});
	this.route('chatbox', {path:'chatbox'});
});

Router.configure({
	layoutTemplate: 'layout'
});