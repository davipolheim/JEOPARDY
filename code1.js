gdjs.CelularCode = {};
gdjs.CelularCode.localVariables = [];
gdjs.CelularCode.idToCallbackMap = new Map();
gdjs.CelularCode.GDbig_9595buttonObjects1_1final = [];

gdjs.CelularCode.GDbgObjects1= [];
gdjs.CelularCode.GDbgObjects2= [];
gdjs.CelularCode.GDbgObjects3= [];
gdjs.CelularCode.GDbgObjects4= [];
gdjs.CelularCode.GDbgObjects5= [];
gdjs.CelularCode.GDbgObjects6= [];
gdjs.CelularCode.GDpontosObjects1= [];
gdjs.CelularCode.GDpontosObjects2= [];
gdjs.CelularCode.GDpontosObjects3= [];
gdjs.CelularCode.GDpontosObjects4= [];
gdjs.CelularCode.GDpontosObjects5= [];
gdjs.CelularCode.GDpontosObjects6= [];
gdjs.CelularCode.GDbig_9595buttonObjects1= [];
gdjs.CelularCode.GDbig_9595buttonObjects2= [];
gdjs.CelularCode.GDbig_9595buttonObjects3= [];
gdjs.CelularCode.GDbig_9595buttonObjects4= [];
gdjs.CelularCode.GDbig_9595buttonObjects5= [];
gdjs.CelularCode.GDbig_9595buttonObjects6= [];
gdjs.CelularCode.GDnomeObjects1= [];
gdjs.CelularCode.GDnomeObjects2= [];
gdjs.CelularCode.GDnomeObjects3= [];
gdjs.CelularCode.GDnomeObjects4= [];
gdjs.CelularCode.GDnomeObjects5= [];
gdjs.CelularCode.GDnomeObjects6= [];
gdjs.CelularCode.GDtutorialObjects1= [];
gdjs.CelularCode.GDtutorialObjects2= [];
gdjs.CelularCode.GDtutorialObjects3= [];
gdjs.CelularCode.GDtutorialObjects4= [];
gdjs.CelularCode.GDtutorialObjects5= [];
gdjs.CelularCode.GDtutorialObjects6= [];
gdjs.CelularCode.GDentrada_9595nomeObjects1= [];
gdjs.CelularCode.GDentrada_9595nomeObjects2= [];
gdjs.CelularCode.GDentrada_9595nomeObjects3= [];
gdjs.CelularCode.GDentrada_9595nomeObjects4= [];
gdjs.CelularCode.GDentrada_9595nomeObjects5= [];
gdjs.CelularCode.GDentrada_9595nomeObjects6= [];
gdjs.CelularCode.GDentrarObjects1= [];
gdjs.CelularCode.GDentrarObjects2= [];
gdjs.CelularCode.GDentrarObjects3= [];
gdjs.CelularCode.GDentrarObjects4= [];
gdjs.CelularCode.GDentrarObjects5= [];
gdjs.CelularCode.GDentrarObjects6= [];
gdjs.CelularCode.GDloading_9595stateObjects1= [];
gdjs.CelularCode.GDloading_9595stateObjects2= [];
gdjs.CelularCode.GDloading_9595stateObjects3= [];
gdjs.CelularCode.GDloading_9595stateObjects4= [];
gdjs.CelularCode.GDloading_9595stateObjects5= [];
gdjs.CelularCode.GDloading_9595stateObjects6= [];


gdjs.CelularCode.userFunc0xcc6140 = function GDJSInlineCode(runtimeScene) {
"use strict";
try {
    if (navigator.wakeLock)
        navigator.wakeLock.request();
} catch (e) {
    console.log(e);
}

};
gdjs.CelularCode.eventsList0 = function(runtimeScene) {

{


gdjs.CelularCode.userFunc0xcc6140(runtimeScene);

}


};gdjs.CelularCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getGame().getVariables().getFromIndex(0).getAsBoolean();
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}
{gdjs.evtTools.window.setGameResolutionSize(runtimeScene, 720, 1280);
}
}

}


{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}
{gdjs.evtTools.camera.setCameraY(runtimeScene, 640, "", 0);
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("big_button"), gdjs.CelularCode.GDbig_9595buttonObjects2);
gdjs.copyArray(runtimeScene.getObjects("loading_state"), gdjs.CelularCode.GDloading_9595stateObjects2);
{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects2.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects2[i].setTint("149;147;255", "255;160;149", null);
}
}
{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects2.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects2[i].setDisabled(true, null);
}
}
{for(var i = 0, len = gdjs.CelularCode.GDloading_9595stateObjects2.length ;i < len;++i) {
    gdjs.CelularCode.GDloading_9595stateObjects2[i].getBehavior("Text").setText("");
}
}
}

}


{


gdjs.CelularCode.eventsList0(runtimeScene);
}


};gdjs.CelularCode.mapOfGDgdjs_9546CelularCode_9546GDentrarObjects2Objects = Hashtable.newFrom({"entrar": gdjs.CelularCode.GDentrarObjects2});
gdjs.CelularCode.eventsList2 = function(runtimeScene) {

};gdjs.CelularCode.eventsList3 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.CelularCode.localVariables[0].getFromIndex(0).getAsString() == "ok");
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("loading_state"), gdjs.CelularCode.GDloading_9595stateObjects4);

{for(var i = 0, len = gdjs.CelularCode.GDloading_9595stateObjects4.length ;i < len;++i) {
    gdjs.CelularCode.GDloading_9595stateObjects4[i].getBehavior("Text").setText("");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(0).setNumber(1);
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.CelularCode.localVariables[0].getFromIndex(0).getAsString() != "ok");
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("entrar"), gdjs.CelularCode.GDentrarObjects3);

gdjs.copyArray(asyncObjectsList.getObjects("loading_state"), gdjs.CelularCode.GDloading_9595stateObjects3);

{for(var i = 0, len = gdjs.CelularCode.GDentrarObjects3.length ;i < len;++i) {
    gdjs.CelularCode.GDentrarObjects3[i].getBehavior("Opacity").setOpacity(255);
}
}
{gdjs.evtTools.debuggerTools.log(gdjs.CelularCode.localVariables[0].getFromIndex(0).getAsString(), "", "");
}
{for(var i = 0, len = gdjs.CelularCode.GDloading_9595stateObjects3.length ;i < len;++i) {
    gdjs.CelularCode.GDloading_9595stateObjects3[i].getBehavior("Text").setText("Try again");
}
}
}

}


};gdjs.CelularCode.asyncCallback12899148 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CelularCode.localVariables);

{ //Subevents
gdjs.CelularCode.eventsList3(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.CelularCode.localVariables.length = 0;
}
gdjs.CelularCode.idToCallbackMap.set(12899148, gdjs.CelularCode.asyncCallback12899148);
gdjs.CelularCode.eventsList4 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CelularCode.localVariables);
for (const obj of gdjs.CelularCode.GDentrarObjects2) asyncObjectsList.addObject("entrar", obj);
for (const obj of gdjs.CelularCode.GDloading_9595stateObjects2) asyncObjectsList.addObject("loading_state", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__Firestore__WriteDocumentAsync.func(runtimeScene, "especial/final/jogando", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.CelularCode.localVariables[0].getFromIndex(0), null), (runtimeScene) => (gdjs.CelularCode.asyncCallback12899148(runtimeScene, asyncObjectsList)), 12899148, asyncObjectsList);
}
}

}


};gdjs.CelularCode.eventsList5 = function(runtimeScene) {

{


let stopDoWhile_0 = false;
do {
gdjs.copyArray(gdjs.CelularCode.GDentrada_9595nomeObjects2, gdjs.CelularCode.GDentrada_9595nomeObjects4);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CelularCode.GDentrada_9595nomeObjects4.length;i<l;++i) {
    if ( (gdjs.CelularCode.GDentrada_9595nomeObjects4[i].getBehavior("Text").getText()).startsWith("_") ) {
        isConditionTrue_0 = true;
        gdjs.CelularCode.GDentrada_9595nomeObjects4[k] = gdjs.CelularCode.GDentrada_9595nomeObjects4[i];
        ++k;
    }
}
gdjs.CelularCode.GDentrada_9595nomeObjects4.length = k;
if (isConditionTrue_0) {
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.CelularCode.GDentrada_9595nomeObjects4.length ;i < len;++i) {
    gdjs.CelularCode.GDentrada_9595nomeObjects4[i].getBehavior("Text").setText(gdjs.evtTools.string.subStr((gdjs.CelularCode.GDentrada_9595nomeObjects4[i].getBehavior("Text").getText()), 1, 25));
}
}

{ //Subevents: 
gdjs.CelularCode.eventsList2(runtimeScene);} //Subevents end.
}
} else stopDoWhile_0 = true; 
} while (!stopDoWhile_0);

}


{


let isConditionTrue_0 = false;
{
/* Reuse gdjs.CelularCode.GDentrada_9595nomeObjects2 */
/* Reuse gdjs.CelularCode.GDentrarObjects2 */
gdjs.copyArray(runtimeScene.getObjects("loading_state"), gdjs.CelularCode.GDloading_9595stateObjects2);
{runtimeScene.getGame().getVariables().getFromIndex(2).setString((( gdjs.CelularCode.GDentrada_9595nomeObjects2.length === 0 ) ? "" :gdjs.CelularCode.GDentrada_9595nomeObjects2[0].getBehavior("Text").getText()));
}
{runtimeScene.getGame().getVariables().getFromIndex(1).setString((( gdjs.CelularCode.GDentrada_9595nomeObjects2.length === 0 ) ? "" :gdjs.CelularCode.GDentrada_9595nomeObjects2[0].getBehavior("Text").getText()));
}
{for(var i = 0, len = gdjs.CelularCode.GDentrarObjects2.length ;i < len;++i) {
    gdjs.CelularCode.GDentrarObjects2[i].getBehavior("Opacity").setOpacity(100);
}
}
{for(var i = 0, len = gdjs.CelularCode.GDloading_9595stateObjects2.length ;i < len;++i) {
    gdjs.CelularCode.GDloading_9595stateObjects2[i].getBehavior("Text").setText("Joining...");
}
}
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("nome").setString(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}

{ //Subevents
gdjs.CelularCode.eventsList4(runtimeScene);} //End of subevents
}

}


};gdjs.CelularCode.eventsList6 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("entrada_nome"), gdjs.CelularCode.GDentrada_9595nomeObjects2);
gdjs.copyArray(runtimeScene.getObjects("entrar"), gdjs.CelularCode.GDentrarObjects2);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("writeState", variable);
}
gdjs.CelularCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CelularCode.mapOfGDgdjs_9546CelularCode_9546GDentrarObjects2Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CelularCode.GDentrarObjects2.length;i<l;++i) {
    if ( gdjs.CelularCode.GDentrarObjects2[i].getBehavior("Opacity").getOpacity() == 255 ) {
        isConditionTrue_0 = true;
        gdjs.CelularCode.GDentrarObjects2[k] = gdjs.CelularCode.GDentrarObjects2[i];
        ++k;
    }
}
gdjs.CelularCode.GDentrarObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CelularCode.GDentrada_9595nomeObjects2.length;i<l;++i) {
    if ( gdjs.CelularCode.GDentrada_9595nomeObjects2[i].getBehavior("Text").getText() != "" ) {
        isConditionTrue_0 = true;
        gdjs.CelularCode.GDentrada_9595nomeObjects2[k] = gdjs.CelularCode.GDentrada_9595nomeObjects2[i];
        ++k;
    }
}
gdjs.CelularCode.GDentrada_9595nomeObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CelularCode.GDentrada_9595nomeObjects2.length;i<l;++i) {
    if ( gdjs.CelularCode.GDentrada_9595nomeObjects2[i].getBehavior("Text").getText() != "0" ) {
        isConditionTrue_0 = true;
        gdjs.CelularCode.GDentrada_9595nomeObjects2[k] = gdjs.CelularCode.GDentrada_9595nomeObjects2[i];
        ++k;
    }
}
gdjs.CelularCode.GDentrada_9595nomeObjects2.length = k;
}
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CelularCode.eventsList5(runtimeScene);} //End of subevents
}
gdjs.CelularCode.localVariables.pop();

}


};gdjs.CelularCode.mapOfGDgdjs_9546CelularCode_9546GDbig_95959595buttonObjects1Objects = Hashtable.newFrom({"big_button": gdjs.CelularCode.GDbig_9595buttonObjects1});
gdjs.CelularCode.eventsList7 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.CelularCode.localVariables[0].getFromIndex(0).getAsString() == "ok");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(4).setNumber(runtimeScene.getScene().getVariables().getFromIndex(1).getChild("pergunta").getAsNumber());
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.CelularCode.localVariables[0].getFromIndex(0).getAsString() != "ok");
}
if (isConditionTrue_0) {
gdjs.copyArray(asyncObjectsList.getObjects("big_button"), gdjs.CelularCode.GDbig_9595buttonObjects2);

{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects2.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects2[i].returnVariable(gdjs.CelularCode.GDbig_9595buttonObjects2[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects2.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects2[i].setDisabled(false, null);
}
}
{gdjs.evtTools.debuggerTools.log(gdjs.CelularCode.localVariables[0].getFromIndex(0).getAsString(), "", "");
}
}

}


};gdjs.CelularCode.asyncCallback12904868 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.CelularCode.localVariables);

{ //Subevents
gdjs.CelularCode.eventsList7(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.CelularCode.localVariables.length = 0;
}
gdjs.CelularCode.idToCallbackMap.set(12904868, gdjs.CelularCode.asyncCallback12904868);
gdjs.CelularCode.eventsList8 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.CelularCode.localVariables);
for (const obj of gdjs.CelularCode.GDbig_9595buttonObjects1) asyncObjectsList.addObject("big_button", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtsExt__Firestore__WriteDocumentAsync.func(runtimeScene, "especial/final/jogando", runtimeScene.getGame().getVariables().getFromIndex(1).getAsString(), runtimeScene.getScene().getVariables().getFromIndex(1), gdjs.CelularCode.localVariables[0].getFromIndex(0), null), (runtimeScene) => (gdjs.CelularCode.asyncCallback12904868(runtimeScene, asyncObjectsList)), 12904868, asyncObjectsList);
}
}

}


};gdjs.CelularCode.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("big_button"), gdjs.CelularCode.GDbig_9595buttonObjects1);

{
const variables = new gdjs.VariablesContainer();
{
const variable = new gdjs.Variable();
variable.setString("");
variables._declare("writeState", variable);
}
gdjs.CelularCode.localVariables.push(variables);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.CelularCode.mapOfGDgdjs_9546CelularCode_9546GDbig_95959595buttonObjects1Objects, runtimeScene, false, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CelularCode.GDbig_9595buttonObjects1.length;i<l;++i) {
    if ( !(gdjs.CelularCode.GDbig_9595buttonObjects1[i].isdisabled(null)) ) {
        isConditionTrue_0 = true;
        gdjs.CelularCode.GDbig_9595buttonObjects1[k] = gdjs.CelularCode.GDbig_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.CelularCode.GDbig_9595buttonObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.CelularCode.GDbig_9595buttonObjects1 */
{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects1.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects1[i].returnVariable(gdjs.CelularCode.GDbig_9595buttonObjects1[i].getVariables().getFromIndex(0)).setBoolean(true);
}
}

{ //Subevents
gdjs.CelularCode.eventsList8(runtimeScene);} //End of subevents
}
gdjs.CelularCode.localVariables.pop();

}


};gdjs.CelularCode.eventsList10 = function(runtimeScene) {

{


gdjs.CelularCode.eventsList6(runtimeScene);
}


{


gdjs.CelularCode.eventsList9(runtimeScene);
}


};gdjs.CelularCode.mapOfGDgdjs_9546CelularCode_9546GDbig_95959595buttonObjects2Objects = Hashtable.newFrom({"big_button": gdjs.CelularCode.GDbig_9595buttonObjects2});
gdjs.CelularCode.eventsList11 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12912972);
}
if (isConditionTrue_0) {
{gdjs.evtTools.camera.setCameraX(runtimeScene, 1440 + 360, "", 0);
}
}

}


};gdjs.CelularCode.eventsList12 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getScene().getVariables().getFromIndex(2).getChild("data").getChild("liberarBotao").getAsBoolean();
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(2).getChild("data").getChild("pergunta").getAsNumber() != runtimeScene.getScene().getVariables().getFromIndex(4).getAsNumber());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("big_button"), gdjs.CelularCode.GDbig_9595buttonObjects5);
{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects5.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects5[i].setDisabled(false, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = !runtimeScene.getScene().getVariables().getFromIndex(2).getChild("data").getChild("liberarBotao").getAsBoolean();
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("big_button"), gdjs.CelularCode.GDbig_9595buttonObjects5);
{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects5.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects5[i].setDisabled(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("pontos"), gdjs.CelularCode.GDpontosObjects4);
{for(var i = 0, len = gdjs.CelularCode.GDpontosObjects4.length ;i < len;++i) {
    gdjs.CelularCode.GDpontosObjects4[i].getBehavior("Tween").addVariableTween3("pontos", gdjs.CelularCode.GDpontosObjects4[i].getVariables().getFromIndex(0), runtimeScene.getScene().getVariables().getFromIndex(2).getChild("data").getChild("pontos").getChild(runtimeScene.getGame().getVariables().getFromIndex(1).getAsString()).getAsNumber(), "linear", 0.6, false);
}
}
}

}


};gdjs.CelularCode.eventsList13 = function(runtimeScene) {

{


gdjs.CelularCode.eventsList12(runtimeScene);
}


};gdjs.CelularCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "ok");
}
if (isConditionTrue_0) {
{gdjs.evtTools.debuggerTools.log(runtimeScene.getScene().getVariables().getFromIndex(3).getAsString(), "", "");
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() == "ok");
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(1).getChild("pergunta").setNumber(runtimeScene.getScene().getVariables().getFromIndex(2).getChild("data").getChild("pergunta").getAsNumber());
}

{ //Subevents
gdjs.CelularCode.eventsList13(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
{runtimeScene.getScene().getVariables().getFromIndex(3).setString("");
}
}

}


};gdjs.CelularCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(3).getAsString() != "");
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CelularCode.eventsList14(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("pontos"), gdjs.CelularCode.GDpontosObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.common.toString(Math.floor(((gdjs.CelularCode.GDpontosObjects1.length === 0 ) ? gdjs.VariablesContainer.badVariablesContainer : gdjs.CelularCode.GDpontosObjects1[0].getVariables()).getFromIndex(0).getAsNumber())) != (( gdjs.CelularCode.GDpontosObjects1.length === 0 ) ? "" :gdjs.CelularCode.GDpontosObjects1[0].getBehavior("Text").getText()));
}
if (isConditionTrue_0) {
/* Reuse gdjs.CelularCode.GDpontosObjects1 */
{for(var i = 0, len = gdjs.CelularCode.GDpontosObjects1.length ;i < len;++i) {
    gdjs.CelularCode.GDpontosObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(Math.floor(gdjs.CelularCode.GDpontosObjects1[i].getVariables().getFromIndex(0).getAsNumber())));
}
}
}

}


};gdjs.CelularCode.eventsList16 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12914836);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("nome"), gdjs.CelularCode.GDnomeObjects2);
{gdjs.evtTools.camera.setCameraX(runtimeScene, 360, "", 0);
}
{for(var i = 0, len = gdjs.CelularCode.GDnomeObjects2.length ;i < len;++i) {
    gdjs.CelularCode.GDnomeObjects2[i].getBehavior("Text").setText(runtimeScene.getGame().getVariables().getFromIndex(2).getAsString());
}
}
{gdjs.evtsExt__Firestore__StartDocumentWatcher.func(runtimeScene, "especial/final/jogando", "__config", runtimeScene.getScene().getVariables().getFromIndex(2), runtimeScene.getScene().getVariables().getFromIndex(3), null);
}
}

}


{


gdjs.CelularCode.eventsList15(runtimeScene);
}


};gdjs.CelularCode.eventsList17 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.CelularCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(12892068);
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CelularCode.eventsList10(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("big_button"), gdjs.CelularCode.GDbig_9595buttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.CelularCode.GDbig_9595buttonObjects1.length;i<l;++i) {
    if ( gdjs.CelularCode.GDbig_9595buttonObjects1[i].getVariableBoolean(gdjs.CelularCode.GDbig_9595buttonObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.CelularCode.GDbig_9595buttonObjects1[k] = gdjs.CelularCode.GDbig_9595buttonObjects1[i];
        ++k;
    }
}
gdjs.CelularCode.GDbig_9595buttonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{gdjs.CelularCode.GDbig_9595buttonObjects1_1final.length = 0;
let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
gdjs.copyArray(gdjs.CelularCode.GDbig_9595buttonObjects1, gdjs.CelularCode.GDbig_9595buttonObjects2);

isConditionTrue_1 = gdjs.evtTools.input.cursorOnObject(gdjs.CelularCode.mapOfGDgdjs_9546CelularCode_9546GDbig_95959595buttonObjects2Objects, runtimeScene, false, true);
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
    for (let j = 0, jLen = gdjs.CelularCode.GDbig_9595buttonObjects2.length; j < jLen ; ++j) {
        if ( gdjs.CelularCode.GDbig_9595buttonObjects1_1final.indexOf(gdjs.CelularCode.GDbig_9595buttonObjects2[j]) === -1 )
            gdjs.CelularCode.GDbig_9595buttonObjects1_1final.push(gdjs.CelularCode.GDbig_9595buttonObjects2[j]);
    }
}
}
{
gdjs.copyArray(gdjs.CelularCode.GDbig_9595buttonObjects1_1final, gdjs.CelularCode.GDbig_9595buttonObjects1);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.CelularCode.GDbig_9595buttonObjects1 */
{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects1.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects1[i].returnVariable(gdjs.CelularCode.GDbig_9595buttonObjects1[i].getVariables().getFromIndex(0)).setBoolean(false);
}
}
{for(var i = 0, len = gdjs.CelularCode.GDbig_9595buttonObjects1.length ;i < len;++i) {
    gdjs.CelularCode.GDbig_9595buttonObjects1[i].setDisabled(true, null);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 0);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CelularCode.eventsList11(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getScene().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.CelularCode.eventsList16(runtimeScene);} //End of subevents
}

}


};

gdjs.CelularCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CelularCode.GDbgObjects1.length = 0;
gdjs.CelularCode.GDbgObjects2.length = 0;
gdjs.CelularCode.GDbgObjects3.length = 0;
gdjs.CelularCode.GDbgObjects4.length = 0;
gdjs.CelularCode.GDbgObjects5.length = 0;
gdjs.CelularCode.GDbgObjects6.length = 0;
gdjs.CelularCode.GDpontosObjects1.length = 0;
gdjs.CelularCode.GDpontosObjects2.length = 0;
gdjs.CelularCode.GDpontosObjects3.length = 0;
gdjs.CelularCode.GDpontosObjects4.length = 0;
gdjs.CelularCode.GDpontosObjects5.length = 0;
gdjs.CelularCode.GDpontosObjects6.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects1.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects2.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects3.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects4.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects5.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects6.length = 0;
gdjs.CelularCode.GDnomeObjects1.length = 0;
gdjs.CelularCode.GDnomeObjects2.length = 0;
gdjs.CelularCode.GDnomeObjects3.length = 0;
gdjs.CelularCode.GDnomeObjects4.length = 0;
gdjs.CelularCode.GDnomeObjects5.length = 0;
gdjs.CelularCode.GDnomeObjects6.length = 0;
gdjs.CelularCode.GDtutorialObjects1.length = 0;
gdjs.CelularCode.GDtutorialObjects2.length = 0;
gdjs.CelularCode.GDtutorialObjects3.length = 0;
gdjs.CelularCode.GDtutorialObjects4.length = 0;
gdjs.CelularCode.GDtutorialObjects5.length = 0;
gdjs.CelularCode.GDtutorialObjects6.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects1.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects2.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects3.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects4.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects5.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects6.length = 0;
gdjs.CelularCode.GDentrarObjects1.length = 0;
gdjs.CelularCode.GDentrarObjects2.length = 0;
gdjs.CelularCode.GDentrarObjects3.length = 0;
gdjs.CelularCode.GDentrarObjects4.length = 0;
gdjs.CelularCode.GDentrarObjects5.length = 0;
gdjs.CelularCode.GDentrarObjects6.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects1.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects2.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects3.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects4.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects5.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects6.length = 0;

gdjs.CelularCode.eventsList17(runtimeScene);
gdjs.CelularCode.GDbgObjects1.length = 0;
gdjs.CelularCode.GDbgObjects2.length = 0;
gdjs.CelularCode.GDbgObjects3.length = 0;
gdjs.CelularCode.GDbgObjects4.length = 0;
gdjs.CelularCode.GDbgObjects5.length = 0;
gdjs.CelularCode.GDbgObjects6.length = 0;
gdjs.CelularCode.GDpontosObjects1.length = 0;
gdjs.CelularCode.GDpontosObjects2.length = 0;
gdjs.CelularCode.GDpontosObjects3.length = 0;
gdjs.CelularCode.GDpontosObjects4.length = 0;
gdjs.CelularCode.GDpontosObjects5.length = 0;
gdjs.CelularCode.GDpontosObjects6.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects1.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects2.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects3.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects4.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects5.length = 0;
gdjs.CelularCode.GDbig_9595buttonObjects6.length = 0;
gdjs.CelularCode.GDnomeObjects1.length = 0;
gdjs.CelularCode.GDnomeObjects2.length = 0;
gdjs.CelularCode.GDnomeObjects3.length = 0;
gdjs.CelularCode.GDnomeObjects4.length = 0;
gdjs.CelularCode.GDnomeObjects5.length = 0;
gdjs.CelularCode.GDnomeObjects6.length = 0;
gdjs.CelularCode.GDtutorialObjects1.length = 0;
gdjs.CelularCode.GDtutorialObjects2.length = 0;
gdjs.CelularCode.GDtutorialObjects3.length = 0;
gdjs.CelularCode.GDtutorialObjects4.length = 0;
gdjs.CelularCode.GDtutorialObjects5.length = 0;
gdjs.CelularCode.GDtutorialObjects6.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects1.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects2.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects3.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects4.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects5.length = 0;
gdjs.CelularCode.GDentrada_9595nomeObjects6.length = 0;
gdjs.CelularCode.GDentrarObjects1.length = 0;
gdjs.CelularCode.GDentrarObjects2.length = 0;
gdjs.CelularCode.GDentrarObjects3.length = 0;
gdjs.CelularCode.GDentrarObjects4.length = 0;
gdjs.CelularCode.GDentrarObjects5.length = 0;
gdjs.CelularCode.GDentrarObjects6.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects1.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects2.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects3.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects4.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects5.length = 0;
gdjs.CelularCode.GDloading_9595stateObjects6.length = 0;


return;

}

gdjs['CelularCode'] = gdjs.CelularCode;
