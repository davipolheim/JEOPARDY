
if (typeof gdjs.evtsExt__Firestore__GetDocumentAsync !== "undefined") {
  gdjs.evtsExt__Firestore__GetDocumentAsync.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__Firestore__GetDocumentAsync = {};
gdjs.evtsExt__Firestore__GetDocumentAsync.idToCallbackMap = new Map();


gdjs.evtsExt__Firestore__GetDocumentAsync.userFunc0xd17cd8 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
const coll_name = eventsFunctionContext.getArgument("coll"),
    doc_name = eventsFunctionContext.getArgument("doc"),
    variable = eventsFunctionContext.getArgument("variable"),
    state_var = eventsFunctionContext.getArgument("state_var");

firebase
    .firestore()
    .collection(coll_name)
    .doc(doc_name)
    .get()
    .then((doc) => {

        variable.fromJSObject({

            id: doc.id,
            data: doc.data(),
            exists: doc.exists

        });
        if (typeof state_var !== "undefined") state_var.setString("ok");
        eventsFunctionContext.task.resolve();

    })
    .catch((error) => {

        if (typeof state_var !== "undefined") state_var.setString(error.message);
        eventsFunctionContext.task.resolve();

    });

};
gdjs.evtsExt__Firestore__GetDocumentAsync.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__Firestore__GetDocumentAsync.userFunc0xd17cd8(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__Firestore__GetDocumentAsync.func = function(runtimeScene, coll, doc, variable, state_var, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  task: new gdjs.ManuallyResolvableTask(),
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
if (argName === "variable") return variable;
if (argName === "state_var") return state_var;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__Firestore__GetDocumentAsync.eventsList0(runtimeScene, eventsFunctionContext);


return eventsFunctionContext.task
}

gdjs.evtsExt__Firestore__GetDocumentAsync.registeredGdjsCallbacks = [];