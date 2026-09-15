gdjs.InicioCode = {};
gdjs.InicioCode.localVariables = [];
gdjs.InicioCode.idToCallbackMap = new Map();


gdjs.InicioCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.systemInfo.isMobile();
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(true);
}
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Celular", false);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Perguntas", false);
}
}

}


};gdjs.InicioCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(0).setBoolean(false);
}

{ //Subevents
gdjs.InicioCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();


gdjs.InicioCode.eventsList1(runtimeScene);


return;

}

gdjs['InicioCode'] = gdjs.InicioCode;
