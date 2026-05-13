import * as UE from 'ue'
import {argv, blueprint} from 'puerts';

let BP_TestParent_UClass = UE.Class.Load('/Game/Blueprints/BP_TestParent.BP_TestParent_C');
const BP_TestParent_JsProxyClass = blueprint.tojs<typeof UE.Game.Blueprints.BP_TestParent.BP_TestParent_C>(BP_TestParent_UClass);
interface BP_TestParent_TS extends UE.Game.Blueprints.BP_TestParent.BP_TestParent_C {}

class BP_TestParent_TS {
    ReceiveBeginPlay():void {
        console.log(`BP_TestParent Ts ReceiveBeginPlay`);
    }

    ReceiveTick(DeltaSeconds: number) {
        // console.log(`BP_TestParent Ts ReceiveTick`);
    }
}

const BP_TestParent = blueprint.mixin(BP_TestParent_JsProxyClass, BP_TestParent_TS);

export {BP_TestParent_TS, BP_TestParent};
export default BP_TestParent;