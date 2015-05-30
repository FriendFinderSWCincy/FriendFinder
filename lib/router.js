Router.map(function(){

	this.route('home', {path: '/'});
	this.route('report', {path: 'report'});
	this.route('signup', {path: 'signup'});
	this.route('done', {path: 'done'});

	this.route('newMessage', {path:'newMessage'});
	this.route('messages', {path:'messages'});
	this.route('chatbox', {path:'chatbox'});

    this.route('swipe1', {path: 'swipe1'});
    this.route('swipe2', {path: 'swipe2'});
    this.route('swipe3', {path: 'swipe3'});
    this.route('swipe4', {path: 'swipe4'});
    this.route('swipe5', {path: 'swipe5'});
ab5ebdb0bfbffedcd1e6d8cc5269663fabf1dfb6
});

Router.configure({
	layoutTemplate: 'layout'
});