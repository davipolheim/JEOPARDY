
if (typeof gdjs.evtsExt__Firestore__onSceneUnloading !== "undefined") {
  gdjs.evtsExt__Firestore__onSceneUnloading.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Firestore__onSceneUnloading = {};
gdjs.evtsExt__Firestore__onSceneUnloading.idToCallbackMap = new Map();


gdjs.evtsExt__Firestore__onSceneUnloading.userFunc0xd1d2b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
//stop all scene queries
const stop_watchers = gdjs._firestoreExt.stop_watchers;

for (const path in stop_watchers) {
    if (typeof stop_watchers[path] !== "undefined") {
        stop_watchers[path]();
        delete stop_watchers[path];
    }
}
};
gdjs.evtsExt__Firestore__onSceneUnloading.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Firestore__onSceneUnloading.userFunc0xd1d2b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Firestore__onSceneUnloading.func = function(runtimeScene, parentEventsFunctionContext) {
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Firestore__onSceneUnloading.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Firestore__onSceneUnloading.registeredGdjsCallbacks = [];
gdjs.evtsExt__Firestore__onSceneUnloading.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Firestore__onSceneUnloading.func(runtimeScene, runtimeScene);
})
gdjs.registerRuntimeSceneUnloadingCallback(gdjs.evtsExt__Firestore__onSceneUnloading.registeredGdjsCallbacks[gdjs.evtsExt__Firestore__onSceneUnloading.registeredGdjsCallbacks.length - 1]);
