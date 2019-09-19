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

    const x: number = ft_glyph.metrics.horiBearingX;
    const y: number = ft_glyph.metrics.horiBearingY;
    const w: number = ft_glyph.metrics.width;
    const h: number = ft_glyph.metrics.height;

    let ctx: CanvasRenderingContext2D | null = null;

    let svg: SVGElement | null = null;

    if (typeof document !== "undefined") {
      const canvas: HTMLCanvasElement = document.body.appendChild(document.createElement("canvas"));
      ctx = canvas.getContext("2d");

      svg = document.body.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "svg"));
      svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    }
    
    if (ctx !== null) {
      ctx.canvas.style.width = `${ctx.canvas.width = Math.ceil(w * ft_scale)}px`;
      ctx.canvas.style.height = `${ctx.canvas.height = Math.ceil(h * ft_scale)}px`;
      ctx.scale(ft_scale, ft_scale);
      ctx.translate(-x, -(y - h));
      ctx.beginPath();
    }

    if (svg !== null) {
      svg.setAttribute("viewBox", `${x} ${y - h} ${w} ${h}`);
      svg.setAttribute("width", `${Math.ceil(w * ft_scale)}`);
      svg.setAttribute("height", `${Math.ceil(h * ft_scale)}`);
    }

    const svg_path_data: string[] = [];

    ft_error = FT.Outline_Decompose(ft_glyph.outline, {
      move_to: (to: Readonly<FT.Vector>): number => {
        if (ctx !== null) { ctx.moveTo(to.x, to.y); }
        svg_path_data.push(`M ${to.x} ${to.y}`);
        return FT.Err.Ok;
      },
      line_to: (to: Readonly<FT.Vector>): number => {
        if (ctx !== null) { ctx.lineTo(to.x, to.y); }
        svg_path_data.push(`L ${to.x} ${to.y}`);
        return FT.Err.Ok;
      },
      conic_to: (cp: Readonly<FT.Vector>, to: Readonly<FT.Vector>): number => {
        if (ctx !== null) { ctx.quadraticCurveTo(cp.x, cp.y, to.x, to.y); }
        svg_path_data.push(`Q ${cp.x} ${cp.y} ${to.x} ${to.y}`);
        return FT.Err.Ok;
      },
      cubic_to: (cp1: Readonly<FT.Vector>, cp2: Readonly<FT.Vector>, to: Readonly<FT.Vector>): number => {
        if (ctx !== null) { ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, to.x, to.y); }
        svg_path_data.push(`C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${to.x} ${to.y}`);
        return FT.Err.Ok;
      },
    });
    if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }

    if (ctx !== null) {
      ctx.fillStyle = "black";
      ctx.fill();
    }

    if (svg !== null) {
      const path: SVGPathElement = svg.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "path"));
      path.setAttribute("fill", "black");
      path.setAttribute("d", svg_path_data.join(" "));
    }
  }

  ft_error = FT.Done_Face(ft_face);
  if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }

  ft_error = FT.Done_FreeType(ft_library);
  if (ft_error !== FT.Err.Ok) { throw new Error(FT.Error_String(ft_error)); }
}
