(this["webpackJsonpphoto-journal"]=this["webpackJsonpphoto-journal"]||[]).push([[0],{17:function(e,t,a){e.exports=a(28)},22:function(e,t,a){},28:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(13),l=a.n(r),i=(a(22),a(4)),o=function(){return c.a.createElement("div",{className:"title"},c.a.createElement("h1",null,"Sharely"),c.a.createElement("h2",null,"Share Your Journey"))},s=a(8),u=a.n(s),m=a(14),d=a(15),f=(a(29),a(24),Object(d.initializeApp)({apiKey:"AIzaSyAJf-EFsEMrWHaHxJ1UAu9XCg7cWwfbnkU",authDomain:"web-journal-8f8cc.firebaseapp.com",projectId:"web-journal-8f8cc",storageBucket:"web-journal-8f8cc.appspot.com",messagingSenderId:"760516707327",appId:"1:760516707327:web:a203e6c06f60a7d8bf1dca"})),p=f.storage(),g=f.firestore(),b=(f.firestore.ServerTimestamp,function(e){var t=Object(n.useState)(0),a=Object(i.a)(t,2),c=a[0],r=a[1],l=Object(n.useState)(null),o=Object(i.a)(l,2),s=o[0],d=o[1],f=Object(n.useState)(null),b=Object(i.a)(f,2),E=b[0],v=b[1];return Object(n.useEffect)((function(){if("undefined"!==typeof window){var t=p.ref(e.name),a=g.collection("posts");t.put(e).on("state_changed",(function(e){var t=e.bytesTransferred/e.totalBytes*100;r(t)}),(function(e){d(e)}),Object(m.a)(u.a.mark((function e(){var n,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getDownloadURL();case 2:n=e.sent,c=new Date,console.log(c),a.add({url:n,createdAt:c}),v(n);case 7:case"end":return e.stop()}}),e)}))))}}),[e]),{progress:c,url:E,error:s}}),E=a(31),v=function(e){var t=e.file,a=e.setFile,r=b(t),l=r.url,i=r.progress;return Object(n.useEffect)((function(){l&&a(null)}),[l,a]),c.a.createElement(E.a.div,{className:"progress-bar",initial:{width:0},animate:{width:i+"%"}})},j=function(){var e=c.a.useState(null),t=Object(i.a)(e,2),a=t[0],n=t[1],r=c.a.useState(null),l=Object(i.a)(r,2),o=l[0],s=l[1],u=["image/jpeg","image/png","image/heic"];return c.a.createElement("form",null,c.a.createElement("label",null,c.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0];t&&u.includes(t.type)?(n(t),s(null)):(n(null),s("Please select an image file (jpg or png)")),console.log(t)}}),c.a.createElement("span",null,"+")),c.a.createElement("div",{className:"output"},o&&c.a.createElement("div",{className:"error"},o),a&&c.a.createElement("div",null,a.name),a&&c.a.createElement(v,{file:a,setFile:n})))},y=a(16),h=function(e){var t=Object(n.useState)([]),a=Object(i.a)(t,2),c=a[0],r=a[1];return Object(n.useEffect)((function(){g.collection(e).orderBy("createdAt","desc").onSnapshot((function(e){var t=e.docs.map((function(e){return Object(y.a)({id:e.id},e.data())}));r(t)}))}),[e]),{docs:c}},S=function(e){var t=e.setSelectedImage,a=h("posts").docs;return console.log(a),c.a.createElement("div",{className:"img-grid"},a&&a.map((function(e){return c.a.createElement(E.a.div,{whileHover:{opacity:1},layout:!0,className:"img-wrap",key:e.id,onClick:function(){t(e.url)}},c.a.createElement(E.a.img,{src:e.url,alt:"",initial:{opacity:0},animate:{opacity:1},transition:{delay:1}}))})))},w=function(e){var t=e.selectedImage,a=e.setSelectedImage;return c.a.createElement(E.a.div,{onClick:function(e){e.target.classList.contains("backdrop")&&a(null)},initial:{opacity:0},animate:{opacity:1},className:"backdrop"},c.a.createElement(E.a.img,{src:t,alt:"",className:"enlargedImage",initial:{y:"-100vh"},animate:{y:"0"}}))};var O=function(){var e=c.a.useState(null),t=Object(i.a)(e,2),a=t[0],n=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(o,null),c.a.createElement(j,null),c.a.createElement(S,{setSelectedImage:n}),a&&c.a.createElement(w,{setSelectedImage:n,selectedImage:a}))};l.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(O,null)),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.73258596.chunk.js.map