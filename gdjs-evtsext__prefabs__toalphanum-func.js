
if (typeof gdjs.evtsExt__Prefabs__ToAlphanum !== "undefined") {
  gdjs.evtsExt__Prefabs__ToAlphanum.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Prefabs__ToAlphanum = {};
gdjs.evtsExt__Prefabs__ToAlphanum.idToCallbackMap = new Map();


gdjs.evtsExt__Prefabs__ToAlphanum.userFunc0xb7b2a8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue = eventsFunctionContext.getArgument("Str").replace(/\W/g, "");
};
gdjs.evtsExt__Prefabs__ToAlphanum.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Prefabs__ToAlphanum.userFunc0xb7b2a8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Prefabs__ToAlphanum.func = function(runtimeScene, Str, parentEventsFunctionContext) {
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
if (argName === "Str") return Str;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Prefabs__ToAlphanum.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Prefabs__ToAlphanum.registeredGdjsCallbacks = [];