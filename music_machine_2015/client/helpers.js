Template.playground.helpers({

// "startdac": function () {
//     
//     var starter = MusicMachine.findOne();
//     if (starter) {
//     if (starter.start==1) {
//         console.log("playAll");
//         playAll();
// 
//     } else if (starter.start==0)
//     {
//         stopAll();
//     }
//     }
// 
//     return Session.get('startdac');
// },

"track1": function () {

    var starter = MusicMachine.findOne();
    if (starter) {
    if (starter.track1==1) {
        //playTrack1();
        playTrack(player1);

    } else if (starter.track1==0) {

        //stopTrack1();
        stopTrack(player1);

    }
    }

    return Session.get('track1');
},

"track2": function () {
    var starter = MusicMachine.findOne();
    if (starter) {
    if (starter.track2==1) {
        //playTrack2();
        playTrack(player2);

    } else if (starter.track2==0) {

        //stopTrack2();
        stopTrack(player2);

    }
    }
    return Session.get('track2');
},

"track3": function () {
    var starter = MusicMachine.findOne();
    if (starter) {
    if (starter.track3==1) {
        // playTrack3();
        playTrack(player3);

    } else if (starter.track3==0) {

        //stopTrack3();
        stopTrack(player3);

    }
    }
    return Session.get('track3');
},

"track4": function () {
    var starter = MusicMachine.findOne();
    if (starter) {
    if (starter.track4==1) {
        // playTrack4();
        playTrack(player4);

    } else if (starter.track4==0) {

        // stopTrack4();
        stopTrack(player4);

    }
    }
    return Session.get('track4');
},

"track5": function () {
    var starter = MusicMachine.findOne();
    if (starter) {
    if (starter.track5==1) {
       // playTrack5();
       playTrack(player5);

    } else if (starter.track5==0) {

        //stopTrack5();
        stopTrack(player5);

    }
    }
    return Session.get('track5');
},

"track6": function () {
    var starter = MusicMachine.findOne();
    if (starter) {
    if (starter.track6==1) {
        //playTrack6();
        playTrack(player6);

    } else if (starter.track6==0) {

        //stopTrack6();
        stopTrack(player6);

    }
    }
    return Session.get('track6');
},

"track7": function () {
    var starter = MusicMachine.findOne();
    if (starter) {
    if (starter.track7==1) {
       // playTrack7();
       playTrack(player7);

    } else if (starter.track7==0) {

        //stopTrack7();
        stopTrack(player7);

    }
    }
    return Session.get('track7');
},

"track8": function () {
    var starter = MusicMachine.findOne();
    if (starter) {
    if (starter.track8==1) {
        //playTrack8();
        playTrack(player8);

    } else if (starter.track8==0) {

        //stopTrack8();
        stopTrack(player8);

    }
    }
    return Session.get('track8');
},



//don't forget the commas between each function
//the last one doesn't have to have one!


"t1S1Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t1S1').data('uiSlider').value(slider.t1S1);
    setSpeed(player1, slider.t1S1/50);
    return slider.t1S1;
    }
},
"t1S2Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t1S2').data('uiSlider').value(slider.t1S2);
    setVolume(player1, slider.t1S2/50);
    return slider.t1S2;
    }
},

"t2S1Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t2S1').data('uiSlider').value(slider.t2S1);
    setSpeed(player2, slider.t2S1/50);
    return slider.t2S1;
    }
},
"t2S2Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t2S2').data('uiSlider').value(slider.t2S2);
    setVolume(player2, slider.t2S2/50);
    return slider.t2S2;
    }
},

"t3S1Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t3S1').data('uiSlider').value(slider.t3S1);
    setSpeed(player3, slider.t3S1/50);
    return slider.t3S1;
    }
},
"t3S2Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t3S2').data('uiSlider').value(slider.t3S2);
    setVolume(player3, slider.t3S2/50);
    return slider.t3S2;
    }
},

"t4S1Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t4S1').data('uiSlider').value(slider.t4S1);
    setSpeed(player4, slider.t4S1/50);
    return slider.t4S1;
    }
},
"t4S2Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t4S2').data('uiSlider').value(slider.t4S2);
    setVolume(player4, slider.t4S2/50);
    return slider.t4S2;
    }
},

"t5S1Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t5S1').data('uiSlider').value(slider.t5S1);
    setSpeed(player5, slider.t5S1/50);
    return slider.t5S1;
    }
},
"t5S2Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t5S2').data('uiSlider').value(slider.t5S2);
    setVolume(player5, slider.t5S2/50);
    return slider.t5S2;
    }
},

"t6S1Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t6S1').data('uiSlider').value(slider.t6S1);
    setSpeed(player6, slider.t6S1/50);
    return slider.t6S1;
    }
},
"t6S2Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t6S2').data('uiSlider').value(slider.t6S2);
    setVolume(player6, slider.t6S2/50);
    return slider.t6S2;
    }
},

"t7S1Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t7S1').data('uiSlider').value(slider.t7S1);
    setSpeed(player7, slider.t7S1/50);
    return slider.t7S1;
    }
},
"t7S2Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t7S2').data('uiSlider').value(slider.t7S2);
    setVolume(player7, slider.t7S2/50);
    return slider.t7S2;
    }
},

"t8S1Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t8S1').data('uiSlider').value(slider.t8S1);
    setSpeed(player8, slider.t8S1/50);
    return slider.t8S1;
    }
},
"t8S2Val":  function() { 
var slider = MusicMachine.findOne();
if (slider) { 
    Template.instance().$('#t8S2').data('uiSlider').value(slider.t8S2);
    setVolume(player8, slider.t8S2/50);
    return slider.t8S2;
    }
},

});