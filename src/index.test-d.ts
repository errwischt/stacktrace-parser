import { expectType } from 'tsd-check';
import { LiteralUnion } from 'type-fest';
import { parse, StackFrame } from '..';

expectType<StackFrame[]>(parse(new Error().stack));

const stack = parse(new Error().stack);

expectType<string | null>(stack[0].file);
expectType<LiteralUnion<'<unknown>', string>>(stack[0].methodName);
expectType<string[]>(stack[0].arguments);
expectType<number | null>(stack[0].lineNumber);
expectType<number | null>(stack[0].column);
