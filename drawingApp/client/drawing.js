Canvas = function () {
  var self = this;
  var svg;

  var createSvg = function() {
    svg = d3.select('#canvas').append('svg')
      .attr('width', 800)
      .attr('height',600);
  };
  createSvg();

  self.clear = function() {
    d3.select('svg').remove();
    createSvg();
  };

  self.draw = function(data) {
    if (data.length < 1) {
      self.clear();
      return;
    }
    if (svg) {

        // Remember to format the data properly in markPoints

        // to draw a circle - 
        svg.selectAll('circle').data(data, function(d) { return d._id; })
        .enter().append('circle')
        .attr('r',function (d) { return d.thickness; })
        .attr('fill',  function (d) { return d.strokeColor; })
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; });

    //   //to draw a line
    //   svg.selectAll('line').data(data, function(d) { return d._id; })
    //   .enter().append('line')
    //   .attr('x1', function (d) { return d.x; })
    //   .attr('y1', function (d) { return d.y; })
    //   .attr('x2', function (d) { return d.x1; })
    //   .attr('y2', function (d) { return d.y1; })
    //   .attr("stroke-width", function (d) { return d.w; })
    //   .attr("stroke", function (d) { return d.c; })
    //   .attr("stroke-linejoin", "round");


    } // end of the if(svg) statement
  }; // end of the canvas.draw function  
  
  
  self.exportImage = function() {
  console.log('test!');
  var html = d3.select("svg")
        .attr("version", 1.1)
        .attr("xmlns", "http://www.w3.org/2000/svg")
        .node().parentNode.innerHTML;

  //console.log(html);
  var imgsrc = 'data:image/svg+xml;base64,'+ btoa(html);
  var img = '<img src="'+imgsrc+'">'; 
  d3.select("#svgdataurl").html(img);


  var canvas = document.querySelector("canvas"),
	  context = canvas.getContext("2d");

  var image = new Image;
  image.src = imgsrc;
  image.onload = function() {
	  context.drawImage(image, 0, 0);

	  var canvasdata = canvas.toDataURL("image/png");

	  var pngimg = '<img src="'+canvasdata+'">'; 
  	  d3.select("#pngdataurl").html(pngimg);

	  var a = document.createElement("a");
	  a.download = "sample.png";
	  a.href = canvasdata;
	  a.click();
  };
};

} //end of the canvas function



