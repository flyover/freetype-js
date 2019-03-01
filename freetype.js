System.register(["./bind-freetype"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnJlZXR5cGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJmcmVldHlwZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7SUFJQSxtQkFBK0IsS0FBNEI7O1lBQ3pELE9BQU8sSUFBSSxPQUFPLENBQU8sQ0FBQyxPQUFtQixFQUFFLEVBQUU7Z0JBQy9DLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBa0IsRUFBUSxFQUFFO29CQUNwRCxrQkFBQSxJQUFJLEdBQUcsS0FBSyxFQUFDO29CQUNiLE9BQU8sRUFBRSxDQUFDO2dCQUNaLENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDO0tBQUE7O0lBcUdELFNBQWdCLFlBQVksQ0FBQyxVQUFvQjtRQUMvQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDMUMsQ0FBQzs7SUFRRCxTQUFnQixZQUFZLENBQUMsR0FBVyxFQUFFLEdBQVcsRUFBRSxHQUFXLEVBQUUsR0FBVztRQUM3RSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDOUcsQ0FBQzs7SUFvSUQsU0FBZ0IsZUFBZSxDQUFDLE9BQW1CO1FBQ2pELE1BQU0sTUFBTSxHQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsTUFBTSxNQUFNLEdBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixNQUFNLE1BQU0sR0FBYSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxrQkFBa0Is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QkFDbEQsZ0VBQWtELENBQUE7Z0JBQ2xELHNFQUFrRCxDQUFBO2dCQUNsRCw0RUFBa0QsQ0FBQTtnQkFDbEQsd0VBQWtELENBQUE7Z0JBQ2xELHNFQUFrRCxDQUFBO2dCQUNsRCw4REFBa0QsQ0FBQTtnQkFDbEQsa0VBQWtELENBQUE7Z0JBQ2xELDREQUFrRCxDQUFBO2dCQUNsRCxvRUFBa0QsQ0FBQTtnQkFDbEQsNERBQWtELENBQUE7Z0JBQ2xELDRFQUFrRCxDQUFBO2dCQUNsRCwwRUFBa0QsQ0FBQTtnQkFDbEQsc0VBQWtELENBQUE7Z0JBQ2xELHNFQUFrRCxDQUFBO2dCQUNsRCxzRUFBa0QsQ0FBQTtnQkFDbEQsNEVBQWtELENBQUE7Z0JBQ2xELHdFQUFrRCxDQUFBO2dCQUNsRCwwRUFBa0QsQ0FBQTtnQkFDbEQsZ0VBQWtELENBQUE7Z0JBQ2xELHNFQUFrRCxDQUFBO2dCQUNsRCwwREFBa0QsQ0FBQTtnQkFDbEQsOERBQWtELENBQUE7Z0JBQ2xELG9FQUFrRCxDQUFBO2dCQUNsRCxzRUFBa0QsQ0FBQTtnQkFDbEQsc0VBQWtELENBQUE7Z0JBQ2xELHNFQUFrRCxDQUFBO2dCQUNsRCxnRkFBa0QsQ0FBQTtnQkFDbEQsOEVBQWtELENBQUE7Z0JBQ2xELHNFQUFrRCxDQUFBO2dCQUNsRCxvRUFBa0QsQ0FBQTtnQkFDbEQsd0VBQWtELENBQUE7Z0JBQ2xELGdFQUFrRCxDQUFBO2dCQUNsRCw4REFBa0QsQ0FBQTtnQkFDbEQsNEVBQWtELENBQUE7Z0JBQ2xELCtEQUFrRCxDQUFBO2dCQUNsRCw2REFBa0QsQ0FBQTtnQkFDbEQsbUVBQWtELENBQUE7Z0JBQ2xELDZEQUFrRCxDQUFBO2dCQUNsRCwyREFBa0QsQ0FBQTtnQkFDbEQseURBQWtELENBQUE7Z0JBQ2xELDZEQUFrRCxDQUFBO2dCQUNsRCxtRUFBa0QsQ0FBQTtnQkFDbEQseURBQWtELENBQUE7Z0JBQ2xELHVFQUFrRCxDQUFBO2dCQUNsRCx1REFBa0QsQ0FBQTtnQkFDbEQsbUVBQWtELENBQUE7Z0JBQ2xELHFFQUFrRCxDQUFBO2dCQUNsRCw2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