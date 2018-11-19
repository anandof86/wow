<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Bootstrap 101 Template</title>
    <style>
   
            #chart {
              height: 500px;
              font: 13px sans-serif;
            }
            .node rect {
              fill-opacity: .9;
              shape-rendering: crispEdges;
              stroke-width: 0;
            }
            .node text {
              text-shadow: 0 1px 0 #fff;
            }
            .link {
              fill: none;
              stroke: #000;
              stroke-opacity: .2;
            }
          </style>
    <!-- Bootstrap -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    
  </head>
  <body>
    <div class="container">
        <div class="row">
            <div class="col-md-3">
                <h1>Filters</h1>
            </div>
            <div class="col-md-9">
                <h1>Chart View</h1>
                <div id="chart"></div>
            </div>
        </div>
    </div>


    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <script src="http://d3js.org/d3.v3.min.js"></script>
    <script src="http://cdn.rawgit.com/newrelic-forks/d3-plugins-sankey/master/sankey.js"></script>
    <script src="http://cdn.rawgit.com/misoproject/d3.chart/master/d3.chart.min.js"></script>
    <script src="http://cdn.rawgit.com/q-m/d3.chart.sankey/master/d3.chart.sankey.min.js"></script>
    <script>
            var colors = {
            'environment':         '#edbd00',
            'social':              '#367d85',
            'animals':             '#97ba4c',
            'health':              '#f5662b',
            'research_ingredient': '#3f3e47',
            'fallback':            '#9f9fa3'
          };
        var data = {
   "nodes" : [
      {
         "name" : "Sample Data",
         "id" : "0"
      },
      {
         "name" : "Environment",
         "id" : "1"
      },
      {
         "name" : "Land use",
         "id" : "2"
      },
      {
         "id" : "3",
         "name" : "Cocoa butter (Organic)"
      },
      {
         "name" : "Cocoa mass (Organic)",
         "id" : "4"
      },
      {
         "name" : "Hazelnuts (Organic)",
         "id" : "5"
      }
   ],
   "links" : [
      {
         "source" : 0,
         "value" : 5,
         "target" : 1
      },
      {
         "value" : 6,
         "source" : 2,
         "target" : 5
      },
      {
         "value" : 2,
         "source" : 3,
         "target" : 4
      },
      {
         "value" : 3,
         "source" : 2,
         "target" : 4
      }
   ]
}  

var randomColor = (function(){
  var golden_ratio_conjugate = 0.618033988749895;
  var h = Math.random();

  var hslToRgb = function (h, s, l){
      var r, g, b;

      if(s == 0){
          r = g = b = l; // achromatic
      }else{
          function hue2rgb(p, q, t){
              if(t < 0) t += 1;
              if(t > 1) t -= 1;
              if(t < 1/6) return p + (q - p) * 6 * t;
              if(t < 1/2) return q;
              if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
              return p;
          }

          var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
          var p = 2 * l - q;
          r = hue2rgb(p, q, h + 1/3);
          g = hue2rgb(p, q, h);
          b = hue2rgb(p, q, h - 1/3);
      }

      return '#'+Math.round(r * 255).toString(16)+Math.round(g * 255).toString(16)+Math.round(b * 255).toString(16);
  };
  
  return function(){
    h += golden_ratio_conjugate;
    h %= 1;
    return hslToRgb(h, 0.5, 0.60);
  };
})();
color() 
        var chart = d3.select("#chart").append("svg").chart("Sankey.Path");
        chart
          .name(label)
          .colorNodes(function(name, node) { 
            return node.color;
          })
          .colorLinks(function(link) {
            return link.source.color;
          })
          .nodeWidth(15)
          .nodePadding(10)
          .spread(true)
          .iterations(0)
          .draw(data);
         
        function label(node) {
          var string_data = node.name +" \n ("+node.value+")"; 
          console.log(string_data);
          return string_data;
        }
        function color() {
            var nodes = data.nodes 
            for(var i in nodes){
               nodes[i]["color"] = randomColor() 
            }
        }
        
        
      
          </script>

    
</body>
</html>
