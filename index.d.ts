// Type definitions for stacktrace-parser 0.1
// Project: https://github.com/errwischt/stacktrace-parser
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/*~ If this module is a UMD module that exposes a global variable 'myLib' when
 *~ loaded outside a module loader environment, declare that global here.
 *~ Otherwise, delete this declaration.
 */
export as namespace StacktraceParser;

export function parse(stackString : string | undefined): StackTraceParserResult
    // add other methods here

export  interface StackTraceParserResult {
    file: string,
    methodName: string | '<unknown>',
    lineNumber: number
    column: number
}