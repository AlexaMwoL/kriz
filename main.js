const _0x52a1=['batrei','@adiwajshing/baileys','./lib/color','1JVSHAl','sessionName','unknown','stringify','2458UCoPhq','cyan','Connect,\x20Welcome\x20Owner','base64EncodedAuthInfo','281265ssdyMj','browserDescription','1447DSOdkn','open','2RBfHwI','connecting','blue','true','batteryLevelStr','Firefox','group-participants-update','[NINO]','red','textSync','9cTAPoO','.json','readFileSync','log','spinnies','506491RoAVEm','Connecting...','writeFileSync','59tKShKu','chat-update','KRIZ\x20-\x20BOT','default','Baterai\x20:\x20','./lib/loader','Welcome\x20back,\x20Owner!\x20Hope\x20you\x20are\x20doing\x20well~','white','logger','223AZTKXp','figlet','77969tyBmUw','217999pgXHNR','Standard','green','value','succeed','3533RjARdB','./nino.js','CB:action,,battery','[WATCH]','../message/group.js','loadAuthInfo','batterylevel','live','KrizBot','warn','version'];const _0x33cb2d=_0x16ef;(function(_0x863da9,_0x274528){const _0x29034d=_0x16ef;while(!![]){try{const _0x417f76=-parseInt(_0x29034d(0x10a))+parseInt(_0x29034d(0x134))+parseInt(_0x29034d(0x136))*parseInt(_0x29034d(0x116))+-parseInt(_0x29034d(0x130))*-parseInt(_0x29034d(0x142))+-parseInt(_0x29034d(0x12c))*parseInt(_0x29034d(0x118))+-parseInt(_0x29034d(0x138))*-parseInt(_0x29034d(0x119))+-parseInt(_0x29034d(0x10d))*parseInt(_0x29034d(0x11e));if(_0x417f76===_0x274528)break;else _0x863da9['push'](_0x863da9['shift']());}catch(_0x39e5bf){_0x863da9['push'](_0x863da9['shift']());}}}(_0x52a1,0x41b67));const {WAConnection,MessageType,Mimetype,Presence,Browsers}=require(_0x33cb2d(0x12a)),{color,bgcolor}=require(_0x33cb2d(0x12b)),spin=require(_0x33cb2d(0x109)),fs=require('fs-extra'),spinner={'interval':0x78,'frames':['🕐','🕑','🕒','🕓','🕔','🕕','🕖','🕗','🕘','🕙','🕚','🕛']};let globalSpinner;const getGlobalSpinner=(_0x4ad38=![])=>{const _0x24eb45=_0x33cb2d;if(!globalSpinner)globalSpinner=new spin({'color':_0x24eb45(0x13a),'succeedColor':_0x24eb45(0x11b),'spinner':spinner,'disableSpins':_0x4ad38});return globalSpinner;};spins=getGlobalSpinner(![]);function _0x16ef(_0x124a2e,_0x47f025){return _0x16ef=function(_0x52a19a,_0x16ef06){_0x52a19a=_0x52a19a-0x109;let _0x3d745f=_0x52a1[_0x52a19a];return _0x3d745f;},_0x16ef(_0x124a2e,_0x47f025);}const info=(_0x2e7e32,_0x19d84a)=>{spins['update'](_0x2e7e32,{'text':_0x19d84a});},start=(_0x126dbc,_0x4d214f)=>{spins['add'](_0x126dbc,{'text':_0x4d214f});},success=(_0x10e3e3,_0x27d8bc)=>{const _0xab9f93=_0x33cb2d;spins[_0xab9f93(0x11d)](_0x10e3e3,{'text':_0x27d8bc});},close=(_0x23d7d9,_0x2bfdbd)=>{spins['fail'](_0x23d7d9,{'text':_0x2bfdbd});},figlet=require(_0x33cb2d(0x117)),{sleep}=require('./lib/myfunc'),{uncache,nocache}=require(_0x33cb2d(0x112)),setting=JSON['parse'](fs[_0x33cb2d(0x144)]('./setting.json')),welcome=require('./message/group');baterai='unknown',charging=_0x33cb2d(0x12e),require(_0x33cb2d(0x11f)),nocache('../nino.js',_0x222294=>console[_0x33cb2d(0x145)](color(_0x33cb2d(0x121),'cyan'),color('\x27'+_0x222294+'\x27',_0x33cb2d(0x11b)),'File\x20is\x20updated!')),nocache(_0x33cb2d(0x122),_0x41f573=>console[_0x33cb2d(0x145)](color(_0x33cb2d(0x121),'cyan'),color('\x27'+_0x41f573+'\x27',_0x33cb2d(0x11b)),'File\x20is\x20updated!'));const starts=async(_0x295370=new WAConnection())=>{const _0xb371c6=_0x33cb2d;_0x295370[_0xb371c6(0x128)]=[0x2,0x847,0x6],_0x295370[_0xb371c6(0x115)]['level']=_0xb371c6(0x127),console[_0xb371c6(0x145)](color(figlet[_0xb371c6(0x141)](_0xb371c6(0x126),{'font':_0xb371c6(0x11a),'horizontalLayout':_0xb371c6(0x110),'vertivalLayout':_0xb371c6(0x110),'width':0x50,'whitespaceBreak':![]}),_0xb371c6(0x131))),console[_0xb371c6(0x145)](color(_0xb371c6(0x13f),_0xb371c6(0x131)),color('Owner\x20is\x20online\x20now!','green')),console[_0xb371c6(0x145)](color(_0xb371c6(0x13f),'cyan'),color(_0xb371c6(0x113),_0xb371c6(0x11b))),_0x295370[_0xb371c6(0x135)]=[_0xb371c6(0x10f),_0xb371c6(0x13d),'3.0.0'],_0x295370['on']('qr',()=>{const _0x540bd7=_0xb371c6;console[_0x540bd7(0x145)](color('[',_0x540bd7(0x114)),color('!',_0x540bd7(0x140)),color(']',_0x540bd7(0x114)),color('\x20Scan\x20the\x20qr\x20code\x20above'));}),fs['existsSync']('./'+setting['sessionName']+_0xb371c6(0x143))&&_0x295370[_0xb371c6(0x123)]('./'+setting[_0xb371c6(0x12d)]+_0xb371c6(0x143)),_0x295370['on'](_0xb371c6(0x139),()=>{const _0x3cf295=_0xb371c6;start('2',_0x3cf295(0x10b));}),_0x295370['on'](_0xb371c6(0x137),()=>{const _0x56ba83=_0xb371c6;success('2',_0x56ba83(0x132));}),await _0x295370['connect']({'timeoutMs':0x1e*0x3e8}),fs[_0xb371c6(0x10c)]('./'+setting[_0xb371c6(0x12d)]+_0xb371c6(0x143),JSON[_0xb371c6(0x12f)](_0x295370[_0xb371c6(0x133)](),null,'\x09')),_0x295370['on'](_0xb371c6(0x120),_0x380b72=>{const _0x347c31=_0xb371c6;global[_0x347c31(0x13c)]=_0x380b72[0x2][0x0][0x1]['value'],global[_0x347c31(0x124)]=parseInt(batteryLevelStr),baterai=batterylevel;if(_0x380b72[0x2][0x0][0x1][_0x347c31(0x125)]==_0x347c31(0x13b))charging=!![];if(_0x380b72[0x2][0x0][0x1]['live']=='false')charging=![];console[_0x347c31(0x145)](_0x380b72[0x2][0x0][0x1]),console[_0x347c31(0x145)](_0x347c31(0x111)+batterylevel+'%');}),global[_0xb371c6(0x129)]=global[_0xb371c6(0x129)]?global[_0xb371c6(0x129)]:[],_0x295370['on'](_0xb371c6(0x120),_0x93fd79=>{const _0x4d567a=_0xb371c6,_0x5554a1=_0x93fd79[0x2][0x0][0x1][_0x4d567a(0x11c)],_0x313ec8=parseInt(_0x5554a1);global[_0x4d567a(0x129)]['push'](_0x313ec8);}),_0x295370['on'](_0xb371c6(0x13e),async _0x30d3cd=>{await welcome(_0x295370,_0x30d3cd);}),_0x295370['on'](_0xb371c6(0x10e),async _0x2c9ef5=>{const _0x9ac821=_0xb371c6;require(_0x9ac821(0x11f))(_0x295370,_0x2c9ef5);});};starts();
