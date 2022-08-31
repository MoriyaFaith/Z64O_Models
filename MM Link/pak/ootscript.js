"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const EventHandler_1 = require("modloader64_api/EventHandler");
const OotoAPI_1 = require("./OotoAPI/OotoAPI");
const fs_extra_1 = __importDefault(require("fs-extra"));
const path_1 = __importDefault(require("path"));
const zlib_1 = __importDefault(require("zlib"));
class ootscript {
    name;
    zz;
    ModLoader;
    originalTunicColors;
    originalGauntletColors;
    rawSounds = {};
    hasEmbeddedSounds = false;
    constructor(name, zz, ModLoader) {
        this.name = name;
        this.zz = zz;
        this.ModLoader = ModLoader;
        this.registerSoundPak();
    }
    registerSoundPak() {
        let sound_folder = path_1.default.resolve(__dirname, "sounds");
        if (fs_extra_1.default.existsSync(sound_folder)) {
            this.hasEmbeddedSounds = true;
        }
        else {
            return;
        }
        fs_extra_1.default.readdirSync(sound_folder).forEach((file) => {
            let f = path_1.default.resolve(sound_folder, file);
            let id = parseInt(path_1.default.parse(file).name.split("-")[0].trim(), 16);
            if (fs_extra_1.default.lstatSync(f).isDirectory()) {
                this.rawSounds[id] = [];
                fs_extra_1.default.readdirSync(f).forEach((sound) => {
                    let s = path_1.default.resolve(f, sound);
                    this.rawSounds[id].push(zlib_1.default.deflateSync(fs_extra_1.default.readFileSync(s)));
                });
            }
        });
        EventHandler_1.bus.emit(OotoAPI_1.Z64OnlineEvents.ON_LOAD_SOUND_PACK, { id: this.name, data: this.rawSounds });
    }
    loadSoundPak() {
        if (!this.hasEmbeddedSounds)
            return;
        if (!this.zz.options.applySoundOnEquip)
            return;
        EventHandler_1.bus.emit(OotoAPI_1.Z64OnlineEvents.ON_SELECT_SOUND_PACK, this.name);
    }
    unloadSoundPak() {
        if (!this.hasEmbeddedSounds)
            return;
        if (!this.zz.options.applySoundOnEquip)
            return;
        EventHandler_1.bus.emit(OotoAPI_1.Z64OnlineEvents.ON_SELECT_SOUND_PACK, undefined);
    }
    onModelEquipped() {
        if (this.zz.options.applyAnimBankOnEquip) {
            EventHandler_1.bus.emit(OotoAPI_1.Z64OnlineEvents.FORCE_CUSTOM_ANIMATION_BANK, new OotoAPI_1.Z64_AnimationBank(this.zz.anim_file.name, fs_extra_1.default.readFileSync(path_1.default.resolve(__dirname, this.zz.anim_file.file))));
        }
        this.originalTunicColors = this.ModLoader.emulator.rdramReadBuffer(0x800F7AD8, (3 * 3));
        this.originalGauntletColors = this.ModLoader.emulator.rdramReadBuffer(0x800F7AE4, (2 * 3));
        if (this.zz.colors.kokiri !== "") {
            this.ModLoader.emulator.rdramWriteBuffer(0x800F7AD8 + (0 * 3), Buffer.from(this.zz.colors.kokiri, 'hex'));
        }
        if (this.zz.colors.goron !== "") {
            this.ModLoader.emulator.rdramWriteBuffer(0x800F7AD8 + (1 * 3), Buffer.from(this.zz.colors.goron, 'hex'));
        }
        if (this.zz.colors.zora !== "") {
            this.ModLoader.emulator.rdramWriteBuffer(0x800F7AD8 + (2 * 3), Buffer.from(this.zz.colors.zora, 'hex'));
        }
        if (this.zz.colors.silver !== "") {
            this.ModLoader.emulator.rdramWriteBuffer(0x800F7AE4 + (0 * 3), Buffer.from(this.zz.colors.silver, 'hex'));
        }
        if (this.zz.colors.golden !== "") {
            this.ModLoader.emulator.rdramWriteBuffer(0x800F7AE4 + (1 * 3), Buffer.from(this.zz.colors.golden, 'hex'));
        }
        this.loadSoundPak();
    }
    onModelRemoved() {
        if (this.zz.options.applyAnimBankOnEquip) {
            EventHandler_1.bus.emit(OotoAPI_1.Z64OnlineEvents.FORCE_CUSTOM_ANIMATION_BANK, new OotoAPI_1.Z64_AnimationBank(this.zz.anim_file.name, Buffer.alloc(1)));
        }
        this.ModLoader.emulator.rdramWriteBuffer(0x800F7AD8, this.originalTunicColors);
        this.ModLoader.emulator.rdramWriteBuffer(0x800F7AE4, this.originalGauntletColors);
        this.unloadSoundPak();
    }
    onSceneChange(scene, ref) {
        return ref;
    }
    onDay(ref) {
        return ref;
    }
    onNight(ref) {
        return ref;
    }
    onTunicChanged(ref, tunic) {
        return ref;
    }
    onHealthChanged(max, health, ref) {
        return ref;
    }
    onTick() {
    }
}
exports.default = ootscript;
//# sourceMappingURL=ootscript.js.map