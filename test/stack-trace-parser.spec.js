import expect from 'expect.js';
import * as stackTraceParser from '../src';
import CapturedExceptions from './fixtures/captured-errors';

describe('stackTraceParser', () => {
  it('should parse Safari 6 error', () => {
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

  it('should parse Safari 7 error', () => {
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

  it('should parse Safari 8 error', () => {
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

  it('should parse Safari 8 eval error', () => {
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

  it('should parse Firefox 3 error', () => {
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

  it('should parse Firefox 7 error', () => {
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

  it('should parse Firefox 14 error', () => {
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

  it('should parse Firefox 31 error', () => {
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

  it('should parse Firefox 44 ns exceptions', () => {
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

  it('should parse Chrome error with no location', () => {
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

  it('should parse Chrome 15 error', () => {
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

  it('should parse Chrome 36 error with port numbers', () => {
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

  it('should parse Chrome error with webpack URLs', () => {
    const stackFrames = stackTraceParser.parse(
      CapturedExceptions.CHROME_XX_WEBPACK.stack
    );
    expect(stackFrames.length).to.be(4);
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
  });

  it('should parse nested eval() from Chrome', () => {
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

  it('should parse Chrome error with blob URLs', () => {
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

  it('should parse IE 10 error', () => {
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

  it('should parse IE 11 error', () => {
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

  it('should parse IE 11 eval error', () => {
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

  it('should parse Opera 25 error', () => {
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

  it('should parse PhantomJS 1.19 error', () => {
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

  it('should parse Firefox errors with resource: URLs', () => {
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

  it('should parse Firefox errors with eval URLs', () => {
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

  it('should parse React Native errors on Android', () => {
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

  it('should parse React Native errors on Android Production', () => {
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

  const data = {
    'Node.js': [
      {
        from:
          'ReferenceError: test is not defined\n    at repl:1:2\n    at REPLServer.self.eval (repl.js:110:21)\n    at Interface.<anonymous> (repl.js:239:12)\n    at Interface.EventEmitter.emit (events.js:95:17)\n    at emitKey (readline.js:1095:12)',
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
        from:
          'ReferenceError: breakDown is not defined\n    at null._onTimeout (repl:1:25)\n    at Timer.listOnTimeout [as ontimeout] (timers.js:110:15)',
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
        from:
          'ReferenceError: test is not defined\n    at repl:1:1\n    at REPLServer.defaultEval (repl.js:154:27)\n    at bound (domain.js:254:14)\n    at REPLServer.runBound [as eval] (domain.js:267:12)\n    at REPLServer.<anonymous> (repl.js:308:12)\n    at emitOne (events.js:77:13)\n    at REPLServer.emit (events.js:169:7)\n    at REPLServer.Interface._onLine (readline.js:210:10)\n    at REPLServer.Interface._line (readline.js:549:8)\n    at REPLServer.Interface._ttyWrite (readline.js:826:14)',
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
