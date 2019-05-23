<template>
  <div id="chartdiv"></div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core"
import * as am4maps from "@amcharts/amcharts4/maps"
import am4geodata_japanLow from "@amcharts/amcharts4-geodata/japanLow"

export default {
  mounted() {
    let map = am4core.create("chartdiv", am4maps.MapChart)
    map.geodata = am4geodata_japanLow
    let polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
    polygonSeries.mapPolygons.template.fill = am4core.color("#47c78a")
    polygonSeries.useGeodata = true
    polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
      map.zoomToMapObject(ev.target)
    })
  },
  beforeDestroy() {
    if (this.map) {
      this.map.dispose()
    }
  }
}
</script>
