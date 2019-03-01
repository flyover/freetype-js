import * as Bind from "./bind-freetype";
export { Bind };

let bind: Bind.Module;
export default async function (value?: Partial<Bind.Module>): Promise<void> {
  return new Promise<void>((resolve: () => void) => {
    Bind.default(value).then((value: Bind.Module): void => {
      bind = value;
      resolve();
    });
  });
}
export { bind };

export { FT_Error as Err }; // FT.Err.Ok
export { FT_Error as Error }; // FT.Error
export enum FT_Error {
  Ok = 0,
  Cannot_Open_Resource                        = 0x01,
  Unknown_File_Format                         = 0x02,
  Invalid_File_Format                         = 0x03,
  Invalid_Version                             = 0x04,
  Lower_Module_Version                        = 0x05,
  Invalid_Argument                            = 0x06,
  Unimplemented_Feature                       = 0x07,
  Invalid_Table                               = 0x08,
  Invalid_Offset                              = 0x09,
  Array_Too_Large                             = 0x0A,
  Missing_Module                              = 0x0B,
  Missing_Property                            = 0x0C,
  Invalid_Glyph_Index                         = 0x10,
  Invalid_Character_Code                      = 0x11,
  Invalid_Glyph_Format                        = 0x12,
  Cannot_Render_Glyph                         = 0x13,
  Invalid_Outline                             = 0x14,
  Invalid_Composite                           = 0x15,
  Too_Many_Hints                              = 0x16,
  Invalid_Pixel_Size                          = 0x17,
  Invalid_Handle                              = 0x20,
  Invalid_Library_Handle                      = 0x21,
  Invalid_Driver_Handle                       = 0x22,
  Invalid_Face_Handle                         = 0x23,
  Invalid_Size_Handle                         = 0x24,
  Invalid_Slot_Handle                         = 0x25,
  Invalid_CharMap_Handle                      = 0x26,
  Invalid_Cache_Handle                        = 0x27,
  Invalid_Stream_Handle                       = 0x28,
  Too_Many_Drivers                            = 0x30,
  Too_Many_Extensions                         = 0x31,
  Out_Of_Memory                               = 0x40,
  Unlisted_Object                             = 0x41,
  Cannot_Open_Stream                          = 0x51,
  Invalid_Stream_Seek                         = 0x52,
  Invalid_Stream_Skip                         = 0x53,
  Invalid_Stream_Read                         = 0x54,
  Invalid_Stream_Operation                    = 0x55,
  Invalid_Frame_Operation                     = 0x56,
  Nested_Frame_Access                         = 0x57,
  Invalid_Frame_Read                          = 0x58,
  Raster_Uninitialized                        = 0x60,
  Raster_Corrupted                            = 0x61,
  Raster_Overflow                             = 0x62,
  Raster_Negative_Height                      = 0x63,
  Too_Many_Caches                             = 0x70,
  Invalid_Opcode                              = 0x80,
  Too_Few_Arguments                           = 0x81,
  Stack_Overflow                              = 0x82,
  Code_Overflow                               = 0x83,
  Bad_Argument                                = 0x84,
  Divide_By_Zero                              = 0x85,
  Invalid_Reference                           = 0x86,
  Debug_OpCode                                = 0x87,
  ENDF_In_Exec_Stream                         = 0x88,
  Nested_DEFS                                 = 0x89,
  Invalid_CodeRange                           = 0x8A,
  Execution_Too_Long                          = 0x8B,
  Too_Many_Function_Defs                      = 0x8C,
  Too_Many_Instruction_Defs                   = 0x8D,
  Table_Missing                               = 0x8E,
  Horiz_Header_Missing                        = 0x8F,
  Locations_Missing                           = 0x90,
  Name_Table_Missing                          = 0x91,
  CMap_Table_Missing                          = 0x92,
  Hmtx_Table_Missing                          = 0x93,
  Post_Table_Missing                          = 0x94,
  Invalid_Horiz_Metrics                       = 0x95,
  Invalid_CharMap_Format                      = 0x96,
  Invalid_PPem                                = 0x97,
  Invalid_Vert_Metrics                        = 0x98,
  Could_Not_Find_Context                      = 0x99,
  Invalid_Post_Table_Format                   = 0x9A,
  Invalid_Post_Table                          = 0x9B,
  DEF_In_Glyf_Bytecode                        = 0x9C,
  Missing_Bitmap                              = 0x9D,
  Syntax_Error                                = 0xA0,
  Stack_Underflow                             = 0xA1,
  Ignore                                      = 0xA2,
  No_Unicode_Glyph_Name                       = 0xA3,
  Glyph_Too_Big                               = 0xA4,
  Missing_Startfont_Field                     = 0xB0,
  Missing_Font_Field                          = 0xB1,
  Missing_Size_Field                          = 0xB2,
  Missing_Fontboundingbox_Field               = 0xB3,
  Missing_Chars_Field                         = 0xB4,
  Missing_Startchar_Field                     = 0xB5,
  Missing_Encoding_Field                      = 0xB6,
  Missing_Bbx_Field                           = 0xB7,
  Bbx_Too_Big                                 = 0xB8,
  Corrupted_Font_Header                       = 0xB9,
  Corrupted_Font_Glyphs                       = 0xBA,
}

export function Error_String(error_code: FT_Error): string {
  return bind.FT_Error_String(error_code);
}

export { interface_FT_GlyphSlotRec as GlyphSlotRec } from "./bind-freetype"; // FT.GlyphSlot
export { interface_FT_Bitmap as Bitmap } from "./bind-freetype"; // FT.Outline
export { interface_FT_Outline as Outline } from "./bind-freetype"; // FT.Outline
export { interface_FT_Glyph_Metrics as Glyph_Metrics } from "./bind-freetype"; // FT.Glyph_Metrics
export { interface_FT_Outline_Funcs as Outline_Funcs } from "./bind-freetype"; // FT.Outline_Funcs

export function FT_IMAGE_TAG(_x1: string, _x2: string, _x3: string, _x4: string): number {
  return (_x1.charCodeAt(0) << 24) | (_x2.charCodeAt(0) << 16) | (_x3.charCodeAt(0) << 8) | _x4.charCodeAt(0);
}

export { FT_Glyph_Format as GLYPH_FORMAT }; // FT.GLYPH_FORMAT.NONE
export enum FT_Glyph_Format {
  NONE = 0, // FT_IMAGE_TAG( 0, 0, 0, 0 ),
  COMPOSITE = FT_IMAGE_TAG( 'c', 'o', 'm', 'p' ),
  BITMAP    = FT_IMAGE_TAG( 'b', 'i', 't', 's' ),
  OUTLINE   = FT_IMAGE_TAG( 'o', 'u', 't', 'l' ),
  PLOTTER   = FT_IMAGE_TAG( 'p', 'l', 'o', 't' )
}

export { FT_Vector as Vector }; // FT.Vector
export class FT_Vector implements Bind.interface_FT_Vector {
  public x: number = 0;
  public y: number = 0;
}

export { FT_BBox as BBox }; // FT.BBox
export class FT_BBox implements Bind.interface_FT_BBox {
  public xMin: Bind.FT_Pos = 0; public yMin: Bind.FT_Pos = 0;
  public xMax: Bind.FT_Pos = 0; public yMax: Bind.FT_Pos = 0;
}

export { FT_Pixel_Mode as PIXEL_MODE }; // FT.PIXEL_MODE.NONE
export enum FT_Pixel_Mode {
  NONE = 0,
  MONO,
  GRAY,
  GRAY2,
  GRAY4,
  LCD,
  LCD_V,
  BGRA,
  MAX
};

export { FT_Library as Library }; // FT.Library
export class FT_Library {
  public bind: Bind.FT_Library = [ null ];

  public init(): void {
    const error: Bind.FT_Error = bind.FT_Init_FreeType(this.bind);
    if (error !== FT_Error.Ok) { throw new Error("Library:init " + error.toString()); }
  }

  public done(): void {
    const error: Bind.FT_Error = bind.FT_Done_FreeType(this.bind);
    if (error !== FT_Error.Ok) { throw new Error("Library:done " + error.toString()); }
  }
}

export { FT_Face as Face }; // FT.Face
export class FT_Face {
  public bind: Bind.FT_Face = [ null ];

  private get _bind(): Bind.reference_FT_FaceRec {
    if (this.bind[0] === null) { throw new Error(); }
    return this.bind[0];
  }

  // FT_Long           num_faces;
  public get num_faces(): Bind.FT_Long { return this._bind.num_faces; }
  // FT_Long           face_index;
  public get face_index(): Bind.FT_Long { return this._bind.face_index; }

  // FT_Long           face_flags;
  public get face_flags(): Bind.FT_Long { return this._bind.face_flags; }
  // FT_Long           style_flags;
  public get style_flags(): Bind.FT_Long { return this._bind.style_flags; }

  // FT_Long           num_glyphs;
  public get num_glyphs(): Bind.FT_Long { return this._bind.num_glyphs; }

  // FT_String*        family_name;
  public get family_name(): string { return this._bind.family_name; }
  // FT_String*        style_name;
  public get style_name(): string { return this._bind.style_name; }

  // FT_Int            num_fixed_sizes;
  // FT_Bitmap_Size*   available_sizes;

  // FT_Int            num_charmaps;
  // FT_CharMap*       charmaps;

  // FT_Generic        generic;

  // /*# The following member variables (down to `underline_thickness`) */
  // /*# are only relevant to scalable outlines; cf. @FT_Bitmap_Size    */
  // /*# for bitmap fonts.                                              */
  // FT_BBox           bbox;
  public get bbox(): Readonly<Bind.interface_FT_BBox> { return this._bind.bbox; }

  // FT_UShort         units_per_EM;
  public get units_per_EM(): Bind.FT_UShort { return this._bind.units_per_EM; }
  // FT_Short          ascender;
  public get ascender(): Bind.FT_Short { return this._bind.ascender; }
  // FT_Short          descender;
  public get descender(): Bind.FT_Short { return this._bind.descender; }
  // FT_Short          height;
  public get height(): Bind.FT_Short { return this._bind.height; }

  // FT_Short          max_advance_width;
  public get max_advance_width(): Bind.FT_Short { return this._bind.max_advance_width; }
  // FT_Short          max_advance_height;
  public get max_advance_height(): Bind.FT_Short { return this._bind.max_advance_height; }

  // FT_Short          underline_position;
  public get underline_position(): Bind.FT_Short { return this._bind.underline_position; }
  // FT_Short          underline_thickness;
  public get underline_thickness(): Bind.FT_Short { return this._bind.underline_thickness; }

  // FT_GlyphSlot      glyph;
  public get glyph(): Readonly<Bind.reference_FT_GlyphSlotRec> { return this._bind.glyph; }
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

export function Library_Version(library: FT_Library): { major: number, minor: number, patch: number } {
  const amajor: [number] = [0];
  const aminor: [number] = [0];
  const apatch: [number] = [0];
  bind.FT_Library_Version(library.bind, amajor, aminor, apatch);
  return { major: amajor[0], minor: aminor[0], patch: apatch[0] };
}

export function Init_FreeType(library: FT_Library): FT_Error {
  return bind.FT_Init_FreeType(library.bind);
}

export function Done_FreeType(library: FT_Library): FT_Error {
  return bind.FT_Done_FreeType(library.bind);
}

export function New_Memory_Face(library: FT_Library, file: Uint8Array, face_index: Bind.FT_Long, face: FT_Face): FT_Error {
  return bind.FT_New_Memory_Face(library.bind, file, face_index, face.bind);
}
export function Done_Face(face: FT_Face): FT_Error {
  return bind.FT_Done_Face(face.bind);
}

export function Get_Char_Index(face: FT_Face, char_code: Bind.FT_ULong): Bind.FT_UInt {
  return bind.FT_Get_Char_Index(face.bind, char_code);
}

export { FT_LoadFlags as LOAD }; // FT.LOAD.DEFAULT
export enum FT_LoadFlags {
  DEFAULT = 0,
  NO_SCALE                     = ( 1 << 0 ),
  NO_HINTING                   = ( 1 << 1 ),
  RENDER                       = ( 1 << 2 ),
  NO_BITMAP                    = ( 1 << 3 ),
  VERTICAL_LAYOUT              = ( 1 << 4 ),
  FORCE_AUTOHINT               = ( 1 << 5 ),
  CROP_BITMAP                  = ( 1 << 6 ),
  PEDANTIC                     = ( 1 << 7 ),
  IGNORE_GLOBAL_ADVANCE_WIDTH  = ( 1 << 9 ),
  NO_RECURSE                   = ( 1 << 10 ),
  IGNORE_TRANSFORM             = ( 1 << 11 ),
  MONOCHROME                   = ( 1 << 12 ),
  LINEAR_DESIGN                = ( 1 << 13 ),
  NO_AUTOHINT                  = ( 1 << 15 ),
  /* Bits 16-19 are used by `FT_LOAD_TARGET_` */
  COLOR                        = ( 1 << 20 ),
  COMPUTE_METRICS              = ( 1 << 21 ),
  BITMAP_METRICS_ONLY          = ( 1 << 22 ),
  /* used internally only by certain font drivers */
  ADVANCE_ONLY                 = ( 1 << 8 ),
  SBITS_ONLY                   = ( 1 << 14 ),
}

export function Load_Char(face: FT_Face, char_code: Bind.FT_ULong, load_flags: FT_LoadFlags = FT_LoadFlags.DEFAULT): FT_Error {
  return bind.FT_Load_Char(face.bind, char_code, load_flags);
}

export function Set_Char_Size(face: FT_Face, char_width: Bind.FT_F26Dot6, char_height: Bind.FT_F26Dot6, horz_resolution: Bind.FT_UInt, vert_resolution: Bind.FT_UInt): FT_Error {
  return bind.FT_Set_Char_Size(face.bind, char_width, char_height, horz_resolution, vert_resolution);
}

export { FT_Render_Mode as RENDER_MODE }; // FT.RENDER_MODE.NORMAL
export enum FT_Render_Mode {
  NORMAL = 0,
  LIGHT,
  MONO,
  LCD,
  LCD_V,
  MAX
};

export function Render_Glyph(slot: Bind.interface_FT_GlyphSlotRec, render_mode: FT_Render_Mode = FT_Render_Mode.NORMAL): FT_Error {
  return bind.FT_Render_Glyph(slot, render_mode);
}

export { FT_Kerning_Mode as KERNING }; // FT.KERNING.DEFAULT
export enum FT_Kerning_Mode {
  DEFAULT = 0,
  UNFITTED,
  UNSCALED
}

export function Get_Kerning(face: FT_Face, left_glyph: Bind.FT_UInt, right_glyph: Bind.FT_UInt, kern_mode: FT_Kerning_Mode, akerning: Bind.interface_FT_Vector = new FT_Vector()): FT_Error {
  return bind.FT_Get_Kerning(face.bind, left_glyph, right_glyph, kern_mode, akerning);
}

export function Outline_Decompose<T = undefined>(outline: Bind.interface_FT_Outline, func_interface: Bind.interface_FT_Outline_Funcs<T>, user?: T): FT_Error {
  return bind.FT_Outline_Decompose<T>(outline, func_interface, user);
}
