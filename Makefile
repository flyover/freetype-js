all: start-example-node

start: start-example-html

build: build-bind-freetype build-freetype build-example

clean: clean-bind-freetype clean-freetype clean-example

# bind-freetype

# FREETYPE2_PATH = freetype2
# FREETYPE2_SOURCE_HXX += $(FREETYPE2_PATH)/include/freetype/freetype.h
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/autofit/autofit.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftbase.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftbbox.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftbdf.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftbitmap.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftcid.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftfstype.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftgasp.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftglyph.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftgxval.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftinit.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftmm.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftotval.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftpatent.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftpfr.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftstroke.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftsynth.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftsystem.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/fttype1.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftwinfnt.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/bdf/bdf.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/bzip2/ftbzip2.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/cache/ftcache.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/cff/cff.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/cid/type1cid.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/gzip/ftgzip.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/lzw/ftlzw.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/pcf/pcf.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/pfr/pfr.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/psaux/psaux.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/pshinter/pshinter.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/psnames/psnames.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/raster/raster.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/sfnt/sfnt.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/smooth/smooth.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/truetype/truetype.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/type1/type1.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/type42/type42.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/winfonts/winfnt.c
# FREETYPE2_SOURCE_CXX += $(FREETYPE2_PATH)/src/base/ftdebug.c
# FREETYPE2_OUTPUT_BC = $(FREETYPE2_SOURCE_CXX:%.c=%.bc)

BIND_FREETYPE2_SOURCE_D_TS = bind-freetype.d.ts
BIND_FREETYPE2_SOURCE_CXX = bind-freetype.cpp
BIND_FREETYPE2_OUTPUT_BC = bind-freetype.bc
BIND_FREETYPE2_OUTPUT_JS = bind-freetype.js

# debug flags
# FLAGS += -g4
# FLAGS += -O0
# FLAGS += --source-map-base http://127.0.0.1:8080/
# FLAGS += -s ASSERTIONS=1
# FLAGS += -s DEMANGLE_SUPPORT=1
# FLAGS += -s SAFE_HEAP=1

FLAGS += -Os
FLAGS += -s NO_FILESYSTEM=1
# FLAGS += -s WASM=1
FLAGS += -s MODULARIZE=1
# FLAGS += -s EXPORT_NAME=\"FT\"
FLAGS += -s EXPORT_BINDINGS=1
# FLAGS += -s EXPORT_ALL=1
# FLAGS += -s MEM_INIT_METHOD=0
# FLAGS += --memory-init-file 0
FLAGS += -s SINGLE_FILE=1
# FLAGS += -s BINARYEN_ASYNC_COMPILATION=0
# FLAGS += -s BINARYEN_METHOD=\"native-wasm,asmjs\"
# FLAGS += -s BINARYEN_METHOD=\"interpret-asm2wasm,asmjs\"
# FLAGS += -s TOTAL_MEMORY=4194304
FLAGS += -s ALLOW_MEMORY_GROWTH=1
# FLAGS += -DFT2_BUILD_LIBRARY
FLAGS += -s USE_FREETYPE=1

build-bind-freetype: bind-freetype.js

clean-bind-freetype:
	# rm -f $(FREETYPE2_OUTPUT_BC)
	rm -f $(BIND_FREETYPE2_OUTPUT_BC)
	rm -f bind-freetype.js bind-freetype.js.*
	rm -f bind-freetype.wasm bind-freetype.wasm.*

%.bc: %.c $(FREETYPE2_SOURCE_HXX)
	emcc $(FLAGS) -I $(FREETYPE2_PATH)/include $< -o $@

%.bc: %.cpp $(FREETYPE2_SOURCE_HXX)
	emcc $(FLAGS) -I $(FREETYPE2_PATH)/include $< -o $@

bind-freetype.bc: bind-freetype.cpp # $(FREETYPE2_SOURCE_HXX)
	emcc $(FLAGS) -I $(FREETYPE2_PATH)/include --bind $< -o $@

bind-freetype.js: $(BIND_FREETYPE2_OUTPUT_BC) # $(FREETYPE2_OUTPUT_BC)
	emcc $(FLAGS) -I $(FREETYPE2_PATH)/include --bind $^ -o $@

# freetype

build-freetype:
	npm run build-freetype

clean-freetype:
	npm run clean-freetype

# example

build-example:
	npm run build-example

clean-example:
	npm run clean-example

start-example: start-example-node

start-example-node:
	npm run start-example-node

start-example-html:
	npm run start-example-html
