import{I as v,N as f,a as r,R as S,H as _,b as y}from"./ImageCanvas-865a4a0f.js";import{_ as u,r as c,o as h,c as m,a as s,b as k,d as N,t as M,F as $,e as B,f as E,g}from"./index-1fd2e2ff.js";const P={components:{ImageCanvas:v},emits:{goBack:()=>!0,createNode:e=>!0,removeNode:()=>!0,confirmNodes:()=>!0},props:{nodes:{type:Array,default:()=>[]},firstPointAsEntry:{type:Boolean,default:()=>!1},image:String},data(){return{...f}},computed:{imageCanvas(){return this.$refs.imageCanvas}},methods:{handleCreateNode(e){const t=this.$refs.nodeName,a=this.$refs.nodeDescription,d=this.$refs.nodeType,n=t.value,o=a.value,l=Number(d.value);if(n===""||l===this.point)return;const i=e.offsetX/e.target.width,p=e.offsetY/e.target.height;this.$emit("createNode",{x:i,y:p,name:n,description:o,type:l,state:r.Normal}),t.value="",a.value="",d.value=`${f.point}`,this.imageCanvas.draw()},handleUndoNode(){this.$emit("removeNode"),this.imageCanvas.draw()}}};const x={class:"container"},R={class:"back-wrapper"},O=s("h2",{class:"step-title"},"Clique no mapa para inserir um ponto no local:",-1),G={key:0},A={class:"image-input-wrapper"},H={class:"image-wrapper"},T={class:"undo-wrapper"},F={class:"input-wrapper"},D={class:"input-create-section"},X=s("label",{for:"nodeName"},"*Nome do ponto:",-1),Y={type:"text",name:"nodeName",ref:"nodeName"},V={class:"input-create-section"},q=s("label",{for:"nodeDescription"},"Descrição do ponto:",-1),L={name:"nodeDescription",ref:"nodeDescription"},Q={class:"input-create-section"},U=s("label",{for:"nodeType"},"*Tipo do ponto:",-1),J={name:"nodeType",ref:"nodeType"},j=["value"],z=["value"],K=["value"],W=["value"],Z=["value"],ee=["value"],te=["value"],se=["value"],oe=["value"],ne=["value"],ae=["value"],ie=["value"],de=["value"],re=["value"],le=["value"],he=["value"],ce=["value"],me=["value"],ue=["value"],pe=["value"],ge=["value"],fe=["value"];function ve(e,t,a,d,n,o){const l=c("ImageCanvas");return h(),m("div",x,[s("div",R,[s("button",{class:"back",onClick:t[0]||(t[0]=i=>e.$emit("goBack"))},"Voltar")]),O,a.firstPointAsEntry?(h(),m("h3",G,"Primeiro ponto será a entrada do mapa")):k("",!0),s("div",A,[s("div",H,[N(l,{onClick:t[1]||(t[1]=i=>o.handleCreateNode(i)),image:a.image,nodes:a.nodes,"only-real":!0,ref:"imageCanvas"},null,8,["image","nodes"]),s("div",T,[s("button",{class:"undo",onClick:t[2]||(t[2]=(...i)=>o.handleUndoNode&&o.handleUndoNode(...i))},"Desfazer ponto")])]),s("div",F,[s("div",D,[X,s("input",Y,null,512)]),s("div",V,[q,s("textarea",L,null,512)]),s("div",Q,[U,s("select",J,[s("option",{value:e.point},"Escolha um item",8,j),s("option",{value:e.house},"Casa",8,z),s("option",{value:e.building},"Prédio",8,K),s("option",{value:e.room},"Quarto",8,W),s("option",{value:e.stairs},"Escadas",8,Z),s("option",{value:e.elevator},"Elevador",8,ee),s("option",{value:e.door},"Porta",8,te),s("option",{value:e.parking},"Estacionamento",8,se),s("option",{value:e.bus},"Ponto de ônibus",8,oe),s("option",{value:e.taxi},"Ponto de taxi",8,ne),s("option",{value:e.store},"Loja",8,ae),s("option",{value:e.bank},"Banco",8,ie),s("option",{value:e.restaurant},"Restaurante",8,de),s("option",{value:e.market},"Mercado",8,re),s("option",{value:e.pharmacy},"Farmácia",8,le),s("option",{value:e.hospital},"Hospital",8,he),s("option",{value:e.school},"Escola",8,ce),s("option",{value:e.park},"Parque",8,me),s("option",{value:e.gas},"Posto",8,ue),s("option",{value:e.tech},"Tecnologia",8,pe),s("option",{value:e.library},"Biblioteca",8,ge),s("option",{value:e.help},"Ajuda",8,fe)],512)])])]),s("button",{class:"send",onClick:t[3]||(t[3]=i=>e.$emit("confirmNodes"))},"Avançar")])}const Ne=u(P,[["render",ve]]),Ce={data(){return{imageName:""}},emits:{setImage:e=>!0,setName:e=>!0,confirmInitialInfo:()=>!0},methods:{handleImageChange(e){const t=new FileReader;t.readAsDataURL(e.target.files[0]),t.onload=()=>{this.imageName=e.target.files[0].name,this.$emit("setImage",String(t.result))}},handleNameChange(e){this.$emit("setName",e.target.value)}}};const Se={class:"container"},_e={class:"input-section"},Ie=s("label",{for:"mapName"},"Nome do mapa:",-1),ye={class:"input-section"},ke=s("label",{for:"mapSource",class:"input-file"},"Selecione uma imagem",-1),Me={class:"initial-info-image-label"};function we(e,t,a,d,n,o){return h(),m("div",Se,[s("div",_e,[Ie,s("input",{type:"text",id:"mapName",onChange:t[0]||(t[0]=l=>o.handleNameChange(l))},null,32)]),s("div",ye,[ke,s("input",{type:"file",name:"mapSource",id:"mapSource",accept:"image/png, image/jpeg",onChange:t[1]||(t[1]=l=>o.handleImageChange(l))},null,32)]),s("label",Me,M(n.imageName||"Nenhuma imagem selecionada"),1),s("button",{class:"send",onClick:t[2]||(t[2]=l=>e.$emit("confirmInitialInfo"))},"Avançar")])}const be=u(Ce,[["render",we]]),$e={components:{ImageCanvas:v},props:{nodes:{type:Array,default:()=>[]},edges:{type:Array,default:()=>[]},countSelected:{type:Number,default:()=>0},image:String},emits:{goBack:()=>!0,confirmSelection:()=>!0,skipSelection:()=>!0,setNodeState:(e,t)=>!0},data(){return{}},computed:{imageCanvas(){return this.$refs.imageCanvas}},methods:{handleFindNode(e){this.nodes.some((t,a)=>{const d=this.isOverNode(t,e.offsetX,e.offsetY);return d&&t.state===r.Normal?this.$emit("setNodeState",a,r.Hovered):!d&&t.state===r.Hovered&&this.$emit("setNodeState",a,r.Normal),d}),this.imageCanvas.draw()},handleSelectNode(e){this.nodes.some((t,a)=>{const d=this.isOverNode(t,e.offsetX,e.offsetY);return d&&(t.state!==r.Selected?this.countSelected<2&&this.$emit("setNodeState",a,r.Selected):this.$emit("setNodeState",a,r.Normal)),d}),this.imageCanvas.draw()},isOverNode(e,t,a){const d=e.x*this.imageCanvas.$refs.canvas.width,n=e.y*this.imageCanvas.$refs.canvas.height;return Math.sqrt(Math.pow(t-d,2)+Math.pow(a-n,2))<S+_}}},Be={class:"container"},Ee={class:"back-wrapper"},Pe=s("h2",{class:"step-title"},"Selecione dois pontos para iniciar um caminho:",-1);function xe(e,t,a,d,n,o){const l=c("ImageCanvas");return h(),m("div",Be,[s("div",Ee,[s("button",{class:"back",onClick:t[0]||(t[0]=i=>e.$emit("goBack"))},"Voltar")]),Pe,N(l,{image:a.image,nodes:a.nodes,edges:a.edges,"only-real":!0,onMousemove:t[1]||(t[1]=i=>o.handleFindNode(i)),onClick:t[2]||(t[2]=i=>o.handleSelectNode(i)),ref:"imageCanvas"},null,8,["image","nodes","edges"]),s("div",null,[s("button",{class:"send mr10",onClick:t[3]||(t[3]=i=>e.$emit("confirmSelection"))},"Confirmar"),s("button",{class:"send",onClick:t[4]||(t[4]=i=>e.$emit("skipSelection"))},"Pular")])])}const Re=u($e,[["render",xe]]),Oe={components:{ImageCanvas:v},props:{nodes:{type:Array,default:()=>[]},edges:{type:Array,default:()=>[]},image:String},emits:{goBack:()=>!0,createNode:e=>!0,removeNode:()=>!0,confirmIntermediate:()=>!0,continueIntermediate:()=>!0},data(){return{createdCount:0}},computed:{imageCanvas(){return this.$refs.imageCanvas}},methods:{handleIntermediateNode(e){this.createdCount++,this.$emit("createNode",{x:e.offsetX/e.target.width,y:e.offsetY/e.target.height,type:f.point,state:r.Selected}),this.$nextTick(()=>{this.imageCanvas.draw()})},handleUndoIntermediate(){this.createdCount>0&&(this.createdCount--,this.$emit("removeNode"),this.$nextTick(()=>{this.imageCanvas.draw()}))},handleGoBack(){for(;this.createdCount>0;)this.createdCount--,this.$emit("removeNode");this.$nextTick(()=>{this.imageCanvas.draw()}),this.$emit("goBack")}}},Ge={class:"container"},Ae={class:"back-wrapper"},He=s("h2",{class:"step-title"},"Clique no mapa para inserir pontos intermediários:",-1),Te={class:"undo-wrapper"};function Fe(e,t,a,d,n,o){const l=c("ImageCanvas");return h(),m("div",Ge,[s("div",Ae,[s("button",{class:"back",onClick:t[0]||(t[0]=(...i)=>o.handleGoBack&&o.handleGoBack(...i))},"Voltar")]),He,N(l,{image:a.image,nodes:a.nodes,onlySelected:!0,onlyEditing:!0,edges:a.edges,onClick:t[1]||(t[1]=i=>o.handleIntermediateNode(i)),ref:"imageCanvas"},null,8,["image","nodes","edges"]),s("div",Te,[s("button",{class:"undo",onClick:t[2]||(t[2]=(...i)=>o.handleUndoIntermediate&&o.handleUndoIntermediate(...i))},"Desfazer ponto")]),s("div",null,[s("button",{class:"send mr10",onClick:t[3]||(t[3]=i=>e.$emit("confirmIntermediate"))},"Confirmar e encerrar"),s("button",{class:"send",onClick:t[4]||(t[4]=i=>e.$emit("continueIntermediate"))},"Confirmar e continuar")])])}const De=u(Oe,[["render",Fe]]),Xe={components:{ImageCanvas:v},props:{nodes:{type:Array,default:()=>[]},edges:{type:Array,default:()=>[]},image:String},emits:{goBack:()=>!0,confirmMap:()=>!0,startLayer:()=>!0,setNodeState:(e,t)=>!0},data(){return{}},computed:{imageCanvas(){return this.$refs.imageCanvas}},methods:{handleFindNode(e){this.nodes.some((t,a)=>{const d=this.isOverNode(t,e.offsetX,e.offsetY);return d&&t.state===r.Normal?this.$emit("setNodeState",a,r.Hovered):!d&&t.state===r.Hovered&&this.$emit("setNodeState",a,r.Normal),d}),this.imageCanvas.draw()},handleSelectNode(e){this.nodes.some((t,a)=>{const d=this.isOverNode(t,e.offsetX,e.offsetY);return d&&(t.state!==r.Selected?this.$emit("setNodeState",a,r.Selected):this.$emit("setNodeState",a,r.Normal)),d}),this.imageCanvas.draw()},isOverNode(e,t,a){const d=e.x*this.imageCanvas.$refs.canvas.width,n=e.y*this.imageCanvas.$refs.canvas.height;return Math.sqrt(Math.pow(t-d,2)+Math.pow(a-n,2))<S+_}}},Ye={class:"container"},Ve={class:"back-wrapper"},qe=s("h2",{class:"step-title"},"Selecione os pontos que terão QR Codes:",-1);function Le(e,t,a,d,n,o){const l=c("ImageCanvas");return h(),m("div",Ye,[s("div",Ve,[s("button",{class:"back",onClick:t[0]||(t[0]=i=>e.$emit("goBack"))},"Voltar")]),qe,N(l,{image:a.image,nodes:a.nodes,edges:a.edges,"only-real":!0,onMousemove:t[1]||(t[1]=i=>o.handleFindNode(i)),onClick:t[2]||(t[2]=i=>o.handleSelectNode(i)),ref:"imageCanvas"},null,8,["image","nodes","edges"]),s("div",null,[s("button",{class:"send mr10",onClick:t[3]||(t[3]=i=>e.$emit("confirmMap"))},"Finalizar mapa"),s("button",{class:"send",onClick:t[4]||(t[4]=i=>e.$emit("startLayer"))},"Nova camada")])])}const Qe=u(Xe,[["render",Le]]),Ue={components:{ImageCanvas:v},props:{maps:{type:Array,default:[]}},emits:{setMap:e=>!0,setNodeState:(e,t)=>!0,confirmSource:(e,t)=>!0},data(){return{currentMap:0,currentPoint:-1,localMaps:JSON.parse(JSON.stringify(this.maps))}},computed:{imageCanvas(){return this.$refs.imageCanvas}},methods:{handleSelectMap(e){this.localMaps[this.currentMap].nodes=this.localMaps[this.currentMap].nodes.map(t=>({...t,state:r.Normal})),this.currentMap=e,this.currentPoint=-1,this.$emit("setMap",e),this.$nextTick(()=>{this.imageCanvas.draw()})},handleConfirmSource(){this.currentPoint>=0&&this.$emit("confirmSource",this.currentMap,this.currentPoint)},handleFindNode(e){this.localMaps[this.currentMap].nodes.some((t,a)=>{const d=this.isOverNode(t,e.offsetX,e.offsetY);return d&&t.state===r.Normal?t.state=r.Hovered:!d&&t.state===r.Hovered&&(t.state=r.Normal),d}),this.imageCanvas.draw()},handleSelectNode(e){this.localMaps[this.currentMap].nodes.some((t,a)=>{const d=this.isOverNode(t,e.offsetX,e.offsetY);return d&&(t.state!==r.Selected?(this.currentPoint>=0&&(this.localMaps[this.currentMap].nodes[this.currentPoint].state=r.Normal),t.state=r.Selected,this.currentPoint=a):(t.state=r.Normal,this.currentPoint=-1)),d}),this.imageCanvas.draw()},isOverNode(e,t,a){const d=e.x*this.imageCanvas.$refs.canvas.width,n=e.y*this.imageCanvas.$refs.canvas.height;return Math.sqrt(Math.pow(t-d,2)+Math.pow(a-n,2))<S+_}}},Je={class:"container"},je=s("h2",{class:"step-title"},"Selecione um ponto de origem para o novo mapa:",-1),ze=["onClick"];function Ke(e,t,a,d,n,o){const l=c("ImageCanvas");return h(),m("div",Je,[je,N(l,{image:n.localMaps[n.currentMap].image,nodes:n.localMaps[n.currentMap].nodes,edges:n.localMaps[n.currentMap].edges,"only-real":!0,onMousemove:t[0]||(t[0]=i=>o.handleFindNode(i)),onClick:t[1]||(t[1]=i=>o.handleSelectNode(i)),ref:"imageCanvas"},null,8,["image","nodes","edges"]),s("div",null,[(h(!0),m($,null,B(n.localMaps,(i,p)=>(h(),m("button",{class:"mapbtn",key:p,onClick:I=>o.handleSelectMap(p)},M(i.name),9,ze))),128))]),s("button",{class:"send",onClick:t[2]||(t[2]=(...i)=>o.handleConfirmSource&&o.handleConfirmSource(...i))},"Confirmar")])}const We=u(Ue,[["render",Ke]]),Ze={data(){return{...y,name:"",image:"",step:y.InitialInfoStep,history:[0],nodes:[],edges:[],selectedIndexes:[],maps:[],sourceMap:-1,sourceNode:-1}},methods:{handleGoBack(){this.history.pop(),this.step=this.history[this.history.length-1],this.edges=this.edges.filter(e=>!e.editing),this.unselectNodes()},handleInitialInfoConfirmed(){this.image!==""&&this.name.length>0&&(this.step=this.CreateNodesStep,this.history.push(this.step))},handleNodesCreated(){this.nodes.length>0&&(this.step=this.SelectNodesStep,this.history.push(this.step))},handleNodesSelected(){this.selectedIndexes.length===2&&(this.makeEdges(),this.step=this.IntermediateNodesStep,this.history.push(this.step))},handleSelectionSkipped(){this.unselectNodes(),this.step=this.ChooseQRCodesStep,this.history.push(this.step)},handleIntermediateConfirmed(){this.edges=this.edges.map(e=>({...e,editing:!1})),this.unselectNodes(),this.step=this.ChooseQRCodesStep,this.history.pop(),this.history.push(this.step)},handleContinueCreating(){this.edges=this.edges.map(e=>({...e,editing:!1})),this.unselectNodes(),this.history.pop(),this.step=this.SelectNodesStep},handleMapConfirmed(){this.sourceMap>=0&&this.sourceNode>=0&&(this.maps[this.sourceMap].edges.push({start:{map:this.sourceMap,node:this.sourceNode},end:{map:this.maps.length,node:0},editing:!1}),this.edges.push({end:{map:this.sourceMap,node:this.sourceNode},start:{map:this.maps.length,node:0},editing:!1})),this.selectedIndexes.forEach(d=>{this.nodes[d].qrcode=!0}),this.unselectNodes(),this.maps.push({name:this.name,image:this.image,nodes:[...this.nodes],edges:[...this.edges],initial:this.maps.length===0});const e={name:this.maps[0].name,maps:this.maps},t=localStorage.getItem("places"),a=t?JSON.parse(t):[];a.push(e),localStorage.setItem("places",JSON.stringify(a)),alert("Mapa criado com sucesso!"),E.push("/")},handleLayerStarted(){this.sourceMap>=0&&this.sourceNode>=0&&(this.maps[this.sourceMap].edges.push({start:{map:this.sourceMap,node:this.sourceNode},end:{map:this.maps.length,node:0},editing:!1}),this.edges.push({end:{map:this.sourceMap,node:this.sourceNode},start:{map:this.maps.length,node:0},editing:!1})),this.selectedIndexes.forEach(e=>{this.nodes[e].qrcode=!0}),this.unselectNodes(),this.maps.push({name:this.name,image:this.image,nodes:[...this.nodes],edges:[...this.edges],initial:this.maps.length===0}),this.image="",this.name="",this.nodes=[],this.edges=[],this.sourceMap=-1,this.sourceNode=-1,this.step=this.SelectSourceStep,this.history=[this.step]},handleConfirmSource(e,t){this.sourceMap=e,this.sourceNode=t,this.step=this.InitialInfoStep},handleSetNodeState(e,t){t===r.Selected?this.selectedIndexes.push(e):this.nodes[e].state===r.Selected&&this.selectedIndexes.splice(this.selectedIndexes.indexOf(e),1),this.nodes[e].state=t},handleCreateNode(e){if(e.type===f.point){this.selectedIndexes.push(this.nodes.length);const t=this.selectedIndexes[this.selectedIndexes.length-2];this.selectedIndexes[this.selectedIndexes.length-2]=this.selectedIndexes[this.selectedIndexes.length-1],this.selectedIndexes[this.selectedIndexes.length-1]=t,this.makeEdges()}this.nodes.push(e)},handleRemoveNode(){const e=this.nodes.pop();(e==null?void 0:e.type)===f.point&&(this.selectedIndexes.splice(-2,1),this.makeEdges())},makeEdges(){this.edges=this.edges.filter(e=>!e.editing);for(let e=0;e<this.selectedIndexes.length-1;e++)this.edges.push({start:{map:this.maps.length,node:this.selectedIndexes[e]},end:{map:this.maps.length,node:this.selectedIndexes[e+1]},editing:!0})},unselectNodes(){this.nodes=this.nodes.map(e=>({...e,state:r.Normal})),this.selectedIndexes=[]}},components:{InitialInfo:be,CreateNodes:Ne,SelectNodes:Re,IntermediateNodes:De,ChooseQRCodes:Qe,SelectSource:We}};const et={class:"new-place-container"},tt=s("h1",{class:"new-place-title"},"Novo mapa",-1);function st(e,t,a,d,n,o){const l=c("InitialInfo"),i=c("CreateNodes"),p=c("SelectNodes"),I=c("IntermediateNodes"),w=c("ChooseQRCodes"),b=c("SelectSource");return h(),m("div",et,[tt,n.step===e.InitialInfoStep?(h(),g(l,{key:0,onSetImage:t[0]||(t[0]=C=>{n.image=C}),onSetName:t[1]||(t[1]=C=>{n.name=C}),onConfirmInitialInfo:o.handleInitialInfoConfirmed},null,8,["onConfirmInitialInfo"])):n.step===e.CreateNodesStep?(h(),g(i,{key:1,image:n.image,nodes:n.nodes,"first-point-as-entry":n.sourceMap>=0&&n.sourceNode>=0,onGoBack:o.handleGoBack,onCreateNode:o.handleCreateNode,onRemoveNode:o.handleRemoveNode,onConfirmNodes:o.handleNodesCreated,ref:"createNodes"},null,8,["image","nodes","first-point-as-entry","onGoBack","onCreateNode","onRemoveNode","onConfirmNodes"])):n.step===e.SelectNodesStep?(h(),g(p,{key:2,image:n.image,nodes:n.nodes,edges:n.edges,"count-selected":n.selectedIndexes.length,onGoBack:o.handleGoBack,onSetNodeState:o.handleSetNodeState,onConfirmSelection:o.handleNodesSelected,onSkipSelection:o.handleSelectionSkipped},null,8,["image","nodes","edges","count-selected","onGoBack","onSetNodeState","onConfirmSelection","onSkipSelection"])):n.step===e.IntermediateNodesStep?(h(),g(I,{key:3,image:n.image,nodes:n.nodes,edges:n.edges,onGoBack:o.handleGoBack,onCreateNode:o.handleCreateNode,onRemoveNode:o.handleRemoveNode,onConfirmIntermediate:o.handleIntermediateConfirmed,onContinueIntermediate:o.handleContinueCreating},null,8,["image","nodes","edges","onGoBack","onCreateNode","onRemoveNode","onConfirmIntermediate","onContinueIntermediate"])):n.step===e.ChooseQRCodesStep?(h(),g(w,{key:4,image:n.image,nodes:n.nodes,edges:n.edges,onGoBack:o.handleGoBack,onSetNodeState:o.handleSetNodeState,onConfirmMap:o.handleMapConfirmed,onStartLayer:o.handleLayerStarted},null,8,["image","nodes","edges","onGoBack","onSetNodeState","onConfirmMap","onStartLayer"])):n.step===e.SelectSourceStep?(h(),g(b,{key:5,maps:n.maps,onSetNodeState:o.handleSetNodeState,onConfirmSource:o.handleConfirmSource},null,8,["maps","onSetNodeState","onConfirmSource"])):k("",!0)])}const at=u(Ze,[["render",st]]);export{at as default};