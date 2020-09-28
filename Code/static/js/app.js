function init(){
    var selector = d3.select("#selDataset");

    d3.json("data/samples.json").then((data) =>{
        var subjectID = data.names;
        subjectID.forEach((ID) => {
            selector
            .append('option')
            .text(ID)
            .property('value', ID);
        });
    const firstbutton = subjectID[0];
    updatecharts(firstbutton);
    updatemetadata(firstbutton);
    });
}

function updatemetadata(samples){
    d3.json('data/samples.json').then((data) => {
        var metadata = data.metadata;
        var filterarray = metadata.filter(sampleobject =>sampleobject.ID == sample);
        var result = filterarray[0];
        var metapanel = d3.select('#sample-metadata');
        metapanel.html("");
        Object.entries(result).forEach(([key, value]) =>{
            metapanel.append('h6').text(`${key.toUpperCase()}: ${value}`)
        })

var data = [
    {
      domain: { x: [0, 1], y: [0, 1] },
      marker: {size: 28, color:'850000'},
      value: result.wfreq,
      title: 'Belly Button Washing Frequency<br> Scrubs per Week',
      titlefont: {family: '"Palatino Linotype", "Book Antiqua", Palatino, serif'},
      type: "indicator",
      mode: "gauge+number"
    }
  ];

  var layout = {
    width: 450,
     height: 400,
     margin: { t: 25, r: 25, l: 25, b: 25 },
     line: {
     color: '600000'
     },
     paper_bgcolor: "#a5bdc6",
     font: { color: "#85541d", family: "Serif" }
   };

  Plotly.newPlot("gauge", data, layout);
  });
}





//function updatecharts