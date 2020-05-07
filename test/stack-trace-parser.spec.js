import expect from 'expect.js';
import * as stackTraceParser from '../src';
import CapturedExceptions from './fixtures/captured-errors';

describe('stackTraceParser', () => {
  it('parses node error with space in path', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.NODE_SPACE.stack
    );
    expect(stackFrames.length).to.be(9);
    expect(stackFrames).to.eql([
      {
        file: 'C:\\project files\\spect\\src\\index.js',
        methodName: 'Spect.get',
        arguments: [],
        lineNumber: 161,
        column: 26,
      },
      {
        file: 'C:\\project files\\spect\\src\\index.js',
        methodName: 'Object.get',
        arguments: [],
        lineNumber: 43,
        column: 36,
      },
      {
        file: 'C:\\project files\\spect\\src\\index.js',
        methodName: '(anonymous function).then',
        arguments: [],
        lineNumber: 165,
        column: 33,
      },
      {
        file: 'internal/process/task_queues.js',
        methodName: 'process.runNextTicks [as _tickCallback]',
        arguments: [],
        lineNumber: 52,
        column: 5,
      },
      {
        file: 'C:\\project files\\spect\\node_modules\\esm\\esm.js',
        methodName: '<unknown>',
        arguments: [],
        lineNumber: 1,
        column: 34535,
      },
      {
        file: 'C:\\project files\\spect\\node_modules\\esm\\esm.js',
        methodName: '<unknown>',
        arguments: [],
        lineNumber: 1,
        column: 34176,
      },
      {
        file: 'C:\\project files\\spect\\node_modules\\esm\\esm.js',
        methodName: 'process.<anonymous>',
        arguments: [],
        lineNumber: 1,
        column: 34506,
      },
      {
        file: 'C:\\project files\\spect\\node_modules\\esm\\esm.js',
        methodName: 'Function.<anonymous>',
        arguments: [],
        lineNumber: 1,
        column: 296856,
      },
      {
        file: 'C:\\project files\\spect\\node_modules\\esm\\esm.js',
        methodName: 'Function.<anonymous>',
        arguments: [],
        lineNumber: 1,
        column: 296555,
      },
    ]);
  });
  it('parses JavaScriptCore errors', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.IOS_REACT_NATIVE_1.stack
    );
    expect(stackFrames.length).to.be(4);
    expect(stackFrames).to.eql([
      {
        file: '/home/test/project/App.js',
        methodName: '_exampleFunction',
        arguments: [],
        lineNumber: 125,
        column: 13,
      },
      {
        file: '/home/test/project/node_modules/dep/index.js',
        methodName: '_depRunCallbacks',
        arguments: [],
        lineNumber: 77,
        column: 45,
      },
      {
        file:
          '/home/test/project/node_modules/react-native/node_modules/promise/lib/core.js',
        methodName: 'tryCallTwo',
        arguments: [],
        lineNumber: 45,
        column: 5,
      },
      {
        file:
          '/home/test/project/node_modules/react-native/node_modules/promise/lib/core.js',
        methodName: 'doResolve',
        arguments: [],
        lineNumber: 200,
        column: 13,
      },
    ]);
  });

  it('parses an error in react native', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.IOS_REACT_NATIVE_2.stack
    );

    expect(stackFrames.length).to.be(11);
    expect(stackFrames).to.eql([
      {
        file: '33.js',
        methodName: 's',
        arguments: [],
        lineNumber: 1,
        column: 531,
      },
      {
        file: '1959.js',
        methodName: 'b',
        arguments: [],
        lineNumber: 1,
        column: 1469,
      },
      {
        file: '2932.js',
        methodName: 'onSocketClose',
        arguments: [],
        lineNumber: 1,
        column: 727,
      },
      {
        file: '81.js',
        methodName: 'value',
        arguments: [],
        lineNumber: 1,
        column: 1505,
      },
      {
        file: '102.js',
        methodName: '<unknown>',
        arguments: [],
        lineNumber: 1,
        column: 2956,
      },
      {
        file: '89.js',
        methodName: 'value',
        arguments: [],
        lineNumber: 1,
        column: 1247,
      },
      {
        file: '42.js',
        methodName: 'value',
        arguments: [],
        lineNumber: 1,
        column: 3311,
      },
      {
        file: '42.js',
        methodName: '<unknown>',
        arguments: [],
        lineNumber: 1,
        column: 822,
      },
      {
        file: '42.js',
        methodName: 'value',
        arguments: [],
        lineNumber: 1,
        column: 2565,
      },
      {
        file: '42.js',
        methodName: 'value',
        arguments: [],
        lineNumber: 1,
        column: 794,
      },
      {
        file: '[native code]',
        methodName: 'value',
        arguments: [],
        lineNumber: null,
        column: null,
      },
    ]);
  });

  it('parses very simple JavaScriptCore errors', () => {
    const stackFrames = stackTraceParser.parse(
      'global code@stack_traces/test:83:55'
    );
    expect(stackFrames.length).to.be(1);
    expect(stackFrames).to.eql([
      {
        file: 'stack_traces/test',
        methodName: 'global code',
        arguments: [],
        lineNumber: 83,
        column: 55,
      },
    ]);
  });

  it('parses Safari 6 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.SAFARI_6.stack
    );
    expect(stackFrames.length).to.be(4);
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 48,
      column: null,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'dumpException3',
      arguments: [],
      lineNumber: 52,
      column: null,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'onclick',
      arguments: [],
      lineNumber: 82,
      column: null,
    });
    expect(stackFrames[3]).to.eql({
      file: '[native code]',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: null,
      column: null,
    });
  });

  it('parses Safari 7 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.SAFARI_7.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 48,
      column: 22,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 52,
      column: 15,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 108,
      column: 107,
    });
  });

  it('parses Safari 8 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.SAFARI_8.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 47,
      column: 22,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 52,
      column: 15,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 108,
      column: 23,
    });
  });

  it('parses Safari 8 eval error', () => {
    // TODO: Take into account the line and column properties on the error object and use them for the first stack trace.
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.SAFARI_8_EVAL.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: '[native code]',
      methodName: 'eval',
      arguments: [],
      lineNumber: null,
      column: null,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 58,
      column: 21,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 109,
      column: 91,
    });
  });

  it('parses Firefox 3 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.FIREFOX_3.stack
    );
    expect(stackFrames.length).to.be(7);
    expect(stackFrames[0]).to.eql({
      file: 'http://127.0.0.1:8000/js/stacktrace.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 44,
      column: null,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://127.0.0.1:8000/js/stacktrace.js',
      methodName: '<unknown>',
      arguments: ['null'],
      lineNumber: 31,
      column: null,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://127.0.0.1:8000/js/stacktrace.js',
      methodName: 'printStackTrace',
      arguments: [],
      lineNumber: 18,
      column: null,
    });
    expect(stackFrames[3]).to.eql({
      file: 'http://127.0.0.1:8000/js/file.js',
      methodName: 'bar',
      arguments: ['1'],
      lineNumber: 13,
      column: null,
    });
    expect(stackFrames[4]).to.eql({
      file: 'http://127.0.0.1:8000/js/file.js',
      methodName: 'bar',
      arguments: ['2'],
      lineNumber: 16,
      column: null,
    });
    expect(stackFrames[5]).to.eql({
      file: 'http://127.0.0.1:8000/js/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 20,
      column: null,
    });
    expect(stackFrames[6]).to.eql({
      file: 'http://127.0.0.1:8000/js/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 24,
      column: null,
    });
  });

  it('parses Firefox 7 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.FIREFOX_7.stack
    );
    expect(stackFrames.length).to.be(7);
    expect(stackFrames[0]).to.eql({
      file: 'file:///G:/js/stacktrace.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 44,
      column: null,
    });
    expect(stackFrames[1]).to.eql({
      file: 'file:///G:/js/stacktrace.js',
      methodName: '<unknown>',
      arguments: ['null'],
      lineNumber: 31,
      column: null,
    });
    expect(stackFrames[2]).to.eql({
      file: 'file:///G:/js/stacktrace.js',
      methodName: 'printStackTrace',
      arguments: [],
      lineNumber: 18,
      column: null,
    });
    expect(stackFrames[3]).to.eql({
      file: 'file:///G:/js/file.js',
      methodName: 'bar',
      arguments: ['1'],
      lineNumber: 13,
      column: null,
    });
    expect(stackFrames[4]).to.eql({
      file: 'file:///G:/js/file.js',
      methodName: 'bar',
      arguments: ['2'],
      lineNumber: 16,
      column: null,
    });
    expect(stackFrames[5]).to.eql({
      file: 'file:///G:/js/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 20,
      column: null,
    });
    expect(stackFrames[6]).to.eql({
      file: 'file:///G:/js/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 24,
      column: null,
    });
  });

  it('parses Firefox 14 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.FIREFOX_14.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 48,
      column: null,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'dumpException3',
      arguments: [],
      lineNumber: 52,
      column: null,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'onclick',
      arguments: [],
      lineNumber: 1,
      column: null,
    });
  });

  it('parses Firefox 31 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.FIREFOX_31.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 41,
      column: 13,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 1,
      column: 1,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '.plugin/e.fn[c]/<',
      arguments: [],
      lineNumber: 1,
      column: 1,
    });
  });

  it('parses Firefox 44 ns exceptions', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.FIREFOX_44_NS_EXCEPTION.stack
    );
    expect(stackFrames.length).to.be(4);
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '[2]</Bar.prototype._baz/</<',
      arguments: [],
      lineNumber: 703,
      column: 28,
    });
    expect(stackFrames[1]).to.eql({
      file: 'file:///path/to/file.js',
      methodName: 'App.prototype.foo',
      arguments: [],
      lineNumber: 15,
      column: 2,
    });
    expect(stackFrames[2]).to.eql({
      file: 'file:///path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 20,
      column: 3,
    });
    expect(stackFrames[3]).to.eql({
      file: 'file:///path/to/index.html',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 23,
      column: 1,
    });
  });

  it('parses Chrome error with no location', () => {
    const stackFrames = stackTraceParser.parse(
      'error\n at Array.forEach (native)'
    );
    expect(stackFrames.length).to.be(1);
    expect(stackFrames[0]).to.eql({
      file: null,
      methodName: 'Array.forEach',
      arguments: ['native'],
      lineNumber: null,
      column: null,
    });
  });

  it('parses Chrome 15 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.CHROME_15.stack
    );
    expect(stackFrames.length).to.be(4);
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 13,
      column: 17,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 16,
      column: 5,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 20,
      column: 5,
    });
    expect(stackFrames[3]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 24,
      column: 4,
    });
  });

  it('parses Chrome 36 error with port numbers', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.CHROME_36.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'dumpExceptionError',
      arguments: [],
      lineNumber: 41,
      column: 27,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'HTMLButtonElement.onclick',
      arguments: [],
      lineNumber: 107,
      column: 146,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'I.e.fn.(anonymous function) [as index]',
      arguments: [],
      lineNumber: 10,
      column: 3651,
    });
  });

  it('parses Chrome 76 error with async support', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.CHROME_76.stack
    );
    expect(stackFrames.length).to.be(2);
    expect(stackFrames[0]).to.eql({
      file: '<anonymous>',
      methodName: 'bar',
      arguments: [],
      lineNumber: 8,
      column: 9,
    });
    expect(stackFrames[1]).to.eql({
      file: '<anonymous>',
      methodName: 'async foo',
      arguments: [],
      lineNumber: 2,
      column: 3,
    });
  });

  it('parses Chrome error with webpack URLs', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.CHROME_XX_WEBPACK.stack
    );
    expect(stackFrames.length).to.be(5);
    expect(stackFrames[0]).to.eql({
      file: 'webpack:///./src/components/test/test.jsx?',
      methodName: 'TESTTESTTEST.eval',
      arguments: [],
      lineNumber: 295,
      column: 108,
    });
    expect(stackFrames[1]).to.eql({
      file: 'webpack:///./src/components/test/test.jsx?',
      methodName: 'TESTTESTTEST.render',
      arguments: [],
      lineNumber: 272,
      column: 32,
    });
    expect(stackFrames[2]).to.eql({
      file: 'webpack:///./~/react-transform-catch-errors/lib/index.js?',
      methodName: 'TESTTESTTEST.tryRender',
      arguments: [],
      lineNumber: 34,
      column: 31,
    });
    expect(stackFrames[3]).to.eql({
      file: 'webpack:///./~/react-proxy/modules/createPrototypeProxy.js?',
      methodName: 'TESTTESTTEST.proxiedMethod',
      arguments: [],
      lineNumber: 44,
      column: 30,
    });
    expect(stackFrames[4]).to.eql({
      file: 'C:\\root\\server\\development\\pages\\index.js',
      methodName: 'Module../pages/index.js',
      arguments: [],
      lineNumber: 182,
      column: 7,
    });
  });

  it('parses nested eval() from Chrome', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.CHROME_48_EVAL.stack
    );
    expect(stackFrames.length).to.be(5);
    expect(stackFrames[0]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'baz',
      arguments: [],
      lineNumber: 21,
      column: 17,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 21,
      column: 17,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'eval',
      arguments: [],
      lineNumber: 21,
      column: 17,
    });
    expect(stackFrames[3]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'Object.speak',
      arguments: [],
      lineNumber: 21,
      column: 17,
    });
    expect(stackFrames[4]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 31,
      column: 13,
    });
  });

  it('parses Chrome error with blob URLs', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.CHROME_48_BLOB.stack
    );
    expect(stackFrames.length).to.be(7);
    expect(stackFrames[1]).to.eql({
      file:
        'blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379',
      methodName: 's',
      arguments: [],
      lineNumber: 31,
      column: 29146,
    });
    expect(stackFrames[2]).to.eql({
      file:
        'blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379',
      methodName: 'Object.d [as add]',
      arguments: [],
      lineNumber: 31,
      column: 30039,
    });
    expect(stackFrames[3]).to.eql({
      file:
        'blob:http%3A//localhost%3A8080/d4eefe0f-361a-4682-b217-76587d9f712a',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 15,
      column: 10978,
    });
    expect(stackFrames[4]).to.eql({
      file:
        'blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 1,
      column: 6911,
    });
    expect(stackFrames[5]).to.eql({
      file:
        'blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379',
      methodName: 'n.fire',
      arguments: [],
      lineNumber: 7,
      column: 3019,
    });
    expect(stackFrames[6]).to.eql({
      file:
        'blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379',
      methodName: 'n.handle',
      arguments: [],
      lineNumber: 7,
      column: 2863,
    });
  });

  it('parses IE 10 error', () => {
    const stackFrames = stackTraceParser.parse(CapturedExceptions.IE_10.stack);
    expect(stackFrames.length).to.be(3);
    // TODO: func should be normalized
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'Anonymous function',
      arguments: [],
      lineNumber: 48,
      column: 13,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 46,
      column: 9,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 82,
      column: 1,
    });
  });

  it('parses IE 11 error', () => {
    const stackFrames = stackTraceParser.parse(CapturedExceptions.IE_11.stack);
    expect(stackFrames.length).to.be(3);
    // TODO: func should be normalized
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'Anonymous function',
      arguments: [],
      lineNumber: 47,
      column: 21,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 45,
      column: 13,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 108,
      column: 1,
    });
  });

  it('parses IE 11 eval error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.IE_11_EVAL.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'eval code',
      methodName: 'eval code',
      arguments: [],
      lineNumber: 1,
      column: 1,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 58,
      column: 17,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 109,
      column: 1,
    });
  });

  it('parses Opera 25 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.OPERA_25.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 47,
      column: 22,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 52,
      column: 15,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'bar',
      arguments: [],
      lineNumber: 108,
      column: 168,
    });
  });

  it('parses PhantomJS 1.19 error', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.PHANTOMJS_1_19.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'file:///path/to/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 878,
      column: null,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://path/to/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 4283,
      column: null,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://path/to/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 4287,
      column: null,
    });
  });

  it('parses Firefox errors with resource: URLs', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.FIREFOX_50_RESOURCE_URL.stack
    );
    expect(stackFrames.length).to.be(3);
    expect(stackFrames[0]).to.eql({
      file: 'resource://path/data/content/bundle.js',
      methodName: 'render',
      arguments: [],
      lineNumber: 5529,
      column: 16,
    });
  });

  it('parses Firefox errors with eval URLs', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.FIREFOX_43_EVAL.stack
    );
    expect(stackFrames.length).to.be(5);
    expect(stackFrames[0]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'baz',
      arguments: [],
      lineNumber: 26,
      column: null,
    });
    expect(stackFrames[1]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'foo',
      arguments: [],
      lineNumber: 26,
      column: null,
    });
    expect(stackFrames[2]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 26,
      column: null,
    });
    expect(stackFrames[3]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: 'speak',
      arguments: [],
      lineNumber: 26,
      column: 17,
    });
    expect(stackFrames[4]).to.eql({
      file: 'http://localhost:8080/file.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 33,
      column: 9,
    });
  });

  it('parses React Native errors on Android', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.ANDROID_REACT_NATIVE.stack
    );
    expect(stackFrames.length).to.be(8);
    expect(stackFrames[0]).to.eql({
      file:
        '/home/username/sample-workspace/sampleapp.collect.react/src/components/GpsMonitorScene.js',
      methodName: 'render',
      arguments: [],
      lineNumber: 78,
      column: 24,
    });
    expect(stackFrames[7]).to.eql({
      file:
        '/home/username/sample-workspace/sampleapp.collect.react/node_modules/react-native/Libraries/Renderer/src/renderers/native/ReactNativeBaseComponent.js',
      methodName: 'this',
      arguments: [],
      lineNumber: 74,
      column: 41,
    });
  });

  it('parses React Native errors on Android Production', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.ANDROID_REACT_NATIVE_PROD.stack
    );
    expect(stackFrames.length).to.be(37);
    expect(stackFrames[0]).to.eql({
      file: 'index.android.bundle',
      methodName: 'value',
      arguments: [],
      lineNumber: 12,
      column: 1917,
    });
    expect(stackFrames[35]).to.eql({
      file: 'index.android.bundle',
      methodName: 'value',
      arguments: [],
      lineNumber: 29,
      column: 927,
    });
    expect(stackFrames[36]).to.eql({
      file: '[native code]',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: null,
      column: null,
    });
  });

  it('parses node.js async errors available with version 12', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.NODE_12.stack
    );
    expect(stackFrames.length).to.be(2);
    expect(stackFrames[0]).to.eql({
      file: '/home/xyz/hack/asyncnode.js',
      methodName: 'promiseMe',
      arguments: [],
      lineNumber: 11,
      column: 9,
    });
    expect(stackFrames[1]).to.eql({
      file: '/home/xyz/hack/asyncnode.js',
      methodName: 'async main',
      arguments: [],
      lineNumber: 15,
      column: 13,
    });
  });

  it('parses node.js errors with <anonymous> calls as well', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.NODE_ANONYM.stack
    );
    // console.log(stackFrames);
    expect(stackFrames.length).to.be(9);
    expect(stackFrames[0]).to.eql({
      file: 'C:\\projects\\spect\\src\\index.js',
      methodName: 'Spect.get',
      arguments: [],
      lineNumber: 161,
      column: 26,
    });
    expect(stackFrames[2]).to.eql({
      file: 'C:\\projects\\spect\\src\\index.js',
      methodName: '(anonymous function).then',
      arguments: [],
      lineNumber: 165,
      column: 33,
    });
    expect(stackFrames[4]).to.eql({
      file: 'C:\\projects\\spect\\node_modules\\esm\\esm.js',
      methodName: '<unknown>',
      arguments: [],
      lineNumber: 1,
      column: 34535,
    });
    expect(stackFrames[6]).to.eql({
      file: 'C:\\projects\\spect\\node_modules\\esm\\esm.js',
      methodName: 'process.<anonymous>',
      arguments: [],
      lineNumber: 1,
      column: 34506,
    });
  });

  const data = {
    'Anonymous sources': [
      {
        from: `x
          at new <anonymous> (http://www.example.com/test.js:2:1
          at <anonymous>:1:2`,
        to: [
          {
            file: 'http://www.example.com/test.js',
            methodName: 'new <anonymous>',
            arguments: [],
            lineNumber: 2,
            column: 1,
          },
          {
            file: '<anonymous>',
            methodName: '<unknown>',
            arguments: [],
            lineNumber: 1,
            column: 2,
          },
        ],
      },
    ],
    'Node.js': [
      {
        from: `ReferenceError: test is not defined
          at repl:1:2
          at REPLServer.self.eval (repl.js:110:21)
          at Interface.<anonymous> (repl.js:239:12)
          at Interface.EventEmitter.emit (events.js:95:17)
          at emitKey (readline.js:1095:12)`,
        to: [
          {
            file: 'repl',
            methodName: '<unknown>',
            arguments: [],
            lineNumber: 1,
            column: 2,
          },
          {
            file: 'repl.js',
            methodName: 'REPLServer.self.eval',
            arguments: [],
            lineNumber: 110,
            column: 21,
          },
          {
            file: 'repl.js',
            methodName: 'Interface.<anonymous>',
            arguments: [],
            lineNumber: 239,
            column: 12,
          },
          {
            file: 'events.js',
            methodName: 'Interface.EventEmitter.emit',
            arguments: [],
            lineNumber: 95,
            column: 17,
          },
          {
            file: 'readline.js',
            methodName: 'emitKey',
            arguments: [],
            lineNumber: 1095,
            column: 12,
          },
        ],
      },
      {
        from: `ReferenceError: breakDown is not defined
          at null._onTimeout (repl:1:25)
          at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)`,
        to: [
          {
            file: 'repl',
            methodName: 'null._onTimeout',
            arguments: [],
            lineNumber: 1,
            column: 25,
          },
          {
            file: 'timers.js',
            methodName: 'Timer.listOnTimeout [as ontimeout]',
            arguments: [],
            lineNumber: 110,
            column: 15,
          },
        ],
      },
    ],
    'io.js': [
      // io.js 2.4.0
      {
        from: `ReferenceError: test is not defined
          at repl:1:1
          at REPLServer.defaultEval (repl.js:154:27)
          at bound (domain.js:254:14)
          at REPLServer.runBound [as eval] (domain.js:267:12)
          at REPLServer.<anonymous> (repl.js:308:12)
          at emitOne (events.js:77:13)
          at REPLServer.emit (events.js:169:7)
          at REPLServer.Interface._onLine (readline.js:210:10)
          at REPLServer.Interface._line (readline.js:549:8)
          at REPLServer.Interface._ttyWrite (readline.js:826:14)`,
        to: [
          {
            file: 'repl',
            methodName: '<unknown>',
            arguments: [],
            lineNumber: 1,
            column: 1,
          },
          {
            file: 'repl.js',
            methodName: 'REPLServer.defaultEval',
            arguments: [],
            lineNumber: 154,
            column: 27,
          },
          {
            file: 'domain.js',
            methodName: 'bound',
            arguments: [],
            lineNumber: 254,
            column: 14,
          },
          {
            file: 'domain.js',
            methodName: 'REPLServer.runBound [as eval]',
            arguments: [],
            lineNumber: 267,
            column: 12,
          },
          {
            file: 'repl.js',
            methodName: 'REPLServer.<anonymous>',
            arguments: [],
            lineNumber: 308,
            column: 12,
          },
          {
            file: 'events.js',
            methodName: 'emitOne',
            arguments: [],
            lineNumber: 77,
            column: 13,
          },
          {
            file: 'events.js',
            methodName: 'REPLServer.emit',
            arguments: [],
            lineNumber: 169,
            column: 7,
          },
          {
            file: 'readline.js',
            methodName: 'REPLServer.Interface._onLine',
            arguments: [],
            lineNumber: 210,
            column: 10,
          },
          {
            file: 'readline.js',
            methodName: 'REPLServer.Interface._line',
            arguments: [],
            lineNumber: 549,
            column: 8,
          },
          {
            file: 'readline.js',
            methodName: 'REPLServer.Interface._ttyWrite',
            arguments: [],
            lineNumber: 826,
            column: 14,
          },
        ],
      },
    ],
  };

  Object.keys(data).forEach(browser => {
    describe('can parse stack trace of ' + browser, () => {
      const browserTests = data[browser];

      browserTests.forEach(browserTest => {
        it(browserTest.from, () => {
          const result = stackTraceParser.parse(browserTest.from);

          expect(result.length).to.equal(browserTest.to.length);
          expect(result).to.eql(browserTest.to);
        });
      });
    });
  });
});
