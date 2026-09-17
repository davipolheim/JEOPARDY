gdjs.InicioCode = {};
gdjs.InicioCode.localVariables = [];
gdjs.InicioCode.idToCallbackMap = new Map();
gdjs.InicioCode.GDbuttonObjects1= [];
gdjs.InicioCode.GDbuttonObjects2= [];
gdjs.InicioCode.GDbuttonObjects3= [];
gdjs.InicioCode.GDpasswordObjects1= [];
gdjs.InicioCode.GDpasswordObjects2= [];
gdjs.InicioCode.GDpasswordObjects3= [];
gdjs.InicioCode.GDtextObjects1= [];
gdjs.InicioCode.GDtextObjects2= [];
gdjs.InicioCode.GDtextObjects3= [];


gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbuttonObjects1Objects = Hashtable.newFrom({"button": gdjs.InicioCode.GDbuttonObjects1});
gdjs.InicioCode.eventsList0 = function(runtimeScene) {
{

let elseEventsChainSatisfied = false;

{

gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.InicioCode.GDpasswordObjects2);

elseEventsChainSatisfied = false;
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InicioCode.GDpasswordObjects2.length;i<l;++i) {
    if ( !(gdjs.InicioCode.GDpasswordObjects2[i].isVisible()) ) {
        isConditionTrue_0 = true;
        gdjs.InicioCode.GDpasswordObjects2[k] = gdjs.InicioCode.GDpasswordObjects2[i];
        ++k;
    }
}
gdjs.InicioCode.GDpasswordObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.InicioCode.GDpasswordObjects2 */
{for(var i = 0, len = gdjs.InicioCode.GDpasswordObjects2.length ;i < len;++i) {
    gdjs.InicioCode.GDpasswordObjects2[i].hide(false);
}
}
elseEventsChainSatisfied = true;
}

}


{

gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.InicioCode.GDpasswordObjects1);

if (!elseEventsChainSatisfied) {
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InicioCode.GDpasswordObjects1.length;i<l;++i) {
    if ( gdjs.InicioCode.GDpasswordObjects1[i].getBehavior("Text").getText() == "PRESENT_" ) {
        isConditionTrue_0 = true;
        gdjs.InicioCode.GDpasswordObjects1[k] = gdjs.InicioCode.GDpasswordObjects1[i];
        ++k;
    }
}
gdjs.InicioCode.GDpasswordObjects1.length = k;
if (!elseEventsChainSatisfied && isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Perguntas", false);
}
elseEventsChainSatisfied = true;
}
}

}

}

};gdjs.InicioCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.InicioCode.GDbuttonObjects1, gdjs.InicioCode.GDbuttonObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InicioCode.GDbuttonObjects2.length;i<l;++i) {
    if ( gdjs.InicioCode.GDbuttonObjects2[i].getVariableString(gdjs.InicioCode.GDbuttonObjects2[i].getVariables().getFromIndex(0)) == "PLAY" ) {
        isConditionTrue_0 = true;
        gdjs.InicioCode.GDbuttonObjects2[k] = gdjs.InicioCode.GDbuttonObjects2[i];
        ++k;
    }
}
gdjs.InicioCode.GDbuttonObjects2.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Celular", false);
}
}

}


{

/* Reuse gdjs.InicioCode.GDbuttonObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.InicioCode.GDbuttonObjects1.length;i<l;++i) {
    if ( gdjs.InicioCode.GDbuttonObjects1[i].getVariableString(gdjs.InicioCode.GDbuttonObjects1[i].getVariables().getFromIndex(0)) == "PRESENT" ) {
        isConditionTrue_0 = true;
        gdjs.InicioCode.GDbuttonObjects1[k] = gdjs.InicioCode.GDbuttonObjects1[i];
        ++k;
    }
}
gdjs.InicioCode.GDbuttonObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.InicioCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.InicioCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.InicioCode.GDbuttonObjects1);
gdjs.copyArray(runtimeScene.getObjects("password"), gdjs.InicioCode.GDpasswordObjects1);
{for(var i = 0, len = gdjs.InicioCode.GDbuttonObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDbuttonObjects1[i].getBehavior("Text").setText(gdjs.InicioCode.GDbuttonObjects1[i].getVariables().getFromIndex(0).getAsString());
}
}
{for(var i = 0, len = gdjs.InicioCode.GDpasswordObjects1.length ;i < len;++i) {
    gdjs.InicioCode.GDpasswordObjects1[i].hide();
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("button"), gdjs.InicioCode.GDbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.InicioCode.mapOfGDgdjs_9546InicioCode_9546GDbuttonObjects1Objects, runtimeScene, false, false);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.InicioCode.eventsList1(runtimeScene);} //End of subevents
}

}


};

gdjs.InicioCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.InicioCode.GDbuttonObjects1.length = 0;
gdjs.InicioCode.GDbuttonObjects2.length = 0;
gdjs.InicioCode.GDbuttonObjects3.length = 0;
gdjs.InicioCode.GDpasswordObjects1.length = 0;
gdjs.InicioCode.GDpasswordObjects2.length = 0;
gdjs.InicioCode.GDpasswordObjects3.length = 0;
gdjs.InicioCode.GDtextObjects1.length = 0;
gdjs.InicioCode.GDtextObjects2.length = 0;
gdjs.InicioCode.GDtextObjects3.length = 0;

gdjs.InicioCode.eventsList2(runtimeScene);
gdjs.InicioCode.GDbuttonObjects1.length = 0;
gdjs.InicioCode.GDbuttonObjects2.length = 0;
gdjs.InicioCode.GDbuttonObjects3.length = 0;
gdjs.InicioCode.GDpasswordObjects1.length = 0;
gdjs.InicioCode.GDpasswordObjects2.length = 0;
gdjs.InicioCode.GDpasswordObjects3.length = 0;
gdjs.InicioCode.GDtextObjects1.length = 0;
gdjs.InicioCode.GDtextObjects2.length = 0;
gdjs.InicioCode.GDtextObjects3.length = 0;


return;

}

gdjs['InicioCode'] = gdjs.InicioCode;
