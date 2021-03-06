points = new Meteor.Collection('pointsCollection');
var canvas;

// we use these for drawing more interesting shapes
var lastX=0;
var lastY=0;
var strokeWidth = 1;
var thickness=1;
var strokeColor = "black";

Meteor.startup( function() {
  canvas = new Canvas();

  Deps.autorun( function() {
    var data = points.find({}).fetch();

    if (canvas) {
      canvas.draw(data);
    }
  });
});

Template.wall.events({

  "click button.clear": function (event) {
    Meteor.call('clear', function() {
      canvas.clear();
    });
  },

  //choose a color. Initialise the last vals, otherwise a stray line will appear.

  "click button.red": function () {
    lastX=0;
    lastY=0;
    strokeColor = "red";
  },

  "click button.black": function () {
    lastX=0;
    lastY=0;
    strokeColor = "black";
  },

  "click button.white": function () {
    lastX=0;
    lastY=0;
    strokeColor = "white";
  },

  "click button.blue": function () {
    lastX=0;
    lastY=0;
    strokeColor = "blue";
  },

  "click button.green": function () {
    lastX=0;
    lastY=0;
    strokeColor = "green";
  },
   "click button.grey": function () {
    lastX=0;
    lastY=0;
    strokeColor = "grey";
  },
   "click button.yellow": function () {
    lastX=0;
    lastY=0;
    strokeColor = "yellow";
  },
   "click button.purple": function () {
    lastX=0;
    lastY=0;
    strokeColor = "purple";
  },
     "click button.brown": function () {
    lastX=0;
    lastY=0;
    strokeColor = "brown";
  },
     "click button.gold": function () {
    lastX=0;
    lastY=0;
    strokeColor = "gold";
  },
     "click button.lightblue": function () {
    lastX=0;
    lastY=0;
    strokeColor = "lightblue";
  },
     "click button.darkblue": function () {
    lastX=0;
    lastY=0;
    strokeColor = "darkblue";
  },
     "click button.lightgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "lightgreen";
  },
     "click button.darkgreen": function () {
    lastX=0;
    lastY=0;
    strokeColor = "darkgreen";
  },
     "click button.lightgrey": function () {
    lastX=0;
    lastY=0;
    strokeColor = "lightgrey";
  },
     "click button.darkgrey": function () {
    lastX=0;
    lastY=0;
    strokeColor = "darkgrey";
  },

  "click button.thicker": function () {

    thickness+=1;

  },

  "click button.thinner": function () {
    
    if (thickness > 0) {
      thickness-=1;
    }
  },
  "click button.export": function () {
      //exportImage();
      Meteor.call('exportImage', function() {
      canvas.exportImage();
    });
  },



})

var markPoint = function(event) {
  var offset = $('#canvas').offset();
// In the first frame, lastX and lastY are 0.
// This means the line gets drawn to the top left of the screen
// Which is annoying, so we test for this and stop it happening.

      if (lastX==0) {// check that x was something not top-left. should probably set this to -1
        lastX = (event.pageX - offset.left);
        lastY = (event.pageY - offset.top);
      }
      
      points.insert({
 
        //this draws a point exactly where you click the mouse
         x: (event.pageX - offset.left),
         y: (event.pageY - offset.top),
         strokeColor : strokeColor,
         thickness : thickness
         
         
       });

        //We can do more interesting stuff
        //We need to input data in the right format
        //Then we can send this to d3 for drawing


        //1) Algorithmic mouse follower
      // x: (event.pageX - offset.left)+(Math.cos((event.pageX/10  ))*30),
      // y: (event.pageY - offset.top)+(Math.sin((event.pageY)/10)*30)});

        //2) draw a line - requires you to change the code in drawing.js
        // x: (event.pageX - offset.left),
        // y: (event.pageY - offset.top),
        // x1: lastX,
        // y1: lastY,
        // We could calculate the line thickness from the distance
        // between current position and last position
        //w: 0.05*(Math.sqrt(((event.pageX - offset.left)-lastX) * (event.pageX - offset.left)
        //  + ((event.pageY - offset.top)-lastY) * (event.pageY - offset.top))),
        // Or we could just set the line thickness using buttons and variable
        // w: thickness,
        // We can also use strokeColor, defined by a selection
        // c: strokeColor,


    //   }); // end of points.insert()

        lastX = (event.pageX - offset.left);
        lastY = (event.pageY - offset.top);

}

Template.canvas.events({
  'click': function (event) {
    console.log("click event fired!");
    markPoint(event);
  },
  'mousedown': function (event) {
    Session.set('draw', true);
  },
  'mouseup': function (event) {
    Session.set('draw', false);
    lastX=0;
    lasyY=0;
  },
  'mousemove': function (event) {
    if (Session.get('draw')) {
      markPoint(event);
    }
  }
});
