Neo.Component({ctl:!0,tag:"neo-tooltip",tpl:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$("<slot></slot>\\n");$LINE$=2;$COL$=1;if($HELPER$["props"]["label"] && $HELPER$["state"]["show"]){$LINE$=2;$COL$=37;$ADDTXT$("\\n<label part=\\"label\\" ref=\\"label\\">");$LINE$=3;$COL$=33;$ADDJSX$($HELPER$["props"]["label"]);$LINE$=3;$COL$=51;$ADDTXT$("</label>\\n");$LINE$=4;$COL$=1;}}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}',css:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$("<style>* {\\nbox-sizing: border-box;\\nfont-family: inherit;\\n}\\n\\n:host {\\ndisplay: inline-flex;\\nwidth: max-content;\\nposition: relative;\\n}\\n\\n");$LINE$=12;$COL$=1;if($HELPER$["props"]["label"] && $HELPER$["state"]["show"]){$LINE$=12;$COL$=37;$ADDTXT$("\\n[part=\\"label\\"] {\\nleft: 50%;\\nopacity: 0;\\ndisplay: flex;\\nfont-weight: 700;\\nfont-size: .75rem;\\nwidth: max-content;\\nposition: absolute;\\npointer-events: none;\\npadding:.1rem .25rem;\\nborder-radius: .25rem;\\ntop: ");$LINE$=24;$COL$=6;$ADDJSX$($HELPER$["state"]["pos"]["y"]);$LINE$=24;$COL$=24;$ADDTXT$("px;\\nz-index: ");$LINE$=25;$COL$=10;$ADDJSX$($HELPER$["Theme"]["layer"]());$LINE$=25;$COL$=30;$ADDTXT$(";\\ncolor: ");$LINE$=26;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("WHITE"));$LINE$=26;$COL$=36;$ADDTXT$(";\\nbackground: ");$LINE$=27;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("GRAY", 800));$LINE$=27;$COL$=45;$ADDTXT$(";\\n");$LINE$=28;$COL$=1;$ADDJSX$($HELPER$["state"]["pos"] ? "bottom" : "top");$LINE$=28;$COL$=36;$ADDTXT$(": 100%;\\n");$LINE$=29;$COL$=1;$EACH$($HELPER$["Theme"]["MEDIA"],function(_,_media,$LOOP$){$LINE$=29;$COL$=36;$ADDTXT$("\\n");$LINE$=30;$COL$=1;$ADDJSX$(_media);$LINE$=30;$COL$=13;$ADDTXT$("transform: translateX(-50%);\\n");$LINE$=31;$COL$=1;$ADDJSX$(_media);$LINE$=31;$COL$=13;$ADDTXT$("transition: opacity 200ms ease-in-out;\\n");$LINE$=32;$COL$=1;});$LINE$=32;$COL$=14;$ADDTXT$("\\n}\\n\\n:host(:hover) [part=\\"label\\"] {\\nopacity: 1;\\n}\\n");$LINE$=38;$COL$=1;}$LINE$=38;$COL$=12;$ADDTXT$("</style>");}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}'})({attrs:["label"],props:{label:""},state:{show:!1,pos:"bottom"},rules:{enter(){this.state.show=!0,this.state.pos=0<this.getBoundingClientRect().y-this.refs.label.clientHeight},leave(){this.state.show=!1}},cycle:{mounted(){this.addEventListener("mouseenter",this.rules.enter),this.addEventListener("mouseleave",this.rules.leave)},removed(){this.removeEventListener("mouseenter",this.rules.enter),this.removeEventListener("mouseleave",this.rules.leave)},updated($,e,t,n){Neo.Helper.option({attrs:{label:()=>{this.props[$]=t}},props:{label:()=>{this.emit("change:"+$,{data:t})}}}[n],$)}}}).define();