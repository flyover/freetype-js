System.register(["freetype-js"], function (exports_1, context_1) {
    "use strict";
    var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
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
            let ctx = null;
            if (typeof document !== "undefined") {
                const canvas = document.body.appendChild(document.createElement("canvas"));
                ctx = canvas.getContext("2d");
            }
            if (ctx !== null) {
                ctx.translate(10, ctx.canvas.height - 10);
                ctx.scale(1, -1);
                ctx.strokeStyle = "cyan";
                ctx.beginPath();
                ctx.moveTo(0, 0);
                ctx.lineTo(ctx.canvas.width, 0);
                ctx.stroke();
            }
            let prev_char = "";
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
                if (ctx !== null) {
                    ctx.strokeStyle = "magenta";
                    const x = ft_glyph.metrics.horiBearingX * ft_scale;
                    const y = (ft_glyph.metrics.horiBearingY - ft_glyph.metrics.height) * ft_scale;
                    const w = ft_glyph.metrics.width * ft_scale;
                    const h = ft_glyph.metrics.height * ft_scale;
                    ctx.strokeRect(x, y, w, h);
                }
                if (ctx !== null) {
                    ctx.beginPath();
                }
                ft_error = FT.Outline_Decompose(ft_glyph.outline, {
                    move_to: (to) => {
                        if (ctx !== null) {
                            ctx.moveTo(to.x * ft_scale, to.y * ft_scale);
                        }
                        else {
                            console.log("M", to.x, to.y);
                        }
                        return 0;
                    },
                    line_to: (to) => {
                        if (ctx !== null) {
                            ctx.lineTo(to.x * ft_scale, to.y * ft_scale);
                        }
                        else {
                            console.log("L", to.x, to.y);
                        }
                        return 0;
                    },
                    conic_to: (cp, to) => {
                        if (ctx !== null) {
                            ctx.quadraticCurveTo(cp.x * ft_scale, cp.y * ft_scale, to.x * ft_scale, to.y * ft_scale);
                        }
                        else {
                            console.log("Q", cp.x, cp.y, to.x, to.y);
                        }
                        return 0;
                    },
                    cubic_to: (cp1, cp2, to) => {
                        if (ctx !== null) {
                            ctx.bezierCurveTo(cp1.x * ft_scale, cp1.y * ft_scale, cp2.x * ft_scale, cp2.y * ft_scale, to.x * ft_scale, to.y * ft_scale);
                        }
                        else {
                            console.log("C", cp1.x, cp1.y, cp2.x, cp2.y, to.x, to.y);
                        }
                        return 0;
                    },
                });
                if (ft_error !== FT.Err.Ok) {
                    throw new Error(FT.Error_String(ft_error));
                }
                if (ctx !== null) {
                    ctx.fillStyle = "black";
                    ctx.fill();
                }
                if (ctx !== null) {
                    ctx.translate(ft_glyph.advance.x * ft_scale, ft_glyph.advance.y * ft_scale);
                }
                if (prev_char !== "") {
                    const ft_kerning = new FT.Vector();
                    const prev_char_code = prev_char.charCodeAt(0);
                    ft_error = FT.Get_Kerning(ft_face, FT.Get_Char_Index(ft_face, prev_char_code), FT.Get_Char_Index(ft_face, char_code), FT.KERNING.DEFAULT, ft_kerning);
                    if (ft_error !== FT.Err.Ok) {
                        throw new Error(FT.Error_String(ft_error));
                    }
                    if ((ft_kerning.x !== 0) || (ft_kerning.y !== 0)) {
                        if (ctx !== null) {
                            ctx.translate(ft_kerning.x * ft_scale, ft_kerning.y * ft_scale);
                        }
                        else {
                            console.log("kerning", prev_char, char, ft_kerning);
                        }
                    }
                }
                prev_char = char;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm1haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0lBRUEsU0FBOEIsSUFBSTs7WUFDaEMsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQywrQkFBK0I7WUFFbkQsSUFBSSxRQUFrQixDQUFDO1lBRXZCLE1BQU0sVUFBVSxHQUFlLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2hELFFBQVEsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQ3hDLElBQUksUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2FBQUU7WUFFM0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsRUFBRSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1lBRXhELE1BQU0sUUFBUSxHQUFXLGNBQWMsQ0FBQztZQUN4QyxNQUFNLFNBQVMsR0FBVyxFQUFFLENBQUM7WUFFN0IsTUFBTSxRQUFRLEdBQWEsTUFBTSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakQsTUFBTSxNQUFNLEdBQWdCLE1BQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ3pELE1BQU0sU0FBUyxHQUFlLElBQUksVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRXJELE1BQU0sT0FBTyxHQUFZLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ3ZDLFFBQVEsR0FBRyxFQUFFLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1lBQ2pFLElBQUksUUFBUSxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFO2dCQUFFLE1BQU0s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