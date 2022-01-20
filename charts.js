function init() {
  // Grab a reference to the dropdown select element
  var selector = d3.select("#selDataset");

  // Use the list of sample names to populate the select options
  d3.json("samples.json").then((data) => {
    var sampleNames = data.names;

    sampleNames.forEach((sample) => {
      selector
        .append("option")
        .text(sample)
        .property("value", sample);
    });

    // Use the first sample from the list to build the initial plots
    var firstSample = sampleNames[0];
    buildCharts(firstSample);
    buildMetadata(firstSample);
  });
}

// Initialize the dashboard
init();

function optionChanged(newSample) {
  // Fetch new data each time a new sample is selected
  buildMetadata(newSample);
  buildCharts(newSample);
  
}

// Demographics Panel 
function buildMetadata(sample) {
  d3.json("samples.json").then((data) => {
    var metadata = data.metadata;
    // Filter the data for the object with the desired sample number
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Use d3 to select the panel with id of `#sample-metadata`
    var PANEL = d3.select("#sample-metadata");

    // Use `.html("") to clear any existing metadata
    PANEL.html("");

    // Use `Object.entries` to add each key and value pair to the panel
    // Hint: Inside the loop, you will need to use d3 to append new
    // tags for each key-value in the metadata.
    Object.entries(result).forEach(([key, value]) => {
      PANEL.append("h6").text(`${key.toUpperCase()}: ${value}`);
    });

  });
}

// 1. Create the buildCharts function.
function buildCharts(sample) {
  // 2. Use d3.json to load and retrieve the samples.json file 
  d3.json("samples.json").then((data) => {
    // 3. Create a variable that holds the samples array. 
    var samplesArray = data.samples; 
    // 4. Create a variable that filters the samples for the object with the desired sample number.
    var samplesId = samplesArray.filter(sampleObj => sampleObj.id === sample); 
    //  5. Create a variable that holds the first sample in the array.
    var firstSample = samplesId[0];
    console.log(firstSample);
    // 6. Create variables that hold the otu_ids, otu_labels, and sample_values.
    var otuIDs = firstSample.otu_ids; 
    var otuLabels = firstSample.otu_labels;
    var sampleValues = firstSample.sample_values;

    // 7. Create the yticks for the bar chart.
    // Hint: Get the the top 10 otu_ids and map them in descending order  
    //  so the otu_ids with the most bacteria are last. 

    var yticks = otuIDs.slice(0,10).reverse();
    var xticks = sampleValues.slice(0,10).reverse();
    var labels = otuLabels.slice(0,10).reverse();

    // 8. Create the trace for the bar chart. 
    var barData = {
      x: xticks,
      y: yticks,
      type: 'bar',
      orientation: 'h',
      text: labels,
      marker: {
        color: "#f997fc"
      }
    };
    
    var trace = [barData]
    
    // 9. Create the layout for the bar chart. 
    var barLayout = {
      title: `<b>Top 10 Bacteria Cultures <br>for Subject ${sample}</b>`,
        yaxis: {type: 'category'}, 
    };
    // 10. Use Plotly to plot the data with the layout. 
    Plotly.newPlot("bar", trace, barLayout);
  

    // BUbBLE CHART
    // 1. Create the trace for the bubble chart.
    var bubbleData = {
      x: yticks,
      y: xticks,
      text: labels,
      mode: 'markers',
      marker: {
        size: xticks,
        color: yticks,
        colorscale: [
          ['0.0', '#a5fbff'],
          ['0.111111111111', '#91f6ff'],
          ['0.222222222222', '#81f0ff'],
          ['0.333333333333', '#7ae8ff'],
          ['0.444444444444', '#7fdfff'],
          ['0.555555555556', '#90d4ff'],
          ['0.666666666667', '#a9c8ff'],
          ['0.777777777778', '#c4b9ff'],
          ['0.888888888889', '#e0a9ff'],
          ['1.0', '#f997fc']]
      },
    };
     
    var trace2 = [bubbleData];
   
    // 2. Create the layout for the bubble chart.
    var bubbleLayout = {
      title: `<b>Bacteria Culture <br>for Subject ${sample}</b>`,
      showlegend: false,
      font: {
        size: 16,
        color: "#000000"
      },
      height: 600,
      width: 1200,
      xaxis: {
        title: {
          text: 'OTU ID'
        }
      }
    };

    // 3. Use Plotly to plot the data with the layout.
    Plotly.newPlot("bubble", trace2, bubbleLayout);  

    // GAUGE

    // Create a variable that holds the samples array. 
    var metadata = data.metadata;
    // filter the data for the object with desired sample no.
    var resultArray = metadata.filter(sampleObj => sampleObj.id == sample);
    var result = resultArray[0];
    // Create a variable that holds the washing frequency
    var wfreq = result.wfreq;
    console.log(wfreq);
    
    // Trace for Gauge Graphic
    var gaugeData = {
      domain: {x: [0,1], y: [0,1]},
        value: wfreq,
        title: { text: `<b>Wash Frequency <br>for Subject ${sample}</b> <br>Belly Button Washer Per Week</br>` },
        type: "indicator",
          mode: "gauge+number",
      gauge: {
        bar: { color: "#fffba5"},
        axis: {range: [null, 10]},
        steps: [
          {range: [0, 2], color: "#f997fc"},
          {range: [2, 4], color: "#a9c8ff"},
          {range: [4, 6], color: "#7ae8ff"},
          {range: [6, 8], color: "#7feeff"},
          {range: [8, 10], color: "#a5fbff"}

        ]
      }
    };

    var trace3 = [gaugeData];

    // Create layout for gauge chart
    var gaugeLayout = {
      width: 450, height: 350, margin: {t:0,b:0}, 
      plot_bgcolor: "#605f75",
      paper_color: "#f7f7f7"
    }
  

  Plotly.newPlot("gauge", trace3, gaugeLayout);
      

  });
}


     
  
      
    