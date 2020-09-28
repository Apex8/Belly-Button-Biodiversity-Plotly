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