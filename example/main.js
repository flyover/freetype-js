System.register(["freetype-js"], function (exports_1, context_1) {
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
    var FT;
    var __moduleName = context_1 && context_1.id;
    function main() {
        return __awaiter(this, void 0, void 0, function* () {
            yield FT.default(); // initialize Emscripten module
            let ft_error;
            const ft_library = new FT.Library();
            ft_error = FT.Init_FreeType(ft_library);
            if (ft_error !== FT.Err.Ok) {
                throw new Error(FT.Error_String(ft_error));
            }
            console.log("freetype", FT.Library_Version(ft_library));
            const font_url = "Consolas.ttf";
            const font_size = 72;
            const response = yield fetch(font_url);
            const buffer = yield response.arrayBuffer();
            const font_file = new Uint8Array(buffer);
            const ft_face = new FT.Face();
            ft_error = FT.New_Memory_Face(ft_library, font_file, 0, ft_face);
            if (ft_error !== FT.Err.Ok) {
                throw new Error(FT.Error_String(ft_error));
            }
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
            const ft_scale = font_size / ft_face.units_per_EM;
            const charset = " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~".split("");
            for (const char of charset) {
                const char_code = char.charCodeAt(0);
                console.log(char, char_code);
                ft_error = FT.Load_Char(ft_face, char_code, FT.LOAD.NO_SCALE);
                if (ft_error !== FT.Err.Ok) {
                    throw new Error(FT.Error_String(ft_error));
                }
                const ft_glyph = ft_face.glyph;
                // console.log("glyph", glyph);
                console.log("glyph.advance", ft_glyph.advance);
                console.log("glyph.metrics", ft_glyph.metrics);
                console.log("glyph.outline", ft_glyph.outline);
                ft_error = FT.Set_Char_Size(ft_face, 0, font_size * 64, 300, 300);
                if (ft_error !== FT.Err.Ok) {
                    throw new Error(FT.Error_String(ft_error));
                }
                ft_error = FT.Render_Glyph(ft_face.glyph, FT.RENDER_MODE.NORMAL);
                if (ft_error !== FT.Err.Ok) {
                    throw new Error(FT.Error_String(ft_error));
                }
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
                    const width = ft_glyph.bitmap.width;
                    const height = ft_glyph.bitmap.rows;
                    const data = ft_glyph.bitmap.buffer;
                    const pitch = Math.abs(ft_glyph.bitmap.pitch);
                    const flow = ft_glyph.bitmap.pitch < 0 ? (y) => height - 1 - y : (y) => y;
                    let text = "";
                    text += "╔" + "═".repeat(width) + "╗\n";
                    for (let y = 0; y < height; ++y) {
                        text += "║";
                        for (let x = 0; x < width; ++x) {
                            const p = data[flow(y) * pitch + x];
                            text += " ░▒▓█"[Math.floor(p * 5 / 256)];
                        }
                        text += "║\n";
                    }
                    text += "╚" + "═".repeat(width) + "╝\n";
                    console.log(text);
                }
                const x = ft_glyph.metrics.horiBearingX;
                const y = ft_glyph.metrics.horiBearingY;
                const w = ft_glyph.metrics.width;
                const h = ft_glyph.metrics.height;
                let ctx = null;
                let svg = null;
                if (typeof document !== "undefined") {
                    const canvas = document.body.appendChild(document.createElement("canvas"));
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
                const svg_path_data = [];
                ft_error = FT.Outline_Decompose(ft_glyph.outline, {
                    move_to: (to) => {
                        if (ctx !== null) {
                            ctx.moveTo(to.x, to.y);
                        }
                        svg_path_data.push(`M ${to.x} ${to.y}`);
                        return FT.Err.Ok;
                    },
                    line_to: (to) => {
                        if (ctx !== null) {
                            ctx.lineTo(to.x, to.y);
                        }
                        svg_path_data.push(`L ${to.x} ${to.y}`);
                        return FT.Err.Ok;
                    },
                    conic_to: (cp, to) => {
                        if (ctx !== null) {
                            ctx.quadraticCurveTo(cp.x, cp.y, to.x, to.y);
                        }
                        svg_path_data.push(`Q ${cp.x} ${cp.y} ${to.x} ${to.y}`);
                        return FT.Err.Ok;
                    },
                    cubic_to: (cp1, cp2, to) => {
                        if (ctx !== null) {
                            ctx.bezierCurveTo(cp1.x, cp1.y, cp2.x, cp2.y, to.x, to.y);
                        }
                        svg_path_data.push(`C ${cp1.x} ${cp1.y} ${cp2.x} ${cp2.y} ${to.x} ${to.y}`);
                        return FT.Err.Ok;
                    },
                });
                if (ft_error !== FT.Err.Ok) {
                    throw new Error(FT.Error_String(ft_error));
                }
                if (ctx !== null) {
                    ctx.fillStyle = "black";
                    ctx.fill();
                }
                if (svg !== null) {
                    const path = svg.appendChild(document.createElementNS("http://www.w3.org/2000/svg", "path"));
                    path.setAttribute("fill", "black");
                    path.setAttribute("d", svg_path_data.join(" "));
                }
            }
            ft_error = FT.Done_Face(ft_face);
            if (ft_error !== FT.Err.Ok) {
                throw new Error(FT.Error_String(ft_error));
            }
            ft_error = FT.Done_FreeType(ft_library);
            if (ft_error !== FT.Err.Ok) {
                throw new Error(FT.Error_String(ft_error));
            }
        });
    }
    exports_1("default", main);
    return {
        setters: [
            function (FT_1) {
                FT = FT_1;
            }
        ],
        execute: function () {
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztJQUVBLFNBQThCLElBQUk7O1lBQ2hDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsK0JBQStCO1lBRW5ELElBQUksUUFBa0IsQ0FBQztZQUV2QixNQUFNLFVBQVUsR0FBZSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNoRCxRQUFRLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN4QyxJQUFJLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtnQkFBRSxNQUFNLElBQUksS0FBSyxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzthQUFFO1lBRTNFLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUV4RCxNQUFNLFFBQVEsR0FBVyxjQUFjLENBQUM7WUFDeEMsTUFBTSxTQUFTLEdBQVcsRUFBRSxDQUFDO1lBRTdCLE1BQU0sUUFBUSxHQUFhLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2pELE1BQU0sTUFBTSxHQUFnQixNQUFNLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN6RCxNQUFNLFNBQVMsR0FBZSxJQUFJLFVBQVUsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUVyRCxNQUFNLE9BQU8sR0FBWSxJQUFJLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUN2QyxRQUFRLEdBQUcsRUFBRSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQztZQUNqRSxJQUFJLFFBQVEsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRTtnQkFBRSxNQUFN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