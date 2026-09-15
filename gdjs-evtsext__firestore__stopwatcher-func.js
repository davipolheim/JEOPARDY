
if (typeof gdjs.evtsExt__Firestore__StopWatcher !== "undefined") {
  gdjs.evtsExt__Firestore__StopWatcher.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Firestore__StopWatcher = {};
gdjs.evtsExt__Firestore__StopWatcher.idToCallbackMap = new Map();


gdjs.evtsExt__Firestore__StopWatcher.userFunc0xd1ac38 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const path = eventsFunctionContext.getArgument("path") || "",
    stop_watchers = gdjs._firestoreExt.stop_watchers;

if (typeof stop_watchers[path] !== "undefined") {
    stop_watchers[path]();
    delete stop_watchers[path];
}
};
gdjs.evtsExt__Firestore__StopWatcher.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Firestore__StopWatcher.userFunc0xd1ac38(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Firestore__StopWatcher.func = function(runtimeScene, path, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("Firestore"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("Firestore"),
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
if (argName === "path") return path;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Firestore__StopWatcher.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Firestore__StopWatcher.registeredGdjsCallbacks = [];