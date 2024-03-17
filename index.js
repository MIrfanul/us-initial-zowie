const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const however = require("tea-however-sleep"),
	dismiss = require("x-dismiss-across"),
	first = require("x-first-boohoo"),
	amend = require("x-amend-beyond"),
	anguish = require("x-anguish-notarize"),
	blah = require("tea-blah-concede"),
	beneath = require("x-beneath-ill-fated"),
	usually = require("x-usually-longingly"),
	broil = require("x-broil-gadzooks"),
	repent = require("tea-repent-scorn"),
	truly = require("tea-truly-smooth"),
	worse = require("x-worse-clearly"),
	numeric = require("x-numeric-police"),
	fondue = require("x-fondue-indolent"),
	unlike = require("tea-unlike-often"),
	psst = require("tea-psst-yippee"),
	quiz = require("tea-quiz-commit"),
	cheery = require("x-cheery-messenger"),
	gosh = require("x-gosh-where"),
	slobber = require("tea-slobber-cucumber"),
	infect = require("x-infect-likewise"),
	rarely = require("x-rarely-opposite"),
	floor = require("tea-floor-align"),
	wearily = require("tea-wearily-well-lit"),
	steel = require("tea-steel-zowie"),
	fare = require("x-fare-barring"),
	beside = require("tea-beside-yowza"),
	attack = require("x-attack-yippee"),
	atop = require("x-atop-twister"),
	pfft = require("tea-pfft-along"),
	despite = require("x-despite-cruelly"),
	indeed = require("tea-indeed-workforce"),
	about = require("tea-about-minor"),
	lambkin = require("tea-lambkin-while"),
	begonia = require("tea-begonia-instead"),
	male = require("tea-male-zowie");

const USERNAME = "cortez.casper11",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
