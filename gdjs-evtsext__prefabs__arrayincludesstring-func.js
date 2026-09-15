
if (typeof gdjs.evtsExt__Prefabs__ArrayIncludesString !== "undefined") {
  gdjs.evtsExt__Prefabs__ArrayIncludesString.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Prefabs__ArrayIncludesString = {};
gdjs.evtsExt__Prefabs__ArrayIncludesString.idToCallbackMap = new Map();


gdjs.evtsExt__Prefabs__ArrayIncludesString.userFunc0xa1a408 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const arr = eventsFunctionContext.getArgument("Arr").getAllChildrenArray(), 
    len = arr.length
    str = eventsFunctionContext.getArgument("Str");
if (arr.getType() !== "array") return;
for (let i = 0; i < len; ++i) {
    if (arr[i].getAsString() === str) {
        eventsFunctionContext.returnValue = true;
        break;
    }
}

};
gdjs.evtsExt__Prefabs__ArrayIncludesString.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Prefabs__ArrayIncludesString.userFunc0xa1a408(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Prefabs__ArrayIncludesString.func = function(runtimeScene, Arr, Str, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
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
if (argName === "Arr") return Arr;
if (argName === "Str") return Str;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Prefabs__ArrayIncludesString.eventsList0(runtimeScene, eventsFunctionContext);


return !!eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Prefabs__ArrayIncludesString.registeredGdjsCallbacks = [];