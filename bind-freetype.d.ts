import * as Emscripten from "./emscripten";

// emcc -s MODULARIZE=0
// declare const Module: ImGuiModule; export default Module;

// emcc -s MODULARIZE=1
export default function Module(Module?: Partial<Module>): Promise<Module>;

export interface mallinfo {
  arena: number;
  ordblks: number;
  smblks: number;
  hblks: number;
  hblkhd: number;
  usmblks: number;
  fsmblks: number;
  uordblks: number;
  fordblks: number;
  keepcost: number;
}

// fterrors.h

export type FT_Error = number;

// fttypes.h

export type FT_Int = number;
export type FT_UInt = number;
export type FT_Short = number;
export type FT_UShort = number;
export type FT_Long = number;
export type FT_ULong = number;
export type FT_Int32 = number;

export type FT_Fixed = number;
export type FT_F26Dot6 = number;

export type FT_Pos = number;

export type FT_Glyph_Format = number;

export interface reference_FT_Vector extends Emscripten.EmscriptenClassReference, interface_FT_Vector {}
export interface interface_FT_Vector {
  x: FT_Pos;
  y: FT_Pos;
}

export interface reference_FT_BBox extends Emscripten.EmscriptenClassReference, interface_FT_BBox {}
export interface interface_FT_BBox {
  xMin: FT_Pos, yMin: FT_Pos;
  xMax: FT_Pos, yMax: FT_Pos;
}

export interface reference_FT_Glyph_Metrics extends Emscripten.EmscriptenClassReference, interface_FT_Glyph_Metrics {}
export interface interface_FT_Glyph_Metrics {
  width: FT_Pos;
  height: FT_Pos;

  horiBearingX: FT_Pos;
  horiBearingY: FT_Pos;
  horiAdvance: FT_Pos;

  vertBearingX: FT_Pos;
  vertBearingY: FT_Pos;
  vertAdvance: FT_Pos;
}

export type FT_Render_Mode = number;

export interface reference_FT_Bitmap extends Emscripten.EmscriptenClassReference, interface_FT_Bitmap {}
export interface interface_FT_Bitmap {
  // unsigned int    rows;
  readonly rows: number;
  // unsigned int    width;
  readonly width: number;
  // int             pitch;
  readonly pitch: number;
  // unsigned char*  buffer;
  readonly buffer: Uint8ClampedArray | null;
  // unsigned short  num_grays;
  readonly num_grays: number;
  // unsigned char   pixel_mode;
  readonly pixel_mode: number;
  // unsigned char   palette_mode;
  readonly palette_mode: number;
  // void*           palette;
  readonly palette: Uint8ClampedArray | null;
}

export interface reference_FT_Outline extends Emscripten.EmscriptenClassReference, interface_FT_Outline {}
export interface interface_FT_Outline {}

export interface reference_FT_GlyphSlotRec extends Emscripten.EmscriptenClassReference, interface_FT_GlyphSlotRec {}
export interface interface_FT_GlyphSlotRec {
  // FT_Library        library;
  // FT_Face           face;
  // FT_GlyphSlot      next;
  // FT_UInt           glyph_index; /* new in 2.10; was reserved previously */
  // readonly glyph_index: FT_UInt;
  // FT_Generic        generic;
  
  // FT_Glyph_Metrics  metrics;
  readonly metrics: Readonly<reference_FT_Glyph_Metrics>;
  // FT_Fixed          linearHoriAdvance;
  readonly linearHoriAdvance: FT_Fixed;
  // FT_Fixed          linearVertAdvance;
  readonly linearVertAdvance: FT_Fixed;
  // FT_Vector         advance;
  readonly advance: Readonly<reference_FT_Vector>;

  // FT_Glyph_Format   format;
  readonly format: FT_Glyph_Format;

  // FT_Bitmap         bitmap;
  readonly bitmap: reference_FT_Bitmap;
  // FT_Int            bitmap_left;
  readonly bitmap_left: FT_Int;
  // FT_Int            bitmap_top;
  readonly bitmap_top: FT_Int;

  // FT_Outline        outline;
  readonly outline: Readonly<reference_FT_Outline>;

  // FT_UInt           num_subglyphs;
  // FT_SubGlyph       subglyphs;

  // void*             control_data;
  // long              control_len;

  // FT_Pos            lsb_delta;
  // FT_Pos            rsb_delta;

  // void*             other;

  // FT_Slot_Internal  internal;
}

export type FT_Face = [ reference_FT_FaceRec | null ];
export interface reference_FT_FaceRec extends Emscripten.EmscriptenClassReference {
  // FT_Long           num_faces;
  readonly num_faces: FT_Long;
  // FT_Long           face_index;
  readonly face_index: FT_Long;

  // FT_Long           face_flags;
  readonly face_flags: FT_Long;
  // FT_Long           style_flags;
  readonly style_flags: FT_Long;

  // FT_Long           num_glyphs;
  readonly num_glyphs: FT_Long;

  // FT_String*        family_name;
  readonly family_name: string;
  // FT_String*        style_name;
  readonly style_name: string;

  // FT_Int            num_fixed_sizes;
  // FT_Bitmap_Size*   available_sizes;

  // FT_Int            num_charmaps;
  // FT_CharMap*       charmaps;

  // FT_Generic        generic;

  // /*# The following member variables (down to `underline_thickness`) */
  // /*# are only relevant to scalable outlines; cf. @FT_Bitmap_Size    */
  // /*# for bitmap fonts.                                              */
  // FT_BBox           bbox;
  readonly bbox: Readonly<reference_FT_BBox>;

  // FT_UShort         units_per_EM;
  readonly units_per_EM: FT_UShort;
  // FT_Short          ascender;
  readonly ascender: FT_Short;
  // FT_Short          descender;
  readonly descender: FT_Short;
  // FT_Short          height;
  readonly height: FT_Short;

  // FT_Short          max_advance_width;
  readonly max_advance_width: FT_Short;
  // FT_Short          max_advance_height;
  readonly max_advance_height: FT_Short;

  // FT_Short          underline_position;
  readonly underline_position: FT_Short;
  // FT_Short          underline_thickness;
  readonly underline_thickness: FT_Short;

  // FT_GlyphSlot      glyph;
  readonly glyph: Readonly<reference_FT_GlyphSlotRec>;
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

export type FT_Library = [ number | null ]; // opaque pointer

export type FT_Outline_MoveToFunc<T = undefined> = (to: Readonly<reference_FT_Vector>, user?: T) => number;
export type FT_Outline_LineToFunc<T = undefined> = (to: Readonly<reference_FT_Vector>, user?: T) => number;
export type FT_Outline_ConicToFunc<T = undefined> = (control: Readonly<reference_FT_Vector>, to: Readonly<reference_FT_Vector>, user?: T) => number;
export type FT_Outline_CubicToFunc<T = undefined> = (control1: Readonly<reference_FT_Vector>, control2: Readonly<reference_FT_Vector>, to: Readonly<reference_FT_Vector>, user?: T) => number;

export interface interface_FT_Outline_Funcs<T = undefined> {
  move_to: FT_Outline_MoveToFunc<T>;
  line_to: FT_Outline_LineToFunc<T>;
  conic_to: FT_Outline_ConicToFunc<T>;
  cubic_to: FT_Outline_CubicToFunc<T>;

  shift?: number; // int
  delta?: FT_Pos;
}

export interface Module extends Emscripten.EmscriptenModule {

  mallinfo(): mallinfo;

  FREETYPE_MAJOR: number;
  FREETYPE_MINOR: number;
  FREETYPE_PATCH: number;

  FT_Error_String(error_code: FT_Error): string;

  FT_Library_Version(library: FT_Library, amajor: [number], aminor: [number], apatch: [number]): void;

  FT_Init_FreeType(library: FT_Library): FT_Error;
  FT_Done_FreeType(library: FT_Library): FT_Error;

  FT_New_Memory_Face(library: FT_Library, file: Uint8Array, face_index: FT_Long, face: FT_Face): FT_Error;
  FT_Done_Face(face: FT_Face): FT_Error;
  FT_Get_Char_Index(face: FT_Face, char_code: FT_ULong): FT_UInt;
  FT_Load_Glyph(face: FT_Face, glyph_index: FT_UInt, load_flags: FT_Int32): FT_Error;
  FT_Load_Char(face: FT_Face, char_code: FT_ULong, load_flags: FT_Int32): FT_Error;
  FT_Set_Char_Size(face: FT_Face, char_width: FT_F26Dot6, char_height: FT_F26Dot6, horz_resolution: FT_UInt, vert_resolution: FT_UInt): FT_Error;
  FT_Get_Kerning(face: FT_Face, left_glyph: FT_UInt, right_glyph: FT_UInt, kern_mode: FT_UInt, akerning: interface_FT_Vector): FT_Error;

  FT_Render_Glyph(slot: interface_FT_GlyphSlotRec, render_mode: FT_Render_Mode): FT_Error;

  FT_Outline_Decompose<T = undefined>(outline: interface_FT_Outline, func_interface: interface_FT_Outline_Funcs<T>, user?: T): FT_Error;
}
