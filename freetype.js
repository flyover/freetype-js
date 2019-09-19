System.register(["./bind-freetype"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    };
    var Bind, bind, FT_Error, FT_Glyph_Format, FT_Vector, FT_BBox, FT_Pixel_Mode, FT_Library, FT_Face, FT_LoadFlags, FT_Render_Mode, FT_Kerning_Mode;
    var __moduleName = context_1 && context_1.id;
    function default_1(value) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise((resolve) => {
                Bind.default(value).then((value) => {
                    exports_1("bind", bind = value);
                    resolve();
                });
            });
        });
    }
    exports_1("default", default_1);
    function Error_String(error_code) {
        return bind.FT_Error_String(error_code);
    }
    exports_1("Error_String", Error_String);
    function FT_IMAGE_TAG(_x1, _x2, _x3, _x4) {
        return (_x1.charCodeAt(0) << 24) | (_x2.charCodeAt(0) << 16) | (_x3.charCodeAt(0) << 8) | _x4.charCodeAt(0);
    }
    exports_1("FT_IMAGE_TAG", FT_IMAGE_TAG);
    function Library_Version(library) {
        const amajor = [0];
        const aminor = [0];
        const apatch = [0];
        bind.FT_Library_Version(library.bind, amajor, aminor, apatch);
        return { major: amajor[0], minor: aminor[0], patch: apatch[0] };
    }
    exports_1("Library_Version", Library_Version);
    function Init_FreeType(library) {
        return bind.FT_Init_FreeType(library.bind);
    }
    exports_1("Init_FreeType", Init_FreeType);
    function Done_FreeType(library) {
        return bind.FT_Done_FreeType(library.bind);
    }
    exports_1("Done_FreeType", Done_FreeType);
    function New_Memory_Face(library, file, face_index, face) {
        return bind.FT_New_Memory_Face(library.bind, file, face_index, face.bind);
    }
    exports_1("New_Memory_Face", New_Memory_Face);
    function Done_Face(face) {
        return bind.FT_Done_Face(face.bind);
    }
    exports_1("Done_Face", Done_Face);
    function Get_Char_Index(face, char_code) {
        return bind.FT_Get_Char_Index(face.bind, char_code);
    }
    exports_1("Get_Char_Index", Get_Char_Index);
    function Load_Char(face, char_code, load_flags = FT_LoadFlags.DEFAULT) {
        return bind.FT_Load_Char(face.bind, char_code, load_flags);
    }
    exports_1("Load_Char", Load_Char);
    function Set_Char_Size(face, char_width, char_height, horz_resolution, vert_resolution) {
        return bind.FT_Set_Char_Size(face.bind, char_width, char_height, horz_resolution, vert_resolution);
    }
    exports_1("Set_Char_Size", Set_Char_Size);
    function Render_Glyph(slot, render_mode = FT_Render_Mode.NORMAL) {
        return bind.FT_Render_Glyph(slot, render_mode);
    }
    exports_1("Render_Glyph", Render_Glyph);
    function Get_Kerning(face, left_glyph, right_glyph, kern_mode, akerning = new FT_Vector()) {
        return bind.FT_Get_Kerning(face.bind, left_glyph, right_glyph, kern_mode, akerning);
    }
    exports_1("Get_Kerning", Get_Kerning);
    function Outline_Decompose(outline, func_interface, user) {
        return bind.FT_Outline_Decompose(outline, func_interface, user);
    }
    exports_1("Outline_Decompose", Outline_Decompose);
    return {
        setters: [
            function (Bind_1) {
                Bind = Bind_1;
            }
        ],
        execute: function () {
            exports_1("Bind", Bind);
            (function (FT_Error) {
                FT_Error[FT_Error["Ok"] = 0] = "Ok";
                FT_Error[FT_Error["Cannot_Open_Resource"] = 1] = "Cannot_Open_Resource";
                FT_Error[FT_Error["Unknown_File_Format"] = 2] = "Unknown_File_Format";
                FT_Error[FT_Error["Invalid_File_Format"] = 3] = "Invalid_File_Format";
                FT_Error[FT_Error["Invalid_Version"] = 4] = "Invalid_Version";
                FT_Error[FT_Error["Lower_Module_Version"] = 5] = "Lower_Module_Version";
                FT_Error[FT_Error["Invalid_Argument"] = 6] = "Invalid_Argument";
                FT_Error[FT_Error["Unimplemented_Feature"] = 7] = "Unimplemented_Feature";
                FT_Error[FT_Error["Invalid_Table"] = 8] = "Invalid_Table";
                FT_Error[FT_Error["Invalid_Offset"] = 9] = "Invalid_Offset";
                FT_Error[FT_Error["Array_Too_Large"] = 10] = "Array_Too_Large";
                FT_Error[FT_Error["Missing_Module"] = 11] = "Missing_Module";
                FT_Error[FT_Error["Missing_Property"] = 12] = "Missing_Property";
                FT_Error[FT_Error["Invalid_Glyph_Index"] = 16] = "Invalid_Glyph_Index";
                FT_Error[FT_Error["Invalid_Character_Code"] = 17] = "Invalid_Character_Code";
                FT_Error[FT_Error["Invalid_Glyph_Format"] = 18] = "Invalid_Glyph_Format";
                FT_Error[FT_Error["Cannot_Render_Glyph"] = 19] = "Cannot_Render_Glyph";
                FT_Error[FT_Error["Invalid_Outline"] = 20] = "Invalid_Outline";
                FT_Error[FT_Error["Invalid_Composite"] = 21] = "Invalid_Composite";
                FT_Error[FT_Error["Too_Many_Hints"] = 22] = "Too_Many_Hints";
                FT_Error[FT_Error["Invalid_Pixel_Size"] = 23] = "Invalid_Pixel_Size";
                FT_Error[FT_Error["Invalid_Handle"] = 32] = "Invalid_Handle";
                FT_Error[FT_Error["Invalid_Library_Handle"] = 33] = "Invalid_Library_Handle";
                FT_Error[FT_Error["Invalid_Driver_Handle"] = 34] = "Invalid_Driver_Handle";
                FT_Error[FT_Error["Invalid_Face_Handle"] = 35] = "Invalid_Face_Handle";
                FT_Error[FT_Error["Invalid_Size_Handle"] = 36] = "Invalid_Size_Handle";
                FT_Error[FT_Error["Invalid_Slot_Handle"] = 37] = "Invalid_Slot_Handle";
                FT_Error[FT_Error["Invalid_CharMap_Handle"] = 38] = "Invalid_CharMap_Handle";
                FT_Error[FT_Error["Invalid_Cache_Handle"] = 39] = "Invalid_Cache_Handle";
                FT_Error[FT_Error["Invalid_Stream_Handle"] = 40] = "Invalid_Stream_Handle";
                FT_Error[FT_Error["Too_Many_Drivers"] = 48] = "Too_Many_Drivers";
                FT_Error[FT_Error["Too_Many_Extensions"] = 49] = "Too_Many_Extensions";
                FT_Error[FT_Error["Out_Of_Memory"] = 64] = "Out_Of_Memory";
                FT_Error[FT_Error["Unlisted_Object"] = 65] = "Unlisted_Object";
                FT_Error[FT_Error["Cannot_Open_Stream"] = 81] = "Cannot_Open_Stream";
                FT_Error[FT_Error["Invalid_Stream_Seek"] = 82] = "Invalid_Stream_Seek";
                FT_Error[FT_Error["Invalid_Stream_Skip"] = 83] = "Invalid_Stream_Skip";
                FT_Error[FT_Error["Invalid_Stream_Read"] = 84] = "Invalid_Stream_Read";
                FT_Error[FT_Error["Invalid_Stream_Operation"] = 85] = "Invalid_Stream_Operation";
                FT_Error[FT_Error["Invalid_Frame_Operation"] = 86] = "Invalid_Frame_Operation";
                FT_Error[FT_Error["Nested_Frame_Access"] = 87] = "Nested_Frame_Access";
                FT_Error[FT_Error["Invalid_Frame_Read"] = 88] = "Invalid_Frame_Read";
                FT_Error[FT_Error["Raster_Uninitialized"] = 96] = "Raster_Uninitialized";
                FT_Error[FT_Error["Raster_Corrupted"] = 97] = "Raster_Corrupted";
                FT_Error[FT_Error["Raster_Overflow"] = 98] = "Raster_Overflow";
                FT_Error[FT_Error["Raster_Negative_Height"] = 99] = "Raster_Negative_Height";
                FT_Error[FT_Error["Too_Many_Caches"] = 112] = "Too_Many_Caches";
                FT_Error[FT_Error["Invalid_Opcode"] = 128] = "Invalid_Opcode";
                FT_Error[FT_Error["Too_Few_Arguments"] = 129] = "Too_Few_Arguments";
                FT_Error[FT_Error["Stack_Overflow"] = 130] = "Stack_Overflow";
                FT_Error[FT_Error["Code_Overflow"] = 131] = "Code_Overflow";
                FT_Error[FT_Error["Bad_Argument"] = 132] = "Bad_Argument";
                FT_Error[FT_Error["Divide_By_Zero"] = 133] = "Divide_By_Zero";
                FT_Error[FT_Error["Invalid_Reference"] = 134] = "Invalid_Reference";
                FT_Error[FT_Error["Debug_OpCode"] = 135] = "Debug_OpCode";
                FT_Error[FT_Error["ENDF_In_Exec_Stream"] = 136] = "ENDF_In_Exec_Stream";
                FT_Error[FT_Error["Nested_DEFS"] = 137] = "Nested_DEFS";
                FT_Error[FT_Error["Invalid_CodeRange"] = 138] = "Invalid_CodeRange";
                FT_Error[FT_Error["Execution_Too_Long"] = 139] = "Execution_Too_Long";
                FT_Error[FT_Error["Too_Many_Function_Defs"] = 140] = "Too_Many_Function_Defs";
                FT_Error[FT_Error["Too_Many_Instruction_Defs"] = 141] = "Too_Many_Instruction_Defs";
                FT_Error[FT_Error["Table_Missing"] = 142] = "Table_Missing";
                FT_Error[FT_Error["Horiz_Header_Missing"] = 143] = "Horiz_Header_Missing";
                FT_Error[FT_Error["Locations_Missing"] = 144] = "Locations_Missing";
                FT_Error[FT_Error["Name_Table_Missing"] = 145] = "Name_Table_Missing";
                FT_Error[FT_Error["CMap_Table_Missing"] = 146] = "CMap_Table_Missing";
                FT_Error[FT_Error["Hmtx_Table_Missing"] = 147] = "Hmtx_Table_Missing";
                FT_Error[FT_Error["Post_Table_Missing"] = 148] = "Post_Table_Missing";
                FT_Error[FT_Error["Invalid_Horiz_Metrics"] = 149] = "Invalid_Horiz_Metrics";
                FT_Error[FT_Error["Invalid_CharMap_Format"] = 150] = "Invalid_CharMap_Format";
                FT_Error[FT_Error["Invalid_PPem"] = 151] = "Invalid_PPem";
                FT_Error[FT_Error["Invalid_Vert_Metrics"] = 152] = "Invalid_Vert_Metrics";
                FT_Error[FT_Error["Could_Not_Find_Context"] = 153] = "Could_Not_Find_Context";
                FT_Error[FT_Error["Invalid_Post_Table_Format"] = 154] = "Invalid_Post_Table_Format";
                FT_Error[FT_Error["Invalid_Post_Table"] = 155] = "Invalid_Post_Table";
                FT_Error[FT_Error["DEF_In_Glyf_Bytecode"] = 156] = "DEF_In_Glyf_Bytecode";
                FT_Error[FT_Error["Missing_Bitmap"] = 157] = "Missing_Bitmap";
                FT_Error[FT_Error["Syntax_Error"] = 160] = "Syntax_Error";
                FT_Error[FT_Error["Stack_Underflow"] = 161] = "Stack_Underflow";
                FT_Error[FT_Error["Ignore"] = 162] = "Ignore";
                FT_Error[FT_Error["No_Unicode_Glyph_Name"] = 163] = "No_Unicode_Glyph_Name";
                FT_Error[FT_Error["Glyph_Too_Big"] = 164] = "Glyph_Too_Big";
                FT_Error[FT_Error["Missing_Startfont_Field"] = 176] = "Missing_Startfont_Field";
                FT_Error[FT_Error["Missing_Font_Field"] = 177] = "Missing_Font_Field";
                FT_Error[FT_Error["Missing_Size_Field"] = 178] = "Missing_Size_Field";
                FT_Error[FT_Error["Missing_Fontboundingbox_Field"] = 179] = "Missing_Fontboundingbox_Field";
                FT_Error[FT_Error["Missing_Chars_Field"] = 180] = "Missing_Chars_Field";
                FT_Error[FT_Error["Missing_Startchar_Field"] = 181] = "Missing_Startchar_Field";
                FT_Error[FT_Error["Missing_Encoding_Field"] = 182] = "Missing_Encoding_Field";
                FT_Error[FT_Error["Missing_Bbx_Field"] = 183] = "Missing_Bbx_Field";
                FT_Error[FT_Error["Bbx_Too_Big"] = 184] = "Bbx_Too_Big";
                FT_Error[FT_Error["Corrupted_Font_Header"] = 185] = "Corrupted_Font_Header";
                FT_Error[FT_Error["Corrupted_Font_Glyphs"] = 186] = "Corrupted_Font_Glyphs";
            })(FT_Error || (FT_Error = {}));
            exports_1("FT_Error", FT_Error);
            exports_1("Err", FT_Error);
            exports_1("Error", FT_Error);
            (function (FT_Glyph_Format) {
                FT_Glyph_Format[FT_Glyph_Format["NONE"] = 0] = "NONE";
                FT_Glyph_Format[FT_Glyph_Format["COMPOSITE"] = FT_IMAGE_TAG('c', 'o', 'm', 'p')] = "COMPOSITE";
                FT_Glyph_Format[FT_Glyph_Format["BITMAP"] = FT_IMAGE_TAG('b', 'i', 't', 's')] = "BITMAP";
                FT_Glyph_Format[FT_Glyph_Format["OUTLINE"] = FT_IMAGE_TAG('o', 'u', 't', 'l')] = "OUTLINE";
                FT_Glyph_Format[FT_Glyph_Format["PLOTTER"] = FT_IMAGE_TAG('p', 'l', 'o', 't')] = "PLOTTER";
            })(FT_Glyph_Format || (FT_Glyph_Format = {}));
            exports_1("FT_Glyph_Format", FT_Glyph_Format);
            exports_1("GLYPH_FORMAT", FT_Glyph_Format);
            FT_Vector = class FT_Vector {
                constructor() {
                    this.x = 0;
                    this.y = 0;
                }
            };
            exports_1("FT_Vector", FT_Vector);
            exports_1("Vector", FT_Vector);
            FT_BBox = class FT_BBox {
                constructor() {
                    this.xMin = 0;
                    this.yMin = 0;
                    this.xMax = 0;
                    this.yMax = 0;
                }
            };
            exports_1("FT_BBox", FT_BBox);
            exports_1("BBox", FT_BBox);
            (function (FT_Pixel_Mode) {
                FT_Pixel_Mode[FT_Pixel_Mode["NONE"] = 0] = "NONE";
                FT_Pixel_Mode[FT_Pixel_Mode["MONO"] = 1] = "MONO";
                FT_Pixel_Mode[FT_Pixel_Mode["GRAY"] = 2] = "GRAY";
                FT_Pixel_Mode[FT_Pixel_Mode["GRAY2"] = 3] = "GRAY2";
                FT_Pixel_Mode[FT_Pixel_Mode["GRAY4"] = 4] = "GRAY4";
                FT_Pixel_Mode[FT_Pixel_Mode["LCD"] = 5] = "LCD";
                FT_Pixel_Mode[FT_Pixel_Mode["LCD_V"] = 6] = "LCD_V";
                FT_Pixel_Mode[FT_Pixel_Mode["BGRA"] = 7] = "BGRA";
                FT_Pixel_Mode[FT_Pixel_Mode["MAX"] = 8] = "MAX";
            })(FT_Pixel_Mode || (FT_Pixel_Mode = {}));
            exports_1("FT_Pixel_Mode", FT_Pixel_Mode);
            exports_1("PIXEL_MODE", FT_Pixel_Mode);
            ;
            FT_Library = class FT_Library {
                constructor() {
                    this.bind = [null];
                }
                init() {
                    const error = bind.FT_Init_FreeType(this.bind);
                    if (error !== FT_Error.Ok) {
                        throw new Error("Library:init " + error.toString());
                    }
                }
                done() {
                    const error = bind.FT_Done_FreeType(this.bind);
                    if (error !== FT_Error.Ok) {
                        throw new Error("Library:done " + error.toString());
                    }
                }
            };
            exports_1("FT_Library", FT_Library);
            exports_1("Library", FT_Library);
            FT_Face = class FT_Face {
                constructor() {
                    this.bind = [null];
                    // FT_Size           size;
                    // FT_CharMap        charmap;
                    // /*@private begin */
                    // FT_Driver         driver;
                    // FT_Memory         memory;
                    // FT_Stream         stream;
                    // FT_ListRec        sizes_list;
                    // FT_Generic        autohint;   /* face-specific auto-hinter data */
                    // void*             extensions; /* unused                         */
                    // FT_Face_Internal  internal;
                    // /*@private end */
                }
                get _bind() {
                    if (this.bind[0] === null) {
                        throw new Error();
                    }
                    return this.bind[0];
                }
                // FT_Long           num_faces;
                get num_faces() { return this._bind.num_faces; }
                // FT_Long           face_index;
                get face_index() { return this._bind.face_index; }
                // FT_Long           face_flags;
                get face_flags() { return this._bind.face_flags; }
                // FT_Long           style_flags;
                get style_flags() { return this._bind.style_flags; }
                // FT_Long           num_glyphs;
                get num_glyphs() { return this._bind.num_glyphs; }
                // FT_String*        family_name;
                get family_name() { return this._bind.family_name; }
                // FT_String*        style_name;
                get style_name() { return this._bind.style_name; }
                // FT_Int            num_fixed_sizes;
                // FT_Bitmap_Size*   available_sizes;
                // FT_Int            num_charmaps;
                // FT_CharMap*       charmaps;
                // FT_Generic        generic;
                // /*# The following member variables (down to `underline_thickness`) */
                // /*# are only relevant to scalable outlines; cf. @FT_Bitmap_Size    */
                // /*# for bitmap fonts.                                              */
                // FT_BBox           bbox;
                get bbox() { return this._bind.bbox; }
                // FT_UShort         units_per_EM;
                get units_per_EM() { return this._bind.units_per_EM; }
                // FT_Short          ascender;
                get ascender() { return this._bind.ascender; }
                // FT_Short          descender;
                get descender() { return this._bind.descender; }
                // FT_Short          height;
                get height() { return this._bind.height; }
                // FT_Short          max_advance_width;
                get max_advance_width() { return this._bind.max_advance_width; }
                // FT_Short          max_advance_height;
                get max_advance_height() { return this._bind.max_advance_height; }
                // FT_Short          underline_position;
                get underline_position() { return this._bind.underline_position; }
                // FT_Short          underline_thickness;
                get underline_thickness() { return this._bind.underline_thickness; }
                // FT_GlyphSlot      glyph;
                get glyph() { return this._bind.glyph; }
            };
            exports_1("FT_Face", FT_Face);
            exports_1("Face", FT_Face);
            (function (FT_LoadFlags) {
                FT_LoadFlags[FT_LoadFlags["DEFAULT"] = 0] = "DEFAULT";
                FT_LoadFlags[FT_LoadFlags["NO_SCALE"] = 1] = "NO_SCALE";
                FT_LoadFlags[FT_LoadFlags["NO_HINTING"] = 2] = "NO_HINTING";
                FT_LoadFlags[FT_LoadFlags["RENDER"] = 4] = "RENDER";
                FT_LoadFlags[FT_LoadFlags["NO_BITMAP"] = 8] = "NO_BITMAP";
                FT_LoadFlags[FT_LoadFlags["VERTICAL_LAYOUT"] = 16] = "VERTICAL_LAYOUT";
                FT_LoadFlags[FT_LoadFlags["FORCE_AUTOHINT"] = 32] = "FORCE_AUTOHINT";
                FT_LoadFlags[FT_LoadFlags["CROP_BITMAP"] = 64] = "CROP_BITMAP";
                FT_LoadFlags[FT_LoadFlags["PEDANTIC"] = 128] = "PEDANTIC";
                FT_LoadFlags[FT_LoadFlags["IGNORE_GLOBAL_ADVANCE_WIDTH"] = 512] = "IGNORE_GLOBAL_ADVANCE_WIDTH";
                FT_LoadFlags[FT_LoadFlags["NO_RECURSE"] = 1024] = "NO_RECURSE";
                FT_LoadFlags[FT_LoadFlags["IGNORE_TRANSFORM"] = 2048] = "IGNORE_TRANSFORM";
                FT_LoadFlags[FT_LoadFlags["MONOCHROME"] = 4096] = "MONOCHROME";
                FT_LoadFlags[FT_LoadFlags["LINEAR_DESIGN"] = 8192] = "LINEAR_DESIGN";
                FT_LoadFlags[FT_LoadFlags["NO_AUTOHINT"] = 32768] = "NO_AUTOHINT";
                /* Bits 16-19 are used by `FT_LOAD_TARGET_` */
                FT_LoadFlags[FT_LoadFlags["COLOR"] = 1048576] = "COLOR";
                FT_LoadFlags[FT_LoadFlags["COMPUTE_METRICS"] = 2097152] = "COMPUTE_METRICS";
                FT_LoadFlags[FT_LoadFlags["BITMAP_METRICS_ONLY"] = 4194304] = "BITMAP_METRICS_ONLY";
                /* used internally only by certain font drivers */
                FT_LoadFlags[FT_LoadFlags["ADVANCE_ONLY"] = 256] = "ADVANCE_ONLY";
                FT_LoadFlags[FT_LoadFlags["SBITS_ONLY"] = 16384] = "SBITS_ONLY";
            })(FT_LoadFlags || (FT_LoadFlags = {}));
            exports_1("FT_LoadFlags", FT_LoadFlags);
            exports_1("LOAD", FT_LoadFlags);
            (function (FT_Render_Mode) {
                FT_Render_Mode[FT_Render_Mode["NORMAL"] = 0] = "NORMAL";
                FT_Render_Mode[FT_Render_Mode["LIGHT"] = 1] = "LIGHT";
                FT_Render_Mode[FT_Render_Mode["MONO"] = 2] = "MONO";
                FT_Render_Mode[FT_Render_Mode["LCD"] = 3] = "LCD";
                FT_Render_Mode[FT_Render_Mode["LCD_V"] = 4] = "LCD_V";
                FT_Render_Mode[FT_Render_Mode["MAX"] = 5] = "MAX";
            })(FT_Render_Mode || (FT_Render_Mode = {}));
            exports_1("FT_Render_Mode", FT_Render_Mode);
            exports_1("RENDER_MODE", FT_Render_Mode);
            ;
            (function (FT_Kerning_Mode) {
                FT_Kerning_Mode[FT_Kerning_Mode["DEFAULT"] = 0] = "DEFAULT";
                FT_Kerning_Mode[FT_Kerning_Mode["UNFITTED"] = 1] = "UNFITTED";
                FT_Kerning_Mode[FT_Kerning_Mode["UNSCALED"] = 2] = "UNSCALED";
            })(FT_Kerning_Mode || (FT_Kerning_Mode = {}));
            exports_1("FT_Kerning_Mode", FT_Kerning_Mode);
            exports_1("KERNING", FT_Kerning_Mode);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZXR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmVldHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0lBSUEsbUJBQStCLEtBQTRCOztZQUN6RCxPQUFPLElBQUksT0FBTyxDQUFPLENBQUMsT0FBbUIsRUFBRSxFQUFFO2dCQUMvQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQWtCLEVBQVEsRUFBRTtvQkFDcEQsa0JBQUEsSUFBSSxHQUFHLEtBQUssRUFBQztvQkFDYixPQUFPLEVBQUUsQ0FBQztnQkFDWixDQUFDLENBQUMsQ0FBQztZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQztLQUFBOztJQXFHRCxTQUFnQixZQUFZLENBQUMsVUFBb0I7UUFDL0MsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzFDLENBQUM7O0lBUUQsU0FBZ0IsWUFBWSxDQUFDLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLEdBQVc7UUFDN0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzlHLENBQUM7O0lBb0lELFNBQWdCLGVBQWUsQ0FBQyxPQUFtQjtRQUNqRCxNQUFNLE1BQU0sR0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLE1BQU0sTUFBTSxHQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxNQUFNLEdBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsa0JBQWtC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Z0JBQ2xELGdFQUFrRCxDQUFBO2dCQUNsRCxzRUFBa0QsQ0FBQTtnQkFDbEQsNEVBQWtELENBQUE7Z0JBQ2xELHdFQUFrRCxDQUFBO2dCQUNsRCxzRUFBa0QsQ0FBQTtnQkFDbEQsOERBQWtELENBQUE7Z0JBQ2xELGtFQUFrRCxDQUFBO2dCQUNsRCw0REFBa0QsQ0FBQTtnQkFDbEQsb0VBQWtELENBQUE7Z0JBQ2xELDREQUFrRCxDQUFBO2dCQUNsRCw0RUFBa0QsQ0FBQTtnQkFDbEQsMEVBQWtELENBQUE7Z0JBQ2xELHNFQUFrRCxDQUFBO2dCQUNsRCxzRUFBa0QsQ0FBQTtnQkFDbEQsc0VBQWtELENBQUE7Z0JBQ2xELDRFQUFrRCxDQUFBO2dCQUNsRCx3RUFBa0QsQ0FBQTtnQkFDbEQsMEVBQWtELENBQUE7Z0JBQ2xELGdFQUFrRCxDQUFBO2dCQUNsRCxzRUFBa0QsQ0FBQTtnQkFDbEQsMERBQWtELENBQUE7Z0JBQ2xELDhEQUFrRCxDQUFBO2dCQUNsRCxvRUFBa0QsQ0FBQTtnQkFDbEQsc0VBQWtELENBQUE7Z0JBQ2xELHNFQUFrRCxDQUFBO2dCQUNsRCxzRUFBa0QsQ0FBQTtnQkFDbEQsZ0ZBQWtELENBQUE7Z0JBQ2xELDhFQUFrRCxDQUFBO2dCQUNsRCxzRUFBa0QsQ0FBQTtnQkFDbEQsb0VBQWtELENBQUE7Z0JBQ2xELHdFQUFrRCxDQUFBO2dCQUNsRCxnRUFBa0QsQ0FBQTtnQkFDbEQsOERBQWtELENBQUE7Z0JBQ2xELDRFQUFrRCxDQUFBO2dCQUNsRCwrREFBa0QsQ0FBQTtnQkFDbEQsNkRBQWtELENBQUE7Z0JBQ2xELG1FQUFrRCxDQUFBO2dCQUNsRCw2REFBa0QsQ0FBQTtnQkFDbEQsMkRBQWtELENBQUE7Z0JBQ2xELHlEQUFrRCxDQUFBO2dCQUNsRCw2REFBa0QsQ0FBQTtnQkFDbEQsbUVBQWtELENBQUE7Z0JBQ2xELHlEQUFrRCxDQUFBO2dCQUNsRCx1RUFBa0QsQ0FBQTtnQkFDbEQsdURBQWtELENBQUE7Z0JBQ2xELG1FQUFrRCxDQUFBO2dCQUNsRCxxRUFBa0QsQ0FBQTtnQkFDbEQs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