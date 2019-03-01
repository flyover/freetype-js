import * as FT from "freetype-js";

export default async function main(): Promise<void> {
  await FT.default(); // initialize Emscripten module

  let ft_error: FT.Error;

  const ft_library: FT.Library = new FT.Library();
  ft_error = FT.Init_FreeType(ft_library);
  if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }

  console.log("freetype", FT.Library_Version(ft_library));

  const font_url: string = "Consolas.ttf";
  const font_size: number = 72;

  const response: Response = await fetch(font_url);
  const buffer: ArrayBuffer = await response.arrayBuffer();
  const font_file: Uint8Array = new Uint8Array(buffer);

  const ft_face: FT.Face = new FT.Face();
  ft_error = FT.New_Memory_Face(ft_library, font_file, 0, ft_face);
  if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }

  // console.log("face", ft_face);
  console.log("face.family_name", ft_face.family_name);
  console.log("face.style_name", ft_face.style_name);
  console.log("face.num_faces", ft_face.num_faces);
  console.log("face.face_index", ft_face.face_index);
  console.log("face.face_flags", ft_face.face_flags);
  console.log("face.style_flags", ft_face.style_flags);
  console.log("face.num_glyphs", ft_face.num_glyphs);
  console.log("face.bbox", ft_face.bbox);
  console.log("face.units_per_EM", ft_face.units_per_EM);
  console.log("face.ascender", ft_face.ascender);
  console.log("face.descender", ft_face.descender);
  console.log("face.height", ft_face.height);

  const ft_scale: number = font_size / ft_face.units_per_EM;

  const charset: string[] = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".split("");

  let ctx: CanvasRenderingContext2D | null = null;

  if (typeof document !== "undefined") {
    const canvas: HTMLCanvasElement = document.body.appendChild(document.createElement("canvas"));
    ctx = canvas.getContext("2d");
  }

  if (ctx !== null) {
    ctx.translate(10, ctx.canvas.height - 10);
    ctx.scale(1, -1);

    ctx.strokeStyle = "cyan";
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(ctx.canvas.width, 0); ctx.stroke();
  }

  let prev_char: string = "";

  for (const char of charset) {
    const char_code: number = char.charCodeAt(0);
    console.log(char, char_code);

    ft_error = FT.Load_Char(ft_face, char_code, FT.LOAD.NO_SCALE);
    if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }

    const ft_glyph: Readonly<FT.GlyphSlotRec> = ft_face.glyph;
    // console.log("glyph", glyph);
    console.log("glyph.advance", ft_glyph.advance);
    console.log("glyph.metrics", ft_glyph.metrics);
    console.log("glyph.outline", ft_glyph.outline);

    ft_error = FT.Set_Char_Size(ft_face, 0, font_size * 64, 300, 300);
    if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }
    ft_error = FT.Render_Glyph(ft_face.glyph, FT.RENDER_MODE.NORMAL);
    if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }

    // console.log("glyph.bitmap", glyph.bitmap);
    console.log("glyph.bitmap.width", ft_glyph.bitmap.width);
    console.log("glyph.bitmap.rows", ft_glyph.bitmap.rows);
    console.log("glyph.bitmap.pitch", ft_glyph.bitmap.pitch);
    console.log("glyph.bitmap.num_grays", ft_glyph.bitmap.num_grays);
    console.log("glyph.bitmap.pixel_mode", ft_glyph.bitmap.pixel_mode);
    console.log("glyph.bitmap.palette_mode", ft_glyph.bitmap.palette_mode);
    console.log("glyph.bitmap.palette", ft_glyph.bitmap.palette);
    console.log("glyph.bitmap_left", ft_glyph.bitmap_left);
    console.log("glyph.bitmap_top", ft_glyph.bitmap_top);

    if (ft_glyph.bitmap.buffer !== null) {
      const width: number = ft_glyph.bitmap.width;
      const height: number = ft_glyph.bitmap.rows;
      const data: Uint8ClampedArray = ft_glyph.bitmap.buffer;
      const pitch: number = Math.abs(ft_glyph.bitmap.pitch);
      const flow: (y: number) => number = ft_glyph.bitmap.pitch < 0 ? (y: number): number => height - 1 - y : (y: number): number => y;
      let text: string = "";
      text += "╔" + "═".repeat(width) + "╗\n";
      for (let y = 0; y < height; ++y) {
        text += "║";
        for (let x = 0; x < width; ++x) {
          const p: number = data[flow(y) * pitch + x];
          text += " ░▒▓█"[Math.floor(p * 5 / 256)];
        }
        text += "║\n";
      }
      text += "╚" + "═".repeat(width) + "╝\n";
      console.log(text);
    }

    if (ctx !== null) {
      ctx.strokeStyle = "magenta";
      const x: number = ft_glyph.metrics.horiBearingX * ft_scale;
      const y: number = (ft_glyph.metrics.horiBearingY - ft_glyph.metrics.height) * ft_scale;
      const w: number = ft_glyph.metrics.width * ft_scale;
      const h: number = ft_glyph.metrics.height * ft_scale;
      ctx.strokeRect(x, y, w, h);
    }

    if (ctx !== null) {
      ctx.beginPath();
    }

    ft_error = FT.Outline_Decompose(ft_glyph.outline, {
      move_to: (to: Readonly<FT.Vector>): number => {
        if (ctx !== null) {
          ctx.moveTo(to.x * ft_scale, to.y * ft_scale);
        } else {
          console.log("M", to.x, to.y);
        }
        return 0;
      },
      line_to: (to: Readonly<FT.Vector>): number => {
        if (ctx !== null) {
          ctx.lineTo(to.x * ft_scale, to.y * ft_scale);
        } else {
          console.log("L", to.x, to.y);
        }
        return 0;
      },
      conic_to: (cp: Readonly<FT.Vector>, to: Readonly<FT.Vector>): number => {
        if (ctx !== null) {
          ctx.quadraticCurveTo(cp.x * ft_scale, cp.y * ft_scale, to.x * ft_scale, to.y * ft_scale);
        } else {
          console.log("Q", cp.x, cp.y, to.x, to.y);
        }
        return 0;
      },
      cubic_to: (cp1: Readonly<FT.Vector>, cp2: Readonly<FT.Vector>, to: Readonly<FT.Vector>): number => {
        if (ctx !== null) {
          ctx.bezierCurveTo(cp1.x * ft_scale, cp1.y * ft_scale, cp2.x * ft_scale, cp2.y * ft_scale, to.x * ft_scale, to.y * ft_scale);
        } else {
          console.log("C", cp1.x, cp1.y, cp2.x, cp2.y, to.x, to.y);
        }
        return 0;
      },
    });
    if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }

    if (ctx !== null) {
      ctx.fillStyle = "black";
      ctx.fill();
    }

    if (ctx !== null) {
      ctx.translate(ft_glyph.advance.x * ft_scale, ft_glyph.advance.y * ft_scale);
    }

    if (prev_char !== "") {
      const ft_kerning: FT.Vector = new FT.Vector();
      const prev_char_code: number = prev_char.charCodeAt(0);
      ft_error = FT.Get_Kerning(ft_face, FT.Get_Char_Index(ft_face, prev_char_code), FT.Get_Char_Index(ft_face, char_code), FT.KERNING.DEFAULT, ft_kerning);
      if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }
      if ((ft_kerning.x !== 0) || (ft_kerning.y !== 0)) {
        if (ctx !== null) {
          ctx.translate(ft_kerning.x * ft_scale, ft_kerning.y * ft_scale);
        } else {
          console.log("kerning", prev_char, char, ft_kerning);
        }
      }
    }

    prev_char = char;
  }

  ft_error = FT.Done_Face(ft_face);
  if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }

  ft_error = FT.Done_FreeType(ft_library);
  if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }
}
