Meteor.startup(function () {

});

Router.configure({
  layoutTemplate: 'ApplicationLayout'
});

Router.route('/', function () {
  console.log("You hit '/'");
  this.render("navBar", {to:"header"});
  this.render("playground", {to:"main"});
});

Template.playground.onRendered(function() {
$('h2').hide();

var handlerT1S1 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t1S1: ui.value}});
}, 50, { leading: false });

if (!this.$('#t1S1').data('uiSlider')) {
    $("#t1S1").slider({
        slide: handlerT1S1,
        min: 0,
        max: 100
    });
}

var handlerT1S2 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t1S2: ui.value}});
}, 50, { leading: false });

if (!this.$('#t1S2').data('uiSlider')) {
    $("#t1S2").slider({
        slide: handlerT1S2,
        min: 0,
        max: 100
    });
}

var handlerT2S1 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t2S1: ui.value}});
}, 50, { leading: false });

if (!this.$('#t2S1').data('uiSlider')) {
    $("#t2S1").slider({
        slide: handlerT2S1,
        min: 0,
        max: 100
    });
}

var handlerT2S2 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t2S2: ui.value}});
}, 50, { leading: false });

if (!this.$('#t2S2').data('uiSlider')) {
    $("#t2S2").slider({
        slide: handlerT2S2,
        min: 0,
        max: 100
    });
}

var handlerT3S1 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t3S1: ui.value}});
}, 50, { leading: false });

if (!this.$('#t3S1').data('uiSlider')) {
    $("#t3S1").slider({
        slide: handlerT3S1,
        min: 0,
        max: 100
    });
}

var handlerT3S2 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t3S2: ui.value}});
}, 50, { leading: false });

if (!this.$('#t3S2').data('uiSlider')) {
    $("#t3S2").slider({
        slide: handlerT3S2,
        min: 0,
        max: 100
    });
}

var handlerT4S1 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t4S1: ui.value}});
}, 50, { leading: false });

if (!this.$('#t4S1').data('uiSlider')) {
    $("#t4S1").slider({
        slide: handlerT4S1,
        min: 0,
        max: 100
    });
}

var handlerT4S2 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t4S2: ui.value}});
}, 50, { leading: false });

if (!this.$('#t4S2').data('uiSlider')) {
    $("#t4S2").slider({
        slide: handlerT4S2,
        min: 0,
        max: 100
    });
}

var handlerT5S1 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t5S1: ui.value}});
}, 50, { leading: false });

if (!this.$('#t5S1').data('uiSlider')) {
    $("#t5S1").slider({
        slide: handlerT5S1,
        min: 0,
        max: 100
    });
}

var handlerT5S2 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t5S2: ui.value}});
}, 50, { leading: false });

if (!this.$('#t5S2').data('uiSlider')) {
    $("#t5S2").slider({
        slide: handlerT5S2,
        min: 0,
        max: 100
    });
}

var handlerT6S1 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t6S1: ui.value}});
}, 50, { leading: false });

if (!this.$('#t6S1').data('uiSlider')) {
    $("#t6S1").slider({
        slide: handlerT6S1,
        min: 0,
        max: 100
    });
}

var handlerT6S2 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t6S2: ui.value}});
}, 50, { leading: false });

if (!this.$('#t6S2').data('uiSlider')) {
    $("#t6S2").slider({
        slide: handlerT6S2,
        min: 0,
        max: 100
    });
}

var handlerT7S1 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t7S1: ui.value}});
}, 50, { leading: false });

if (!this.$('#t7S1').data('uiSlider')) {
    $("#t7S1").slider({
        slide: handlerT7S1,
        min: 0,
        max: 100
    });
}

var handlerT7S2 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t7S2: ui.value}});
}, 50, { leading: false });

if (!this.$('#t7S2').data('uiSlider')) {
    $("#t7S2").slider({
        slide: handlerT7S2,
        min: 0,
        max: 100
    });
}

var handlerT8S1 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t8S1: ui.value}});
}, 50, { leading: false });

if (!this.$('#t8S1').data('uiSlider')) {
    $("#t8S1").slider({
        slide: handlerT8S1,
        min: 0,
        max: 100
    });
}

var handlerT8S2 = _.throttle(function(event, ui) {
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {t8S2: ui.value}});
}, 50, { leading: false });

if (!this.$('#t8S2').data('uiSlider')) {
    $("#t8S2").slider({
        slide: handlerT8S2,
        min: 0,
        max: 100
    });
}

});

// var playAllClick = function () {
//     console.log("clikc!!!!");
//     var val = MusicMachine.findOne({});
//     if (val.start == 0)
//     {
//     Session.set('startdac', 1);
//     MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
//     }
// }
// 
// function stopAllClick() {
//     var val = MusicMachine.findOne({});
//     if (val.start == 1)
//     {
//     Session.set('startdac', 0);
//     MusicMachine.update({ _id: val._id }, {$set: {start: 0}});
//     }
// }