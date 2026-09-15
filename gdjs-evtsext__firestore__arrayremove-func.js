
if (typeof gdjs.evtsExt__Firestore__ArrayRemove !== "undefined") {
  gdjs.evtsExt__Firestore__ArrayRemove.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Firestore__ArrayRemove = {};
gdjs.evtsExt__Firestore__ArrayRemove.idToCallbackMap = new Map();


gdjs.evtsExt__Firestore__ArrayRemove.userFunc0xd1f380 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const coll_name = eventsFunctionContext.getArgument("coll"),
    doc_name = eventsFunctionContext.getArgument("doc"),
    field_name = eventsFunctionContext.getArgument("field"),
    value = eventsFunctionContext.getArgument("value"),
    state_var = eventsFunctionContext.getArgument("state_var");

firebase
    .firestore()
    .collection(coll_name)
    .doc(doc_name)
    .update({
        [field_name]: firebase.firestore.FieldValue.arrayRemove(value),
    })
    .then(() => {
        if (typeof state_var !== "undefined") state_var.setString("ok");
    })
    .catch((error) => {
        if (typeof state_var !== "undefined") state_var.setString(error.message);
    });
};
gdjs.evtsExt__Firestore__ArrayRemove.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Firestore__ArrayRemove.userFunc0xd1f380(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Firestore__ArrayRemove.func = function(runtimeScene, coll, doc, field, value, state_var, parentEventsFunctionContext) {
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
if (argName === "doc") return doc;
if (argName === "field") return field;
if (argName === "value") return value;
if (argName === "state_var") return state_var;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Firestore__ArrayRemove.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__Firestore__ArrayRemove.registeredGdjsCallbacks = [];