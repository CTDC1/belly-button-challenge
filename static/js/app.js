const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json";

const optionChanged = () => {
  let choice = d3.select('select').node().value;

 // console.log(choice);

  d3.json(url).then(({metadata, samples})=> {
    
    
    let meta = metadata.find(obj => obj.id == choice);
    let sample = samples.find(obj => obj.id == choice);


    //console.log(meta, sample);
    d3.select(".panel-body").html('');

    Object.entries(meta).forEach(([key, value]) => d3.select('.panel-body').append('h4').text(`${key.toUpperCase()}: ${value}`));

    let {otu_ids, otu_labels, sample_values} = sample;


    var data = [
      {
        x: sample_values.slice(0, 10).reverse(),
        y: otu_ids.slice(0, 10).reverse().map( x =>  `OTU ${x}`), 
        text: otu_labels.slice(0, 10).reverse(),
        orientation: 'h',
        type: 'bar'
      }
    ];
    
    Plotly.newPlot('bar', data);

    var trace1 = {
      x: otu_ids,
      y: sample_values,
      mode: 'markers',
      marker: {
        size: sample_values,
        color: otu_ids,
        colorscale: 'Earth'
      },
      text: otu_labels
    };
    
    var data = [trace1];
    
    
    Plotly.newPlot('bubble', data);




  })
};

//Fetching the JSON data and console log it
d3.json(url).then( ({names}) => {
    //console.log(names);

    names.forEach(name => {
      d3.select('select').append('option').text(name)
    });

    optionChanged()

});

//Create a horizontal bar chart with a dropdown menu to display the top 10 OTUs found in that individual.




//Use sample_values as the values for the bar chart.
//Use otu_ids as the labels for the bar chart.
//Use otu_labels as the hovertext for the chart.

//Create a bubble chart that displays each sample.

// EARTH = color scale
//Use otu_ids for the x values.
//Use sample_values for the y values.
//Use sample_values for the marker size.
//Use otu_ids for the marker colors.
//Use otu_labels for the text values.

Plotly


//Display the sample metadata, i.e., an individual's demographic information.


//Display each key-value pair from the metadata JSON object somewhere on the page.


//Update all the plots when a new sample is selected. Additionally, you are welcome to create any layout that you would like for your dashboard. An example dashboard is shown as follows: