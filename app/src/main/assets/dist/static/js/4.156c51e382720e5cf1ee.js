webpackJsonp([4],{"7rNZ":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("TToO"),a=r("QmSG"),s=r("443i"),i=r("gd1U"),o=r("oAV5"),c=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.plateList=[],e}return n.c(e,t),e.prototype.goSearchOther=function(){this.$router.push({name:"bindPlate"})},e.prototype.setStartInfo=function(){return n.a(this,void 0,void 0,function(){var t,e,r,s;return n.d(this,function(n){switch(n.label){case 0:return t=a.startInfo.floorName,e=a.startInfo.flId,r=a.startInfo.center,s={display:"人脸识别大屏",floorName:t,flId:e,center:r},[4,Object(i.d)(this,s)];case 1:return n.sent(),[2]}})})},e.prototype.goSearchCar=function(t,e){return void 0===e&&(e=!1),n.a(this,void 0,void 0,function(){var r,a,s,c,l,u;return n.d(this,function(n){switch(n.label){case 0:return this.setStartInfo(),r=t.display,a=t.flid,s=t.floorNameen,c=t.center,l=t.shape,u={display:r,flId:a,floorName:s,center:{x:c.coordinates[0],y:c.coordinates[1]},plate:t.carNum},[4,Object(i.c)(this,u,l,!0,!0)];case 1:return n.sent(),this.$router.push({name:"map"}),e&&Object(o.b)(this,"plateList"),[2]}})})},e=n.b([Object(s.a)({})],e)}(s.c),l={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"plate-list"},[r("p",{staticClass:"title"},[t._v("请选择要查看的车辆：")]),t._v(" "),r("div",{staticClass:"list"},t._l(t.$store.state.plateList,function(e,n){return r("p",{key:n,staticClass:"plate-item",on:{click:function(r){return t.goSearchCar(e,!0)}}},[t._v(t._s(e.carNum))])}),0),t._v(" "),r("img",{staticClass:"bottom-bg",attrs:{src:"static/images/common/plate-list-bg.png"}})])},staticRenderFns:[]};var u=r("VU/8")(c,l,!1,function(t){r("pnqD")},"data-v-f404c9a8",null);e.default=u.exports},pnqD:function(t,e){}});