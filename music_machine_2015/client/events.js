Template.playground.events({
// 
//     "click button.startButton": function () {
//     var val = MusicMachine.findOne({});
//     if (val.start == 0)
//     {
//     Session.set('startdac', 1);
//     MusicMachine.update({ _id: val._id }, {$set: {start: 1}});
//     }
//     else{
//     Session.set('startdac', 0);
//     MusicMachine.update({ _id: val._id }, {$set: {start: 0}});
//     }
//     
// },


    "click button.track1On": function () {
    Session.set('track1', 1);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track1: 1}});

},
    "click button.track1Off": function () {
    Session.set('track1', 0);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track1: 0}});
},

    "click button.track2On": function () {
    Session.set('track2', 1);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track2: 1}});

},

    "click button.track2Off": function () {
    Session.set('track2', 0);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track2: 0}});

},
    "click button.track3On": function () {
    Session.set('track3', 1);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track3: 1}});

},

    "click button.track3Off": function () {
    Session.set('track3', 0);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track3: 0}});

},
    "click button.track4On": function () {
    Session.set('track4', 1);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track4: 1}});

},

    "click button.track4Off": function () {
    Session.set('track4', 0);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track4: 0}});

},

    "click button.track5On": function () {
    Session.set('track5', 1);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track5: 1}});

},

    "click button.track5Off": function () {
    Session.set('track5', 0);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track5: 0}});

},

    "click button.track6On": function () {
    Session.set('track6', 1);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track6: 1}});

},

    "click button.track6Off": function () {
    Session.set('track6', 0);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track6: 0}});

},

    "click button.track7On": function () {
    Session.set('track7', 1);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track7: 1}});

},

    "click button.track7Off": function () {
    Session.set('track7', 0);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track7: 0}});

},

    "click button.track8On": function () {
    Session.set('track8', 1);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track8: 1}});

},

    "click button.track8Off": function () {
    Session.set('track8', 0);
    var val = MusicMachine.findOne({});
    MusicMachine.update({ _id: val._id }, {$set: {track8: 0}});

},

});