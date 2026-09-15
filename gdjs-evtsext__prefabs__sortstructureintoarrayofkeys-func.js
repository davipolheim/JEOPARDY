
if (typeof gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys !== "undefined") {
  gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys = {};
gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys.idToCallbackMap = new Map();


gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys.userFunc0xc74f28 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const children = eventsFunctionContext.getArgument("Struct").getAllChildren();
const arr = eventsFunctionContext.getArgument("Arr");
let limit = eventsFunctionContext.getArgument("Limit");
if (!limit) return;

arr.castTo("array");
arr.clearChildren();

const childrenCopy = {};
let childrenCount = 0;
for (const key in children) {
    childrenCopy[key] = children[key];
    ++childrenCount;
}

if (limit === -1) {
    while (childrenCount) {
        let currentMaxKey, currentMaxNumber;
        for (const key in childrenCopy) {
            if (typeof currentMaxKey !== "undefined") {
                const num = childrenCopy[key].getAsNumber();
                if (num >= currentMaxNumber) {
                    currentMaxNumber = num;
                    currentMaxKey = key;
                }
            } else (currentMaxKey = key), (currentMaxNumber = childrenCopy[key].getAsNumber());
        }
        arr.pushValue(currentMaxKey);
        --childrenCount;
        delete childrenCopy[currentMaxKey];
    }
} else {
    while (childrenCount && limit--) {
        let currentMaxKey, currentMaxNumber;
        for (const key in childrenCopy) {
            if (typeof currentMaxKey !== "undefined") {
                const num = childrenCopy[key].getAsNumber();
                if (num >= currentMaxNumber) {
                    currentMaxNumber = num;
                    currentMaxKey = key;
                }
            } else (currentMaxKey = key), (currentMaxNumber = childrenCopy[key].getAsNumber());
        }
        arr.pushValue(currentMaxKey);
        --childrenCount;
        delete childrenCopy[currentMaxKey];
    }
}

};
gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys.userFunc0xc74f28(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys.func = function(runtimeScene, Struct, Arr, Limit, parentEventsFunctionContext) {
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
if (argName === "Struct") return Struct;
if (argName === "Arr") return Arr;
if (argName === "Limit") return Limit;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Prefabs__SortStructureIntoArrayOfKeys.registeredGdjsCallbacks = [];