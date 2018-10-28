import VueApexCharts from 'vue-apexcharts'
import Vue from 'vue'
import AmCharts from 'amcharts3'
// import AmSerial from 'amcharts3/amcharts/serial'

Vue.use(VueApexCharts)
Vue.use(AmCharts)


export default {
  name: 'finbody-1',
  components: {apexcharts: VueApexCharts, amcharts3:AmCharts},
  props: [],
  data () {
    return {
      options: {
        chart: {
          id: 'vue-chart example'
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
        }
      },
      series:[{
        name: 'series-1',
        data: [30, 40, 45, 50, 49, 60, 70, 91]
      }]
  }
},
created(){
  window.AmCharts.makeChart( "mapdiv", {
    "type": "map",
					"pathToImages": "http://www.amcharts.com/lib/3/images/",
					"addClassNames": true,
					"fontSize": 15,
					"color": "#FFFFFF",
					"projection": "mercator",
					"backgroundAlpha": 1,
					"backgroundColor": "rgba(255,255,255,1)",
					"dataProvider": {
						"map": "worldLow",
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
						"color": "rgba(129,129,129,1)",
						"outlineColor": "rgba(80,80,80,1)",
						"rollOverOutlineColor": "rgba(80,80,80,1)",
						"rollOverBrightness": 20,
						"selectedBrightness": 20,
						"selectable": true,
						"unlistedAreasAlpha": 0,
						"unlistedAreasOutlineAlpha": 0
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
}
}
