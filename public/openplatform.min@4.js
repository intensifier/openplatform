var OP={version:428,callbacks:{},events:{}};OP.is=parent!==window,OP.pending=[],OP.$appearance=0,OP.interval=setInterval(function(){OP.ready&&(clearInterval(OP.interval),OP.pending.forEach(OP.$process),OP.pending=[])},500),OP.jcomponent=function(e){ON('request',function(e){var n=e.url.indexOf('?'),o=-1===n?e.url:e.url.substring(0,n);-1===(n=(o=o.substring(o.indexOf('/',9)+1)).substring(o.length-10).indexOf('.'))&&(e.headers.Authorization='base64 '+btoa(NAV.query.openplatform+','+NAV.query.rev+','+NAV.query.language))}),ON('@flag showloading',function(){OP.loading(!0)}),ON('@flag hideloading',function(){OP.loading(!1,1e3)}),OP.onready=function(e){if(e.dateformat){switch(DEF.dateformat=e.dateformat,W.user&&(user.timeformat=e.timeformat,user.dateformat=e.dateformat,user.numberformat=e.numberformat,DEF.languagehtml=user.language),e.numberformat){case 1:DEF.decimalseparator='.',DEF.thousandsseparator=' ';break;case 2:DEF.decimalseparator=',',DEF.thousandsseparator=' ';break;case 3:DEF.decimalseparator=',',DEF.thousandsseparator='.';break;case 4:DEF.decimalseparator='.',DEF.thousandsseparator=','}var n=(12===DEF.timeformat?'!':'')+DEF.dateformat+' - HH:mm'+(12===DEF.timeformat?' a':'');ENV('date',DEF.dateformat),ENV('ts',n)}EMIT('opready'),SET('common.ready',!0,500)},OP.init(e)},document.addEventListener('click',function(e){var n=e.target,o=n;if('A'!==o.tagName)for(var t=3;0<=--t&&(o=o.parentNode)&&'BODY'!==o.tagName&&'HTML'!==o.tagName;)if('A'===o.tagName){n=o;break}if('A'===n.tagName&&'openplatform://'===n.href.substring(0,15)){var r=n.href.substring(15),a=-1===(t=r.indexOf('?'))?'':r.substring(t+1);if(-1!==t&&(r=r.substring(0,t)),e.preventDefault(),a){var i=a.split('&');a={};for(var s=0;s<i.length;s++){var c=i[s].split('=');c[0]&&(a[c[0]]=c[1]&&decodeURIComponent(c[1]))}}return OP.share(r,'link',a),!1}OP&&OP.$sendfocus()}),document.onkeydown=function(e){var n=!1;if(112===e.keyCode?(n=!0,OP.send('quicksearch')):116===e.keyCode?(OP.loading(!1),OP.offline(!1),OP.progress(0),setTimeout(function(){-1===location.href.indexOf('openplatform=')?location.href=OP.tokenizator(location.href):location.reload(!0)},200),n=!0):9===e.keyCode&&(e.altKey||e.ctrlKey||e.metaKey)&&(n=!0,OP.send('nextwindow')),n)return e.returnValue=!1,e.keyCode=0,!1},OP.changelog=function(e){OP.send('changelog',{body:e})},OP.help=function(e){OP.send('help',{body:e})},OP.success2=function(e,n,o){OP.console('success',e,n,o)},OP.titlesuccess=function(e){OP.send('titlesuccess',e)},OP.install=function(e){OP.send('install',{type:'install',url:e})},OP.titlewarning=function(e){e instanceof Array&&(e=e[0].error),OP.send('titlewarning',e)},OP.warning2=function(e,n,o){OP.console('warning',e,n,o)},OP.error2=function(e,n,o){OP.console('error',e,n,o)},OP.info2=function(e,n,o){OP.console('info',e,n,o)},OP.busy=function(e){OP.send('busy',e)},OP.appearance=function(){OP.$appearance=1,OP.send('appearance')},OP.console=function(e,n,o,t){if(n instanceof Array)for(var r=0;r<n.length;r++){var a=n[r];a&&a.error&&(a=a.error),a&&OP.send('console',{type:e,msg:(t||'')+a,show:o})}else OP.send('console',{type:e,msg:(t||'')+n,show:o})},OP.command=function(e,n){OP.send('command',{type:e,body:n})},OP.screenshot=function(e,n){var o;OP.$screenshot||(window.Promise||((o=document.createElement('script')).type='text/javascript',o.src=(e||'//cdnjs.cloudflare.com/ajax/libs/babel-polyfill/6.26.0')+'/polyfill.min.js',document.body.appendChild(o)),(o=document.createElement('script')).type='text/javascript',o.src=(e||'//html2canvas.hertzen.com/dist')+'/html2canvas.min.js',document.body.appendChild(o),OP.$screenshot=1);var t=setInterval(function(){window.html2canvas&&(clearInterval(t),OP.loading(!0),html2canvas(document.body).then(function(e){n?n(e.toDataURL('image/jpeg',.85)):OP.send('screenshot',e.toDataURL('image/jpeg',.85)),OP.loading(!1)}))},1e3)},OP.launched=function(e){OP.send('launched',null,e)},OP.progress=function(e){return OP.send('progress',e)},OP.init=function(t,n){if('boolean'==typeof t&&(embeded=t,t=null),OP.ready=!1,n&&(OP.is=!0),OP.embeded=!n,t||(t=function(e){if(null!=e){if(!document.body)throw new Error('401: Unauthorized');document.body.innerHTML='401: Unauthorized',setTimeout(function(){window.close()},2e3)}else OP.ready=!0}),!OP.is)return t(new Error('OpenPlatform isn\'t detected.')),void(document.body.innerHTML='401: Unauthorized');for(var e=location.search.substring(1).split('&'),o=null,r=0;r<e.length;r++){var a=e[r];if('openplatform='===a.substring(0,13)){var i=decodeURIComponent(a.substring(13));OP.token=a.substring(13),o=decodeURIComponent(i.substring(i.indexOf('accesstoken=')+12));break}}var s={};s.ua=navigator.userAgent,OP.accesstoken=o,document.addEventListener('DOMContentLoaded',function(){if(n){OP.ready=!0;var e=window.user||{};return t&&setTimeout(t,100,null,e),OP.onready&&OP.onready({}),OP.$process({type:'appearance',body:{colorscheme:e.colorscheme,darkmode:e.darkmode}}),void window.addEventListener('resize',function(){OP.emit('resize')})}var o=setTimeout(function(){o=null,t('timeout'),document.body.innerHTML='401: Unauthorized'},2e3);OP.send('verify',s,function(e,n){o&&(clearTimeout(o),OP.ready=!e,t(null,n,setTimeout(function(){n.href&&(location.href=n.href)},100))),o=null,OP.id=n.id,OP.openplatformurl=n.openplatformurl,OP.onready&&OP.onready(n)})})},OP.$sendfocus=function(){var e=Date.now();(!OP.$focus||OP.$focus<e)&&OP.focus(),OP.$focus=e+2e3},document.addEventListener('touchstart',function(){OP&&OP.$sendfocus()},{passive:!0}),OP.loading2=function(e,n){OP.$loading2&&clearTimeout(OP.$loading2),n?OP.$loading2=setTimeout(function(e){OP.send('loading2',e)},n,e):OP.send('loading2',e)},OP.loading=function(e,n){OP.$loading&&clearTimeout(OP.$loading);var o={show:e,text:''};'string'==typeof n&&(o.text=n,n=0),n?OP.$loading=setTimeout(function(e){OP.send('loading',e)},n,o):OP.send('loading',o)},OP.success=function(e,n){return OP.snackbar(e,'success',n)},OP.warning=function(e,n){return OP.snackbar(e,'warning',n)},OP.message=function(e,n,o){var t={};return t.body=e,t.type=n,t.button=o,OP.send('message',t)},OP.confirm2=function(e,n,o){OP.confirm(e,n instanceof Array?n:n.split(',').trim(),function(e){!e&&o()})},OP.approve=function(e,n,o){OP.confirm(e,[n],o)},OP.confirm=function(e,n,o){var t={};t.body=e,t.buttons=n instanceof Array?n:n.split(',').trim();var r=window.M&&window.M.scope?window.M.scope():null;return OP.send('confirm',t,function(e,n){r&&window.M.scope(r),o(n?n.index:-1)})},OP.options=function(n,t){OP.on('options',function(){var e=[];n(e);var o=window.M&&window.M.scope?window.M.scope():null;OP.send('options',e,function(e,n){o&&window.M.scope(o),n&&t(n)})})},OP.config=function(e,o){var n={};n.body='function'==typeof e?(o=e,null):JSON.stringify(e);var t=window.M&&window.M.scope?window.M.scope():null;return OP.send('config',n,function(e,n){t&&window.M.scope(t),o&&o(n,e)})},OP.clipboard=function(e){OP.send('clipboard',e)},OP.snackbar=function(e,n,o){var t={};return t.body=e,t.type=n,t.button=o,OP.send('snackbar',t,o)},OP.offline=function(e){OP.send('offline',e)},OP.meta=function(o){var e={};e.ua=navigator.userAgent,e.accesstoken=OP.accesstoken;var t=window.M&&window.M.scope?window.M.scope():null;OP.send('meta',e,function(e,n){t&&window.M.scope(t),o(e,n)})},OP.play=function(e){return/^[a-z]+$/.test(e)||/^(http|https):\/\//.test(e)||('/'!==e.substring(0,1)&&(e='/'+e),e=location.protocol+'//'+location.hostname+e),OP.send('play',e)},OP.stop=function(e){return OP.send('stop',e)},OP.focus=function(){return OP.send('focus')},OP.maximize=function(e){return OP.send('maximize',e)},OP.restart=function(){return OP.send('restart',location.href)},OP.open=function(e,n){return OP.send('open',{id:e,data:n})},OP.minimize=function(){return OP.send('minimize')},OP.badge=function(e){return OP.send('badge',e)},OP.log=function(e){return OP.send('log',e)},OP.close=function(){return OP.send('kill')},OP.notify=function(e,n,o){return'string'==typeof e&&(o=n,n=e,e=0),OP.send('notify',{type:e,body:n,data:o||'',dtcreated:new Date})},OP.share=function(e,n,o,t){return setTimeout(function(){OP.send('share',{app:e&&'object'==typeof e?e.id:e,type:n,body:o,dtcreated:new Date,silent:t})},100),OP},OP.report=function(e,n,o){return OP.send('report',{type:e,body:n,high:o})},OP.mail=function(e,n,o,t){return OP.send('mail',{email:e,subject:n,body:o,dtcreated:new Date,type:t||'html'})},OP.shake=function(e){return OP.send('shake',e)},OP.send=function(e,n,o){'function'==typeof n&&(o=n,n=null);var t={openplatform:!0};if(t.accesstoken=OP.accesstoken,t.type=e,t.body=n||null,t.sender=!0,t.origin=location.origin,top)return o&&(t.callback=(1e6*Math.random()).toString(32).replace(/\./g,''),OP.callbacks[t.callback]=o),parent.postMessage(JSON.stringify(t),'*'),OP;o&&o(new Error('The application is not running in the OpenPlatform scope.'))},OP.on=function(e,n){return'print'!==e&&'options'!==e||(OP.events[e]=null),!OP.events[e]&&(OP.events[e]=[]),OP.events[e].push(n),OP},OP.on('print',function(){window.print()}),OP.$process=function(e){if(e.callback){var n=OP.callbacks[e.callback];n&&(e.sender&&(e.error=new Error('The application is not running in the OpenPlatform scope.')),n(e.error,e.body||{}),delete OP.callbacks[e.callback])}else{if(!e.sender)if('link'!==e.type)if('command'!==e.type){if('appearance'===e.type&&OP.$appearance){var o,t=document.head||document.getElementsByTagName('head')[0],r=document.createElement('style');1===OP.$appearance?OP.$appearance=2:(o=document.getElementById('opstyle'))&&o.parentNode.removeChild(o);var a=e.body,i=document.body.classList;!1!==OP.darkmode&&(i.add(a.darkmode?'opdark':'oplight'),a.darkmode&&i.add('ui-dark'),i.add('opbody'),i.remove(a.darkmode?'oplight':'opdark'),!a.darkmode&&i.remove('ui-dark'),window.OPDARKMODE=a.darkmode),a.colorscheme||(a.colorscheme='#4285f4'),window.OPCOLOR=a.colorscheme,r.appendChild(document.createTextNode(':root{--opcolor:'+a.colorscheme+'}.opbody{background-color:#'+(a.darkmode?'202020':'FFFFFF')+'}body.opbody{color:#'+(a.darkmode?'E0E0E0':'000000')+'}.opborder,.opborderhover:hover{border-color:'+a.colorscheme+'!important}.opbg,.opbghover:hover{background-color:'+a.colorscheme+'!important}.opfg,.opfghover:hover{color:'+a.colorscheme+'!important}')),r.id='opstyle',t.appendChild(r)}if('reload'!==e.type)if('screenshotmake'!==e.type)if('redirect'!==e.type){if('kill'===e.type&&(e.type='close'),'share'===e.type&&(e.body.share=function(e,n){OP.share(this.app,e,n)}),s=OP.events[e.type])for(a={},c=0;c<s.length;c++)s[c](e.body||a)}else location.href=e.body;else OP.screenshot(e.body);else-1===location.href.indexOf('openplatform=')?location.href=OP.tokenizator(location.href):location.reload(!0)}else{var s;if(s=OP.events[e.type])for(var c=0;c<s.length;c++)s[c](e.body.type,e.body.body)}else if(s=OP.events[e.type])for(var c=0;c<s.length;c++)s[c](e.body.path,e.body.data)}},OP.emit=function(e,n,o,t,r,a){var i=OP.events[e];if(i&&i.length)for(var s=0;s<i.length;s++)i[s](n,o,t,r,a)},OP.done=function(o,t,r){'function'==typeof o&&(r=t,t=o,o=null),null==r&&(r=!0);var a=window.M&&window.M.scope?window.M.scope():null;return function(e,n){r&&OP.loading(!1,500),a&&window.M.scope(a),!e&&n&&(e=[{name:'network',error:n}]),e instanceof Array?OP.send('done',e):(o&&OP.send('done',o),t&&t(e,n))}},OP.resume=function(o,t){var r=window.M&&window.M.scope?window.M.scope():null;return function(e,n){r&&window.M.scope(r),t&&OP.loading(!1,500),!e&&n&&(e=[{name:'network',error:n}]),e instanceof Array?OP.send('done',e):'function'==typeof o?o(e):SETR(o,e)}},window.addEventListener('message',function(e){try{var n=JSON.parse(e.data);if(!n.openplatform)return;OP.ready||'verify'===n.type?OP.$process(n):OP.pending.push(n)}catch(e){}},!1),OP.link=function(e,n){var o='OPLINKINPUT',t=window[o];t||((t=document.createElement('INPUT')).style='position:absolute;left:-100px;top:-100px;opacity:0',document.body.appendChild(t),window[o]=t),n=(n=JSON.stringify({id:OP.id,path:e,data:n})).substring(1,n.length-1);var r=OP.openplatformurl+'?share='+btoa(encodeURIComponent(n)).replace(/=/g,'');return setTimeout(function(){t.value=r,t.focus(),t.select(),document.execCommand('copy')},100),r},OP.tokenizator=function(e){var n=e.indexOf('?');return-1===n?e+'?openplatform='+OP.token:e.substring(0,n+1)+'openplatform='+OP.token+'&'+e.substring(n+1)},window.history&&(history.pushState(null,null,location.href),window.onpopstate=function(){history.go(1)});