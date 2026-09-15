
if (typeof gdjs.evtsExt__CursorType__SetCursorCustomImage !== "undefined") {
  gdjs.evtsExt__CursorType__SetCursorCustomImage.registeredGdjsCallbacks.forEach(callback =>
    gdjs._unregisterCallback(callback)
  );
}

gdjs.evtsExt__CursorType__SetCursorCustomImage = {};
gdjs.evtsExt__CursorType__SetCursorCustomImage.idToCallbackMap = new Map();


gdjs.evtsExt__CursorType__SetCursorCustomImage.userFunc0x9d6b98 = function GDJSInlineCode(runtimeScene, eventsFunctionContext) {
"use strict";
let cursor = eventsFunctionContext.getArgument("CursorImage").replaceAll('\\','/');
cursor = cursor.substring(cursor.lastIndexOf('/') +1);
cursor = `url('${__dirname.replaceAll('\\','/')}/${cursor}')`;

const offsetX = eventsFunctionContext.getArgument("OffsetX"),
    offsetY = eventsFunctionContext.getArgument("OffsetY");
if (offsetX) cursor += ' ' + offsetX;
if (offsetY) cursor += ' ' + offsetY;

eventsFunctionContext.globalVariablesForExtension.get("DefaultCursor").setString(
    runtimeScene.getGame().getRenderer().getCanvas().style.cursor = cursor + ', auto'
);
};
gdjs.evtsExt__CursorType__SetCursorCustomImage.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


gdjs.evtsExt__CursorType__SetCursorCustomImage.userFunc0x9d6b98(runtimeScene, eventsFunctionContext);

}


};

gdjs.evtsExt__CursorType__SetCursorCustomImage.func = function(runtimeScene, CursorImage, OffsetX, OffsetY, parentEventsFunctionContext) {
let scopeInstanceContainer = null;
var eventsFunctionContext = {
  _objectsMap: {
},
  _objectArraysMap: {
},
  _behaviorNamesMap: {
},
  globalVariablesForExtension: runtimeScene.getGame().getVariablesForExtension("CursorType"),
  sceneVariablesForExtension: runtimeScene.getScene().getVariablesForExtension("CursorType"),
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
if (argName === "CursorImage") return CursorImage;
if (argName === "OffsetX") return OffsetX;
if (argName === "OffsetY") return OffsetY;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};


gdjs.evtsExt__CursorType__SetCursorCustomImage.eventsList0(runtimeScene, eventsFunctionContext);


return;
}

gdjs.evtsExt__CursorType__SetCursorCustomImage.registeredGdjsCallbacks = [];