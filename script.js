
const values = {};
plotChart();

const myColor = ['#FB2576','#2F58CD','#2FDD92','#FFC93C'];

async function fetchData() {
	const response = await fetch('./data.json');
	const jsonData = await response.json();

	const month = new Set(jsonData.map(obj => obj.Month));
	const region = new Set(jsonData.map(obj => obj.Region));
	console.log(month)

	region.forEach((reg, index) => {

		const total = jsonData.filter(f => f.Region === reg).map(data => {
			return parseInt( data.Total)
		})
		values[reg] = total;

		// values[reg] 

	})

const east = values.Eastern;
const west = values.Western;
const north = values.Northern;
const south = values.Southern;
return {east,west,north, south, month};
	
}


async function plotChart() {
	const data = await fetchData();
	const xValues = Array.from(data.month);
	

  const chartData =

  // bar chart
	Highcharts.chart('bar-chart', {
		chart: {
			type: 'column'
		},

		credits: {
			text: 'Mercados.in',
			href: 'https://mercadosemi.in/'
		},

		title: {
			text: 'Diesel Consumption of Regions',
			align: 'left'
		},

		  colors: myColor,

		yAxis: {
			title: {
				text: 'Disel Consumption'
			}
		},

		xAxis: {
			categories: xValues,
			title: {
				text: 'Months'
			}
		},

		//   series is an array of objects
		// dataArr is an array of objects
		series: [{
			name: 'Eastern',
			data: data.east
		},
		{
			name: 'Western',
			data: data.west
		},
		{
			name: 'Northern',
			data: data.north
		},
		{
			name: 'Southern',
			data: data.south
		}

		]

	})


  // pie chart
	Highcharts.chart('pie-chart', {
		chart: {
			type: 'pie'
		},

		credits: {
			text: 'Mercados.in',
			href: 'https://mercadosemi.in/'
		},

		title: {
			text: 'Diesel Consumption of Regions',
			align: 'left'
		},

		  colors: myColor,

		yAxis: {
			title: {
				text: 'Disel Consumption'
			}
		},

		xAxis: {
			categories: xValues,
			title: {
				text: 'Months'
			}
		},

		//   series is an array of objects
		// dataArr is an array of objects
		series: [{
			name: 'Eastern',
			data: data.east}
		// },
		// {
		// 	name: 'Western',
		// 	data: data.west
		// },
		// {
		// 	name: 'Northern',
		// 	data: data.north
		// },
		// {
		// 	name: 'Southern',
		// 	data: data.south
		// }

		]

	})


  // line chart
	Highcharts.chart('line-chart', {
		chart: {
			type: 'line'
		},

		credits: {
			text: 'Mercados.in',
			href: 'https://mercadosemi.in/'
		},

    plotOptions: {
      series: {connectNulls: true, 
        cursor: "pointer", 
        pointInterval: undefined, pointStart: undefined}
      },

		title: {
			text: 'Diesel Consumption of Regions',
			align: 'left'
		},

		  colors: myColor,

		yAxis: {
			title: {
				text: 'Disel Consumption'
			}
		},

		xAxis: {
			categories: xValues,
			title: {
				text: 'Months'
			}
		},

		//   series is an array of objects
		// dataArr is an array of objects
		series: [{
			name: 'Eastern',
			data: data.east
		},
		{
			name: 'Western',
			data: data.west
		},
		{
			name: 'Northern',
			data: data.north
		},
		{
			name: 'Southern',
			data: data.south
		}

		]

	})


  // area chart
	Highcharts.chart('area-chart', {
		chart: {
			type: 'areaspline'
		},

		credits: {
			text: 'Mercados.in',
			href: 'https://mercadosemi.in/'
		},

		title: {
			text: 'Diesel Consumption of Regions',
			align: 'left'
		},

		  colors: myColor,

		yAxis: {
			title: {
				text: 'Disel Consumption'
			}
		},

		xAxis: {
			categories: xValues,
			title: {
				text: 'Months'
			}
		},
      

		//   series is an array of objects
		// dataArr is an array of objects
		series: [
      {
        name: 'Western',
        data: data.west
      },
		{
			name: 'Southern',
			data: data.south
		},
    {
			name: 'Northern',
			data: data.north
		},
    {
			name: 'Eastern',
			data: data.east
		}

		]

	})
}



function myFunction() {
    var x = document.getElementById("nav-bar");
    if (x.className === "navbar") {
      x.className += " responsive";
    } else {
      x.className = "navbar";
    }
};
