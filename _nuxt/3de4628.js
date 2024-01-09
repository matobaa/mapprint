(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{380:function(e){e.exports=JSON.parse('["2024-noto-earthquake.json","2019-typhoon-19.json","2019-chiba-typhoon-15.json","2021-shizuoka-izusan.json"]')},381:function(e,t,o){e.exports=o.p+"img/logo.37f23b7.png"},382:function(e,t,o){var map={"./2019-chiba-typhoon-15":383,"./2019-chiba-typhoon-15.json":383,"./2019-typhoon-19":384,"./2019-typhoon-19.json":384,"./2021-geojson-test":385,"./2021-geojson-test.json":385,"./2021-shizuoka-izusan":386,"./2021-shizuoka-izusan.json":386,"./2024-noto-earthquake":387,"./2024-noto-earthquake.json":387,"./list":380,"./list.json":380,"./map-sample":388,"./map-sample.json":388};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=382},383:function(e){e.exports=JSON.parse('{"map_id":"2019-chiba-typhoon-15","map_title":"印刷できる台風災害支援情報マップ（千葉県）","map_title_en":"Printable Typhoon Disaster Relief Information Map (Chiba Prefecture)","map_description":"SNSで流れる給水所等の情報をネットを見れない地域の人にも伝えられるよう、印刷に最適化したマップです。マップを必要な地域のところに調整すると、A4サイズにちょうどよく印刷され、かつ必要な場所の情報がリストとして表示されます。（GS・給水・避難所・充電・無料Wifi）  ぜひ印刷して必要な人に届けてあげてください！","map_image":"ogp_2019-chiba-typhoon-15.png","sources":[{"id":"chiba","url":"https://www.google.com/maps/d/kml?mid=18v4csEC-qPW_aeXhEnuzgMfUAqWcbF5q&forcekml=1","type":"kml","title":"2019千葉台風15号","show":true}],"default_hash":"35.034970230243786,139.83536606997205-34.998870264553034,139.90144296563784","center":[139.83536606997205,35.034970230243786],"type":"KML","layer_settings":{"GS(赤：無事)":{"name":"GS(赤：無事)","name_en":"GS(red: safety)","color":"#992222","bg_color":"#CA9491","icon_class":"fas fa-heart","class":"layer_gs_ok"},"GS (黒点：未確認)":{"name":"GS (黒点：未確認)","name_en":"GS(black: unconfirmed)","color":"#4F4F5A","bg_color":"#B7B7BE","icon_class":"fas fa-eye-slash","class":"layer_gs_undefined"},"給水所_(千葉市・県指定除く）":{"name":"給水所_(千葉市・県指定除く）","name_en":"Water Supply Office(Chiba Pref, without prefectural designation)","color":"#285797","bg_color":"#A3BBDA","icon_class":"fas fa-tint","class":"layer_water_chibacity"},"避難所":{"name":"避難所","name_en":"shelter","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"携帯充電_ほか":{"name":"携帯充電_ほか","name_en":"Cell phone charging (Other)","color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"},"無料Wifi":{"name":"無料Wifi","name_en":"Free Wi-Fi","color":"#604490","bg_color":"#BDB1D8","icon_class":"fas fa-wifi","class":"layer_wifi"}}}')},384:function(e){e.exports=JSON.parse('{"map_id":"2019-typhoon-19","map_title":"2019年台風19号災害支援情報マップ","map_title_en":"2019 Typhoon-19 Disaster relief information map","map_description":"SNSで流れる給水所等の情報をネットを見れない地域の人にも伝えられるよう、印刷に最適化したマップです。マップを必要な地域のところに調整すると、A4サイズにちょうどよく印刷され、かつ必要な場所の情報がリストとして表示されます。随時情報更新していきます。ぜひ印刷して必要な人に届けてあげてください！","map_image":"ogp_2019-typhoon-19.png","sources":[{"id":"japan","url":"https://www.google.com/maps/d/kml?mid=1pl0sY4TmNur6xB4bKvxxvi5rsizCY1bu&forcekml=1","link":"https://www.google.com/maps/d/u/0/viewer?mid=1pl0sY4TmNur6xB4bKvxxvi5rsizCY1bu","updated_search_key":{"type":"regexp","pattern":"<!\\\\[CDATA\\\\[(<br>)*(.+?)<br>","index":2,"field":"description"},"type":"kml","title":"全国","show":true},{"id":"nagareyama","url":"https://www.google.com/maps/d/kml?mid=1rAKfJOHRj7K8KkaAGEAwN4RGTABs9zIt&forcekml=1","link":"https://www.google.com/maps/d/u/0/viewer?mid=1rAKfJOHRj7K8KkaAGEAwN4RGTABs9zIt","type":"kml","title":"千葉県流山市のみ","show":true},{"id":"sousou","url":"https://www.google.com/maps/d/kml?mid=1IKlMaWlNDYmfEtgWsL9ZirnmLnirffhl&forcekml=1","link":"https://www.google.com/maps/d/u/0/viewer?mid=1IKlMaWlNDYmfEtgWsL9ZirnmLnirffhl","type":"kml","title":"福島県相双地区","updated_search_key":{"type":"regexp","pattern":"(2019.+?更新)","index":1,"field":"description"},"show":true}],"default_hash":"35.89575594927511,139.65994077606268-35.62491040699955,140.1995505107742","center":[140.1099463905179,35.77029301432708],"type":"KML","layer_settings":{"GS (黒点：未確認)":{"color":"#4F4F5A","bg_color":"#B7B7BE","icon_class":"fas fa-eye-slash","class":"layer_gs_undefined"},"避難所_台風19号_19年10月":{"name":"避難所_台風19号_19年10月","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"携帯充電_ショップ(緑点；未確認)":{"color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"},"自主避難所":{"name":"自主避難所(流山市版)","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"docomo 無料WIFI":{"color":"#992222","bg_color":"#CA9491","icon_class":"fas fa-wifi","class":"layer_wifi-docomo"},"Softbank 無料WIFI":{"color":"#666666","bg_color":"#B1B6B9","icon_class":"fas fa-wifi","class":"layer_wifi-sb"},"携帯充電(緑マーク：確認済)_台風19号_19年10月":{"color":"#456658","bg_color":"#8ED4B8","icon_class":"fas fa-plug","class":"layer_charger_19"},"給水(青：確認済)_台風19号_19年10月":{"color":"#001D96","bg_color":"#1CA3EA","icon_class":"fas fa-tint","class":"layer_water"},"Wifi(薄茶；確認済)_台風19号_19年10月":{"color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-wifi","class":"layer_wifi"},"トイレ(紫：確認済)_台風19号_19年10月 のコピー":{"color":"#BE4BDB","bg_color":"#d6b1e0","icon_class":"fas fa-toilet","class":"layer_toilet"},"入浴(桃：確認済)_台風19号_19年10月":{"color":"#c43895","bg_color":"#f9b3e2","icon_class":"fas fa-shower","class":"layer_shower"},"給水(青)_台風19号_19年10月":{"color":"#001D96","bg_color":"#1CA3EA","icon_class":"fas fa-tint","class":"layer_water"},"（南相馬市）給水所":{"color":"#001D96","bg_color":"#1CA3EA","icon_class":"fas fa-tint","class":"layer_water"},"（無料）入浴施設":{"color":"#c43895","bg_color":"#f9b3e2","icon_class":"fas fa-shower","class":"layer_shower"}}}')},385:function(e){e.exports=JSON.parse('{"map_id":"2021-geojson-test","map_title":"GHP2020 デモ","map_title_en":"GHP2020 Demo","map_description":"","map_image":null,"sources":[{"id":"test","url":"https://script.googleusercontent.com/macros/echo?user_content_key=_6_ZR0XLL0MbaI41b7arw1tKJ44ZRMzJXFJQgYMfmfqp-E5cBnQIhZwUQmD7bjdymn9B2TyvkttH7Lt_J_MeCymrpWuQcL-wm5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnEQtBr2DXtd2VVZ6e7KTde4_k47hKKS_Llyb1VlE15EZ8qun0TIBV1jJ2FWGfRqnKT0BdYNs3pinvJsw0wqpxiI&lib=MY-PLI9PNsbIhESkFzgRhtgxmTEkGC2HD","type":"geojson","title":"GHP2020デモ用GeoJSON","title_en":"GHP2020 Demo GeoJSON","show":true}],"default_hash":"36.40706898962824,139.00427694616945-35.6385475171373,140.277266400681534","center":[139.42620262933877,35.93546870323782],"type":"geojson","layer_settings":{"未分類":{"class":"layer_not_categorized","color":"#C0C0C0","bg_color":"#808080"},"自主避難所":{"name":"自主避難所","name_en":"Voluntary shelter","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"給水所":{"color":"#001D96","bg_color":"#1CA3EA","icon_class":"fas fa-tint","class":"layer_water"},"入浴施設":{"color":"#c43895","bg_color":"#f9b3e2","icon_class":"fas fa-shower","class":"layer_shower"},"携帯充電":{"color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"},"駅":{"name":"駅","name_en":"Station","color":"#C0C0C0","bg_color":"#808080","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"公園":{"name":"公園","name_en":"Park","color":"#992222","bg_color":"#CA9491","icon_class":"fas fa-heart","class":"layer_gs_ok"}}}')},386:function(e){e.exports=JSON.parse('{"map_id":"2021-shizuoka-izusan","map_title":"2021年 静岡県熱海市伊豆山 土砂崩れ 災害情報","map_title_en":"2021 Landslide at Izusan, Atami, Shizuoka","map_description":"","map_description_en":"","map_image":null,"sources":[{"id":"shizuoka-izusan","url":"https://script.google.com/macros/s/AKfycbw0D0AjIFPBGbBXj3Zr5X1j_34fwIj8RSflwc6EJrDp97pMdRRnyNcMOOHvuRHZOslJdg/exec?confirmed=true","type":"geojson","title":"2021年 静岡県熱海市伊豆山 土砂崩れ 災害情報","title_en":"2021 Landslide at Izusan, Atami, Shizuoka","show":true}],"default_hash":"35.15658910678265,138.91779233722173-35.08428585053625,139.2314565974297","center":[139.055633,35.1208872],"type":"geojson","layer_settings":{"未分類":{"name":"未分類","name_en":"Not categorized","class":"layer_not_categorized","color":"#C0C0C0","bg_color":"#808080"},"避難所":{"name":"避難所","name_en":"Shelter","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_shelter"},"給水所":{"name":"給水所","name_en":"Water supply station","color":"#001D96","bg_color":"#1CA3EA","icon_class":"fas fa-tint","class":"layer_water"},"車両通行止め":{"name":"車両通行止め","name_en":"Road closed","color":"#ff0000","bg_color":"#ff0080","icon_class":"fas fa-ban","class":"layer_water"},"鉄道運行見合わせ":{"name":"鉄道運行見合わせ","name_en":"Railway operation suspension","color":"#ff0000","bg_color":"#ff0080","icon_class":"fas fa-ban","class":"layer_water"},"入浴施設":{"name":"入浴施設","name_en":"Bathing facility","color":"#c43895","bg_color":"#f9b3e2","icon_class":"fas fa-shower","class":"layer_shower"}}}')},387:function(e){e.exports=JSON.parse('{"map_id":"2024-noto-earthquake","map_title":"令和6年能登半島地震関連情報","map_title_en":"Noto Peninsula Earthquake Information (2024)","map_description":"SNSで流れる情報をネットを見れない地域の人にも伝えられるよう、印刷に最適化したマップです。マップを必要な地域のところに調整すると、A4サイズにちょうどよく印刷され、かつ必要な場所の情報がリストとして表示されます。 ぜひ印刷して必要な人に届けてあげてください！","map_description_en":"This map is designed for printing, allowing those without internet access to obtain information from social media. Once you set the map to the desired place, you can print it in A4 size. It shows a list of information for that spot, such as gas stations or water distribution points. Just print it and give it to anyone who needs it!","map_image":"ogp_2024-noto-earthquake.png","sources":[{"id":"noto","url":"https://www.google.com/maps/d/kml?forcekml=1&mid=1w0z1l210ymUPeQTgPnfZxqgh_jf5Pws","link":"https://www.google.com/maps/d/u/0/viewer?mid=1w0z1l210ymUPeQTgPnfZxqgh_jf5Pws","type":"kml","title":"避難所","show":true},{"id":"noto_kyusui","url":"https://www.google.com/maps/d/kml?forcekml=1&mid=1YXwD9l2SbmCQO4SYDmTee4nrAQFiJfE","link":"https://www.google.com/maps/d/u/0/viewer?mid=1YXwD9l2SbmCQO4SYDmTee4nrAQFiJfE","type":"kml","title":"給水所","show":true},{"id":"niigata_kyusui","url":"https://www.google.com/maps/d/kml?forcekml=1&mid=1s5C7_A9ZKbBcvmdg-MZSBnHhjGJDGXA","link":"https://www.google.com/maps/d/u/0/viewer?mid=1s5C7_A9ZKbBcvmdg-MZSBnHhjGJDGXA","type":"kml","title":"給水所","show":true},{"id":"gas_station_noto","url":"https://www.google.com/maps/d/kml?forcekml=1&mid=1JBE8Bncl9LpfLlybDzoQ-T-eTicZcQo","link":"https://www.google.com/maps/d/u/0/viewer?mid=1JBE8Bncl9LpfLlybDzoQ-T-eTicZcQo","type":"kml","title":"ガソリンスタンド","show":true}],"default_hash":"37.47529547606749,136.86173646804122-37.23376666876564,137.36853736803096","center":[137.11023611290682,37.36081513528843],"type":"KML","layer_settings":{"能登町":{"name":"地域の目印（ランドマーク）","name_en":"Landmark","color":"#4f4f5a","bg_color":"#B7B7BE","icon_class":"fa-solid fa-map-pin","class":"layer_gs_ok"},"能登町避難所":{"name":"避難所（能登町指定避難先）","name_en":"Evacuation center in Noto Town","color":"#276445","bg_color":"#A4C1B0","icon_class":"fa-solid fa-street-view","class":"layer_gs_undefined"},"他自治体":{"name":"避難所（他自治体指定避難先）","name_en":"Evacuation center out of Noto Town","color":"#276445","bg_color":"#A4C1B0","icon_class":"fa-solid fa-street-view","class":"layer_water_chibacity"},"SNS情報":{"name":"自主避難先","name_en":"SNS information","color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"通行可能道路(1/3 10:30)":{"name":"通行可能道路(1/3 10:30)","name_en":"Passable roads (1/3 10:30)","color":"#6D4615","bg_color":"#C1B17E","icon_class":"fas fa-plug","class":"layer_charger"},"能登半島地震 給水":{"name":"給水所","name_en":"Water Supply","color":"#285797","bg_color":"#A3BBDA","icon_class":"fa-solid fa-droplet","class":"layer_water"},"能登半島地震 給水_新潟県":{"name":"給水所（新潟県）","name_en":"Water Supply","color":"#285797","bg_color":"#A3BBDA","icon_class":"fa-solid fa-droplet","class":"layer_water"},"営業中のガソリンスタンド":{"name":"ガソリンスタンド","name_en":"Gas Station","color":"#992222","bg_color":"#CA9491","icon_class":"fas fa-gas-pump","class":"layer_gas_station"}}}')},388:function(e){e.exports=JSON.parse('{"map_id":"new-map","map_title":"新しい地図","map_title_en":"New Map","map_description":"新しく地図を追加します","map_description_en":"Add new map","map_image":null,"sources":[{"id":"test_kml","url":"/data/test.kml","type":"kml","title":"Test用KML","title_en":"KML for test","show":true},{"id":"test_geojson","url":"/data/test.geojson","type":"geojson","title":"Test用GeoJSON","title_en":"GeoJSON for test","show":true}],"default_hash":"35.034970230243786,139.83536606997205-34.998870264553034,139.90144296563784","center":[139.83536606997205,35.034970230243786],"layer_settings":{"避難所":{"color":"#276445","bg_color":"#A4C1B0","icon_class":"fas fa-street-view","class":"layer_temporary_houses"},"給水所":{"color":"#285797","bg_color":"#A3BBDA","icon_class":"fas fa-tint","class":"layer_water"}}}')},390:function(e,t,o){"use strict";o(31);var n={props:{isOpen:{type:Boolean,default:!1}},data:function(){return{mapConfig:this.$nuxt.$route.params.map?o(382)("./"+this.$nuxt.$route.params.map):""}},methods:{handleClick:function(){this.$emit("update:isOpen",!1),this.$emit("closeModal")}}},r=o(40),component=Object(r.a)(n,(function(){var e=this,t=e._self._c;return t("div",[t("div",{staticClass:"modal",class:{open:e.isOpen}},[e.mapConfig?t("p",["ja"!==e.$i18n.locale&&e.mapConfig.map_description_en?t("span",[e._v(e._s(e.mapConfig.map_description_en))]):t("span",[e._v(e._s(e.mapConfig.map_description))])]):e._e(),t("p",["ja"===e.$i18n.locale||"en"===e.$i18n.locale?t("span",[t("i18n",{attrs:{path:"about.desc"},scopedSlots:e._u([{key:"githubRepo",fn:function(){return[t("a",{attrs:{href:"https://github.com/codeforjapan/mapprint"}},[e._v(e._s(e.$t("about.github_repository")))])]},proxy:!0}],null,!1,1784239008)})],1):t("span",[e._v(" This site is open source. If you want to contribute to this project, please visit the"),t("a",{attrs:{href:"https://github.com/codeforjapan/mapprint"}},[e._v("Code for Japan's Github repository")]),e._v(". Everyone is welcome, and we especially invite those with JavaScript or Leaflet experience to join us.")])]),t("div",[t("span",{staticClass:"modal-close",on:{click:e.handleClick}},[e._v("× close")])])]),t("div",{staticClass:"modal-background",class:{open:e.isOpen},on:{click:e.handleClick}})])}),[],!1,null,null,null);t.a=component.exports},392:function(e,t,o){e.exports=o.p+"img/sp_logo.2b94eb3.png"},393:function(e,t,o){e.exports=o.p+"img/illust_1.314dd35.png"},394:function(e,t,o){e.exports=o.p+"img/illust_2.068b099.png"},408:function(e,t,o){var map={"./fukidashi_obj_en.svg":409,"./fukidashi_obj_ja.svg":410};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=408},409:function(e,t,o){e.exports=o.p+"img/fukidashi_obj_en.3cb0717.svg"},410:function(e,t,o){e.exports=o.p+"img/fukidashi_obj_ja.fbdfe01.svg"},411:function(e,t,o){var map={"./active_txt_en.svg":412,"./active_txt_ja.svg":413};function n(e){var t=r(e);return o(t)}function r(e){if(!o.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}n.keys=function(){return Object.keys(map)},n.resolve=r,e.exports=n,n.id=411},412:function(e,t,o){e.exports=o.p+"img/active_txt_en.65eaeac.svg"},413:function(e,t,o){e.exports=o.p+"img/active_txt_ja.70eeb11.svg"},414:function(e,t,o){"use strict";o.r(t),o.d(t,"DEFAULT_ICON_COLOR",(function(){return _})),o.d(t,"default",(function(){return d})),o.d(t,"readCategoryOfFolder",(function(){return f}));var n=o(9),r=o(214),l=o(215),c=(o(26),o(12),o(21),o(175),o(20),o(35),o(31),o(30),o(48),o(176)),m=o(415),_="lightgreen",d=function(){function e(){Object(r.a)(this,e),this.updated=void 0,this.markers=void 0}return Object(l.a)(e,[{key:"parse",value:function(e,data,t,o){switch(e){case"kml":var n=(new DOMParser).parseFromString(data,"text/xml");return this.loadKMLData(n,t,o);case"umal":this.loadUmapJsonData(data);break;case"geojson":var r=JSON.parse(data);return this.loadGeoJSONData(r)}}},{key:"addFeatureCollection",value:function(e,t){e.features.forEach((function(e){e.geometry.type}))}},{key:"loadUmapJsonData",value:function(data){data.layers.forEach((function(e){e._umap_options;e.features.forEach((function(e){}))}))}},{key:"loadGeoJSONData",value:function(data){var e=Date.now().toLocaleString(),t=[];return data.features.forEach((function(e){var o="未分類";e.properties.category&&(o=e.properties.category),t.push({feature:e,category:o})})),[t,e]}},{key:"loadKMLData",value:function(data,e,t){var o=data.getElementsByTagName("Folder");0==o.length&&(o=data.getElementsByTagName("Document"));var n="";if(null!=t&&"regexp"==t.type){var r=data.getElementsByTagName(t.field);if(r.length>0){var text=r[0].innerHTML,l=new RegExp(t.pattern,"iu").exec(text);null!=l&&l.length>1&&(n="("+l[t.index]+")")}}var c=[];return Array.prototype.forEach.call(o,(function(e){var t=f(e,data);if("FeatureCollection"==m.kml(e).type){var o=m.kml(e,{styles:!0});if(o.features.length>0)return o.features.map((function(e){"Point"==e.geometry.type&&(e.properties["marker-color"]=t.color,c.push({feature:e,category:t.name}))}))}else{var n=m.kml(e,{styles:!0});n.properties["marker-color"]=t.color,c.push({geojsondata:n,category:t.name})}})),[c,n]}},{key:"inBounds",value:function(e,t){var o=(e[0]-t.getNorthEast().lng)*(e[0]-t.getSouthWest().lng)<0,n=(e[1]-t.getNorthEast().lat)*(e[1]-t.getSouthWest().lat)<0;return o&&n}},{key:"convertCategoryStyle",value:function(e,t){return null==t||t.forEach((function(t){if(t.name==e.name)return e.color=t.color,e.bgColor=t.bg_color,e.iconClass=t.icon_class,e.class=t.class,e})),e}},{key:"serializeLatLng",value:function(e){return e.lat+","+e.lng}},{key:"serializeBounds",value:function(e){return this.serializeLatLng(e.getNorthWest())+"-"+this.serializeLatLng(e.getSouthEast())}},{key:"deserializeLatLng",value:function(s){var e=s.split(",",2),t=Object(n.a)(e,2),o=t[0],r=t[1],l=parseFloat(r),m=parseFloat(o);return new c.LngLat(l,m)}},{key:"deserializeBounds",value:function(s){try{var e=this;return new c.LngLatBounds(s.split("-",2).map((function(t){return e.deserializeLatLng(t)})))}catch(e){return}}}]),e}();function f(e,t){var o,n="red";try{o=e.getElementsByTagName("name")[0].textContent;var r=e.getElementsByTagName("styleUrl")[0].textContent;if(r){var l=t.querySelectorAll(r+" Pair");l.length>0&&Array.prototype.forEach.call(l,(function(e){var o=e.querySelector("key");if(o&&"normal"==o.textContent){var r=e.querySelector("styleUrl").textContent,style=t.querySelector(r);try{var l=style.querySelector("IconStyle color").textContent,a=parseInt("0x"+l.substring(0,2))/255,b=parseInt("0x"+l.substring(2,4)),g=parseInt("0x"+l.substring(4,6)),c=parseInt("0x"+l.substring(6,8));n="rgba(".concat(c,",").concat(g,",").concat(b,",").concat(a,")")}catch(e){n=_}}}))}}catch(t){console.log("#category read error"),console.log(t),console.log(e)}return{name:o,color:n,iconUrl:undefined}}},436:function(e,t,o){"use strict";o.r(t);o(30),o(25),o(12);var n=[function(){var e=this._self._c;return e("div",{staticClass:"aside-item3"},[e("div",{staticClass:"aside-item-illust1"},[e("img",{attrs:{src:o(393),width:"360",height:"450",alt:""}})])])},function(){var e=this._self._c;return e("div",{staticClass:"aside-item6"},[e("div",{staticClass:"aside-item-illust2"},[e("img",{attrs:{src:o(394),width:"640",height:"435",alt:""}})])])}],r=(o(31),o(395)),l=o.n(r),c=(o(19),o(42),o(48),o(41),o(396),o(110),o(9)),m=o(6),_=(o(58),o(399),o(401),o(55),o(59),o(140),o(21),o(26),o(35),o(402),o(404),o(176)),d=o.n(_);function f(dt,e){switch(e){case"ja":return dt.getFullYear()+"年"+("00"+(dt.getMonth()+1)).slice(-2)+"月"+("00"+dt.getDate()).slice(-2)+"日"+("00"+dt.getHours()).slice(-2)+"時"+("00"+dt.getMinutes()).slice(-2)+"分";case"en":return dt.toLocaleString("en-JP");case"es":return dt.toLocaleString("es-JP");case"hi":return dt.toLocaleString("hi-JP");case"ko":return dt.toLocaleString("ko-JP");case"my":return dt.toLocaleString("my-JP");case"ne":return dt.toLocaleString("ne-JP");case"pt":return dt.toLocaleString("pt-JP");case"si":return dt.toLocaleString("si-JP");case"th":return dt.toLocaleString("th-JP");case"tw":return dt.toLocaleString("tw-JP");case"vn":return dt.toLocaleString("vn-JP");case"zh":return dt.toLocaleString("zh-JP");default:return dt.toLocaleString("ja-JP")}}var h,y=o(406).crc16,v={props:{mapConfig:{type:Object,required:!0}},data:function(){var e="en";return"ja"===this.$i18n.locale&&(e="ja"),{layers:[],map:null,bounds:null,updated_at:null,previous_hash:"",activeCategory:"",checkedArea:[],isOpenAreaSelect:!1,isOpenList:!1,isDisplayAllCategory:!0,mapStyle:"https://tile.openstreetmap.jp/styles/maptiler-basic-ja/style.json",legendMark:o(408)("./fukidashi_obj_".concat(e,".svg")),legendActive:o(411)("./active_txt_".concat(e,".svg"))}},computed:{center:function(){return this.mapConfig.center},setLayerSettings:function(e,t,o,n){var r=this.mapConfig;return r.layer_settings[e]={color:t,bg_color:o},n&&(r.layer_settings[e].icon_class=n),this.$emit("update:mapConfig",r),r},inBoundsMarkers:function(){var e=this,t=this.layers.filter((function(t){return t.source.show&&e.checkedArea.includes(t.source.title)})).map((function(e){return e.markers})).flat().filter((function(marker){return!e.bounds||h.inBounds(marker.feature.geometry.coordinates,e.bounds)}));return t},displayMarkersGroupByCategory:function(){return this.inBoundsMarkers.reduce((function(e,t){var o=e.find((function(g){return g.category===t.category}));return o||(o={category:t.category,prop:t.category,markers:[]},e.push(o)),o.markers.push(t),e}),[])},selectArea:{get:function(){return this.checkedArea},set:function(e){this.checkedArea=e}}},mounted:function(){var e=this,t=o(414).default,n=o(420).default;h=new t;var area=[],r={},l=this;this.mapConfig.sources.forEach((function(source){Object(m.a)(regeneratorRuntime.mark((function t(){var data,o,m,_,d;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return source.show&&area.push(source.title),l.checkedArea=area,l.updated_at=f(new Date),t.next=5,n.get(source.url).text();case 5:data=t.sent,o=h.parse(source.type,data,l.mapConfig.layer_settings,source.updated_search_key),m=Object(c.a)(o,2),_=m[0],d=m[1],_.map((function(marker){r[marker.category]=!0})),source.updated_at=d,Object.keys(r).map((function(t){if(!l.mapConfig.layer_settings[t]){var o="#";o+=(parseInt(y(t.substr(0)),16)%32+64).toString(16),o+=(parseInt(y(t.substr(1)),16)%32+64).toString(16),o+=(parseInt(y(t.substr(2)),16)%32+64).toString(16);var n="#";n+=(parseInt(y(t.substr(0)),16)%32+128).toString(16),n+=(parseInt(y(t.substr(1)),16)%32+128).toString(16),n+=(parseInt(y(t.substr(2)),16)%32+128).toString(16),e.$emit("setLayerSettings",{name:t,color:o,bg_color:n})}})),l.layers.push({source:source,markers:_});case 11:case"end":return t.stop()}}),t)})))()}))},methods:{load:function(){var e=window.location.hash.substr(1),t=h.deserializeBounds(e);this.map=this.$refs.map_obj,(void 0!==t||void 0!==(t=h.deserializeBounds(this.mapConfig.default_hash)))&&this.map.map.fitBounds(t,{linear:!1}),this.map.map.on("moveend",this.etmitBounds),this.etmitBounds(),this.map.map.addControl(new d.a.NavigationControl)},etmitBounds:function(){this.bounds=this.map.map.getBounds(),this.setHash(this.bounds),this.$emit("bounds-changed")},setHash:function(e){var s=h.serializeBounds(e),path=location.pathname;s!==this.previous_hash&&window.history.pushState("","",path+"#"+s),this.previous_hash=s},selectCategory:function(e){this.activeCategory=e},clickPrintButton:function(){window.print()},getMarkerCategoryText:function(e,t){void 0===e&&(e="未分類");var o="category."+e,n=this.$i18n.t(o);return n!==o?n:e},getMarkerNameText:function(e,t){var o=e.name;return e.hasOwnProperty("name:"+t)&&(o=e["name:"+t]),o}}},C=o(40),w=Object(C.a)(v,(function(){var e=this,t=e._self._c;return t("div",[t("client-only",[e.layers.length?t("div",[t("div",{staticClass:"map-outer"},[t("MglMap",{ref:"map_obj",attrs:{mapStyle:e.mapStyle,center:e.center,zoom:15,preserveDrawingBuffer:"",sourceId:"basemap",id:"map"},on:{"update:mapStyle":function(t){e.mapStyle=t},"update:map-style":function(t){e.mapStyle=t},load:e.load}},[t("MglGeolocateControl"),e._l(e.inBoundsMarkers,(function(marker,o){var n,r,l,c,m,_,d,f,h;return t("MglMarker",{key:String(o),attrs:{coordinates:marker.feature.geometry.coordinates,anchor:"top-left"}},[t("template",{slot:"marker"},[t("div",{staticClass:"marker"},[t("span",{class:{show:e.isDisplayAllCategory||e.activeCategory===marker.category},style:{background:(null===(n=e.mapConfig.layer_settings[marker.category])||void 0===n?void 0:n.color)||marker.feature.properties["marker-color"]||"red"}},[t("i",{class:[null===(r=e.mapConfig.layer_settings[marker.category])||void 0===r?void 0:r.icon_class,null===(l=e.mapConfig.layer_settings[marker.category])||void 0===l?void 0:l.class],style:{backgroundColor:null===(c=e.mapConfig.layer_settings[marker.category])||void 0===c?void 0:c.color,display:e.mapConfig.layer_settings[marker.category]?"inline":"none"}}),t("b",{staticClass:"number",style:{background:null===(m=e.mapConfig.layer_settings[marker.category])||void 0===m?void 0:m.bg_color}},[e._v(e._s(o+1))])])])]),t("MglPopup",[t("div",[t("div",{staticClass:"popup-type"},[t("i",{class:[null===(_=e.mapConfig.layer_settings[marker.category])||void 0===_?void 0:_.icon_class,null===(d=e.mapConfig.layer_settings[marker.category])||void 0===d?void 0:d.class],style:{backgroundColor:null===(f=e.mapConfig.layer_settings[marker.category])||void 0===f?void 0:f.color}}),t("span",{staticClass:"popup-poi-type"},[e._v(e._s(e.getMarkerCategoryText((null===(h=e.mapConfig.layer_settings[marker.category])||void 0===h?void 0:h.name)||marker.category,e.$i18n.locale)))])]),t("p",[e._v(e._s(e.$i18n.t("PrintableMap.name"))+" "+e._s(e.getMarkerNameText(marker.feature.properties,e.$i18n.locale)))]),t("div",{staticClass:"popup-detail-content"},[t("p",{domProps:{innerHTML:e._s(marker.feature.properties.description?marker.feature.properties.description:"")}})])])])],2)}))],2)],1),t("div",{staticClass:"legend-navi"},[t("div",{staticClass:"area-select",class:{open:e.isOpenAreaSelect}},[t("div",{staticClass:"area-close",on:{click:function(t){e.isOpenAreaSelect=!1}}},[e._v(e._s(e.$t("PrintableMap.close_area_select"))),t("i",{staticClass:"fas fa-arrow-down"})]),t("div",{staticClass:"area-list-outer",class:{open:e.isOpenAreaSelect}},[t("ul",{staticClass:"area-list grid"},e._l(e.mapConfig.sources,(function(source){return t("li",{staticClass:"area-item col-12_xs-6"},[t("label",{staticClass:"area-label"},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.selectArea,expression:"selectArea"}],staticClass:"area-input",attrs:{type:"checkbox"},domProps:{value:source.title,checked:Array.isArray(e.selectArea)?e._i(e.selectArea,source.title)>-1:e.selectArea},on:{change:function(t){var o=e.selectArea,n=t.target,r=!!n.checked;if(Array.isArray(o)){var l=source.title,c=e._i(o,l);n.checked?c<0&&(e.selectArea=o.concat([l])):c>-1&&(e.selectArea=o.slice(0,c).concat(o.slice(c+1)))}else e.selectArea=r}}}),e._v(e._s(source.title)),t("span",[e._v(e._s(source.updated_at))]),source.link?t("a",{attrs:{href:source.link,target:"blank"}},[e._v("["+e._s(e.$t("PrintableMap.back_to_map"))+"]")]):e._e()])])})),0)])]),t("div",{staticClass:"navigation"},[t("div",{staticClass:"navigation-area print-exclude"},[t("div",{staticClass:"legend-navi-icon active"},[t("div",{staticClass:"legend-navi-button print-button",on:{click:function(t){return e.clickPrintButton()}}},[t("span",{staticClass:"fa fa-print",attrs:{alt:e.$t("PrintableMap.print")}})])])]),t("div",{staticClass:"navigation-area"},[t("div",{staticClass:"area-select-button",on:{click:function(t){e.isOpenAreaSelect=!e.isOpenAreaSelect}}},[t("div",{staticClass:"area-array-outer"},[t("i",{staticClass:"fas fa-check-square"}),t("div",{staticClass:"area-array"},[e._v(e._s(e.checkedArea.join(", ")))])]),t("div",{staticClass:"area-select-button-icon print-exclude"},[t("i",{staticClass:"fas fa-arrow-up"})])])]),t("div",{staticClass:"navigation-legend legend-navi-inner print-exclude"},[t("div",{staticClass:"legend-navi-icon"},[t("img",{attrs:{src:e.legendMark,width:"60",height:"60",alt:e.$t("PrintableMap.legend")}})]),t("div",{staticClass:"legend-list-outer"},[t("simplebar",{attrs:{"data-simplebar-auto-hide":"false"}},[t("ul",{staticClass:"legend-list"},e._l(e.mapConfig.layer_settings,(function(o,n){return e.displayMarkersGroupByCategory.some((function(e){return e.category===n}))?t("li",{staticClass:"legend-item"},[t("span",{staticClass:"legend-mark",class:{open:e.isDisplayAllCategory||e.activeCategory===n},style:{backgroundColor:o.color},on:{click:function(t){e.selectCategory(n),e.isOpenList=n,e.isDisplayAllCategory=!1}}},[t("i",{class:[o.icon_class]})])]):e._e()})),0)])],1),t("div",{staticClass:"legend-navi-icon",class:{active:e.activeCategory},on:{click:function(t){e.selectCategory(""),e.isDisplayAllCategory=!0,e.isOpenList=!0}}},[t("div",{staticClass:"legend-navi-button"},[t("img",{staticClass:"legend-navi-img",attrs:{src:e.legendActive,width:"40",height:"40",alt:e.$t("PrintableMap.show_all")}})])])])]),t("div",{staticClass:"list-outer",class:{open:e.isOpenList}},[e._l(e.displayMarkersGroupByCategory,(function(o){var n,r,l;return t("section",{staticClass:"list-section",class:{show:e.isDisplayAllCategory||e.activeCategory===e.getMarkerCategoryText(o.category,e.$i18n.locale)}},[t("h2",{staticClass:"list-title",style:{backgroundColor:null===(n=e.mapConfig.layer_settings[o.category])||void 0===n?void 0:n.color}},[t("span",{staticClass:"list-title-mark"},[t("i",{class:null===(r=e.mapConfig.layer_settings[o.category])||void 0===r?void 0:r.icon_class})]),t("span",[e._v(e._s(e.getMarkerCategoryText((null===(l=e.mapConfig.layer_settings[o.category])||void 0===l?void 0:l.name)||o.category,e.$i18n.locale)))])]),t("ul",{staticClass:"list-items grid-noGutter"},e._l(o.markers,(function(marker){return t("li",{staticClass:"col-12_xs-6"},[t("span",{staticClass:"item-number"},[e._v(e._s(e.inBoundsMarkers.indexOf(marker)+1))]),t("span",{staticClass:"item-name"},[e._v(e._s(e.getMarkerNameText(marker.feature.properties,e.$i18n.locale)))])])})),0)])})),e.isDisplayAllCategory&&0===e.displayMarkersGroupByCategory.length?t("div",{staticClass:"list-section-none"},[t("p",[e._v(e._s(e.$t("PrintableMap.no_point_in_map")))])]):e._e()],2)]),t("div",{staticClass:"legend-close print-exclude",class:{open:e.isOpenList},on:{click:function(t){e.isOpenList=!1}}},[e._v(e._s(e.$t("PrintableMap.close_list"))),t("i",{staticClass:"fas fa-arrow-down"})])]):e._e()])],1)}),[],!1,null,null,null).exports,k=o(390);o(421).init();var S={components:{PrintableMap:w,VueQrcode:l.a,Modal:k.a},asyncData:function(e){var t=e.app.i18n.locale;return{updated_at:f(new Date,t)}},data:function(){return{mapConfig:o(382)("./"+this.$nuxt.$route.params.map),locale:null,isOpenExplain:!1,fullURL:null,updated_at:null}},head:function(){var title,e,image=this.mapConfig.map_image?this.mapConfig.map_image:"logo.png";if("ja"===this.$i18n.locale)title=this.mapConfig.map_title,e=this.mapConfig.map_description;else title=this.mapConfig.map_title_en,e=this.mapConfig.map_description_en;return{title:title+" - "+this.$i18n.t("common.site_name"),meta:[{hid:"description",name:"description",content:e},{hid:"og:image",property:"og:image",content:"https://kamimap.com/images/"+image},{hid:"og:description",name:"og:description",content:e},{hid:"og:title",name:"og:title",content:title+this.$i18n.t("common.site_name")}]}},mounted:function(){this.fullURL=location.href},methods:{updateQRCode:function(){this.fullURL=location.href},closeModalMethod:function(){this.isOpenExplain=!1}}},x=Object(C.a)(S,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"layout-map"},[t("div",{staticClass:"layout-map-inner grid-noGutter"},[t("aside",{staticClass:"print-exclude col-12_md-3_xl-6"},[t("div",{staticClass:"aside-inner"},[t("div",{staticClass:"aside-grid"},[t("div",{staticClass:"aside-item1"},[t("h2",{staticClass:"aside-title-sp"},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{attrs:{src:o(392),width:"607",height:"452",alt:e.$t("common.title")}})])],1),t("h2",{staticClass:"aside-title-pc"},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{attrs:{src:o(381),width:"895",height:"160",alt:e.$t("common.title")}})])],1)]),t("div",{staticClass:"aside-item2"},[t("p",[e._v(e._s(e.$t("map.desc_1")))])]),e._m(0),t("div",{staticClass:"aside-item4"},[t("p",[e._v(e._s(e.$t("map.desc_2"))),t("br"),e._v(e._s(e.$t("map.desc_3")))])]),t("div",{staticClass:"aside-item5"},[t("p",[e._v(e._s(e.$t("map.desc_4"))),t("br"),e._v(e._s(e.$t("map.desc_5")))])]),e._m(1),t("div",{staticClass:"aside-item7"},[t("p",[e._v(e._s(e.$t("map.desc_6"))),t("br"),e._v(e._s(e.$t("map.desc_7")))])])])])]),t("main",{staticClass:"main col-12_md-9_xl-6"},[t("div",{staticClass:"main-sheet"},[t("header",{staticClass:"header"},[t("div",{staticClass:"to-top"},[t("nuxt-link",{attrs:{to:"/"}},[t("i",{staticClass:"far fa-arrow-alt-circle-left fa-2x"})])],1),t("div",{staticClass:"banner"},[t("div",{staticClass:"logo print-exclude"},[t("nuxt-link",{attrs:{to:"/"}},[t("img",{attrs:{src:o(381),width:"895",height:"160",alt:e.$t("common.title")}})])],1),t("div",{staticClass:"sub-outer print-exclude"},[t("div",{staticClass:"sub-button",on:{click:function(t){e.isOpenExplain=!e.isOpenExplain}}},[t("i",{staticClass:"fas fa-info-circle fa-lg"}),t("span",[e._v(e._s(e.$t("common.about")))])]),t("div",{staticClass:"sub-button github-link"},[t("i",{staticClass:"fab fa-github fa-lg"}),t("a",{attrs:{href:"https://github.com/codeforjapan/mapprint"}},[e._v(e._s(e.$t("common.contribute")))])]),t("div",{staticClass:"sub-button"},[t("i",{staticClass:"fas fa-language fa-lg"}),t("select",{attrs:{onChange:"location.href=value;"}},[t("option",{staticClass:"language",attrs:{disabled:"",selected:""}},[e._v("Language: "+e._s(e.$i18n.locales.filter((function(i){return i.code===e.$i18n.locale}))[0].name))]),e._l(e.$i18n.locales,(function(o){return t("option",{domProps:{value:e.switchLocalePath(o.code)}},[e._v(e._s(o.name))])}))],2)])]),t("div",{staticClass:"title-outer"},[e.mapConfig&&"ja"===e.$i18n.locale?t("h1",{staticClass:"title"},[e._v(e._s(e.mapConfig.map_title))]):t("h1",{staticClass:"title"},[e._v(e._s(e.mapConfig.map_title_en))]),t("div",{staticClass:"datetime"},[e._v(e._s(e.$t("map.printed_at"))+" "+e._s(e.updated_at))])])]),t("div",{staticClass:"qrcode"},[t("vue-qrcode",{attrs:{value:e.fullURL,tag:"img"}})],1)]),e.mapConfig?t("printable-map",{attrs:{mapConfig:e.mapConfig},on:{"bounds-changed":e.updateQRCode}}):e._e(),t("footer",{staticClass:"footer"},[t("div",{staticClass:"footer-logo"},[t("img",{attrs:{src:o(381),width:"895",height:"160",alt:e.$t("common.title")}})])])],1)])]),t("modal",{attrs:{isOpen:e.isOpenExplain},on:{closeModal:e.closeModalMethod}})],1)}),n,!1,null,null,null);t.default=x.exports}}]);