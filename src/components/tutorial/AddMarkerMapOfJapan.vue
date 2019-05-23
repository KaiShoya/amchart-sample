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

    let imageSeries = map.series.push(new am4maps.MapImageSeries())
    let mapImage = imageSeries.mapImages.template

    // マーカー作成
    let mapMarker = mapImage.createChild(am4core.Sprite)
    mapMarker.path = "M4 12 A12 12 0 0 1 28 12 C28 20, 16 32, 16 32 C16 32, 4 20 4 12 M11 12 A5 5 0 0 0 21 12 A5 5 0 0 0 11 12 Z"
    mapMarker.width = 32
    mapMarker.height = 32
    mapMarker.scale = 0.7
    mapMarker.fill = am4core.color("#3F4B3B")
    mapMarker.fillOpacity = 0.8
    mapMarker.horizontalCenter = "middle"
    mapMarker.verticalCenter = "bottom"

    // タップイベント
    polygonSeries.mapPolygons.template.events.on("hit", function(ev) {
      const coords = map.svgPointToGeo(ev.svgPoint)
      const marker = imageSeries.mapImages.create()
      marker.latitude = coords.latitude
      marker.longitude = coords.longitude
    })
  },
  beforeDestroy() {
    if (this.map) {
      this.map.dispose()
    }
  }
}
</script>
