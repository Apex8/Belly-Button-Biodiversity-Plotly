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
        
    })
}






function updatecharts