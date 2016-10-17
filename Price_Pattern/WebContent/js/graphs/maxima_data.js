/**
 * 
 * This is where graph data is found and visualize graph in web page
 */


 $('#add').on('click', function() {	 
 var c;

 

 var arr;
 $.ajax({
	    url:  '/Price_Pattern/getDetails/maximaLogic/'+ 38703,
	    type: "GET",
	    dataType: 'html',
	    //contentType: "application/json; charset=utf-8",
	    async: false,
         cache: false,
	    success: function (data) {
	           arr=data;
	    }
	            });
 

arr = JSON.parse( arr); // Do not need to pass to a array; 
for(c=0;c<arr.length;c++){
	  $('#parent').append('<div class="col-md-4"><div class="page-header" align="center">Maxima -'+(c+1)+'</div><div id="demo'+ c +'"></div></div>');
	  }

//document.write(arr);
console.log(arr[37].length);
var i;
 for(i=0;i<arr.length;i++){
var chart=c3.generate({
	bindto: document.getElementById('demo'+i),
	    data: {                
	        
	        json: arr[i],
	   
	     hide: ['Date'],
	        keys: {
	            x: 'Date',
	            value: ['PRC','Pseudo_PRC']
	        }
	    },
	    
	    axis: {
	        x: {
	        	 type: 'timeseries',
	        	 tick: {
	                 count: 4,
	                 format: '%Y-%m-%d'
	             },
				    label: {
				        text: 'Dates',
				        position: 'Right',
				     }
	        },
	        y: {
	        	tick: {
	                format: d3.format("$,")
//	                format: function (d) { return "$" + d; }
	            },
	            label: {
	                text: 'PRC/PsedoPRC in $',
	                position: 'outer-middle'
	                // inner-top : default
	                // inner-middle
	                // inner-bottom
	                // outer-top
	                // outer-middle
	                // outer-bottom
	            }
	        },
	    },
	    grid: {
	        x: {
	            lines: [
	                {value: arr[i][9]['Date'], text: 'MAXIMA',position: 'middle'}
	               
	            ]
	        }
	    },
	    size:{
	    	 width:300
	    },
	    zoom: {
	    	enabled: true,
	  		rescale: true
			},
			regions: [
			          {axis: 'x', start:  arr[i][arr[i].length-1]['leftDate'], end:  arr[i][arr[i].length-1]['rightDate'], class: 'regionX'},
			         
			          
			      ],
	    bar: {
	        width: {
	            ratio: 0.5
	        }
	    }
	    
	});
 }
 });