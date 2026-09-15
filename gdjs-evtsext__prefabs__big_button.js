
gdjs.evtsExt__Prefabs__big_button = gdjs.evtsExt__Prefabs__big_button || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__Prefabs__big_button.big_button = class big_button extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext = {};
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects2= [];


gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("bg"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1);
gdjs.copyArray(eventsFunctionContext.getObjects("border"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects1);
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects1[i].setIncludedInParentCollisionMask(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1[i].setIncludedInParentCollisionMask(false);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects1[i].setBlendMode(2);
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("bg"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1[i].getVariables().get("top"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1[i].setIncludedInParentCollisionMask(true);
}
}
}

}


};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDbgObjectsList = [...runtimeScene.getObjects("bg")];
var GDbgObjects = Hashtable.newFrom({"bg": thisGDbgObjectsList});
var thisGDborderObjectsList = [...runtimeScene.getObjects("border")];
var GDborderObjects = Hashtable.newFrom({"border": thisGDborderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "bg": GDbgObjects
, "border": GDborderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "bg": thisGDbgObjectsList
, "border": thisGDborderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Prefabs"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Prefabs"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects2.length = 0;

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.onCreatedContext.GDborderObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext = {};
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.idToCallbackMap = new Map();
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDObjectObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDObjectObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDbgObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDbgObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects2= [];


gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("border"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].getVariableNumber(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].getVariables().get("color")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].setColor(eventsFunctionContext.getArgument("color0"));
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].returnVariable(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].getVariables().get("tint")).setString(eventsFunctionContext.getArgument("color0"));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("border"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].getVariableNumber(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].getVariables().get("color")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].setColor(eventsFunctionContext.getArgument("color1"));
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].returnVariable(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1[i].getVariables().get("tint")).setString(eventsFunctionContext.getArgument("color1"));
}
}
}

}


};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTint = function(color0, color1, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDbgObjectsList = [...runtimeScene.getObjects("bg")];
var GDbgObjects = Hashtable.newFrom({"bg": thisGDbgObjectsList});
var thisGDborderObjectsList = [...runtimeScene.getObjects("border")];
var GDborderObjects = Hashtable.newFrom({"border": thisGDborderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "bg": GDbgObjects
, "border": GDborderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "bg": thisGDbgObjectsList
, "border": thisGDborderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Prefabs"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Prefabs"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "color0") return color0;
if (argName === "color1") return color1;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects2.length = 0;

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setTintContext.GDborderObjects2.length = 0;


return;
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext = {};
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDObjectObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects2= [];


gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariables().get("offset"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1 */
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].setVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariables().get("offset"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].setY(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getY() + (16));
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1[i].setY(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1[i].getY() + (16));
}
}
}

}


};gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariables().get("offset"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1 */
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].setVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariables().get("offset"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].setY(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getY() - (16));
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1[i].setY(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1[i].getY() - (16));
}
}
}

}


};gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.eventsList2 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("bg"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = eventsFunctionContext.getArgument("Disabled");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariables().get("top"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("border"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1);
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].setVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariables().get("disabled"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(2);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1[i].setColor("200;200;200");
}
}

{ //Subevents
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("bg"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !eventsFunctionContext.getArgument("Disabled");
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariables().get("top"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("border"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1);
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].setVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getVariables().get("disabled"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Animation")).setAnimationIndex(1);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1[i].setColor(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1[i].getVariables().get("tint").getAsString());
}
}

{ //Subevents
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.eventsList1(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabled = function(Disabled, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDbgObjectsList = [...runtimeScene.getObjects("bg")];
var GDbgObjects = Hashtable.newFrom({"bg": thisGDbgObjectsList});
var thisGDborderObjectsList = [...runtimeScene.getObjects("border")];
var GDborderObjects = Hashtable.newFrom({"border": thisGDborderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "bg": GDbgObjects
, "border": GDborderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "bg": thisGDbgObjectsList
, "border": thisGDborderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Prefabs"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Prefabs"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
if (argName === "Disabled") return Disabled;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects2.length = 0;

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.eventsList2(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.setDisabledContext.GDborderObjects2.length = 0;


return;
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext = {};
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.idToCallbackMap = new Map();
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDObjectObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDObjectObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDborderObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDborderObjects2= [];


gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("bg"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1[i].getVariables().get("top"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1[i].getVariables().get("disabled"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1.length = k;
}
if (isConditionTrue_0) {
{eventsFunctionContext.returnValue = true;}
}

}


};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabled = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDbgObjectsList = [...runtimeScene.getObjects("bg")];
var GDbgObjects = Hashtable.newFrom({"bg": thisGDbgObjectsList});
var thisGDborderObjectsList = [...runtimeScene.getObjects("border")];
var GDborderObjects = Hashtable.newFrom({"border": thisGDborderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "bg": GDbgObjects
, "border": GDborderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "bg": thisGDbgObjectsList
, "border": thisGDborderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Prefabs"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Prefabs"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDborderObjects2.length = 0;

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.isdisabledContext.GDborderObjects2.length = 0;


return !!eventsFunctionContext.returnValue;
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext = {};
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.idToCallbackMap = new Map();
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects3= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects3= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects1= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects2= [];
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects3= [];


gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Prefabs_9595_9595big_9595button_9546big_9595button_9546prototype_9546doStepPostEventsContext_9546GDbgObjects2Objects = Hashtable.newFrom({"bg": gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2});
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Prefabs_9595_9595big_9595button_9546big_9595button_9546prototype_9546doStepPostEventsContext_9546GDbgObjects1Objects = Hashtable.newFrom({"bg": gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1});
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1, gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Prefabs_9595_9595big_9595button_9546big_9595button_9546prototype_9546doStepPostEventsContext_9546GDbgObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2[i].getVariables().get("offset"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2 */
gdjs.copyArray(eventsFunctionContext.getObjects("border"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects2);
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2[i].setVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2[i].getVariables().get("offset"), true);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2[i].setY(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2[i].getY() + (16));
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects2.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects2[i].setY(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects2[i].getY() + (16));
}
}
}

}


{

/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].getVariables().get("offset"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.mapOfGDgdjs_9546evtsExt_9595_9595Prefabs_9595_9595big_9595button_9546big_9595button_9546prototype_9546doStepPostEventsContext_9546GDbgObjects1Objects, runtimeScene, false, true);
}
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1 */
gdjs.copyArray(eventsFunctionContext.getObjects("border"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects1);
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].setVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].getVariables().get("offset"), false);
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].setY(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].getY() - (16));
}
}
{for(var i = 0, len = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects1[i].setY(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects1[i].getY() - (16));
}
}
}

}


};gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.eventsList1 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("bg"), gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].getVariables().get("top"), true) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].getVariableBoolean(gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i].getVariables().get("disabled"), false) ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[k] = gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length = k;
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.eventsList0(runtimeScene, eventsFunctionContext);} //End of subevents
}

}


};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEvents = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDbgObjectsList = [...runtimeScene.getObjects("bg")];
var GDbgObjects = Hashtable.newFrom({"bg": thisGDbgObjectsList});
var thisGDborderObjectsList = [...runtimeScene.getObjects("border")];
var GDborderObjects = Hashtable.newFrom({"border": thisGDborderObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "bg": GDbgObjects
, "border": GDborderObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "bg": thisGDbgObjectsList
, "border": thisGDborderObjectsList
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Prefabs"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Prefabs"),
  localVariables: [],
  getObjects: function(objectName) {
    return eventsFunctionContext._objectArraysMap[objectName] || [];
  },
  getObjectsLists: function(objectName) {
    return eventsFunctionContext._objectsMap[objectName] || null;
  },
  getBehaviorName: function(behaviorName) {
    return eventsFunctionContext._behaviorNamesMap[behaviorName] || behaviorName;
  },
  createObject: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    if (objectsList) {
      const object = parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
        parentEventsFunctionContext.createObject(objectsList.firstKey()) :
        runtimeScene.createObject(objectsList.firstKey());
      if (object) {
        objectsList.get(objectsList.firstKey()).push(object);
        if (!(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName))) {
          eventsFunctionContext._objectArraysMap[objectName].push(object);
        }
      }
      return object;
    }
    return null;
  },
  getInstancesCountOnScene: function(objectName) {
    const objectsList = eventsFunctionContext._objectsMap[objectName];
    let count = 0;
    if (objectsList) {
      for(const objectName in objectsList.items)
        count += parentEventsFunctionContext && !(scopeInstanceContainer && scopeInstanceContainer.isObjectRegistered(objectName)) ?
parentEventsFunctionContext.getInstancesCountOnScene(objectName) :
        runtimeScene.getInstancesCountOnScene(objectName);
    }
    return count;
  },
  getLayer: function(layerName) {
    return runtimeScene.getLayer(layerName);
  },
  getArgument: function(argName) {
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects3.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects3.length = 0;

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.eventsList1(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDObjectObjects3.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDbgObjects3.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects1.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects2.length = 0;
gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPostEventsContext.GDborderObjects3.length = 0;


return;
}

gdjs.evtsExt__Prefabs__big_button.big_button.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("Prefabs::big_button", gdjs.evtsExt__Prefabs__big_button.big_button);
