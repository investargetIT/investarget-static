(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[22],{"8rkt":function(t,e,a){t.exports={cardList:"antd-pro-pages-list-card-list-style-cardList",card:"antd-pro-pages-list-card-list-style-card",item:"antd-pro-pages-list-card-list-style-item",extraImg:"antd-pro-pages-list-card-list-style-extraImg",newButton:"antd-pro-pages-list-card-list-style-newButton",cardAvatar:"antd-pro-pages-list-card-list-style-cardAvatar",cardDescription:"antd-pro-pages-list-card-list-style-cardDescription",pageHeaderContent:"antd-pro-pages-list-card-list-style-pageHeaderContent",contentLink:"antd-pro-pages-list-card-list-style-contentLink"}},Pj08:function(t,e,a){"use strict";a.r(e);a("+L6B");var n=a("2/Rp"),r=(a("Mwp2"),a("VXEj")),s=(a("IzEo"),a("bx4M")),l=a("oBTY"),c=a("fWQN"),i=a("mtLc"),o=a("yKVA"),d=a("879j"),p=(a("tU7J"),a("wFql")),m=a("xvlK"),g=a("q1tI"),u=a.n(g),E=a("Hx5s"),y=a("9kvl"),v=a("8rkt"),b=a.n(v),w=p["a"].Paragraph,h=function(t){Object(o["a"])(a,t);var e=Object(d["a"])(a);function a(){return Object(c["a"])(this,a),e.apply(this,arguments)}return Object(i["a"])(a,[{key:"componentDidMount",value:function(){var t=this.props.dispatch;t({type:"listAndcardList/fetch",payload:{count:8}})}},{key:"render",value:function(){var t=this.props,e=t.listAndcardList.list,a=t.loading,c=u.a.createElement("div",{className:b.a.pageHeaderContent},u.a.createElement("p",null,"\u6bb5\u843d\u793a\u610f\uff1a\u8682\u8681\u91d1\u670d\u52a1\u8bbe\u8ba1\u5e73\u53f0 ant.design\uff0c\u7528\u6700\u5c0f\u7684\u5de5\u4f5c\u91cf\uff0c\u65e0\u7f1d\u63a5\u5165\u8682\u8681\u91d1\u670d\u751f\u6001\uff0c \u63d0\u4f9b\u8de8\u8d8a\u8bbe\u8ba1\u4e0e\u5f00\u53d1\u7684\u4f53\u9a8c\u89e3\u51b3\u65b9\u6848\u3002"),u.a.createElement("div",{className:b.a.contentLink},u.a.createElement("a",null,u.a.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/MjEImQtenlyueSmVEfUD.svg"})," ","\u5feb\u901f\u5f00\u59cb"),u.a.createElement("a",null,u.a.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/NbuDUAuBlIApFuDvWiND.svg"})," ","\u4ea7\u54c1\u7b80\u4ecb"),u.a.createElement("a",null,u.a.createElement("img",{alt:"",src:"https://gw.alipayobjects.com/zos/rmsportal/ohOEPSYdDTNnyMbGuyLb.svg"})," ","\u4ea7\u54c1\u6587\u6863"))),i=u.a.createElement("div",{className:b.a.extraImg},u.a.createElement("img",{alt:"\u8fd9\u662f\u4e00\u4e2a\u6807\u9898",src:"https://gw.alipayobjects.com/zos/rmsportal/RzwpdLnhmvDJToTdfDPe.png"})),o={};return u.a.createElement(E["c"],{content:c,extraContent:i},u.a.createElement("div",{className:b.a.cardList},u.a.createElement(r["b"],{rowKey:"id",loading:a,grid:{gutter:24,lg:3,md:2,sm:1,xs:1},dataSource:[o].concat(Object(l["a"])(e)),renderItem:function(t){return t&&t.id?u.a.createElement(r["b"].Item,{key:t.id},u.a.createElement(s["a"],{hoverable:!0,className:b.a.card,actions:[u.a.createElement("a",{key:"option1"},"\u64cd\u4f5c\u4e00"),u.a.createElement("a",{key:"option2"},"\u64cd\u4f5c\u4e8c")]},u.a.createElement(s["a"].Meta,{avatar:u.a.createElement("img",{alt:"",className:b.a.cardAvatar,src:t.avatar}),title:u.a.createElement("a",null,t.title),description:u.a.createElement(w,{className:b.a.item,ellipsis:{rows:3}},t.description)}))):u.a.createElement(r["b"].Item,null,u.a.createElement(n["a"],{type:"dashed",className:b.a.newButton},u.a.createElement(m["a"],null)," \u65b0\u589e\u4ea7\u54c1"))}})))}}]),a}(g["Component"]);e["default"]=Object(y["b"])((function(t){var e=t.listAndcardList,a=t.loading;return{listAndcardList:e,loading:a.models.listAndcardList}}))(h)}}]);