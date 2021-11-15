(this.webpackJsonprecorder=this.webpackJsonprecorder||[]).push([[0],{248:function(e,t,n){},435:function(e,t,n){"use strict";n.r(t);var i,r,a,c,s,o=n(0),d=n(34),u=n.n(d),l=(n(248),n(8)),v=n(452),p=n(434),b=n(454),j=n(455),f=n(9),m=n(27),O=n.n(m),h=n(45),C=n(453),x=n(450),g=n(10),w=n.n(g),y=n(448),D=n(33),S=n(30);!function(e){e.idle="idle",e.preparing="preparing",e.preparingConstraints="preparingConstraints",e.readyToStartCapture="readyToStartCapture",e.ready="ready",e.running="running",e.recording="recording",e.previewPreparing="previewPreparing",e.previewPlaying="previewPlaying",e.previewPaused="previewPaused",e.previewStopped="previewStopped",e.error="error"}(r||(r={})),function(e){e.videoinput="videoinput",e.audioinput="audioinput"}(a||(a={})),function(e){e.setStatus="setStatus",e.addVideoMediaDevices="addVideoMediaDevices",e.addAudioMediaDevices="addAudioMediaDevices",e.setActiveAudioDeviceId="setActiveAudioDeviceId",e.setActiveVideoDeviceId="setActiveVideoDeviceId",e.setMediaConstraints="setMediaConstraints",e.setMediaStream="setMediaStream",e.setBlob="setBlob",e.setDuration="setDuration",e.error="error"}(c||(c={})),function(e){e.notSupported="notSupported",e.videoAccessDenied="videoAccessDenied",e.audioAccessDenied="audioAccessDenied",e.mediaDeviceNotConnected="mediaDeviceNotConnected"}(s||(s={}));var T,I,M,k,A,V,P,R,B,E,L,H,N,U=[r.idle,r.preparing,r.preparingConstraints,r.readyToStartCapture,r.previewPreparing],Z=[r.ready,r.running,r.recording],F=[r.previewPlaying,r.previewStopped,r.previewPaused],X={status:r.idle,duration:0,blob:null,mediaStream:null,videoDeviceId:null,audioDeviceId:null,mediaConstraints:null,videoDevicesList:[],audioDevicesList:[],error:null},z=(i={},Object(S.a)(i,s.notSupported,{name:"Browser is not supported",message:"Either your browser or your OS doesn\u2019t support audio recording. Please try to update your browser to latest version or try another."}),Object(S.a)(i,s.videoAccessDenied,{name:"Access denied",message:"Make sure that access to web-camera  is allowed in your browser preferences"}),Object(S.a)(i,s.audioAccessDenied,{name:"Access denied",message:"Make sure that access to microphone is allowed in your browser preferences"}),Object(S.a)(i,s.mediaDeviceNotConnected,{name:"Camera is not connected",message:"Make sure that access to media device is allowed in your browser preferences"}),i),q=function(e){switch(e){case r.idle:return r.preparing;case r.preparing:return r.ready;case r.ready:return r.running;case r.running:return r.recording;case r.recording:return r.previewPreparing;case r.previewPreparing:return r.previewStopped;case r.previewStopped:return r.previewPlaying;case r.previewPlaying:return r.previewPaused;case r.previewPaused:return r.previewPlaying;default:return null}},J=n(35),Y=n(108),G=n(214),K=n(215),Q=n(236),W=n(237),$=function(e){Object(K.a)(n,e);var t=Object(Q.a)(n);function n(e){var i;return Object(Y.a)(this,n),(i=t.call(this)).code=void 0,i.code=e,i}return Object(G.a)(n,[{key:"name",get:function(){return z[this.code].name}},{key:"message",get:function(){return z[this.code].message}}]),n}(Object(W.a)(Error)),_=function(){var e=Object(h.a)(O.a.mark((function e(t,n){var i,r,c,o,d,u,l,v,p,b;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ne();case 2:if(i=e.sent,r=i.find((function(e){return(null===e||void 0===e?void 0:e.kind)===a.videoinput})),c=i.find((function(e){return(null===e||void 0===e?void 0:e.kind)===a.audioinput})),o=Object(J.isEmpty)(n),d=r&&Object(J.isEmpty)(r.deviceId),u=c&&Object(J.isEmpty)(c.deviceId),l=t.video&&d,v=t.audio&&u,!o||!l&&!v){e.next=27;break}return e.prev=11,e.next=14,ie(t);case 14:return p=e.sent,b=new Promise((function(e){var t=p.getTracks();t.forEach((function(n,i){n.stop(),i+1===t.length&&e(!0)}))})),e.next=18,b;case 18:return e.abrupt("return",_(t));case 21:if(e.prev=21,e.t0=e.catch(11),!t.video){e.next=25;break}throw new $(s.videoAccessDenied);case 25:if(!t.audio){e.next=27;break}throw new $(s.audioAccessDenied);case 27:return e.abrupt("return",i);case 28:case"end":return e.stop()}}),e,null,[[11,21]])})));return function(t,n){return e.apply(this,arguments)}}(),ee=_,te=function(e,t){return e.map((function(e,n){return{value:e.deviceId,label:e.label||"".concat(t," ").concat(n+1)}}))},ne=function(){var e=navigator.mediaDevices;if(!e||!e.enumerateDevices)throw new $(s.notSupported);return e.enumerateDevices()},ie=function(e){var t=navigator.mediaDevices;if(!t||!t.enumerateDevices)throw new $(s.notSupported);return t.getUserMedia(e)},re=n(116),ae=n(82),ce=n(6),se=function(e,t){var n,i,r,a=t.type,s=t.payload,o=t.error;switch(a){case c.setStatus:var d;return(null===s||void 0===s?void 0:s.status)===e.status?e:Object(ce.a)(Object(ce.a)({},e),{},{status:null!==(d=null===s||void 0===s?void 0:s.status)&&void 0!==d?d:e.status});case c.addVideoMediaDevices:return Object(ce.a)(Object(ce.a)({},e),{},{videoDevicesList:Object(J.uniqBy)([].concat(Object(ae.a)(e.videoDevicesList),Object(ae.a)(null!==(n=null===s||void 0===s?void 0:s.mediaDevices)&&void 0!==n?n:[])),"deviceId")});case c.addAudioMediaDevices:return Object(ce.a)(Object(ce.a)({},e),{},{audioDevicesList:Object(J.uniqBy)([].concat(Object(ae.a)(e.audioDevicesList),Object(ae.a)(null!==(i=null===s||void 0===s?void 0:s.mediaDevices)&&void 0!==i?i:[])),"deviceId")});case c.setActiveAudioDeviceId:return Object(ce.a)(Object(ce.a)({},e),{},{audioDeviceId:null===s||void 0===s?void 0:s.mediaDeviceId});case c.setActiveVideoDeviceId:return Object(ce.a)(Object(ce.a)({},e),{},{videoDeviceId:null===s||void 0===s?void 0:s.mediaDeviceId});case c.setMediaConstraints:return Object(ce.a)(Object(ce.a)({},e),{},{mediaConstraints:null===s||void 0===s?void 0:s.mediaConstraints});case c.setMediaStream:return Object(ce.a)(Object(ce.a)({},e),{},{mediaStream:null===s||void 0===s?void 0:s.mediaStream});case c.setBlob:return Object(ce.a)(Object(ce.a)({},e),{},{blob:null===s||void 0===s?void 0:s.blob});case c.setDuration:return Object(ce.a)(Object(ce.a)({},e),{},{duration:null!==(r=null===s||void 0===s?void 0:s.duration)&&void 0!==r?r:0});case c.error:return Object(ce.a)(Object(ce.a)({},e),{},{error:o});default:return e}},oe=n(2),de={state:X,setStatus:function(){},setNextStatus:function(){},addVideoMediaDevices:function(){},addAudioMediaDevices:function(){},setActiveVideoDeviceId:function(){},setActiveAudioDeviceId:function(){},setMediaConstraints:function(){},setMediaStream:function(){},setBlob:function(){},setDuration:function(){},resetMediaStream:function(){},clearMediaConstraints:function(){},clearBlob:function(){},setError:function(){}},ue=Object(o.createContext)(de),le=function(e){var t=e.children,n=function(){var e=Object(o.useReducer)(se,X),t=Object(D.a)(e,2),n=t[0],i=t[1];return{state:n,setStatus:Object(o.useCallback)((function(e){return i({type:c.setStatus,payload:{status:e}})}),[]),addVideoMediaDevices:Object(o.useCallback)((function(e){return i({type:c.addVideoMediaDevices,payload:{mediaDevices:e}})}),[]),addAudioMediaDevices:Object(o.useCallback)((function(e){return i({type:c.addAudioMediaDevices,payload:{mediaDevices:e}})}),[]),setActiveVideoDeviceId:Object(o.useCallback)((function(e){return i({type:c.setActiveVideoDeviceId,payload:{mediaDeviceId:e}})}),[]),setActiveAudioDeviceId:Object(o.useCallback)((function(e){return i({type:c.setActiveAudioDeviceId,payload:{mediaDeviceId:e}})}),[]),setMediaConstraints:Object(o.useCallback)((function(e){return i({type:c.setMediaConstraints,payload:{mediaConstraints:e}})}),[]),setMediaStream:Object(o.useCallback)((function(e){return i({type:c.setMediaStream,payload:{mediaStream:e}})}),[]),setBlob:Object(o.useCallback)((function(e){return i({type:c.setBlob,payload:{blob:e}})}),[]),setDuration:Object(o.useCallback)((function(e){return i({type:c.setDuration,payload:{duration:e}})}),[]),setError:Object(o.useCallback)((function(e){return i({type:c.error,error:e})}),[])}}(),i=n.state,r=n.setStatus,a=n.addVideoMediaDevices,s=n.addAudioMediaDevices,d=n.setActiveVideoDeviceId,u=n.setActiveAudioDeviceId,l=n.setMediaConstraints,v=n.setMediaStream,p=n.setBlob,b=n.setDuration,j=n.setError,f=i.status,m=i.mediaStream,O=i.blob;return Object(oe.jsx)(ue.Provider,{value:{state:i,setStatus:r,setNextStatus:function(){var e;return r(null!==(e=q(f))&&void 0!==e?e:f)},addVideoMediaDevices:a,addAudioMediaDevices:s,setActiveVideoDeviceId:d,setActiveAudioDeviceId:u,setMediaConstraints:l,setMediaStream:v,setBlob:p,setDuration:b,resetMediaStream:function(){m&&(m.getTracks().forEach((function(e){return e.stop()})),v(null))},clearMediaConstraints:function(){return l(null)},clearBlob:function(){O&&p(null)},setError:j},children:t})},ve=function(){return Object(o.useContext)(ue).state},pe=function(){var e=Object(o.useContext)(ue);e.state;return Object(re.a)(e,["state"])},be="default",je=function(){var e=ve().status,t=pe(),n=t.setStatus,i=t.addAudioMediaDevices,c=t.addVideoMediaDevices,d=t.setActiveVideoDeviceId,u=t.setActiveAudioDeviceId,l=t.setError,v=function(){var e=Object(h.a)(O.a.mark((function e(){var t,o,v,p,b,j,f;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,ee({audio:!0,video:!0});case 3:if(t=e.sent,o=t.find((function(e){return e.kind===a.audioinput&&!Object(J.isEmpty)(e.deviceId)})),v=t.find((function(e){return e.kind===a.videoinput&&!Object(J.isEmpty)(e.deviceId)})),o&&v){e.next=8;break}throw new $(s.mediaDeviceNotConnected);case 8:p=t.filter((function(e){return e.kind===a.videoinput})),b=t.filter((function(e){return e.kind===a.audioinput})),j=p.find((function(e){var t=e.kind,n=e.deviceId;return t===a.videoinput&&n===be}))||p[0],f=b.find((function(e){var t=e.kind,n=e.deviceId;return t===a.audioinput&&n===be}))||b[0],c(p),i(b),j&&d(j.deviceId),f&&u(f.deviceId),n(r.preparingConstraints),e.next=22;break;case 19:e.prev=19,e.t0=e.catch(0),l(e.t0);case 22:case"end":return e.stop()}}),e,null,[[0,19]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){if(e===r.idle)try{n(r.preparing),v()}catch(t){n(r.error),l(t)}}),[e])},fe=function(e){var t=Object(o.useRef)(),n=ve(),i=n.status,a=n.mediaStream,c=pe(),s=c.setStatus,d=c.setBlob;je(),Oe(),he(e),Ce(e);var u=function(e){var t=e.data;d(t)};return Object(o.useEffect)((function(){i===r.ready&&a&&(t.current=new MediaRecorder(a,{mimeType:"video/webm",audioBitsPerSecond:128e3,videoBitsPerSecond:25e5}),t.current.ondataavailable=u,s(r.running))}),[i,a]),{startRecording:function(){var e,n;null===t||void 0===t||null===(e=t.current)||void 0===e||null===(n=e.start)||void 0===n||n.call(e)},stopRecording:function(){var e=t.current;e&&(e.stop(),s(r.previewPreparing))}}},me=function(){var e=ve(),t=e.videoDevicesList,n=e.audioDevicesList,i=e.videoDeviceId;return{audioValue:e.audioDeviceId,videoValue:i,audioOptions:te(n,"Audio device"),videoOptions:te(t,"Video device")}},Oe=function(){var e=ve(),t=e.status,n=e.audioDeviceId,i=e.videoDeviceId,a=pe(),c=a.setMediaConstraints,d=a.clearMediaConstraints,u=a.setStatus,l=a.setError,v=function(){var e={video:!1,audio:!1},t=function(){var e=navigator.mediaDevices;if(!e||!e.getSupportedConstraints)throw new $(s.notSupported);return e.getSupportedConstraints()}(),a={deviceId:{exact:String(i)},width:{min:640,ideal:1280,max:1920},height:{min:360,ideal:720,max:1080}};if(t.aspectRatio&&(a.aspectRatio={ideal:16/9}),t.frameRate&&(a.frameRate={min:25,ideal:30,max:30}),t.facingMode&&(a.facingMode={ideal:"user"}),i&&(e.video=a),e.audio=!!n&&{deviceId:{exact:n}},!e.video&&!e.audio)throw new $(s.videoAccessDenied);c(e),u(r.readyToStartCapture)};Object(o.useEffect)((function(){if(t===r.preparingConstraints)try{d(),v()}catch(e){l(e)}}),[t])},he=function(e){var t=ve(),n=t.status,i=t.mediaConstraints,a=t.mediaStream,c=pe(),s=c.setStatus,d=c.setMediaStream,u=c.resetMediaStream,l=function(){var e=Object(h.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,ie(i);case 4:t=e.sent,d(t),s(r.ready);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){return n!==r.readyToStartCapture?function(){}:(l(),u)}),[n,i]),Object(o.useEffect)((function(){n===r.readyToStartCapture&&e&&a&&(e.muted=!0,e.srcObject=a,e.autoplay=!0)}),[n,e,a])},Ce=function(e){var t=ve().blob,n=pe(),i=n.setStatus,a=n.resetMediaStream;Object(o.useLayoutEffect)((function(){return e&&t?(e.srcObject=null,e.autoplay=!1,e.muted=!1,e.src=URL.createObjectURL(t),a(),setTimeout((function(){i(r.previewStopped)}),1e3),function(){e.src&&URL.revokeObjectURL(e.src)}):function(){}}),[t,e])},xe=function(e,t){var n=Object(o.useRef)(),i=Object(o.useRef)(!1),r=t?0:null===e||void 0===e?void 0:e.currentTime,a=Object(o.useState)(null!==r&&void 0!==r?r:0),c=Object(D.a)(a,2),s=c[0],d=c[1];return Object(o.useLayoutEffect)((function(){if(!e)return function(){};var r=function r(){!t&&e&&i.current&&(n.current&&window.cancelAnimationFrame(n.current),d(e.currentTime),n.current=window.requestAnimationFrame(r))};return i.current=!0,e.addEventListener("timeupdate",r),function(){i.current=!1,e.removeEventListener("timeupdate",r)}}),[null===e||void 0===e?void 0:e.currentTime,t]),s},ge=n(449),we=Object(f.b)(ge.a)(T||(T=Object(l.a)(["\n    padding: 0;\n    overflow: hidden;\n    position: relative;\n    > .rs-panel-body {\n        padding: 0;\n        display: flex;\n        flex-direction: column;\n        height: fit-content;\n    }\n"]))),ye=f.b.video(I||(I=Object(l.a)(["\n    width: 100%;\n    height: auto;\n    opacity: 0;\n    transition: opacity 0.5s;\n    &.active {\n        opacity: 1;\n    }\n"]))),De=n(117),Se=f.b.div(M||(M=Object(l.a)(["\n    position: relative;\n    background: rgb(0, 0, 0);\n    height: 80px;\n    width: 100%;\n"]))),Te=f.b.div(k||(k=Object(l.a)(["\n    font-size: 20px;\n    display: flex;\n"]))),Ie=(Object(f.b)(Se)(A||(A=Object(l.a)(["\n    justify-content: start;\n"]))),f.b.span(V||(V=Object(l.a)(["\n    margin: 0 10px; ;\n"])))),Me=Object(f.b)(De.a)(P||(P=Object(l.a)(["\n    width: 50px;\n    height: 50px;\n    margin: 0 10px;\n"]))),ke=f.b.div(R||(R=Object(l.a)(["\n    position: absolute;\n    top: -10px;\n    left: 0;\n    width: 100%;\n    & > .rs-progress {\n        padding: 0;\n    }\n    .rs-progress-line-outer,\n    .rs-progress-line-inner {\n        border-radius: 0;\n    }\n    .rs-progress-line-bg {\n        transition: none;\n    }\n"]))),Ae=f.b.div(B||(B=Object(l.a)(["\n    background: #000;\n    position: relative;\n    height: 80px;\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: ",";\n"])),(function(e){return e.justify})),Ve=Object(f.a)(E||(E=Object(l.a)(["\n.recording-controls-enter {\n  opacity: 0;\n}\n.recording-controls-enter-active{\n  opacity: 1;\n  transition: all 0.3s;\n} \n.recording-controls-enter-done {\n  opacity: 1;\n}\n.recording-controls-exit {\n  opacity: 1;\n}\n.recording-controls-exit-active {\n  opacity: 0;\n  transition: all 0.3s;\n}\n"]))),Pe=Object(f.a)(L||(L=Object(l.a)(["\n.recording-timer {\n  opacity: 0;\n  visibility: hidden;\n  position: absolute;\n}\n.recording-timer-enter {\n  opacity: 0;\n  visibility: visible;\n  transform: translateX(0);\n}\n.recording-timer-enter-active {\n  opacity: 1;\n  transform: translateX(80px);\n  transition: all 0.3s;\n}\n.recording-timer-enter-done {\n  opacity: 1;\n  visibility: visible;\n  transform: translateX(80px);\n}\n.recording-timer-exit {\n  opacity: 1;\n  transform: translateX(80px);\n}\n.recording-timer-exit-active {\n  opacity: 0;\n  transform: translateX(0);\n  transition: all 0.3s;\n}\n"]))),Re=function(){var e,t=Object(o.useRef)(null),n=ve(),i=n.status,a=n.error,c=pe(),s=c.setStatus,d=c.setNextStatus,u=c.clearBlob,l=U.includes(i),v=Z.includes(i),p=F.includes(i),b=i===r.running,j=v||l,f=fe(t.current),m=f.startRecording,g=f.stopRecording,D=xe(t.current,j),S=w()({active:!l}),T=function(){var e=Object(h.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=t.current){e.next=3;break}return e.abrupt("return");case 3:if(![r.previewStopped,r.previewPaused].includes(i)){e.next=9;break}return e.next=7,n.play();case 7:e.next=11;break;case 9:return e.next=11,n.pause();case 11:d();case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(oe.jsxs)(we,{bordered:!0,children:[Object(oe.jsx)(Ve,{}),l&&Object(oe.jsx)(C.a,{backdrop:!0,content:"loading...",vertical:!0}),b&&Object(oe.jsx)(xt,{}),a&&Object(oe.jsx)(x.a,{full:!0,showIcon:!0,type:"error",header:null!==(e=null===a||void 0===a?void 0:a.name)&&void 0!==e?e:"Something went wrong",children:a.message}),Object(oe.jsx)(ye,{ref:t,className:S,onEnded:function(){s(r.previewStopped)}}),Object(oe.jsxs)(Ae,{justify:p?"flex-start":"center",children:[Object(oe.jsx)(y.a,{timeout:300,classNames:"recording-controls",unmountOnExit:!0,in:v,children:Object(oe.jsx)(qe,{onStartRecording:m,onStopRecording:g})}),Object(oe.jsx)(y.a,{timeout:300,classNames:"recording-controls",unmountOnExit:!0,in:p,children:Object(oe.jsx)(wt,{previewTime:D,onPlayPause:T,onReset:function(){u(),s(r.idle)}})})]})]})};!function(e){e.idle="idle",e.running="running",e.paused="paused",e.resumed="resumed"}(H||(H={})),function(e){e.forward="forward",e.backward="backward"}(N||(N={}));var Be,Ee,Le,He=function(e,t){var n=["ms","s","m","h","d"],i=n.findIndex((function(e){return e===t})),r=[1e3,60,60,24,1],a=[1,1e3,6e4,36e5,864e5];return n.reduce((function(t,n,c){return c>i?Object(ce.a)(Object(ce.a)({},t),{},Object(S.a)({},n,0)):c===i?Object(ce.a)(Object(ce.a)({},t),{},Object(S.a)({},n,Math.floor(e/a[c]))):Object(ce.a)(Object(ce.a)({},t),{},Object(S.a)({},n,Math.floor(e/a[c])%r[c]))}),{ms:0,s:0,m:0,h:0,d:0})},Ne=function e(t){var n=this,i=t.initialTime,r=void 0===i?0:i,a=t.expectedTime,c=void 0===a?0:a,s=t.timeToUpdate,o=t.direction,d=void 0===o?N.forward:o,u=t.onChange,l=void 0===u?function(){}:u,v=t.onStop,p=void 0===v?function(){}:v;Object(Y.a)(this,e),this.intervalId=null,this.initialTime=void 0,this.expectedTime=void 0,this.startTime=0,this.status=H.idle,this.timeToUpdate=1e3,this.downtime=0,this.startPause=0,this.passedTime=0,this.direction=void 0,this.onChange=void 0,this.onStop=void 0,this.setPassedTime=function(e){n.passedTime=e},this.startTimer=function(){n.status!==H.idle&&n.status!==H.resumed||(n.startTime=Date.now(),n.intervalId=window.setInterval((function(){n.passedTime=n.computeTime(),n.onChange(n.passedTime)}),n.timeToUpdate),n.status=H.running)},this.stop=function(){n.status!==H.running&&n.status!==H.paused||(n.intervalId&&clearInterval(n.intervalId),n.status=H.idle,n.onStop(n.passedTime),n.setPassedTime(n.initialTime),n.onChange(n.initialTime))},this.pause=function(){n.status===H.running&&(n.startPause=Date.now(),n.intervalId&&clearInterval(n.intervalId),n.status=H.paused)},this.resume=function(){n.status===H.paused&&(n.status=H.resumed,n.startTimer())},this.toggle=function(){n.status===H.paused&&n.resume(),n.status===H.running&&n.pause(),n.status!==H.idle&&n.status!==H.resumed||n.startTimer()},this.computeTime=function(){if(n.status!==H.running)return n.passedTime;var e=Date.now(),t=e-n.startTime;switch(n.direction){case"forward":return n.passedTime+=t,n.startTime=e,n.expectedTime&&n.passedTime>=n.expectedTime?(n.stop(),n.expectedTime):n.passedTime;case"backward":var i=n.passedTime-t,r=i%n.timeToUpdate?n.timeToUpdate-i%n.timeToUpdate:0;return n.passedTime=i+r,n.startTime=e,n.passedTime<n.expectedTime?(n.stop(),0):n.passedTime;default:return n.passedTime}},this.setPassedTime(r),this.initialTime=r,this.expectedTime=c,this.timeToUpdate=s,this.direction=d,this.onChange=l,this.onStop=p},Ue=function(e){return String(e).padStart(2,"0")},Ze=function(e){var t=e.direction,n=e.isInSeconds,i=e.initialTime,r=void 0===i?0:i,a=e.expectedTime,c=void 0===a?0:a,s=e.timeToUpdate,d=void 0===s?1e3:s,u=e.startImmediately,l=e.onStop,v=void 0===l?function(){}:l,p=Object(o.useState)(r),b=Object(D.a)(p,2),j=b[0],f=b[1],m=Object(o.useRef)(),O=n?1e3:1,h=function(){var e;null===(e=m.current)||void 0===e||e.startTimer()},C=function(e){f(e/O)},x=function(e){v(e/O)};return Object(o.useEffect)((function(){m.current=new Ne({initialTime:r*O,expectedTime:c*O,direction:t,timeToUpdate:d,onChange:C,onStop:x}),u&&h()}),[r,c,t]),{time:j,start:h,stop:function(){var e;null===(e=m.current)||void 0===e||e.stop()},pause:function(){var e;null===(e=m.current)||void 0===e||e.pause()},resume:function(){var e;null===(e=m.current)||void 0===e||e.resume()},toggle:function(){var e;null===(e=m.current)||void 0===e||e.toggle()},updateTime:function(e){var t;f(e),null===(t=m.current)||void 0===t||t.setPassedTime(e*O)}}},Fe=function(e){var t=e.direction,n=void 0===t?N.forward:t,i=e.initialTime,r=void 0===i?0:i,a=e.expectedTime,c=e.setTimerRef,s=e.onStop,d=Ze({initialTime:r,expectedTime:a,direction:n,startImmediately:!1,onStop:s});return Object(o.useEffect)((function(){null===c||void 0===c||c(d)}),[]),Object(oe.jsx)(ze,{time:d.time})},Xe=f.b.div(Be||(Be=Object(l.a)(["\n    display: flex;\n"]))),ze=function(e){var t=e.time,n=He(t,"h"),i=n.h,r=n.m,a=n.s;return Object(oe.jsxs)(Xe,{children:[Object(oe.jsx)("span",{children:Ue(i)}),Object(oe.jsx)("span",{children:":"}),Object(oe.jsx)("span",{children:Ue(r)}),Object(oe.jsx)("span",{children:":"}),Object(oe.jsx)("span",{children:Ue(a)})]})},qe=function(e){var t=e.onStartRecording,n=e.onStopRecording,i=Object(o.useRef)(),a=ve().status,c=pe(),s=c.setNextStatus,d=c.setDuration,u=a===r.recording,l=function(){var e,t;return null===(e=i.current)||void 0===e||null===(t=e.stop)||void 0===t?void 0:t.call(e)},p=function(){t(),s(),function(){var e,t;null===(e=i.current)||void 0===e||null===(t=e.start)||void 0===t||t.call(e)}()};return Object(o.useEffect)((function(){a===r.previewStopped&&l()}),[a]),Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(Pe,{}),Object(oe.jsxs)(v.a,{align:"middle",justify:"center",children:[Object(oe.jsx)(v.a.Item,{children:Object(oe.jsx)(Me,{onClick:function(){switch(a){case r.running:p();break;case r.recording:n(),s(),l()}},color:"red",appearance:"primary",icon:Object(oe.jsx)(lt,{status:a}),circle:!0})}),Object(oe.jsx)(y.a,{timeout:300,classNames:"recording-timer",in:u,children:Object(oe.jsx)(Te,{className:"recording-timer",children:Object(oe.jsx)(Fe,{setTimerRef:function(e){i.current=e},onStop:d})})})]})]})},Je=f.b.span(Ee||(Ee=Object(l.a)(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n"]))),Ye=f.b.span(Le||(Le=Object(l.a)(["\n    margin-top: 5px;\n    text-transform: uppercase;\n    font-size: 8px;\n"]))),Ge=function(e){var t=e.children,n=e.className,i=e.color,r=e.width,a=e.height,c=e.viewBox,s=e.titleAccess,o=Object(re.a)(e,["children","className","color","width","height","viewBox","titleAccess"]);return Object(oe.jsxs)("svg",Object(ce.a)(Object(ce.a)({className:w()(n),width:r,height:a,viewBox:c,focusable:"false",color:i||"","aria-hidden":s?void 0:"true",role:s?"img":"presentation"},o),{},{children:[t,s?Object(oe.jsx)("title",{children:s}):null]}))};Ge.defaultProps={children:null,className:"",color:"inherit",titleAccess:""};var Ke,Qe,We,$e,_e,et,tt,nt=Ge,it=function(){return Object(oe.jsx)(nt,{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(oe.jsx)("path",{d:"M8.992 3.986C8.68773 3.81219 8.34315 3.72138 7.99274 3.72265C7.64234 3.72393 7.29842 3.81724 6.99542 3.99324C6.69243 4.16925 6.44099 4.42177 6.26629 4.72552C6.09159 5.02927 5.99976 5.37359 6 5.724V18.276C5.99976 18.6264 6.09159 18.9707 6.26629 19.2745C6.44099 19.5782 6.69243 19.8307 6.99542 20.0068C7.29842 20.1828 7.64234 20.2761 7.99274 20.2773C8.34315 20.2786 8.68773 20.1878 8.992 20.014L19.976 13.736C20.2819 13.561 20.5361 13.3083 20.7129 13.0034C20.8898 12.6986 20.9829 12.3524 20.9829 12C20.9829 11.6476 20.8898 11.3014 20.7129 10.9966C20.5361 10.6917 20.2819 10.439 19.976 10.264L8.992 3.986Z",fill:"currentColor"})})},rt=function(){return Object(oe.jsx)(nt,{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(oe.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3.6 4C2.64522 4 1.72955 4.37928 1.05442 5.05442C0.379285 5.72955 0 6.64522 0 7.6V17.2C0 18.1548 0.379285 19.0705 1.05442 19.7456C1.72955 20.4207 2.64522 20.8 3.6 20.8H14.4C15.3548 20.8 16.2705 20.4207 16.9456 19.7456C17.6207 19.0705 18 18.1548 18 17.2V15.2968L20.928 18.2248C22.0608 19.3588 24 18.5548 24 16.9516V7.8484C24 6.2452 22.0608 5.4412 20.928 6.5764L18 9.502V7.6C18 6.64522 17.6207 5.72955 16.9456 5.05442C16.2705 4.37928 15.3548 4 14.4 4H3.6Z",fill:"currentColor"})})},at=function(){return Object(oe.jsx)(nt,{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(oe.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M7.36364 4.36364C7.36364 3.20633 7.82338 2.09642 8.64172 1.27808C9.46006 0.459739 10.57 0 11.7273 0C12.8846 0 13.9945 0.459739 14.8128 1.27808C15.6312 2.09642 16.0909 3.20633 16.0909 4.36364V10.9091C16.0909 12.0664 15.6312 13.1763 14.8128 13.9946C13.9945 14.813 12.8846 15.2727 11.7273 15.2727C10.57 15.2727 9.46006 14.813 8.64172 13.9946C7.82338 13.1763 7.36364 12.0664 7.36364 10.9091V4.36364ZM5.18182 9.81818C5.18182 9.52886 5.06688 9.25138 4.8623 9.04679C4.65771 8.84221 4.38024 8.72727 4.09091 8.72727C3.80158 8.72727 3.52411 8.84221 3.31952 9.04679C3.11493 9.25138 3 9.52886 3 9.81818V10.9091C3.00004 13.0348 3.77584 15.0875 5.18182 16.6819C6.5878 18.2763 8.52731 19.3028 10.6364 19.5687V22.9091C10.6364 23.1984 10.7513 23.4759 10.9559 23.6805C11.1605 23.8851 11.4379 24 11.7273 24C12.0166 24 12.2941 23.8851 12.4987 23.6805C12.7032 23.4759 12.8182 23.1984 12.8182 22.9091V19.5687C14.9272 19.3028 16.8667 18.2763 18.2727 16.6819C19.6787 15.0875 20.4545 13.0348 20.4545 10.9091V9.81818C20.4545 9.52886 20.3396 9.25138 20.135 9.04679C19.9304 8.84221 19.653 8.72727 19.3636 8.72727C19.0743 8.72727 18.7968 8.84221 18.5922 9.04679C18.3877 9.25138 18.2727 9.52886 18.2727 9.81818V10.9091C18.2727 12.6451 17.5831 14.3099 16.3556 15.5374C15.1281 16.7649 13.4632 17.4545 11.7273 17.4545C9.99131 17.4545 8.32645 16.7649 7.09894 15.5374C5.87143 14.3099 5.18182 12.6451 5.18182 10.9091V9.81818Z",fill:"currentColor"})})},ct=function(){return Object(oe.jsx)(nt,{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(oe.jsx)("path",{d:"M24 12C24 18.6276 18.6276 24 12 24C5.3724 24 0 18.6276 0 12C0 5.3724 5.3724 0 12 0C18.6276 0 24 5.3724 24 12ZM7.8 6.6C7.48174 6.6 7.17652 6.72643 6.95147 6.95147C6.72643 7.17652 6.6 7.48174 6.6 7.8V16.2C6.6 16.5183 6.72643 16.8235 6.95147 17.0485C7.17652 17.2736 7.48174 17.4 7.8 17.4H16.2C16.5183 17.4 16.8235 17.2736 17.0485 17.0485C17.2736 16.8235 17.4 16.5183 17.4 16.2V7.8C17.4 7.48174 17.2736 7.17652 17.0485 6.95147C16.8235 6.72643 16.5183 6.6 16.2 6.6H7.8Z",fill:"currentColor"})})},st=function(){return Object(oe.jsx)(nt,{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(oe.jsx)("path",{d:"M12.001 3.86412V1.62685C12.001 1.06441 11.3261 0.78944 10.9386 1.1894L7.439 4.67654C7.18902 4.92651 7.18902 5.31397 7.439 5.56395L10.9261 9.05109C11.3261 9.43855 12.001 9.16358 12.001 8.60114V6.36387C16.1381 6.36387 19.5003 9.72602 19.5003 13.8631C19.5003 17.2627 17.213 20.1375 14.1133 21.0499C13.5884 21.1998 13.2509 21.6998 13.2509 22.2372C13.2509 23.0497 14.0258 23.6871 14.8132 23.4496C16.8867 22.8438 18.708 21.5821 20.0037 19.8536C21.2995 18.1252 21.9999 16.0233 22 13.8631C22 8.33866 17.5255 3.86412 12.001 3.86412ZM4.5018 13.8631C4.5018 12.1883 5.05174 10.6384 5.98915 9.37606C6.36411 8.87611 6.31411 8.18868 5.87666 7.73873C5.35171 7.21378 4.4518 7.26377 4.00185 7.86371C3.03191 9.15503 2.38958 10.6623 2.12993 12.2563C1.87028 13.8503 2.00104 15.4835 2.51102 17.0159C3.021 18.5483 3.89497 19.9342 5.05802 21.0547C6.22107 22.1752 7.63851 22.997 9.18882 23.4496C9.97624 23.6871 10.7512 23.0497 10.7512 22.2372C10.7512 21.6998 10.4137 21.1998 9.88874 21.0499C6.78906 20.1375 4.5018 17.2627 4.5018 13.8631Z",fill:"currentColor"})})},ot=function(){return Object(oe.jsx)(nt,{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(oe.jsx)("path",{d:"M7 5H17C17.5304 5 18.0391 5.21071 18.4142 5.58579C18.7893 5.96086 19 6.46957 19 7V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H7C6.46957 19 5.96086 18.7893 5.58579 18.4142C5.21071 18.0391 5 17.5304 5 17V7C5 6.46957 5.21071 5.96086 5.58579 5.58579C5.96086 5.21071 6.46957 5 7 5V5Z",fill:"currentColor"})})},dt=function(){return Object(oe.jsx)(nt,{width:"16",height:"16",viewBox:"0 0 16 16",children:Object(oe.jsx)("path",{d:"M16 8.00067V8C16 3.582 12.4187 0 8 0C3.582 0 0 3.58133 0 8V8.00067C0 12.4187 3.58133 16.0007 8 16.0007C12.418 16.0007 16 12.4193 16 8.00067Z",fill:"currentColor"})})},ut=function(){return Object(oe.jsx)(nt,{width:"24",height:"24",viewBox:"0 0 24 24",children:Object(oe.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M20 6.99999C20.2652 6.99999 20.5196 6.89464 20.7071 6.7071C20.8946 6.51956 21 6.26521 21 5.99999C21 5.73478 20.8946 5.48042 20.7071 5.29289C20.5196 5.10535 20.2652 4.99999 20 4.99999H10.83C10.6234 4.41446 10.2403 3.90743 9.7334 3.54878C9.22654 3.19014 8.62091 2.99754 8 2.99754C7.37909 2.99754 6.77346 3.19014 6.2666 3.54878C5.75974 3.90743 5.3766 4.41446 5.17 4.99999H4C3.73478 4.99999 3.48043 5.10535 3.29289 5.29289C3.10536 5.48042 3 5.73478 3 5.99999C3 6.26521 3.10536 6.51956 3.29289 6.7071C3.48043 6.89464 3.73478 6.99999 4 6.99999H5.17C5.3766 7.58553 5.75974 8.09256 6.2666 8.4512C6.77346 8.80985 7.37909 9.00244 8 9.00244C8.62091 9.00244 9.22654 8.80985 9.7334 8.4512C10.2403 8.09256 10.6234 7.58553 10.83 6.99999H20ZM20 13C20.2652 13 20.5196 12.8946 20.7071 12.7071C20.8946 12.5196 21 12.2652 21 12C21 11.7348 20.8946 11.4804 20.7071 11.2929C20.5196 11.1054 20.2652 11 20 11H18.83C18.6234 10.4145 18.2403 9.90743 17.7334 9.54878C17.2265 9.19014 16.6209 8.99754 16 8.99754C15.3791 8.99754 14.7735 9.19014 14.2666 9.54878C13.7597 9.90743 13.3766 10.4145 13.17 11H4C3.73478 11 3.48043 11.1054 3.29289 11.2929C3.10536 11.4804 3 11.7348 3 12C3 12.2652 3.10536 12.5196 3.29289 12.7071C3.48043 12.8946 3.73478 13 4 13H13.17C13.3766 13.5855 13.7597 14.0926 14.2666 14.4512C14.7735 14.8098 15.3791 15.0024 16 15.0024C16.6209 15.0024 17.2265 14.8098 17.7334 14.4512C18.2403 14.0926 18.6234 13.5855 18.83 13H20ZM20 19C20.2652 19 20.5196 18.8946 20.7071 18.7071C20.8946 18.5196 21 18.2652 21 18C21 17.7348 20.8946 17.4804 20.7071 17.2929C20.5196 17.1054 20.2652 17 20 17H10.83C10.6234 16.4145 10.2403 15.9074 9.7334 15.5488C9.22654 15.1901 8.62091 14.9975 8 14.9975C7.37909 14.9975 6.77346 15.1901 6.2666 15.5488C5.75974 15.9074 5.3766 16.4145 5.17 17H4C3.73478 17 3.48043 17.1054 3.29289 17.2929C3.10536 17.4804 3 17.7348 3 18C3 18.2652 3.10536 18.5196 3.29289 18.7071C3.48043 18.8946 3.73478 19 4 19H5.17C5.3766 19.5855 5.75974 20.0926 6.2666 20.4512C6.77346 20.8098 7.37909 21.0024 8 21.0024C8.62091 21.0024 9.22654 20.8098 9.7334 20.4512C10.2403 20.0926 10.6234 19.5855 10.83 19H20Z",fill:"currentColor"})})},lt=function(e){var t=e.status;return Object(oe.jsx)(Je,{children:function(){switch(t){case r.running:return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(dt,{}),Object(oe.jsx)(Ye,{children:"Start"})]});case r.recording:return Object(oe.jsx)(ct,{});case r.previewPreparing:return Object(oe.jsx)(C.a,{});case r.previewPlaying:return Object(oe.jsx)(ot,{});case r.previewPaused:case r.previewStopped:return Object(oe.jsx)(it,{});default:return null}}()})},vt=n(447),pt=n(115),bt=n(446),jt=f.b.div(Ke||(Ke=Object(l.a)(["\n    z-index: 2;\n    position: absolute;\n    display: flex;\n    justify-content: flex-end;\n    top: 0;\n    left: 0;\n    padding: 16px 20px;\n    height: 80px;\n    width: 100%;\n    background: rgb(0, 0, 0);\n    background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) -50%, rgba(255, 255, 255, 0) 100%);\n"]))),ft=Object(f.b)(vt.a)(Qe||(Qe=Object(l.a)(["\n    top: 50%;\n    & > div {\n        transform: translateY(-50%);\n    }\n"]))),mt=Object(f.b)(v.a)(We||(We=Object(l.a)(["\n    flex-direction: column;\n"]))),Ot=Object(f.b)(v.a.Item)($e||($e=Object(l.a)(["\n    width: 100%;\n    height: 50px;\n    display: flex;\n    align-items: center;\n"]))),ht=Object(f.b)(bt.a)(_e||(_e=Object(l.a)(["\n    width: 100%;\n"]))),Ct=f.b.div(et||(et=Object(l.a)(["\n    display: flex;\n    align-items: center;\n    margin-right: 20px;\n"]))),xt=function(){var e=Object(o.useState)(!1),t=Object(D.a)(e,2),n=t[0],i=t[1],a=pe(),c=a.setStatus,s=a.resetMediaStream,d=a.setActiveVideoDeviceId,u=a.setActiveAudioDeviceId,l=me(),v=l.audioValue,p=l.videoValue,b=l.audioOptions,j=l.videoOptions,f=function(){return i(!1)};return Object(oe.jsxs)(jt,{children:[Object(oe.jsx)(De.a,{appearance:"subtle",size:"lg",icon:Object(oe.jsx)(ut,{}),onClick:function(){return i(!0)}}),Object(oe.jsxs)(ft,{open:n,onClose:f,children:[Object(oe.jsx)(vt.a.Header,{children:Object(oe.jsx)(vt.a.Title,{children:"Recording Settings"})}),Object(oe.jsx)(vt.a.Body,{children:Object(oe.jsxs)(mt,{children:[Object(oe.jsxs)(Ot,{children:[Object(oe.jsx)(Ct,{children:Object(oe.jsx)(rt,{})}),Object(oe.jsx)(ht,{value:p,data:j,onChange:d,searchable:!1,cleanable:!1,placeholder:"Select video device"})]}),Object(oe.jsxs)(Ot,{children:[Object(oe.jsx)(Ct,{children:Object(oe.jsx)(at,{})}),Object(oe.jsx)(ht,{value:v,data:b,onChange:u,searchable:!1,cleanable:!1,placeholder:"Select audio device"})]})]})}),Object(oe.jsxs)(vt.a.Footer,{children:[Object(oe.jsx)(pt.a,{onClick:function(){s(),c(r.preparingConstraints),f()},appearance:"primary",children:"Ok"}),Object(oe.jsx)(pt.a,{onClick:f,appearance:"subtle",children:"Cancel"})]})]})]})},gt=n(451),wt=function(e){var t=e.previewTime,n=e.onPlayPause,i=e.onReset,r=ve(),a=r.status,c=r.duration,s=pe().setNextStatus,o=1e3*t,d=Math.min(o/c*100,100);return Object(oe.jsxs)(oe.Fragment,{children:[Object(oe.jsx)(ke,{children:Object(oe.jsx)(gt.a.Line,{percent:d,strokeColor:"#52c41a",showInfo:!1})}),Object(oe.jsxs)(v.a,{align:"middle",justify:"center",children:[Object(oe.jsx)(v.a.Item,{children:Object(oe.jsx)(Me,{circle:!0,color:"blue",appearance:"primary",icon:Object(oe.jsx)(st,{}),onClick:i})}),Object(oe.jsx)(v.a.Item,{children:Object(oe.jsx)(Me,{circle:!0,color:"red",appearance:"primary",icon:Object(oe.jsx)(lt,{status:a}),onClick:function(){n(),s()}})}),Object(oe.jsx)(v.a.Item,{children:Object(oe.jsxs)(Te,{className:"recording-timer",children:[Object(oe.jsx)(ze,{time:o}),Object(oe.jsx)(Ie,{children:"/"}),Object(oe.jsx)(ze,{time:c})]})})]})]})},yt=(n(433),Object(f.b)(v.a)(tt||(tt=Object(l.a)(["\n    height: 100vh;\n"])))),Dt=function(){return Object(oe.jsx)(p.a,{theme:"dark",children:Object(oe.jsx)(b.a,{children:Object(oe.jsx)(j.a,{children:Object(oe.jsx)(yt,{justify:"center",align:"middle",children:Object(oe.jsx)(v.a.Item,{colspan:12,children:Object(oe.jsx)(le,{children:Object(oe.jsx)(Re,{})})})})})})})},St=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,456)).then((function(t){var n=t.getCLS,i=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),i(e),r(e),a(e),c(e)}))};u.a.render(Object(oe.jsx)(Dt,{}),document.getElementById("root")),St()}},[[435,1,2]]]);
//# sourceMappingURL=main.5c1dd9db.chunk.js.map