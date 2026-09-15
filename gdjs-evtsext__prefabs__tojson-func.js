
if (typeof gdjs.evtsExt__Prefabs__ToJSON !== "undefined") {
  gdjs.evtsExt__Prefabs__ToJSON.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Prefabs__ToJSON = {};
gdjs.evtsExt__Prefabs__ToJSON.idToCallbackMap = new Map();


gdjs.evtsExt__Prefabs__ToJSON.userFunc0xc99e50 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
eventsFunctionContext.returnValue =
    JSON.stringify(
        eventsFunctionContext.getArgument("Variable").toJSObject(),
        null,
        eventsFunctionContext.getArgument("Indentation")
    );

};
gdjs.evtsExt__Prefabs__ToJSON.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Prefabs__ToJSON.userFunc0xc99e50(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Prefabs__ToJSON.func = function(runtimeScene, Variable, Indentation, parentEventsFunctionContext) {
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
if (argName === "Variable") return Variable;
if (argName === "Indentation") return Indentation;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Prefabs__ToJSON.eventsList0(runtimeScene, eventsFunctionContext);


return "" + eventsFunctionContext.returnValue;
}

gdjs.evtsExt__Prefabs__ToJSON.registeredGdjsCallbacks = [];