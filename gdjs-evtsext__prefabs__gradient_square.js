
gdjs.evtsExt__Prefabs__gradient_square = gdjs.evtsExt__Prefabs__gradient_square || {};

/**
 * Object generated from 
 */
gdjs.evtsExt__Prefabs__gradient_square.gradient_square = class gradient_square extends gdjs.CustomRuntimeObject2D {
  constructor(parentInstanceContainer, objectData, instanceData) {
    super(parentInstanceContainer, objectData, instanceData);
    this._parentInstanceContainer = parentInstanceContainer;

    this._objectData = {};
    
    

    // It calls the onCreated super implementation at the end.
    this.onCreated();
  }

  // Hot-reload:
  updateFromObjectData(oldObjectData, newObjectData) {
    super.updateFromObjectData(oldObjectData, newObjectData);

    this.onHotReloading(this._parentInstanceContainer);
    return true;
  }

  // Properties:
  

  

  
}

// Methods:
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext = {};
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.idToCallbackMap = new Map();
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDObjectObjects1= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDObjectObjects2= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects1= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects2= [];


gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("color"), gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects1);
{for(var i = 0, len = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects1[i].setBlendMode(2);
}
}
}

}


};

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreated = function(parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDcolorObjectsList = [...runtimeScene.getObjects("color")];
var GDcolorObjects = Hashtable.newFrom({"color": thisGDcolorObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "color": GDcolorObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "color": thisGDcolorObjectsList
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
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects2.length = 0;

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.onCreatedContext.GDcolorObjects2.length = 0;

gdjs.CustomRuntimeObject.prototype.onCreated.call(this);

return;
}
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext = {};
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.idToCallbackMap = new Map();
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDObjectObjects1= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDObjectObjects2= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects2= [];


gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{

gdjs.copyArray(eventsFunctionContext.getObjects("color"), gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[i].getVariableNumber(gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[i].getVariables().get("color")) == 0 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[k] = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[i].setColor(eventsFunctionContext.getArgument("color0"));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("color"), gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[i].getVariableNumber(gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[i].getVariables().get("color")) == 1 ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[k] = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1[i].setColor(eventsFunctionContext.getArgument("color1"));
}
}
}

}


};

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTint = function(color0, color1, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDcolorObjectsList = [...runtimeScene.getObjects("color")];
var GDcolorObjects = Hashtable.newFrom({"color": thisGDcolorObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "color": GDcolorObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "color": thisGDcolorObjectsList
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
if (argName === "color0") return color0;
if (argName === "color1") return color1;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects2.length = 0;

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setTintContext.GDcolorObjects2.length = 0;


return;
}
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext = {};
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.idToCallbackMap = new Map();
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects2= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1= [];
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects2= [];


gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.eventsList0 = function(runtimeScene, eventsFunctionContext) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1);
{for(var i = 0, len = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1[i].getBehavior(eventsFunctionContext.getBehaviorName("Resizable")).setSize(eventsFunctionContext.getArgument("Width"), eventsFunctionContext.getArgument("Height"));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("color"), gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i].getVariableString(gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i].getVariables().get("side")) == "right" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[k] = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1);
/* Reuse gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i].setX((( gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1[0].getWidth()) - (gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i].getWidth()));
}
}
}

}


{

gdjs.copyArray(eventsFunctionContext.getObjects("color"), gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1.length;i<l;++i) {
    if ( gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i].getVariableString(gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i].getVariables().get("side")) == "bottom" ) {
        isConditionTrue_0 = true;
        gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[k] = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i];
        ++k;
    }
}
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1.length = k;
if (isConditionTrue_0) {
gdjs.copyArray(eventsFunctionContext.getObjects("Object"), gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1);
/* Reuse gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1 */
{for(var i = 0, len = gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1.length ;i < len;++i) {
    gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i].setY((( gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1.length === 0 ) ? 0 :gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1[0].getHeight()) - (gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1[i].getHeight()));
}
}
}

}


};

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSize = function(Width, Height, parentEventsFunctionContext) {

var that = this;
var runtimeScene = this._instanceContainer;
let scopeInstanceContainer = this._instanceContainer;
var thisObjectList = [this];
var Object = Hashtable.newFrom({Object: thisObjectList});
var thisGDcolorObjectsList = [...runtimeScene.getObjects("color")];
var GDcolorObjects = Hashtable.newFrom({"color": thisGDcolorObjectsList});
var eventsFunctionContext = {
  _objectsMap: {
"Object": Object
, "color": GDcolorObjects
},
  _objectArraysMap: {
"Object": thisObjectList
, "color": thisGDcolorObjectsList
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
if (argName === "Width") return Width;
if (argName === "Height") return Height;
    return "";
  },
  getOnceTriggers: function() { return runtimeScene.getOnceTriggers(); }
};

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects2.length = 0;

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.eventsList0(runtimeScene, eventsFunctionContext);
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDObjectObjects2.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects1.length = 0;
gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.setSizeContext.GDcolorObjects2.length = 0;


return;
}

gdjs.evtsExt__Prefabs__gradient_square.gradient_square.prototype.doStepPreEvents = function() {
  this._instanceContainer.getOnceTriggers().startNewFrame();
};


gdjs.registerObject("Prefabs::gradient_square", gdjs.evtsExt__Prefabs__gradient_square.gradient_square);
