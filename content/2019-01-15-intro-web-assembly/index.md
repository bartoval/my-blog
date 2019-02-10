---
title: 'Introduction to Web Assembly with Javascript and C'
tags: [webassembly, c, javascript]
date: 2019-01-15
path: blog/intro-web-assembly
cover: ./preview.png
excerpt: How configure your first webassembly app in Javascript and C.
---

Javascript doesn't provide the performance of a low-level language, and also many features of modern high-language are not available. Unfortunately, it's the only language that's every browser can understand, precisely browser interpret Javascript line by line and then compile frequently used code to binary. Typically this process is called just-in-time-compilation (JIT).
WebAssembly makes it possible executes functionalities and web pages that run with the same speed of native code.

### Pre requisites

- Python > 2.7
- CMake wich Emscripten use to build its utilities .
- Git

UsingMacOS we can typing:

```none
brew install python3
brew install cmake
brew install git
```

### Emscripten sdk

To develop our application we use 2 tools:
Emscripten: convert C/C++ in asm.js (performing variant of javascript)
Binaryen: convert asm.js to WebAssembly

First of all download [emsdk](https://github.com/juj/emsdk)
The top-level directory contains emsdk script. To install the SDK, you need to [follow this guide](https://github.com/juj/emsdk/blob/master/README.md)

```none
emsdk update
emsdk install latest
emsdk activate latest
```

if it doesn't work try

```none
emsdk update
emsdk install sdk-incoming-64bit bynarien-master-64bit
emsdk activate sdk-incoming-64bit bynarien-master-64bit
```

The last command generates a file .emscripten in the user's Home Folder that contains configuration settings such python interpreter.
Now we need to set our environment to allow us to access the utilities from the command line.
for macOS & linux

```none
source ./emsdk_env.sh
```

for windows

```none
emsdk_env.bat --global
```

Create a simple C example file that print a message.

```c
#include <stdio.h>

int calcFactorial()
{
    int c, n = 10, fact = 1;

    for (c = 1; c <= n; c++)
        fact = fact * c;

    return fact;
}
int main()
{
    printf("Factorial of %d = %d\n", 10, calcFactorial());

    return 0;
}
```

Compile this file using the command:

```none
emcc -O3 --emrun -s WASM=1 -o myFirstScript.html myFirstScript.c
```

- **emcc**: compile the code to WebAssembly
- **03**: to tell the compiler to use max optimization
- **emrun**: to tell the compiler to generate results that can be accessed to emrun utility.
- **s** and **WASM=1**: to tell the compiler to generate WebAssembly as a part of this process.
- **-o namefile.html**: to generate the output file that we want to create from the input file namefile.c

at this point, run the server to create an Emscripten browser template:

```none
emrun --no_browser --port 8080
```

and open the browser to http://localhost:8080/myFirstScript.html

### The emmake command

Invoking with the compiler is enough for simple applications, but when you have multiple source files and complicated configuration, it would be better execute them all at once. Emscripten provides the command emmake: this utility looks for a file called Makefile and executes commands to produce one or more compiled results called targets.

The main advantages using makefiles are:

- Make easy to automate processes like compilation and testing
- Creating different target for different Browsers and Operating Systems

```makefile
PROJ=myFirstScript
EXP_FUNC = calcFactorial

ifeq ($(OS),Windows_NT)
  RM=del
else
  RM=rm
endif

CC=emcc

CFLAGS=-s WASM=1 --emrun -O3 -s ONLY_MY_CODE=1 -s EXPORTED_FUNCTIONS='["_$(EXP_FUNC)"]'

$(PROJ).js: $(PROJ).c
	$(CC) $(CFLAGS) -o $@ $^

.PHONY: clean
clean:
	$(RM) $(PROJ).js $(PROJ).wasm
```

### Execute WebAssembly in a web page

Creating and compiling files in C and see the result in the Emscripten template is exciting but it doesn’t make much sense. Instead, it’s more significant loading our WebAssembly code inside Javascript to use their functionalities.

We can request our WebAssembly code and retrieve a resultObject to call the function calcFactorial().

```javascript
if ('WebAssembly' in window) {
 WebAssembly.instantiateStreaming(fetch('myFirstScript.wasm'))
 .then(result =>
 document.getElementById('wasm').innerHTML =
 'Output: ' + result.instance.exports._calcFactorial()
 );
}
```

Example of Javascript code to load WebAssembly and call functions
After checking the support for WebAssembly, we load the module calling a promise and retrieve an Object that contains names of functions exposed inside the .wasm file

To compile our C file and generated the correspondent .wasm

```none
emmake make
```

run the server and display the HTML into the browser

```
emrun output.html
```
