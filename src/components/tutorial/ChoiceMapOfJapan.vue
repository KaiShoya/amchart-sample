<template>
  <div>
    <b-field label="Prefecture">
      <b-input id="prefecture"></b-input>
    </b-field>
    <div id="chartdiv"></div>
  </div>
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
      // thisが使えないため、素のJSで実装
      document.getElementById('prefecture').value = ev.target.dataItem.dataContext.name
    })

    // スモールマップの表示
    map.smallMap = new am4maps.SmallMap()
    map.smallMap.series.push(polygonSeries)
    map.smallMap.align = "right"
    map.smallMap.valign = "top"
  },
  beforeDestroy() {
    if (this.map) {
      this.map.dispose()
    }
  }
}
</script>
