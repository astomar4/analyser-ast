import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue'
import AmCharts from 'amcharts3'
import VueRouter from "vue-router"
// import AmSerial from 'amcharts3/amcharts/serial'

Vue.use(VueApexCharts)
Vue.use(AmCharts)
Vue.use(VueRouter)
// 1-bar, 2-donut

export default {
	name: 'totenergy',
	components: { apexcharts: VueApexCharts, amcharts3: AmCharts },
	props: [],
	data() {
		return {
			str: this.$route.path,
			options1: {
				chart: {
					height: 350,
					type: 'bar',
				},
				plotOptions: {
					bar: {
						horizontal: true,
						distributed: true
					}
				},
				dataLabels: {
					enabled: true
				},
				colors: ['#224952', '#224952', '#096A80', '#096A80', '#00759F', '#00759F', '#00759F', '#00759F', '#00759F', '#00759F', '#00759F', '#00759F'],

				xaxis: {
					categories: ['China', 'United States', 'India', 'Russia', 'Japan', 'Germany', 'South Korea', 'Brazil', 'Canada', 'Iran', 'France', 'Indonesia'],
					title:{
						text: "Mtonnes"
					}
				},
				yaxis: {
					

				},
				tooltip: {

				}
			},

			options2: {
				chart: {
					width: 380,
					type: 'donut',
				},
				legend: {
					show: true,
					position: 'bottom'
				},
				colors: ['#5BE1FF', '#004A5B', '#EC6625', '#FAD8C7', '#008AA9', '#BDF3FF', '#008AA9', '#004A5B'],
				dataLabels: {
					enabled: false,
					style: {
						colors: '#000000'
					},
				},
				labels: ["Oil", "Coal", "Gas", "Electricity", "Biomass", "Heat"]
			},

			options3: {
				chart: {
					height: 350,
					type: 'bar',
					stacked: true,
					toolbar: {
						show: true
					},
					zoom: {
						enabled: true
					}
				},
				// fill: {colors:['##FAD8C7','##EC6625','##A13E0E','#008AA9']},
				responsive: [{
					breakpoint: 700,
					options: {
						legend: {
							position: 'bottom',
							offsetX: -10,
							offsetY: 0
						}
					}
				}],
				dataLabels: {
					enabled: false
				},
				colors: ['#004A5B', '#008AA9', '#5BE1FF', '#BDF3FF', '#fad8c7', '#F18C5B', '#EC6625', '#A13E0E'],
				plotOptions: {
					bar: {
						horizontal: false,
					},
				},
				xaxis: {

					type: 'year',
					// categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT', '01/07/2011 GMT', '01/08/2011 GMT', '01/09/2011 GMT', '01/10/2011 GMT'],
					categories: ['1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999', '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017'],
				},
				yaxis: {
					type: 'number',
					labels: {
						show: true
					},
					// seriesName: 'Mtonnes',
					axisBorder: {
						show: true
					},
					title: {
						text: 'Mtonne'
					},
				},
				fill: {
					opacity: 1,
					// colors:['##FAD8C7','##EC6625','##A13E0E','#008AA9']
				},
			},

			series1: [{
				data: [3105, 2201, 934, 744, 429, 314, 296, 291, 287, 253, 243, 240]
			}],

			series2: [44, 55, 2, 33, 62, 80],

			series3: [{
				name: 'Europe',
				data: [1786, 1782, 1742, 1743, 1739, 1782, 1849, 1836, 1850, 1833, 1854, 1889, 1890, 1933, 1954, 1964, 1983, 1960, 1958, 1853, 1931, 1867, 1857, 1843, 1777, 1808, 1821, 1857]
			}, {
				name: 'CIS',
				data: [1373, 1360, 1231, 1139, 996, 961, 934, 893, 875, 889, 898, 904, 912, 949, 959, 965, 992, 1001, 1021, 941, 1008, 1054, 1076, 1043, 1036, 1005, 1004, 1037]
			}, {
				name: 'North America',
				data: [2121, 2136, 2179, 2211, 2266, 2296, 2347, 2371, 2396, 2452, 2552, 2476, 2507, 2525, 2579, 2592, 2576, 2616, 2550, 2428, 2462, 2430, 2456, 2502, 2465, 2473, 2489, 2500]
			}, {
				name: 'Latin America',
				data: [463, 474, 487, 489, 515, 519, 543, 565, 583, 591, 598, 604, 614, 629, 656, 681, 711, 724, 749, 743, 784, 801, 834, 850, 856, 849, 840, 847]
			}, {
				name: 'Asia',
				data: [2109, 2129, 2208, 2311, 2416, 2559, 2645, 2703, 2693, 2786, 2885, 2943, 3065, 3278, 3562, 3759, 3976, 4181, 4266, 4455, 4820, 5006, 5158, 5301, 5414, 5466, 5585, 5755]
			}, {
				name: 'Pacific',
				data: [104, 105, 107, 107, 108, 109, 111, 110, 111, 112, 114, 116, 114, 115, 117, 118, 120, 122, 124, 126, 128, 130, 132, 134, 136, 138, 140, 142]
			}, {
				name: 'Africa',
				data: [382, 395, 397, 409, 415, 433, 446, 457, 466, 482, 485, 505, 518, 539, 569, 588, 604, 629, 656, 666, 684, 700, 726, 738, 762, 774, 781, 805]
			}, {
				name: 'Middle East',
				data: [223, 236, 265, 288, 314, 322, 328, 349, 352, 365, 370, 401, 418, 426, 455, 487, 520, 547, 595, 618, 648, 699, 703, 749, 758, 760, 786, 795]
			}],



		}
	},
	created() {
		window.AmCharts.makeChart("mapdiv", {
			"type": "map",
			"pathToImages": "http://www.amcharts.com/lib/3/images/",
			"addClassNames": true,
			"fontSize": 15,
			"colorSteps": 5,
			"projection": "mercator",
			"backgroundAlpha": 1,
			"backgroundColor": "rgba(255,255,255,1)",
			// "allLabels":[
			// 	{"text": ">2000", "color": "#224952"},
			// 	{"text": "500-1000", "color": "#096A80", "y": "50"},
			// 	{"text": "100-500", "color": "#00758F","y": "100"},
			// 	{"text": "<100", "color": "#3e9fb2","y": "150"}
			// ],
			"dataProvider": {
				"map": "worldLow",
				"areas": [
					{ "id": "IN", "color": "#096A80", "balloonText": "India 934Mtoe" },
					{ "id": "RU", "color": "#096A80", "balloonText": "Russia 744Mtoe" },
					{ "id": "US", "color": "#224952", "balloonText": "United States 2201Mtoe" },
					{ "id": "CN", "color": "#224952", "balloonText": "China 3105Mtoe" },
					{ "id": "KZ", "color": "#77B2BF", "balloonText": "Kazakistan 80Mtoe" },
					{ "id": "MN", "color": "#EFEFEF", "balloonText": "Mangolia 2Mtoe" },
					{ "id": "JP", "color": "#00758F", "balloonText": "Japan 429Mtoe" },
					{ "id": "DE", "color": "#00758F", "balloonText": "Germany 314" },
					{ "id": "BR", "color": "#00758F", "balloonText": "Brazil 291" },
					{ "id": "CA", "color": "#00758F", "balloonText": "Canada 287 Mtoe" },
					{ "id": "IR", "color": "#00758F", "balloonText": "Iran 253Mtoe" },
					{ "id": "FR", "color": "#00758F", "balloonText": "France 243Mtoe" },
					{ "id": "ID", "color": "#00758F", "balloonText": "Indonesia 240Mtoe" },
					{ "id": "GL", "color": "#EFEFEF", "balloonText": "Greenland NIL" },
				],
				"getAreasFromMap": true,
				"images": [
					{
						"top": 40,
						"left": 60,
						"width": 80,
						"height": 40,
						// "pixelMapperLogo": true,
						// "imageURL": "http://pixelmap.amcharts.com/static/img/logo.svg",
						// "url": "http://www.amcharts.com"
					}
				]
			},
			"balloon": {
				"horizontalPadding": 15,
				"borderAlpha": 0,
				"borderThickness": 1,
				"verticalPadding": 15
			},
			"areasSettings": {
				"color": "#3e9fb2",
				"outlineColor": "#3e9fb2",
				"rollOverOutlineColor": "rgba(80,80,80,1)",
				"rollOverBrightness": 20,
				"selectedBrightness": 20,
				"selectable": true,
				"unlistedAreasAlpha": 0,
				"unlistedAreasOutlineAlpha": 0,
				// "accesibleLabel": ""
			},
			"imagesSettings": {
				"alpha": 1,
				"color": "rgba(129,129,129,1)",
				"outlineAlpha": 0,
				"rollOverOutlineAlpha": 0,
				"outlineColor": "rgba(80,80,80,1)",
				"rollOverBrightness": 20,
				"selectedBrightness": 20,
				"selectable": true
			},
			"linesSettings": {
				"color": "rgba(129,129,129,1)",
				"selectable": true,
				"rollOverBrightness": 20,
				"selectedBrightness": 20
			},
			"zoomControl": {
				"zoomControlEnabled": true,
				"homeButtonEnabled": false,
				"panControlEnabled": false,
				"right": 38,
				"bottom": 30,
				"minZoomLevel": 0.25,
				"gridHeight": 100,
				"gridAlpha": 0.1,
				"gridBackgroundAlpha": 0,
				"gridColor": "#FFFFFF",
				"draggerAlpha": 1,
				"buttonCornerRadius": 2
			}
		});
	},
}
