"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[992],{8992:function(e,n,r){r.r(n),r.d(n,{default:function(){return Y}});var i=r(2791),a="Phonebook_container__u4h5I",t=r(9439),l=r(9434),s=r(9467),o=r(3608),d=r(824),u=r(1413),c=r(4925),m=r(5812),v=r(184),h=function(e){return(0,v.jsx)(m.m.div,(0,u.Z)((0,u.Z)({className:"chakra-stack__item"},e),{},{__css:(0,u.Z)({display:"inline-block",flex:"0 0 auto",minWidth:0},e.__css)}))};h.displayName="StackItem";var f=r(6992);Object.freeze(["base","sm","md","lg","xl","2xl"]);function p(e){return i.Children.toArray(e).filter((function(e){return(0,i.isValidElement)(e)}))}var x=r(5597),y=["isInline","direction","align","justify","spacing","wrap","children","divider","className","shouldWrapChildren"],b=(0,x.G)((function(e,n){var r=e.isInline,a=e.direction,t=e.align,l=e.justify,s=e.spacing,o=void 0===s?"0.5rem":s,d=e.wrap,x=e.children,b=e.divider,Z=e.className,g=e.shouldWrapChildren,j=(0,c.Z)(e,y),I=r?"row":null!=a?a:"column",N=(0,i.useMemo)((function(){return function(e){var n,r,i=e.spacing,a=e.direction,t={column:{my:i,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:i,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:i,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:i,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":(n=a,r=function(e){return t[e]},Array.isArray(n)?n.map((function(e){return null===e?null:r(e)})):(0,f.Kn)(n)?Object.keys(n).reduce((function(e,i){return e[i]=r(n[i]),e}),{}):null!=n?r(n):null)}}({spacing:o,direction:I})}),[o,I]),_=!!b,k=!g&&!_,C=(0,i.useMemo)((function(){var e=p(x);return k?e:e.map((function(n,r){var a="undefined"!==typeof n.key?n.key:r,t=r+1===e.length,l=g?(0,v.jsx)(h,{children:n},a):n;if(!_)return l;var s=(0,i.cloneElement)(b,{__css:N}),o=t?null:s;return(0,v.jsxs)(i.Fragment,{children:[l,o]},a)}))}),[b,N,_,k,g,x]),R=(0,f.cx)("chakra-stack",Z);return(0,v.jsx)(m.m.div,(0,u.Z)((0,u.Z)({ref:n,display:"flex",alignItems:t,justifyContent:l,flexDirection:I,flexWrap:d,gap:_?void 0:o,className:R},j),{},{children:C}))}));b.displayName="Stack";var Z=(0,x.G)((function(e,n){return(0,v.jsx)(b,(0,u.Z)((0,u.Z)({align:"center"},e),{},{direction:"column",ref:n}))}));Z.displayName="VStack";var g=r(9657),j=r(930),I=r(6336),N=r(9055);function _(){var e=(0,i.useState)(""),n=(0,t.Z)(e,2),r=n[0],a=n[1],u=(0,i.useState)(""),c=(0,t.Z)(u,2),m=c[0],h=c[1],f=(0,l.v9)(o.Af),p=(0,l.I0)(),x=function(e){var n=e.target,r=n.name,i=n.value;switch(r){case"name":return a(i);case"number":return h(i)}};return(0,v.jsx)(d.xu,{width:{base:"100%",md:"50%"},ml:0,mt:10,children:(0,v.jsxs)(Z,{as:"form",onSubmit:function(e){if(e.preventDefault(),""!==r.trim()&&""!==m.trim()){var n={createdAt:(new Date).toISOString(),name:r,number:m};f.some((function(e){return e.name===r}))?alert("".concat(r," is already in contacts!")):(p((0,s.el)(n)),a(""),h(""))}else alert("Please enter name and telephone number!")},spacing:4,children:[(0,v.jsxs)(g.NI,{id:"name",isRequired:!0,children:[(0,v.jsx)(j.l,{children:"Name"}),(0,v.jsx)(I.I,{value:r,onChange:x,name:"name",type:"text"})]}),(0,v.jsxs)(g.NI,{id:"number",isRequired:!0,children:[(0,v.jsx)(j.l,{children:"Number"}),(0,v.jsx)(I.I,{value:m,onChange:x,name:"number",type:"text"})]}),(0,v.jsx)(N.z,{colorScheme:"blue",type:"submit",children:"Add contact"})]})})}var k=r(1309),C=r(4942),R=r(9640),q=r(9886),S=r(6516),F=r(2996),P=["children","styleType","stylePosition","spacing"],L=["as"],w=["as"],T=(0,q.k)({name:"ListStylesContext",errorMessage:"useListStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<List />\" "}),B=(0,t.Z)(T,2),O=B[0],D=B[1],G=(0,x.G)((function(e,n){var r=(0,S.jC)("List",e),i=(0,F.Lr)(e),a=i.children,t=i.styleType,l=void 0===t?"none":t,s=i.stylePosition,o=i.spacing,d=(0,c.Z)(i,P),h=p(a),f=o?(0,C.Z)({},"& > *:not(style) ~ *:not(style)",{mt:o}):{};return(0,v.jsx)(O,{value:r,children:(0,v.jsx)(m.m.ul,(0,u.Z)((0,u.Z)({ref:n,listStyleType:l,listStylePosition:s,role:"list",__css:(0,u.Z)((0,u.Z)({},r.container),f)},d),{},{children:h}))})}));G.displayName="List",(0,x.G)((function(e,n){e.as;var r=(0,c.Z)(e,L);return(0,v.jsx)(G,(0,u.Z)({ref:n,as:"ol",styleType:"decimal",marginStart:"1em"},r))})).displayName="OrderedList",(0,x.G)((function(e,n){e.as;var r=(0,c.Z)(e,w);return(0,v.jsx)(G,(0,u.Z)({ref:n,as:"ul",styleType:"initial",marginStart:"1em"},r))})).displayName="UnorderedList";var z=(0,x.G)((function(e,n){var r=D();return(0,v.jsx)(m.m.li,(0,u.Z)((0,u.Z)({ref:n},e),{},{__css:r.item}))}));z.displayName="ListItem",(0,x.G)((function(e,n){var r=D();return(0,v.jsx)(R.J,(0,u.Z)((0,u.Z)({ref:n,role:"presentation"},e),{},{__css:r.icon}))})).displayName="ListIcon";var A=r(2715),W=["icon","children","isRound","aria-label"],E=(0,x.G)((function(e,n){var r=e.icon,a=e.children,t=e.isRound,l=e["aria-label"],s=(0,c.Z)(e,W),o=r||a,d=(0,i.isValidElement)(o)?(0,i.cloneElement)(o,{"aria-hidden":!0,focusable:!1}):null;return(0,v.jsx)(N.z,(0,u.Z)((0,u.Z)({padding:"0",borderRadius:t?"full":void 0,ref:n,"aria-label":l},s),{},{children:d}))}));E.displayName="IconButton";var H=function(e){var n=e.viewBox,r=void 0===n?"0 0 24 24":n,a=e.d,t=e.displayName,l=e.defaultProps,s=void 0===l?{}:l,o=i.Children.toArray(e.path),d=(0,x.G)((function(e,n){return(0,v.jsx)(R.J,(0,u.Z)((0,u.Z)((0,u.Z)({ref:n,viewBox:r},s),e),{},{children:o.length?o:(0,v.jsx)("path",{fill:"currentColor",d:a})}))}));return d.displayName=t,d}({displayName:"DeleteIcon",path:(0,v.jsx)("g",{fill:"currentColor",children:(0,v.jsx)("path",{d:"M19.452 7.5H4.547a.5.5 0 00-.5.545l1.287 14.136A2 2 0 007.326 24h9.347a2 2 0 001.992-1.819L19.95 8.045a.5.5 0 00-.129-.382.5.5 0 00-.369-.163zm-9.2 13a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zm5 0a.75.75 0 01-1.5 0v-9a.75.75 0 011.5 0zM22 4h-4.75a.25.25 0 01-.25-.25V2.5A2.5 2.5 0 0014.5 0h-5A2.5 2.5 0 007 2.5v1.25a.25.25 0 01-.25.25H2a1 1 0 000 2h20a1 1 0 000-2zM9 3.75V2.5a.5.5 0 01.5-.5h5a.5.5 0 01.5.5v1.25a.25.25 0 01-.25.25h-5.5A.25.25 0 019 3.75z"})})});function M(){var e=(0,l.I0)(),n=(0,l.v9)(s.hF),r=(0,k.ff)("gray.100","gray.700");return(0,v.jsx)(d.xu,{bg:r,p:5,rounded:"md",boxShadow:"base",mt:10,width:{base:"100%",md:"70%"},children:(0,v.jsx)(G,{spacing:3,children:n.map((function(n){return(0,v.jsxs)(z,{display:"flex",justifyContent:"space-between",alignItems:"center",p:2,rounded:"md",_hover:{bg:"gray.200"},width:"100%",children:[(0,v.jsxs)(A.x,{fontSize:"md",isTruncated:!0,children:[n.name,": ",n.number]}),(0,v.jsx)(E,{"aria-label":"Delete ".concat(n.name),icon:(0,v.jsx)(H,{}),onClick:function(){return r=n.id,void e((0,s.Ef)(r));var r},colorScheme:"red",size:"sm"})]},n.id)}))})})}function J(){var e=(0,l.I0)(),n=(0,l.v9)(o.YI);return(0,v.jsx)(d.xu,{width:{base:"100%",md:"50%"},ml:0,mt:10,children:(0,v.jsxs)(g.NI,{children:[(0,v.jsx)(j.l,{children:"Find contacts by name"}),(0,v.jsx)(I.I,{onChange:function(n){e((0,s.Tv)(n.target.value))},value:n,placeholder:"Enter to filter...",required:!0})]})})}var V=r(4826),Q="ErrorMassadge_Error__UJugh",U=function(e){var n=e.message;return(0,v.jsx)("p",{className:Q,children:n})};function K(){var e=(0,l.v9)(o.Cc),n=(0,l.v9)(o.Uv),r=(0,l.I0)();return(0,i.useEffect)((function(){r((0,s.yF)())}),[r]),(0,v.jsxs)("div",{children:[e&&(0,v.jsx)(V.Z,{}),n&&(0,v.jsx)(U,{message:n}),(0,v.jsxs)("div",{className:a,children:[(0,v.jsx)(_,{}),(0,v.jsx)(J,{}),(0,v.jsx)(M,{})]})]})}function Y(){return(0,v.jsx)("div",{children:(0,v.jsx)(K,{})})}},930:function(e,n,r){r.d(n,{l:function(){return v}});var i=r(1413),a=r(4925),t=r(9657),l=r(5597),s=r(6516),o=r(2996),d=r(5812),u=r(6992),c=r(184),m=["className","children","requiredIndicator","optionalIndicator"],v=(0,l.G)((function(e,n){var r,l=(0,s.mq)("FormLabel",e),v=(0,o.Lr)(e),f=(v.className,v.children),p=v.requiredIndicator,x=void 0===p?(0,c.jsx)(h,{}):p,y=v.optionalIndicator,b=void 0===y?null:y,Z=(0,a.Z)(v,m),g=(0,t.NJ)(),j=null!=(r=null==g?void 0:g.getLabelProps(Z,n))?r:(0,i.Z)({ref:n},Z);return(0,c.jsxs)(d.m.label,(0,i.Z)((0,i.Z)({},j),{},{className:(0,u.cx)("chakra-form__label",v.className),__css:(0,i.Z)({display:"block",textAlign:"start"},l),children:[f,(null==g?void 0:g.isRequired)?x:b]}))}));v.displayName="FormLabel";var h=(0,l.G)((function(e,n){var r=(0,t.NJ)(),a=(0,t.e)();if(!(null==r?void 0:r.isRequired))return null;var l=(0,u.cx)("chakra-form__required-indicator",e.className);return(0,c.jsx)(d.m.span,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getRequiredIndicatorProps(e,n)),{},{__css:a.requiredIndicator,className:l}))}));h.displayName="RequiredIndicator"},9657:function(e,n,r){r.d(n,{NI:function(){return _},NJ:function(){return N},e:function(){return Z}});var i=r(1413),a=r(4925),t=r(9439),l=r(9886),s=r(4591),o=r(5597),d=r(6516),u=r(2996),c=r(5812),m=r(6992),v=r(2791),h=r(184),f=["id","isRequired","isInvalid","isDisabled","isReadOnly"],p=["getRootProps","htmlProps"],x=(0,l.k)({name:"FormControlStylesContext",errorMessage:"useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in \"<FormControl />\" "}),y=(0,t.Z)(x,2),b=y[0],Z=y[1],g=(0,l.k)({strict:!1,name:"FormControlContext"}),j=(0,t.Z)(g,2),I=j[0],N=j[1];var _=(0,o.G)((function(e,n){var r=(0,d.jC)("Form",e),l=function(e){var n=e.id,r=e.isRequired,l=e.isInvalid,o=e.isDisabled,d=e.isReadOnly,u=(0,a.Z)(e,f),c=(0,v.useId)(),h=n||"field-".concat(c),p="".concat(h,"-label"),x="".concat(h,"-feedback"),y="".concat(h,"-helptext"),b=(0,v.useState)(!1),Z=(0,t.Z)(b,2),g=Z[0],j=Z[1],I=(0,v.useState)(!1),N=(0,t.Z)(I,2),_=N[0],k=N[1],C=(0,v.useState)(!1),R=(0,t.Z)(C,2),q=R[0],S=R[1],F=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:y},e),{},{ref:(0,s.lq)(n,(function(e){e&&k(!0)}))})}),[y]),P=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,"data-focus":(0,m.PB)(q),"data-disabled":(0,m.PB)(o),"data-invalid":(0,m.PB)(l),"data-readonly":(0,m.PB)(d),id:void 0!==e.id?e.id:p,htmlFor:void 0!==e.htmlFor?e.htmlFor:h})}),[h,o,q,l,d,p]),L=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({id:x},e),{},{ref:(0,s.lq)(n,(function(e){e&&j(!0)})),"aria-live":"polite"})}),[x]),w=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)((0,i.Z)({},e),u),{},{ref:n,role:"group"})}),[u]),T=(0,v.useCallback)((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return(0,i.Z)((0,i.Z)({},e),{},{ref:n,role:"presentation","aria-hidden":!0,children:e.children||"*"})}),[]);return{isRequired:!!r,isInvalid:!!l,isReadOnly:!!d,isDisabled:!!o,isFocused:!!q,onFocus:function(){return S(!0)},onBlur:function(){return S(!1)},hasFeedbackText:g,setHasFeedbackText:j,hasHelpText:_,setHasHelpText:k,id:h,labelId:p,feedbackId:x,helpTextId:y,htmlProps:u,getHelpTextProps:F,getErrorMessageProps:L,getRootProps:w,getLabelProps:P,getRequiredIndicatorProps:T}}((0,u.Lr)(e)),o=l.getRootProps,x=(l.htmlProps,(0,a.Z)(l,p)),y=(0,m.cx)("chakra-form-control",e.className);return(0,h.jsx)(I,{value:x,children:(0,h.jsx)(b,{value:r,children:(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},o({},n)),{},{className:y,__css:r.container}))})})}));_.displayName="FormControl",(0,o.G)((function(e,n){var r=N(),a=Z(),t=(0,m.cx)("chakra-form__helper-text",e.className);return(0,h.jsx)(c.m.div,(0,i.Z)((0,i.Z)({},null==r?void 0:r.getHelpTextProps(e,n)),{},{__css:a.helperText,className:t}))})).displayName="FormHelperText"},6336:function(e,n,r){r.d(n,{I:function(){return p}});var i=r(1413),a=r(4925),t=r(9657),l=r(6992),s=["isDisabled","isInvalid","isReadOnly","isRequired"],o=["id","disabled","readOnly","required","isRequired","isInvalid","isReadOnly","isDisabled","onFocus","onBlur"];function d(e){var n=function(e){var n,r,s,d=(0,t.NJ)(),u=e.id,c=e.disabled,m=e.readOnly,v=e.required,h=e.isRequired,f=e.isInvalid,p=e.isReadOnly,x=e.isDisabled,y=e.onFocus,b=e.onBlur,Z=(0,a.Z)(e,o),g=e["aria-describedby"]?[e["aria-describedby"]]:[];(null==d?void 0:d.hasFeedbackText)&&(null==d?void 0:d.isInvalid)&&g.push(d.feedbackId);(null==d?void 0:d.hasHelpText)&&g.push(d.helpTextId);return(0,i.Z)((0,i.Z)({},Z),{},{"aria-describedby":g.join(" ")||void 0,id:null!=u?u:null==d?void 0:d.id,isDisabled:null!=(n=null!=c?c:x)?n:null==d?void 0:d.isDisabled,isReadOnly:null!=(r=null!=m?m:p)?r:null==d?void 0:d.isReadOnly,isRequired:null!=(s=null!=v?v:h)?s:null==d?void 0:d.isRequired,isInvalid:null!=f?f:null==d?void 0:d.isInvalid,onFocus:(0,l.v0)(null==d?void 0:d.onFocus,y),onBlur:(0,l.v0)(null==d?void 0:d.onBlur,b)})}(e),r=n.isDisabled,d=n.isInvalid,u=n.isReadOnly,c=n.isRequired,m=(0,a.Z)(n,s);return(0,i.Z)((0,i.Z)({},m),{},{disabled:r,readOnly:u,required:c,"aria-invalid":(0,l.Qm)(d),"aria-required":(0,l.Qm)(c),"aria-readonly":(0,l.Qm)(u)})}var u=r(5597),c=r(6516),m=r(2996),v=r(5812),h=r(184),f=["htmlSize"],p=(0,u.G)((function(e,n){var r=e.htmlSize,t=(0,a.Z)(e,f),s=(0,c.jC)("Input",t),o=d((0,m.Lr)(t)),u=(0,l.cx)("chakra-input",e.className);return(0,h.jsx)(v.m.input,(0,i.Z)((0,i.Z)({size:r},o),{},{__css:s.field,ref:n,className:u}))}));p.displayName="Input",p.id="Input"}}]);
//# sourceMappingURL=992.f9ffd670.chunk.js.map