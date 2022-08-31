"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Z64_AnimationBank = exports.Z64Online_ModelAllocation = exports.Z64OnlineEvents = void 0;
var Z64OnlineEvents;
(function (Z64OnlineEvents) {
    Z64OnlineEvents["PLAYER_PUPPET_PRESPAWN"] = "OotOnline:onPlayerPuppetPreSpawned";
    Z64OnlineEvents["PLAYER_PUPPET_SPAWNED"] = "OotOnline:onPlayerPuppetSpawned";
    Z64OnlineEvents["PLAYER_PUPPET_DESPAWNED"] = "OotOnline:onPlayerPuppetDespawned";
    Z64OnlineEvents["PLAYER_PUPPET_QUERY"] = "OotOnline:PlayerPuppetQuery";
    Z64OnlineEvents["SERVER_PLAYER_CHANGED_SCENES"] = "OotOnline:onServerPlayerChangedScenes";
    Z64OnlineEvents["CLIENT_REMOTE_PLAYER_CHANGED_SCENES"] = "OotOnline:onRemotePlayerChangedScenes";
    Z64OnlineEvents["GHOST_MODE"] = "OotOnline:EnableGhostMode";
    Z64OnlineEvents["GAINED_HEART_CONTAINER"] = "OotOnline:GainedHeartContainer";
    Z64OnlineEvents["GAINED_PIECE_OF_HEART"] = "OotOnline:GainedPieceOfHeart";
    Z64OnlineEvents["MAGIC_METER_INCREASED"] = "OotOnline:GainedMagicMeter";
    Z64OnlineEvents["CUSTOM_MODEL_APPLIED_ADULT"] = "OotOnline:ApplyCustomModelAdult";
    Z64OnlineEvents["CUSTOM_MODEL_APPLIED_CHILD"] = "OotOnline:ApplyCustomModelChild";
    Z64OnlineEvents["CUSTOM_MODEL_APPLIED_ANIMATIONS"] = "OotOnline:ApplyCustomAnims";
    Z64OnlineEvents["CUSTOM_MODEL_APPLIED_ICON_ADULT"] = "OotOnline:ApplyCustomIconAdult";
    Z64OnlineEvents["CUSTOM_MODEL_APPLIED_ICON_CHILD"] = "OotOnline:ApplyCustomIconChild";
    Z64OnlineEvents["ON_INVENTORY_UPDATE"] = "OotOnline:OnInventoryUpdate";
    Z64OnlineEvents["ON_EXTERNAL_ACTOR_SYNC_LOAD"] = "OotOnline:OnExternalActorSyncLoad";
    Z64OnlineEvents["ON_REGISTER_EMOTE"] = "OotOnline:OnRegisterEmote";
    Z64OnlineEvents["ON_LOAD_SOUND_PACK"] = "OotOnline:OnLoadSoundPack";
    Z64OnlineEvents["POST_LOADED_SOUND_LIST"] = "OotOnline:PostLoadedSoundList";
    Z64OnlineEvents["ON_SELECT_SOUND_PACK"] = "OotOnline:OnSelectSoundPack";
    Z64OnlineEvents["ON_REMOTE_SOUND_PACK"] = "OotOnline:OnRemoteSoundPack";
    Z64OnlineEvents["ON_REMOTE_PLAY_SOUND"] = "OotOnline:OnRemotePlaySound";
    Z64OnlineEvents["CUSTOM_MODEL_LOAD_BUFFER_ADULT"] = "OotOnline:ApplyCustomModelAdultBuffer";
    Z64OnlineEvents["CUSTOM_MODEL_LOAD_BUFFER_CHILD"] = "OotOnline:ApplyCustomModelChildBuffer";
    Z64OnlineEvents["ALLOCATE_MODEL_BLOCK"] = "OotOnline:AllocateModelBlock";
    Z64OnlineEvents["FORCE_LOAD_MODEL_BLOCK"] = "OotOnline:ForceLoadModelBlock";
    Z64OnlineEvents["CHANGE_CUSTOM_MODEL_ADULT_GAMEPLAY"] = "OotOnline:ChangeCustomModelAdultGamePlay";
    Z64OnlineEvents["CHANGE_CUSTOM_MODEL_CHILD_GAMEPLAY"] = "OotOnline:ChangeCustomModelChildGamePlay";
    Z64OnlineEvents["FORCE_PUPPET_RESPAWN_IMMEDIATE"] = "OotOnline:ForcePuppetRespawnImmediate";
    Z64OnlineEvents["POST_LOADED_MODELS_LIST"] = "OotOnline:PostLoadedModelsList";
    Z64OnlineEvents["LOAD_EQUIPMENT_BUFFER"] = "OotOnline:LoadEquipmentBuffer";
    Z64OnlineEvents["LOAD_EQUIPMENT_PAK"] = "OotOnline:LoadEquipmentPak";
    Z64OnlineEvents["REFRESH_EQUIPMENT"] = "OotOnline:RefreshEquipment";
    Z64OnlineEvents["CLEAR_EQUIPMENT"] = "OotOnline:ClearEquipment";
    Z64OnlineEvents["EQUIPMENT_ZOBJ_LOADED"] = "OotOnline:EqZobjLoad";
    Z64OnlineEvents["EQUIPMENT_LOAD_START"] = "OotOnline:EqZobjLoadStart";
    Z64OnlineEvents["EQUIPMENT_LOAD_END"] = "OotOnline:EqZobjLoadEnd";
    Z64OnlineEvents["DEBUG_DUMP_RAM"] = "OotOnline:DumpRam";
    Z64OnlineEvents["PUPPETS_CLEAR"] = "OotOnline:PuppetsClear";
    Z64OnlineEvents["ON_MODEL_MANAGER_READY"] = "OotOnline:ON_MODEL_MANAGER_READY";
    Z64OnlineEvents["CUSTOM_MODEL_LOAD_ADULT"] = "OotOnline:CUSTOM_MODEL_LOAD_ADULT";
    Z64OnlineEvents["CUSTOM_MODEL_LOAD_CHILD"] = "OotOnline:CUSTOM_MODEL_LOAD_CHILD";
    Z64OnlineEvents["PUPPET_AGE_CHANGED"] = "OotOnline:PUPPET_AGE_CHANGED";
    Z64OnlineEvents["SAVE_DATA_ITEM_SET"] = "OotOnline:SAVE_DATA_ITEM_SET";
    Z64OnlineEvents["LOCAL_MODEL_CHANGE_FINISHED"] = "OotOnline:LOCAL_MODEL_CHANGE_FINISHED";
    Z64OnlineEvents["CUSTOM_ANIMATION_BANK_REGISTER"] = "OotOnline:CUSTOM_ANIMATION_BANK_REGISTER";
    Z64OnlineEvents["FORCE_CUSTOM_ANIMATION_BANK"] = "OotOnline:FORCE_CUSTOM_ANIMATION_BANK";
    Z64OnlineEvents["CUSTOM_ANIMATION_BANK_EQUIPPED"] = "OotOnline:CUSTOM_ANIMATION_BANK_EQUIPPED";
})(Z64OnlineEvents = exports.Z64OnlineEvents || (exports.Z64OnlineEvents = {}));
class Z64Online_ModelAllocation {
    name = "";
    model;
    age;
    ref;
    script;
    constructor(model, age) {
        this.model = model;
        this.age = age;
    }
}
exports.Z64Online_ModelAllocation = Z64Online_ModelAllocation;
class Z64_AnimationBank {
    name;
    bank;
    constructor(name, bank) {
        this.name = name;
        this.bank = bank;
    }
}
exports.Z64_AnimationBank = Z64_AnimationBank;
//# sourceMappingURL=OotoAPI.js.map