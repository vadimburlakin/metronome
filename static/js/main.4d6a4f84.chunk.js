(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{70:function(e,A,t){e.exports=t(86)},75:function(e,A,t){},86:function(e,A,t){"use strict";t.r(A);var a=t(0),n=t.n(a),r=t(8),i=t.n(r),s=(t(75),t(53)),l=t(27),o=t(62),c=t(54),g=t(61),m=t(4),u=t(87),d=t(121),h=t(132),B=t(88),p=t(131),C=t(123),w=t(125),E=t(126),Q=t(127),v=t(130),I=t(128),f=t(119),S=t(120),y=t(124),b=t(133),k=Object(m.a)({root:{color:"#52af77",height:8},thumb:{height:24,width:24,backgroundColor:"#fff",border:"2px solid currentColor",marginTop:-8,marginLeft:-12,"&:focus,&:hover,&$active":{boxShadow:"inherit"}},active:{},valueLabel:{left:"calc(-50% + 4px)"},track:{height:8,borderRadius:4},rail:{height:8,borderRadius:4}})(b.a),D=function(e){function A(){var e;return Object(s.a)(this,A),(e=Object(o.a)(this,Object(c.a)(A).call(this))).tick=function(){e.state.isPlaying&&((e.state.currentTick%4===0?e.tickFourth:e.tickNormal).play(),e.setState({currentTick:e.state.currentTick+1}),e.state.desiredBpm!==e.state.actualBpm&&e.setState({actualBpm:e.state.desiredBpm},e.resetTimer))},e.tickBpmIncrement=function(){if(e.state.isProgressive&&e.state.isPlaying&&e.state.actualBpm<e.state.endValue){var A=Math.min(e.state.step,e.state.endValue-e.state.actualBpm);e.setState({desiredBpm:e.state.actualBpm+A})}},e.resetTimer=function(){e._tickInterval&&clearInterval(e._tickInterval),e._tickInterval=setInterval(e.tick,Math.ceil(60/e.state.actualBpm*1e3))},e.resetProgressiveTimer=function(){e._progressiveInterval&&clearInterval(e._progressiveInterval),e._progressiveInterval=setInterval(e.tickBpmIncrement,1e3*e.state.delay)},e.handleChangeProgressive=function(A){var t=!e.state.isProgressive,a=e.state.desiredBpm;t&&(a=e.state.startValue),e.setState({isProgressive:t,desiredBpm:a},function(){t&&e.resetProgressiveTimer()})},e.handleChangeStartValue=function(A){var t=Number(A.target.value);t<=0||e.setState({startValue:t})},e.handleChangeEndValue=function(A){var t=Number(A.target.value);t<=0||e.setState({endValue:t})},e.handleChangeStep=function(A){var t=Number(A.target.value);t<=0||e.setState({step:t})},e.handleChangeDelay=function(A){var t=Number(A.target.value);t<=0||e.setState({delay:t},e.resetProgressiveTimer)},e.handleStartPlaying=function(){var A=e.state.desiredBpm;e.state.isProgressive&&(A=e.state.startValue),e.setState({isPlaying:!0,desiredBpm:A})},e.handleStopPlaying=function(){e.setState({isPlaying:!1})},e.handleSetBpm=function(A,t){e.setState({desiredBpm:t})},e.handleToggleSettings=function(){e.setState({isSettingsOpen:!e.state.isSettingsOpen})},e.state={isPlaying:!1,actualBpm:60,desiredBpm:60,isProgressive:!1,startValue:40,endValue:80,step:5,delay:30,currentTick:0,isSettingsOpen:document.documentElement.clientWidth>600},e.tickNormal=new Audio("data:audio/flac;base64, ZkxhQwAAACIQABAAAARBAARBAfQBcAAAAZLfwZb9QVlTtnnZLOsaWczxhAAAKCAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMCAyMDEzMDUyNgAAAAD/+HQMAAGRJhgKxHRX63x+6QxXqTpCYAANDJgITNAmIhAB/5BgFt4iAfgBZHY4A9UZAAZ65QManTnQUAKnx8A+ZcwFun6gX1gMVIgAfaXgEml9KIzgfUBYAnhLwJl/Oek+A5rZADhx2ApN3s198CTrfAPyHMGRV3DcKAYAAwBJ7uA8wysUF8HYV6AUyIIKv/ObD0B7BRAOf6QFVnlVIrg0zuwGYTqCTP9rJXAWm4AC1HQDxVMnllwVg94CGPDDq6XrJRgQ2zwHp6wGR5tQFGh9dygZtwIXeHNK+AHAw8BZ34BSgBUY44Ze3IEt2uEhBfQg3BcaTA+MSB/rIUTNIUTWYN9hMdT2M/TYEg+cDC6KGzFJQAzj8TBBUujjHFLnsqB07TAj7JBa4qTwQY15pQ9rKxSdhzrJwxaKA3o/BKIsTkDYtGCwxtDRCIqzegQo2pAr9KD0mKmwtRJeuhMscnKzjNLLCC4CCDoYNaPiZmNPNIsdzTJkF0zHIRyDGDZzCLozKYLfNVZUYt6pWUiy7/Bjf5CyRUJ95iW1TLkIET7MJJU5yxARVwzCNBsIZHCVflJ5ZE+0K30dXKabEjNYdP+TulglDBSFPJNlCtxqLycmj5OeMkURsMFSXgrtnXLllFm5cySbjiZQKoshh0ASOArXdBJuJ9c2syJBjM8II1VJYFtSEVbCw3f80qnABkAClxxw8mPk8NdHt4q9gNy0UpWEuO2UUx3jZSuRqVkcoWnWIWa1ahV3Y3K5KbKMH879vqjUtUZMatwgfZeOMvsQlyisbQ71rIxGX9FhUSYvRHvF3xeunSYfQ4iRItSvuvzR5iO3xDFaEdARSGOC1fGIpY/hll/Z8dBI+J6u22KvVuDK2IiXW9V8Htkhxa94kLDPz25hsMC8qImvymxd70W8D5iDfsU9TYMYt5EIfJnAWr0bS7NbeHbQu6ZsuZyvTuhwMbc9XFv3q4b4amazBWwDvKfuyGSBrwrbr8+kkvhfZKs7C2FwoVooWXOnr/sWmZ5hWFSSpEtq0O6bjQhPR6Eguo8PmOz4SoKeIgpRmJZ1CEWpm1U6F/2UKJhBBJi0KeJ6kgEoPCeWSBmv85AOeDhOk/mJgciON6g0DZHbeVa7jIhYMBSP4ukvNIr36CvTjhkZCkWJk5godIxpiOjqiEnoJQ2K3HjKtYcY2CFWiXpIrqaGEIgef4gs+JXnhRm4GziHB2h/OIRB6BgfhgH4ap2DiTgVwIUN6FjaguFoE0uENThJRYJMOBCwg3zIOyKB00gOl4LXWC79gW14DOaCQAglUoEKCApZgc1YHC2AxzgJBoFcSBWWgICoBp+BEXgO64BeGAXYgMGoCoCAOYgEk4CGWAb5gB54A2SAWGgEfoAHyAINgDuYAkeAAbgBfoAgyAEEgAC4ARGADPgAf4AFyABYgAeIACGAAMgAaYAECABJgAagfd0="),e.tickFourth=new Audio("data:audio/flac;base64, ZkxhQwAAACIQABAAAASHAASHAfQBcAAAAZJmQcYR2ioJT3jLmpb50AcuhAAAKCAAAAByZWZlcmVuY2UgbGliRkxBQyAxLjMuMCAyMDEzMDUyNgAAAAD/+HQMAAGRJhBCh7ABAABSN/Kj7gAAO6mnM9FAABNfIJUGAAAKe7DI43gADmxTR20QAA53IcX+iAALK1xEl4gACoqNw0FgAB/tkIQPcAA68EcD1IAAZiCiAIzAALFXrAngwAExaWgjHIAHzZPgsM4AHJZsgvrYAGJUrgugYAFhGQgpy4AEjifgirIAPzFBA0gwAcDn+BGNgAyeRkBLFABYGt4AlWACYTjQBn4AEBeNgHNQAdBcCAmPABo+A4CnsAFy/sgKPQAUfB+AkkABGD6oB4QAPayPALSgBv8cIA8UAMqE3AELABaVToALEAJ9svAAtwBFMTIAQuAercOAFrgHCDYgBioBmQP4AXWAXE3CAFAgFJOzgA/oBIkwIALiA/bWcADnAdVRyAA8gNfC3AAKwGKSUgABgCywJwADIBQSqIACEAjqycAA6A/PfkAAyA64TcAAoA2kbkAAgAyUecAAWAuH70AAQAp/IsAAKAl5zkAAEAh4E8AACB7zsoAAGDn8bwAAAGw+0gAAgMlAvAABQXR16AAGgq2pcAALBOaKIAAGCObMwAAIEAe4gAAweSH+AACByPxIAAEGt2XgAAgZMdaAABBeMh4AAAFe2QgAAQUVO+AACBLCiIAAIETZngAAQ/YNEAADHjCDgAAI5bXkAACG0L5gAAgzqlEAAEGG1TgABAuFpUAAEFa8pgAAIosaEAAJEwgbgAA4jem0AAAEHfjgAAx84IIAAEd/fGAACnMlIgAAJuZ/4AACacCiAACmUuZgAA5gsdIAAKXEnOAABFf2wgAABTuE4AAGT45qAAAkt4jgAARHdsIAAEQ4jeAABP9dBAABnvnzgAAjwaEQAAF0k44AAG4gwUAADbYruAABtRFJAAAWbMTgAATHEFQAAJgVf4AAAumsEAABWiZ2AAAK5RpAAAVQ8LgAA6iwZQAAVOlb4AAIl7akAAISTGOAAEI0vBAABkQNzgAASDJ1QAAD+UkwAAL5nAQAAP1A+wAAPwilQAAPsLcwAAHn7tQAATjzLwAAbfxpQAADb3LwAAXYDvQAAHUW/wAADQxCQAAPNRmwAAXJ43QAAXGmXwAAXDaaQAAPAUgwAAO9U4QAAC6bNwAAK3ngQAAK05rwAACyRnQAAGvvJwAAGtSUQAACq65wAAKoo1QAAamcJwAAqkUbQAAqiSDwAAigUaQAAaeb1wAAacn5QAAKa4uwAAGZOLQAAGXoCwAAGWGYQAACUo9wAACTPxQAAKR6swAACQpnQAASPcewAACOTJQAAONNewAAKMLfQAAKLNCwAAGKSCQAAOJaQwAAGIl1QAACH0fwAACHGOQAACGa3wAAKFyXQAACFMnwAACEpjQAAKEJCwAASDq7QAASDPRwAASC1zQAACCehwAAOCJYQAACB2IwAACBk0QAACBVRwAAKBHbQAAOA7GwAAOAwZQAAGAm9wAAGAe7QAAOAX/wAACASQQAACANfwAASAJlQAAiAGowAAaAEOQAASACkwAACABaQAAOAAnwAACAAOQAAKAADwAACAABAJLL"),e.resetTimer(),e.resetProgressiveTimer(),e}return Object(g.a)(A,e),Object(l.a)(A,[{key:"renderControls",value:function(){return this.state.isPlaying?n.a.createElement(u.a,{color:"primary",onClick:this.handleStopPlaying},n.a.createElement(f.a,{classes:{root:this.props.classes.controlButtons},fontSize:"large"})):n.a.createElement(u.a,{color:"primary",onClick:this.handleStartPlaying},n.a.createElement(S.a,{classes:{root:this.props.classes.controlButtons},fontSize:"large"}))}},{key:"render",value:function(){var e=this.props.classes;return n.a.createElement(d.a,{component:"main",maxWidth:"xs"},n.a.createElement(h.a,null),n.a.createElement("div",{className:e.paper},n.a.createElement(B.a,{component:"h1",variant:"h3"},"Metronome"),n.a.createElement("div",{className:e.smallSpacing}),n.a.createElement("div",null,n.a.createElement(B.a,{component:"h1",variant:"h4",display:"inline",classes:{h4:e.bpmValue}},this.state.desiredBpm),n.a.createElement(B.a,{component:"h1",variant:"h6",display:"inline"},"BPM")),n.a.createElement(k,{value:this.state.desiredBpm,min:35,max:180,onChange:this.handleSetBpm}),n.a.createElement("div",{className:e.mediumSpacing}),n.a.createElement(p.a,{expanded:this.state.isSettingsOpen,onChange:this.handleToggleSettings},n.a.createElement(C.a,{expandIcon:n.a.createElement(y.a,null),"aria-controls":"panel1bh-content",id:"panel1bh-header"},n.a.createElement(B.a,{className:e.heading},"Settings")),n.a.createElement(w.a,null,n.a.createElement("form",{className:e.form,noValidate:!0},n.a.createElement(E.a,{container:!0,spacing:2},n.a.createElement(E.a,{item:!0,xs:12},n.a.createElement(Q.a,{control:n.a.createElement(v.a,{checked:this.state.isProgressive,onChange:this.handleChangeProgressive,value:"progressiveMetronome",color:"primary"}),label:"Increase speed"})),n.a.createElement(E.a,{item:!0,xs:12,sm:3},n.a.createElement(I.a,{name:"startValue",type:"number",variant:"outlined",fullWidth:!0,id:"startValue",label:"Start",autoFocus:!0,value:this.state.startValue,onChange:this.handleChangeStartValue})),n.a.createElement(E.a,{item:!0,xs:12,sm:3},n.a.createElement(I.a,{name:"endValue",type:"number",variant:"outlined",fullWidth:!0,id:"endValue",label:"End",autoFocus:!0,value:this.state.endValue,onChange:this.handleChangeEndValue})),n.a.createElement(E.a,{item:!0,xs:12,sm:3},n.a.createElement(I.a,{name:"step",type:"number",variant:"outlined",fullWidth:!0,id:"step",label:"Step",autoFocus:!0,value:this.state.step,onChange:this.handleChangeStep})),n.a.createElement(E.a,{item:!0,xs:12,sm:3},n.a.createElement(I.a,{name:"delay",type:"number",variant:"outlined",fullWidth:!0,id:"delay",label:"Delay",autoFocus:!0,value:this.state.delay,onChange:this.handleChangeDelay})))))),n.a.createElement("div",{className:e.smallSpacing}),this.renderControls()))}}]),A}(a.Component),J=Object(m.a)(function(e){return{"@global":{body:{backgroundColor:e.palette.common.white}},paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},form:{width:"100%",marginTop:e.spacing(3)},bpmValue:{paddingRight:"5px"},smallSpacing:{marginTop:"25px"},mediumSpacing:{marginTop:"35px"},controlButtons:{fontSize:"5rem"}}})(D);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[70,1,2]]]);
//# sourceMappingURL=main.4d6a4f84.chunk.js.map