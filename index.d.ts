// Type definitions for stacktrace-parser 0.1
// Project: https://github.com/SomeBlackMagic/stacktrace-parser
// Definitions by: wirwolf <https://github.com/wirwolf>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "stacktrace-parser" {
    export interface StackTraceParserStatic {
        parse(stackString : string | undefined): StackTraceParserResult[]
    }
    //export function parse(stackString : string | undefined): StackTraceParserResult[];
    export  interface StackTraceParserResult {
        file: string,
        methodName: string | '<unknown>',
        lineNumber: number
        column: number
    }

    export const StackTraceParser: StackTraceParserStatic;
    export default StackTraceParser;
}
