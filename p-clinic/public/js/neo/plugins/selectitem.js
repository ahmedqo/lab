Neo.Component({ctl:!0,tag:"neo-select-item",tpl:"return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=''}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,'\\n')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$(\"<slot></slot>\");}catch(e){throw new $ERROR$([e.message,'\\n\\tat','Line:','\"'+$LINE$+'\"','Col:','\"'+$COL$+'\"'].join(' '))}}return [$TXT$,...$JSX$]}",css:'return function($CONTEXT$,$HELPER$,$EACH$,$SIZE$,$ESCAPE$,$ERROR$){var $TXT$=[],$JSX$=[],$INDEX$=0,$LINE$=0,$COL$=0;function $ADDTXT$($LINE$){if(!$TXT$[$INDEX$]){$TXT$[$INDEX$]=\'\'}$TXT$[$INDEX$]=($TXT$[$INDEX$]+$LINE$).replace(/\\n(:?\\s*\\n)+/g,\'\\n\')}function $ADDJSX$($LINE$){$JSX$[$INDEX$]=$LINE$,$INDEX$++}with($CONTEXT$||{}){try{$LINE$=1;$COL$=1;$ADDTXT$("<style>* {\\nbox-sizing: border-box;\\nfont-family: inherit;\\n}\\n\\n");$LINE$=6;$COL$=1;if($HELPER$["props"]["hidden"]){$LINE$=6;$COL$=23;$ADDTXT$("\\n:host {\\ndisplay: none;\\n}\\n");$LINE$=10;$COL$=1;}else{$LINE$=10;$COL$=11;$ADDTXT$("\\n:host {\\nwidth: 100%;\\noutline: none;\\ndisplay: block;\\nfont-family: inherit;\\npadding: .5rem .75rem;\\nfont-size: ");$LINE$=17;$COL$=12;$ADDJSX$($HELPER$["Theme"]["sizes"]("MEDIUM"));$LINE$=17;$COL$=41;$ADDTXT$(";\\nline-height: ");$LINE$=18;$COL$=14;$ADDJSX$($HELPER$["Theme"]["lines"]("MEDIUM"));$LINE$=18;$COL$=43;$ADDTXT$(";\\n");$LINE$=19;$COL$=1;if($HELPER$["props"]["active"]){$LINE$=19;$COL$=23;$ADDTXT$("\\ncolor: ");$LINE$=20;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("WHITE"));$LINE$=20;$COL$=36;$ADDTXT$(";\\nbackground: ");$LINE$=21;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME"));$LINE$=21;$COL$=41;$ADDTXT$(";\\n");$LINE$=22;$COL$=1;}$LINE$=22;$COL$=12;$ADDTXT$("\\n");$LINE$=23;$COL$=1;if($HELPER$["props"]["disable"]){$LINE$=23;$COL$=24;$ADDTXT$("\\npointer-events: none;\\ncolor: ");$LINE$=25;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK"));$LINE$=25;$COL$=36;$ADDTXT$(";\\nbackground: ");$LINE$=26;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK", 40));$LINE$=26;$COL$=45;$ADDTXT$(";\\n");$LINE$=27;$COL$=1;}$LINE$=27;$COL$=12;$ADDTXT$("\\n}\\n\\n");$LINE$=30;$COL$=1;if(!$HELPER$["props"]["disable"]){$LINE$=30;$COL$=25;$ADDTXT$("\\n:host(:hover),\\n:host(:focus),\\n:host(:focus-within) {\\ncolor: ");$LINE$=34;$COL$=8;$ADDJSX$($HELPER$["Theme"]["colors"]("BLACK"));$LINE$=34;$COL$=36;$ADDTXT$(";\\nbackground: ");$LINE$=35;$COL$=13;$ADDJSX$($HELPER$["Theme"]["colors"]("PRIME", 40));$LINE$=35;$COL$=45;$ADDTXT$(";\\n}\\n");$LINE$=37;$COL$=1;}$LINE$=37;$COL$=12;$ADDTXT$("\\n");$LINE$=38;$COL$=1;}$LINE$=38;$COL$=12;$ADDTXT$("\\n\\n::slotted(*) {\\npointer-events: none;\\n}</style>");}catch(e){throw new $ERROR$([e.message,\'\\n\\tat\',\'Line:\',\'"\'+$LINE$+\'"\',\'Col:\',\'"\'+$COL$+\'"\'].join(\' \'))}}return [$TXT$,...$JSX$]}'})({attrs:["text","value","hidden","active","disable","tabindex"],props:{text:"",value:"",hidden:!1,active:!1,disable:!1},rules:{toggle($){this.props.disable||this.props.hidden||"click"!==$.type&&13!==$.keyCode||(13===$.keyCode&&$.stopPropagation(),this.closest("neo-select")&&this.closest("neo-select").multiple?this.props.active=!this.props.active:this.props.active=!0)},change(){if(this.closest("neo-select")){const n=this.closest("neo-select");if(n.multiple){var $,e=n.value||[],t=n.text||[];if(this.props.active?(e.push(this.props.value),t.push((this.props.text||this.innerText).trim())):($=e.indexOf(this.props.value),e.splice($,1)&&t.splice($,1),e.length||(e=[],t=[])),e.length){n.value=e,n.text=t;const s=new FormData;n.value.forEach($=>{s.append(n.name,$)}),n.ctl.setFormValue(s)}else n.value="",n.text="",n.ctl.setFormValue(null)}else this.props.active&&n.querySelectorAll("neo-select-item").forEach($=>{$!==this&&($.active=!1)}),n.ctl.setFormValue(this.props.value),n.text=(this.props.text||this.innerText).trim(),n.value=this.props.value,n.expand=!1}}},cycle:{mounted(){this.tabIndex=this.props.disable||this.props.hidden?-1:0,this.addEventListener("click",this.rules.toggle),this.addEventListener("keydown",this.rules.toggle)},removed(){this.removeEventListener("click",this.rules.toggle),this.removeEventListener("keydown",this.rules.toggle)},updated($,e,t,n){Neo.Helper.option({attrs:{"text,value":()=>{this.props[$]=t},"hidden,active,disable":()=>{this.props[$]=Neo.Helper.truty(t)||this.hasAttribute($)&&!["false","null","undefined"].includes(this.getAttribute($))},tabindex:()=>{var $=this.props.disable||this.props.hidden?-1:0;this.tabIndex!==$&&(this.tabIndex=$)}},props:{"text,value,hidden,disable":()=>{["hidden","disable"].includes($)&&(this.tabIndex=t?-1:0),this.emit("change:"+$,{data:t})},active:()=>{this.rules.change()}}}[n],$)}}}).define();