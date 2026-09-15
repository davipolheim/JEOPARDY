
if (typeof gdjs.evtsExt__Firestore__onFirstSceneLoaded !== "undefined") {
  gdjs.evtsExt__Firestore__onFirstSceneLoaded.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Firestore__onFirstSceneLoaded = {};
gdjs.evtsExt__Firestore__onFirstSceneLoaded.idToCallbackMap = new Map();


gdjs.evtsExt__Firestore__onFirstSceneLoaded.userFunc0xd15cb8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
gdjs._firestoreExt = {
    stop_watchers: {},
    replace_field_values: function (object) {

        let iterator;
        if (Array.isArray(object)) 
            iterator = object.entries();
        else 
            iterator = Object.entries(object);

        for (const [key, value] of iterator) {
            if (typeof value === 'object')
                this.replace_field_values(value);
            else if (value === '[{__FIREBASE_SERVERSIDE_TIMESTAMP}]')
                object[key] = firebase.firestore.FieldValue.serverTimestamp();
        }

        return object;

    },
};

};
gdjs.evtsExt__Firestore__onFirstSceneLoaded.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (1 == 0);
}
if (isConditionTrue_0) {
{gdjs.evtTools.firebaseTools.firestore.getDocument("_", "_", gdjs.VariablesContainer.badVariable, gdjs.VariablesContainer.badVariable);
}
}

}


{


gdjs.evtsExt__Firestore__onFirstSceneLoaded.userFunc0xd15cb8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Firestore__onFirstSceneLoaded.func = function(runtimeScene, parentEventsFunctionContext) {
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


gdjs.evtsExt__Firestore__onFirstSceneLoaded.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Firestore__onFirstSceneLoaded.registeredGdjsCallbacks = [];
gdjs.evtsExt__Firestore__onFirstSceneLoaded.registeredGdjsCallbacks.push((runtimeScene) => {
    gdjs.evtsExt__Firestore__onFirstSceneLoaded.func(runtimeScene, runtimeScene);
})
gdjs.registerFirstRuntimeSceneLoadedCallback(gdjs.evtsExt__Firestore__onFirstSceneLoaded.registeredGdjsCallbacks[gdjs.evtsExt__Firestore__onFirstSceneLoaded.registeredGdjsCallbacks.length - 1]);
