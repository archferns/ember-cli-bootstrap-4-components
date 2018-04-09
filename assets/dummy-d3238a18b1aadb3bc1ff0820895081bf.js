"use strict"
define("dummy/app",["exports","dummy/resolver","ember-load-initializers","dummy/config/environment"],function(e,t,o,a){Object.defineProperty(e,"__esModule",{value:!0})
var n=Ember.Application.extend({modulePrefix:a.default.modulePrefix,podModulePrefix:a.default.podModulePrefix,Resolver:t.default});(0,o.default)(n,a.default.modulePrefix),e.default=n}),define("dummy/components/bs-modal",["exports","ember-cli-bootstrap-4-components/components/bs-modal"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/components/bs-popover",["exports","ember-cli-bootstrap-4-components/components/bs-popover"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/controllers/modal/block-autoload",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({actions:{backToParentRoute:function(){this.transitionToRoute("modal")}}})}),define("dummy/controllers/modal/simple-autoload",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Controller.extend({actions:{backToParentRoute:function(){this.transitionToRoute("modal")}}})}),define("dummy/initializers/container-debug-adapter",["exports","ember-resolver/resolvers/classic/container-debug-adapter"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"container-debug-adapter",initialize:function(){var e=arguments[1]||arguments[0]
e.register("container-debug-adapter:main",t.default),e.inject("container-debug-adapter:main","namespace","application:main")}}}),define("dummy/initializers/export-application-global",["exports","dummy/config/environment"],function(e,t){function o(){var e=arguments[1]||arguments[0]
if(!1!==t.default.exportApplicationGlobal){var o
if("undefined"!=typeof window)o=window
else if("undefined"!=typeof global)o=global
else{if("undefined"==typeof self)return
o=self}var a,n=t.default.exportApplicationGlobal
a="string"==typeof n?n:Ember.String.classify(t.default.modulePrefix),o[a]||(o[a]=e,e.reopen({willDestroy:function(){this._super.apply(this,arguments),delete o[a]}}))}}Object.defineProperty(e,"__esModule",{value:!0}),e.initialize=o,e.default={name:"export-application-global",initialize:o}}),define("dummy/resolver",["exports","ember-resolver"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=t.default}),define("dummy/router",["exports","dummy/config/environment"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0})
var o=Ember.Router.extend({location:t.default.locationType,rootURL:t.default.rootURL})
o.map(function(){this.route("modal",function(){this.route("simple-autoload"),this.route("block-autoload")}),this.route("popover")}),e.default=o}),define("dummy/routes/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/routes/modal/block-autoload",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/routes/modal/simple-autoload",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/routes/popover",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.Route.extend({})}),define("dummy/services/ajax",["exports","ember-ajax/services/ajax"],function(e,t){Object.defineProperty(e,"__esModule",{value:!0}),Object.defineProperty(e,"default",{enumerable:!0,get:function(){return t.default}})}),define("dummy/templates/application",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"BMNgOTrx",block:'{"symbols":[],"statements":[[6,"nav"],[9,"class","navbar navbar-expand-lg navbar-light bg-light"],[7],[0,"\\n  "],[4,"link-to",["index"],[["class"],["navbar-brand"]],{"statements":[[0,"ember-cli-bootstrap-4-components"]],"parameters":[]},null],[0,"\\n  "],[6,"button"],[9,"class","navbar-toggler"],[9,"type","button"],[9,"data-toggle","collapse"],[9,"data-target","#navbarSupportedContent"],[9,"aria-controls","navbarSupportedContent"],[9,"aria-expanded","false"],[9,"aria-label","Toggle navigation"],[7],[0,"\\n    "],[6,"span"],[9,"class","navbar-toggler-icon"],[7],[8],[0,"\\n  "],[8],[0,"\\n\\n  "],[6,"div"],[9,"class","collapse navbar-collapse"],[9,"id","navbarSupportedContent"],[7],[0,"\\n    "],[6,"ul"],[9,"class","navbar-nav mr-auto"],[7],[0,"\\n      "],[6,"li"],[9,"class","nav-item"],[7],[0,"\\n        "],[4,"link-to",["modal"],[["class"],["nav-link"]],{"statements":[[0,"Modals"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n      "],[6,"li"],[9,"class","nav-item"],[7],[0,"\\n        "],[4,"link-to",["popover"],[["class"],["nav-link"]],{"statements":[[0,"Popovers"]],"parameters":[]},null],[0,"\\n      "],[8],[0,"\\n"],[0,"    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"],[1,[18,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/application.hbs"}})}),define("dummy/templates/index",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"YwWuqJs9",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"h2"],[7],[0,"Installation"],[8],[0,"\\n  "],[6,"p"],[7],[6,"code"],[9,"class","terminal"],[7],[0,"ember install ember-cli-bootstrap-4-components"],[8],[8],[0,"\\n  "],[6,"h2"],[7],[0,"Available components"],[8],[0,"\\n  "],[6,"ul"],[7],[0,"\\n    "],[6,"li"],[7],[0,"\\n      "],[4,"link-to",["modal"],null,{"statements":[[0,"Modals"]],"parameters":[]},null],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/index.hbs"}})}),define("dummy/templates/modal",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"qzh7sRqF",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"h3"],[7],[0,"Modals"],[8],[0,"\\n  "],[6,"p"],[7],[0,"Modals can be created using the "],[6,"code"],[7],[0,"{{bs-modal}}"],[8],[0," component"],[8],[0,"\\n  "],[6,"h4"],[7],[0,"Simple usage"],[8],[0,"\\n  "],[6,"p"],[7],[0,"Supported properties:"],[8],[0,"\\n  "],[6,"ul"],[7],[0,"\\n    "],[6,"li"],[7],[0,"\\n      "],[6,"code"],[7],[0,"modalTitle"],[8],[0," - define the modal title.\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"\\n      "],[6,"code"],[7],[0,"modalBody"],[8],[0," - define the modal content. May include HTML.\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n"],[6,"pre"],[7],[6,"code"],[7],[0,"\\n  "],[0,"{{bs-modal id=\\"simpleModal\\" modalTitle=\\"Hello\\" modalBody=\'Hi there!\'}}\\n  "],[6,"br"],[7],[8],[0,"\\n  \x3c!-- add a trigger --\x3e\\n  <button type=\\"button\\" class=\\"btn btn-primary\\" data-toggle=\\"modal\\" data-target=\\"#simpleModal\\">\\n    Launch simple modal\\n  </button>\\n"],[8],[0,"\\n"],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"h4"],[7],[0,"Block usage"],[8],[0,"\\n  "],[6,"p"],[7],[0,"In the block usage, you are expected to create the "],[6,"code"],[7],[0,"modal-header"],[8],[0,", "],[6,"code"],[7],[0,"modal-body"],[8],[0," and "],[6,"code"],[7],[0,"modal-footer"],[8],[0," as part of the block."],[8],[0,"\\n  "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n"],[6,"pre"],[7],[6,"code"],[7],[0,"\\n  <button type=\\"button\\" class=\\"btn btn-primary\\" data-toggle=\\"modal\\" data-target=\\"#blockModal\\">\\n    Launch block modal\\n  </button>\\n  "],[0,"{{#bs-modal id=\\"blockModal\\"}}\\n    <div class=\\"modal-header\\">\\n      <h5 class=\\"modal-title\\">Modal title</h5>\\n      <button type=\\"button\\" class=\\"close\\" data-dismiss=\\"modal\\" aria-label=\\"Close\\">\\n        <span aria-hidden=\\"true\\">×</span>\\n      </button>\\n    </div>\\n    <div class=\\"modal-body\\">\\n      <p>Modal body text goes here.</p>\\n    </div>\\n    <div class=\\"modal-footer\\">\\n      <button type=\\"button\\" class=\\"btn btn-primary\\">Save changes</button>\\n      <button type=\\"button\\" class=\\"btn btn-secondary\\" data-dismiss=\\"modal\\">Close</button>\\n    </div>\\n  "],[0,"{{/bs-modal}}\\n"],[8],[0,"\\n"],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"h4"],[7],[0,"Autoload"],[8],[0,"\\n  "],[6,"p"],[7],[0,"This is useful to to create modal based views."],[8],[0,"\\n  "],[6,"p"],[7],[0,"Note: Care must be taken not to open multiple modals using the "],[6,"code"],[7],[0,"autoload"],[8],[0," property, as Bootstrap does not support multiple modals."],[8],[0,"\\n  "],[6,"p"],[7],[0,"Example usage"],[8],[0,"\\n  "],[6,"ol"],[7],[0,"\\n    "],[6,"li"],[7],[0,"\\n      Generate a new route."],[6,"br"],[7],[8],[6,"code"],[9,"class","terminal"],[7],[0,"ember generate route modal-route"],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"Add the component to the modal-route.hbs template. We can pass an action to the "],[6,"code"],[7],[0,"closeModal"],[8],[0," property to handle closing the modal."],[6,"br"],[7],[8],[0,"\\n      "],[6,"code"],[7],[0,"{{bs-modal autoload=true closeModal=(action \'backToParentRoute\')}}"],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"\\n      Generate a controller for the route."],[6,"br"],[7],[8],[6,"code"],[9,"class","terminal"],[7],[0,"ember generate controller modal-route"],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"li"],[7],[0,"Define an action to handle closing the modal. (Preferably navigate the user back)"],[6,"br"],[7],[8],[0,"\\n      "],[6,"code"],[7],[0,"app/controllers/modal-route.js"],[8],[0,"\\n      "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n        "],[6,"pre"],[7],[6,"code"],[7],[0,"\\n  import Controller from \'@ember/controller\';\\n\\n    export default Controller.extend({\\n      actions: {\\n        backToParentRoute(){\\n          this.transitionToRoute(\'index\');\\n        }\\n      }\\n    });\\n          "],[8],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"h5"],[7],[0,"Simple"],[8],[0,"\\n  "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n"],[6,"pre"],[7],[6,"code"],[7],[0,"\\n  "],[0,"{{bs-modal autoload=true closeModal=(action \'backToParentRoute\')}}\\n"],[8],[0,"\\n"],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"h5"],[7],[0,"Block"],[8],[0,"\\n  "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n"],[6,"pre"],[7],[6,"code"],[7],[0,"\\n  "],[0,"{{#bs-modal autoload=true}}\\n    <div class=\\"modal-header\\">\\n      <h5 class=\\"modal-title\\">Modal title</h5>\\n      <button type=\\"button\\" class=\\"close\\" aria-label=\\"Close\\" "],[0,"{{action \'backToParentRoute\'}}>\\n        <span aria-hidden=\\"true\\">×</span>\\n      </button>\\n    </div>\\n    <div class=\\"modal-body\\">\\n      <p>Automatically loaded on initialization.</p>\\n      "],[0,"{{outlet}}\\n    </div>\\n    <div class=\\"modal-footer\\">\\n      <button type=\\"button\\" class=\\"btn btn-secondary\\" "],[0,"{{action \'backToParentRoute\'}}>Close</button>\\n    </div>\\n  "],[0,"{{/bs-modal}}\\n  "],[8],[0,"\\n"],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","m-5"],[7],[0,"\\n    "],[6,"button"],[9,"type","button"],[9,"class","btn btn-primary"],[9,"data-toggle","modal"],[9,"data-target","#simpleModal"],[7],[0,"\\n      Launch simple modal\\n    "],[8],[0,"\\n    "],[6,"button"],[9,"type","button"],[9,"class","btn btn-primary"],[9,"data-toggle","modal"],[9,"data-target","#blockModal"],[7],[0,"\\n      Launch block modal\\n    "],[8],[0,"\\n    "],[4,"link-to",["modal.simple-autoload"],[["class"],["btn btn-primary"]],{"statements":[[0," Simple autoload "]],"parameters":[]},null],[0,"\\n    "],[4,"link-to",["modal.block-autoload"],[["class"],["btn btn-primary"]],{"statements":[[0," Block autoload "]],"parameters":[]},null],[0,"\\n  "],[8],[0,"\\n"],[4,"bs-modal",null,[["id"],["blockModal"]],{"statements":[[0,"    "],[6,"div"],[9,"class","modal-header"],[7],[0,"\\n      "],[6,"h5"],[9,"class","modal-title"],[7],[0,"Modal title"],[8],[0,"\\n      "],[6,"button"],[9,"type","button"],[9,"class","close"],[9,"data-dismiss","modal"],[9,"aria-label","Close"],[7],[0,"\\n        "],[6,"span"],[9,"aria-hidden","true"],[7],[0,"×"],[8],[0,"\\n      "],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","modal-body"],[7],[0,"\\n      "],[6,"p"],[7],[0,"Modal body text goes here."],[8],[0,"\\n    "],[8],[0,"\\n    "],[6,"div"],[9,"class","modal-footer"],[7],[0,"\\n      "],[6,"button"],[9,"type","button"],[9,"class","btn btn-primary"],[7],[0,"Save changes"],[8],[0,"\\n      "],[6,"button"],[9,"type","button"],[9,"class","btn btn-secondary"],[9,"data-dismiss","modal"],[7],[0,"Close"],[8],[0,"\\n    "],[8],[0,"\\n"]],"parameters":[]},null],[0,"  "],[1,[25,"bs-modal",null,[["id","modalTitle","modalBody"],["simpleModal","Hello","Hi there!"]]],false],[0,"\\n"],[8],[0,"\\n"],[1,[18,"outlet"],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"dummy/templates/modal.hbs"}})}),define("dummy/templates/modal/block-autoload",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"U9Xt2+12",block:'{"symbols":[],"statements":[[4,"bs-modal",null,[["autoload"],[true]],{"statements":[[0,"  "],[6,"div"],[9,"class","modal-header"],[7],[0,"\\n    "],[6,"h5"],[9,"class","modal-title"],[7],[0,"Modal title"],[8],[0,"\\n    "],[6,"button"],[9,"type","button"],[9,"class","close"],[9,"aria-label","Close"],[3,"action",[[19,0,[]],"backToParentRoute"]],[7],[0,"\\n      "],[6,"span"],[9,"aria-hidden","true"],[7],[0,"×"],[8],[0,"\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","modal-body"],[7],[0,"\\n    "],[6,"p"],[7],[0,"Automatically loaded on initialization."],[8],[0,"\\n    "],[1,[18,"outlet"],false],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","modal-footer"],[7],[0,"\\n    "],[6,"button"],[9,"type","button"],[9,"class","btn btn-secondary"],[3,"action",[[19,0,[]],"backToParentRoute"]],[7],[0,"Close"],[8],[0,"\\n  "],[8],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"dummy/templates/modal/block-autoload.hbs"}})}),define("dummy/templates/modal/simple-autoload",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"WFK+Ia46",block:'{"symbols":[],"statements":[[1,[25,"bs-modal",null,[["autoload","closeModal"],[true,[25,"action",[[19,0,[]],"backToParentRoute"],null]]]],false],[0,"\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/modal/simple-autoload.hbs"}})}),define("dummy/templates/popover",["exports"],function(e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=Ember.HTMLBars.template({id:"mZMqbvnZ",block:'{"symbols":[],"statements":[[6,"div"],[9,"class","container"],[7],[0,"\\n  "],[6,"h3"],[7],[0,"Popovers"],[8],[0,"\\n  "],[6,"p"],[7],[0,"Popovers can be created using the "],[6,"code"],[7],[0,"{{bs-popover}}"],[8],[0," component"],[8],[0,"\\n  "],[6,"h4"],[7],[0,"Usage"],[8],[0,"\\n  "],[6,"p"],[7],[0,"Required properties:"],[8],[0,"\\n  "],[6,"ul"],[7],[0,"\\n    "],[6,"li"],[7],[0,"\\n      "],[6,"code"],[7],[0,"data-content"],[8],[0," - define the popover content.\\n    "],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","highlight"],[7],[0,"\\n"],[6,"pre"],[7],[6,"code"],[7],[0,"\\n  "],[0,"{{#bs-popover class=\\"btn btn-primary\\" data-content=\'A very special popup\'}}Simple button with popover"],[0,"{{/bs-popover}}\\n"],[8],[0,"\\n"],[8],[0,"\\n  "],[8],[0,"\\n  "],[6,"div"],[9,"class","m-5"],[7],[0,"\\n    "],[4,"bs-popover",null,[["class","data-content"],["btn btn-primary","A very special popup"]],{"statements":[[0,"Simple button with popover"]],"parameters":[]},null],[0,"\\n  "],[8],[0,"\\n"],[8],[0,"\\n"],[1,[18,"outlet"],false]],"hasEval":false}',meta:{moduleName:"dummy/templates/popover.hbs"}})}),define("dummy/config/environment",[],function(){try{var e="dummy/config/environment",t=document.querySelector('meta[name="'+e+'"]').getAttribute("content"),o={default:JSON.parse(unescape(t))}
return Object.defineProperty(o,"__esModule",{value:!0}),o}catch(t){throw new Error('Could not read config from meta tag with name "'+e+'".')}}),runningTests||require("dummy/app").default.create({})
