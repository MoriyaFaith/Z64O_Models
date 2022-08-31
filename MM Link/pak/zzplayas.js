"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = require("modloader64_api/EventHandler");
const path_1 = __importDefault(require("path"));
const CoreInjection_1 = require("modloader64_api/CoreInjection");
const fs_extra_1 = __importDefault(require("fs-extra"));
const OotoAPI_1 = require("./OotoAPI/OotoAPI");
const MMAPI_1 = require("./MMAPI/MMAPI");
class zzplayas {
    ModLoader;
    pluginName;
    core;
    preinit() { }
    init() {
        this.OOT();
        this.MM();
    }
    postinit() { }
    onTick() { }
    OOT() {
        let zz = this['metadata']['zzplayas'];
        let script;
        if (zz.OOT.oot_script !== "") {
            let s = require(path_1.default.resolve(__dirname, zz.OOT.oot_script)).default;
            script = new s(this['metadata']['name'], zz.OOT, this.ModLoader);
        }
        if (zz.OOT.adult_model.length > 0) {
            for (let i = 0; i < zz.OOT.adult_model.length; i++) {
                if (zz.OOT.adult_model[i].file === "")
                    continue;
                let evt = new OotoAPI_1.Z64Online_ModelAllocation(fs_extra_1.default.readFileSync(path_1.default.resolve(__dirname, zz.OOT.adult_model[i].file)), 0 /* ADULT */);
                evt.name = zz.OOT.adult_model[i].name;
                evt.script = script;
                EventHandler_1.bus.emit(OotoAPI_1.Z64OnlineEvents.CUSTOM_MODEL_LOAD_ADULT, evt);
            }
        }
        if (zz.OOT.child_model.length > 0) {
            for (let i = 0; i < zz.OOT.child_model.length; i++) {
                if (zz.OOT.child_model[i].file === "")
                    continue;
                let evt = new OotoAPI_1.Z64Online_ModelAllocation(fs_extra_1.default.readFileSync(path_1.default.resolve(__dirname, zz.OOT.child_model[i].file)), 0 /* ADULT */);
                evt.name = zz.OOT.child_model[i].name;
                evt.script = script;
                EventHandler_1.bus.emit(OotoAPI_1.Z64OnlineEvents.CUSTOM_MODEL_LOAD_CHILD, evt);
            }
        }
        if (zz.OOT.anim_file.file !== '') {
            EventHandler_1.bus.emit(OotoAPI_1.Z64OnlineEvents.CUSTOM_ANIMATION_BANK_REGISTER, new OotoAPI_1.Z64_AnimationBank(zz.OOT.anim_file.name, fs_extra_1.default.readFileSync(path_1.default.resolve(path_1.default.join(__dirname, zz.OOT.anim_file.file)))));
        }
    }
    MM() {
        let zz = this['metadata']['zzplayas'];
        if (zz.MM.child_model.length > 0) {
            for (let i = 0; i < zz.MM.child_model.length; i++) {
                EventHandler_1.bus.emit(MMAPI_1.MMOnlineEvents.CUSTOM_MODEL_APPLIED_CHILD, path_1.default.resolve(path_1.default.join(__dirname, zz.MM.child_model[i].file)));
            }
        }
    }
}
__decorate([
    CoreInjection_1.InjectCore()
], zzplayas.prototype, "core", void 0);
module.exports = zzplayas;
//# sourceMappingURL=zzplayas.js.map