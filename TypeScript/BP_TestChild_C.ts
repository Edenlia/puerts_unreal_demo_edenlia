import * as UE from 'ue'
import {argv, blueprint} from 'puerts';
import {BP_TestParent_TS, BP_TestParent} from './BP_TestParent_C';

let BP_TestChild_UClass = UE.Class.Load('/Game/Blueprints/BP_TestChild.BP_TestChild_C');
const BP_TestChild_JsProxyClass = blueprint.tojs<typeof UE.Game.Blueprints.BP_TestChild.BP_TestChild_C>(BP_TestChild_UClass);
interface BP_TestChild_TS extends UE.Game.Blueprints.BP_TestChild.BP_TestChild_C {}

class BP_TestChild_TS extends BP_TestParent_TS {
    ReceiveBeginPlay():void {
        // super.ReceiveBeginPlay();
        console.log(`BP_TestChild Ts ReceiveBeginPlay`);
    }

    // ReceiveTick(DeltaSeconds: number) {
    //     // console.log(`BP_TestChild Ts ReceiveTick`);
    // }
}

const BP_TestChild = blueprint.mixin(BP_TestChild_JsProxyClass, BP_TestChild_TS);

export {BP_TestChild_TS, BP_TestChild};
export default BP_TestChild;