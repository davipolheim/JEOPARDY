
if (typeof gdjs.evtsExt__Firestore__StartCollectionChangesWatcher !== "undefined") {
  gdjs.evtsExt__Firestore__StartCollectionChangesWatcher.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Firestore__StartCollectionChangesWatcher = {};
gdjs.evtsExt__Firestore__StartCollectionChangesWatcher.idToCallbackMap = new Map();


gdjs.evtsExt__Firestore__StartCollectionChangesWatcher.userFunc0xd1d2b0 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
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

            const obj = { empty: query.empty, docChanges: [], size: query.size, };
            const objDocChanges = obj.docChanges;
            const docChanges = query.docChanges();
            for (let i = 0; i < docChanges.length; ++i) {

                const change = docChanges[i];
                objDocChanges.push({
                    type: change.type,
                    oldIndex: change.oldIndex,
                    newIndex: change.newIndex,
                    doc: {
                        id: change.doc.id,
                        data: change.doc.data(),
                        exists: change.doc.exists
                    },
                });

            }
            variable.fromJSObject(obj);
            if (typeof state_var !== "undefined") state_var.setString("ok");

        }, (error) => {

            if (typeof state_var !== "undefined") state_var.setString(error.message);
            delete gdjs._firestoreExt.stop_watchers[coll_name];

        });

};
gdjs.evtsExt__Firestore__StartCollectionChangesWatcher.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Firestore__StartCollectionChangesWatcher.userFunc0xd1d2b0(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Firestore__StartCollectionChangesWatcher.func = function(runtimeScene, coll, variable, state_var, parentEventsFunctionContext) {
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


gdjs.evtsExt__Firestore__StartCollectionChangesWatcher.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Firestore__StartCollectionChangesWatcher.registeredGdjsCallbacks = [];