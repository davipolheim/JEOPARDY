
if (typeof gdjs.evtsExt__Firestore__StartCollectionWatcher !== "undefined") {
  gdjs.evtsExt__Firestore__StartCollectionWatcher.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Firestore__StartCollectionWatcher = {};
gdjs.evtsExt__Firestore__StartCollectionWatcher.idToCallbackMap = new Map();


gdjs.evtsExt__Firestore__StartCollectionWatcher.userFunc0xd177b8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const coll_name = eventsFunctionContext.getArgument("coll"),
    variable = eventsFunctionContext.getArgument("variable"),
    state_var = eventsFunctionContext.getArgument("state_var");

if (typeof gdjs._firestoreExt.stop_watchers[coll_name] !== "undefined") {
    gdjs._firestoreExt.stop_watchers[coll_name]();
}

gdjs
    ._firestoreExt
    .stop_watchers[coll_name] = firebase
        .firestore()
        .collection(coll_name)
        .onSnapshot((query) => {

            const obj = { empty: query.empty, docs: [], size: query.size, };
            const objDocs = obj.docs;
            const docs = query.docs;
            for (let i = 0; i < docs.length; ++i) {

                const doc = docs[i];
                objDocs.push({
                    id: doc.id,
                    data: doc.data(),
                    exists: doc.exists
                });

            }
            variable.fromJSObject(obj);
            if (typeof state_var !== "undefined") state_var.setString("ok");

        }, (error) => {

            if (typeof state_var !== "undefined") state_var.setString(error.message);
            delete gdjs._firestoreExt.stop_watchers[coll_name];

        });

};
gdjs.evtsExt__Firestore__StartCollectionWatcher.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Firestore__StartCollectionWatcher.userFunc0xd177b8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Firestore__StartCollectionWatcher.func = function(runtimeScene, coll, variable, state_var, parentEventsFunctionContext) {
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
if (argName === "coll") return coll;
if (argName === "variable") return variable;
if (argName === "state_var") return state_var;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Firestore__StartCollectionWatcher.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Firestore__StartCollectionWatcher.registeredGdjsCallbacks = [];