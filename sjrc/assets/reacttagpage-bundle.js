webpackJsonp([2],{0:function(e,t,n){var o=n(210);n(301),window.ReactTagsInput=o},142:function(e,t,n){t=e.exports=n(65)(),t.push([e.id,'.react-tagsinput-input,.react-tagsinput-tag{font-family:sans-serif;font-size:13px;padding:5px}.react-tagsinput{background-color:#fff;border:1px solid #ccc;overflow:hidden;padding-left:5px;padding-top:5px}.react-tagsinput-tag{background-color:#cde69c;border-radius:2px;border:1px solid #a5d24a;color:#638421;float:left;font-weight:400;margin-bottom:5px;margin-right:5px}.react-tagsinput-remove{cursor:pointer;font-weight:700}.react-tagsinput-remove:before{content:" x"}.react-tagsinput-input{background:0 0;border:0;color:#777;font-weight:400;margin-bottom:6px;margin-top:1px;outline:0;width:80px}.react-tagsinput-invalid{background-color:#fbd8db;color:#90111a}.react-tagsinput-validating{background:#fffacd}',""])},210:function(e,t,n){var o,r,i;!function(s,a){void 0!==e&&e.exports?e.exports=a(n(1)):(r=[n(1)],o=a,i="function"==typeof o?o.apply(t,r):o,!(void 0!==i&&(e.exports=i)))}(this,function(e){"use strict";var t=e.createClass({render:function(){var t=this.props.ns,n=t+"tagsinput-input";return this.props.validating&&(n+=" "+t+"tagsinput-validating"),this.props.invalid&&(n+=" "+t+"tagsinput-invalid"),e.createElement("input",e.__spread({},this.props,{type:"text",className:n,placeholder:this.props.placeholder}))}}),n=e.createClass({render:function(){return e.createElement("span",{className:this.props.ns+"tagsinput-tag"},this.props.tag,e.createElement("a",{onClick:this.props.remove,className:this.props.ns+"tagsinput-remove"}))}}),o=e.createClass({propTypes:{value:e.PropTypes.array,valueLink:e.PropTypes.object,defaultValue:e.PropTypes.array,placeholder:e.PropTypes.string,classNamespace:e.PropTypes.string,addKeys:e.PropTypes.array,removeKeys:e.PropTypes.array,addOnBlur:e.PropTypes.bool,onChange:e.PropTypes.func,onChangeInput:e.PropTypes.func,onBlur:e.PropTypes.func,onKeyDown:e.PropTypes.func,onKeyUp:e.PropTypes.func,onTagAdd:e.PropTypes.func,onTagRemove:e.PropTypes.func,transform:e.PropTypes.func,validate:e.PropTypes.func,validateAsync:e.PropTypes.func},getDefaultProps:function(){return{defaultValue:[],placeholder:"Add a tag",classNamespace:"react",addKeys:[13,9],removeKeys:[8],addOnBlur:!0,onChange:function(){},onChangeInput:function(){},onBlur:function(){},onKeyDown:function(){},onKeyUp:function(){},onTagAdd:function(){},onTagRemove:function(){},transform:function(e){return e.trim()}}},getInitialState:function(){var e=this.props.defaultValue.slice(0);return{value:e,tag:"",invalid:!1,validating:!1}},componentWillUpdate:function(e){!this.isUncontrolled()&&this.isUncontrolled(e)&&this.setState({value:this.props.defaultValue.slice(0)})},isUncontrolled:function(e){return e=e||this.props,!e.value&&!e.valueLink},getValueLink:function(){return this.isUncontrolled()?void 0:this.props.valueLink||{value:this.props.value,requestChange:this.props.onChange}},_valueTransaction:function(e,t){var n=this.getValueLink();return this.isUncontrolled()?void this.setState(function(n){var o=e(n.value);return o?(this.props.onChange(o,t),{value:o}):void 0}):n.requestChange(e(n.value),t)},_value:function(){var e=this.getValueLink();return this.isUncontrolled()?this.state.value:e.value},defaultValidate:function(e){return-1===this._value().indexOf(e)},getTags:function(){return this._value()},validation:function(e,t){var n=this.props.validateAsync||this.props.validate||this.defaultValidate,o=!!this.props.validateAsync||2==n.length;o?n(e,t):t(n(e))},addTag:function(e){var t=(this.getValueLink(),this.props.transform(e));t&&(this.setState({validating:!0}),this.validation(t,function(e){return this.setState({validating:!1}),e?void this._valueTransaction(function(e){return this.setState({tag:"",invalid:!1},function(){this.props.onTagAdd(t)}),e.concat([t])}.bind(this),t):this.setState({invalid:!0})}.bind(this)))},removeTag:function(e){this._valueTransaction(function(t){var n,o=t.concat([]);for(n=0;n<o.length;n+=1)if(o[n]===e)return o.splice(n,1),this.setState({invalid:!1},function(){this.props.onTagRemove(e)}),o}.bind(this),e)},onKeyDown:function(e){var t=-1!==this.props.addKeys.indexOf(e.keyCode),n=-1!==this.props.removeKeys.indexOf(e.keyCode);t&&(e.preventDefault(),this.addTag(this.state.tag)),n&&this._value().length>0&&""===this.state.tag&&this.removeTag(this._value()[this._value().length-1]),t||n||this.props.onKeyDown(e)},onChange:function(e){this.state.validating||(this.props.onChangeInput(e.target.value),this.setState({tag:e.target.value,invalid:!1}))},onBlur:function(){var e=this.state.tag;this.props.addOnBlur&&this.addTag(e),this.props.onBlur()},clear:function(){this.setState({tag:"",invalid:!1})},focus:function(){this.refs.input.getDOMNode().focus()},handleClick:function(e){e.target===this.getDOMNode()&&this.focus()},render:function(){var o=""===this.props.classNamespace?"":this.props.classNamespace+"-",r=this._value().map(function(t,r){return e.createElement(n,{key:r,ns:o,tag:t,remove:this.removeTag.bind(null,t)})}.bind(this));return e.createElement("div",{className:o+"tagsinput",onClick:this.handleClick},r,e.createElement(t,{ref:"input",ns:o,placeholder:this.props.placeholder,value:this.state.tag,invalid:this.state.invalid,validating:this.state.validating,onKeyDown:this.onKeyDown,onKeyUp:this.props.onKeyUp,onChange:this.onChange,onBlur:this.onBlur}))}});return o})},301:function(e,t,n){var o,r=n(142);"string"==typeof r&&(r=[[e.id,r,""]]),o=n(92)(r,{}),r.locals&&(e.exports=r.locals)}});