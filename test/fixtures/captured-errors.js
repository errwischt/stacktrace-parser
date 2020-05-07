export default {
  NODE_12: {
    message: 'Just an Exception',
    name: 'Error',
    stack:
      'Error: Just an Exception\n' +
      '    at promiseMe (/home/xyz/hack/asyncnode.js:11:9)\n' +
      '    at async main (/home/xyz/hack/asyncnode.js:15:13)',
  },
  NODE_ANONYM: {
    message: '',
    name: 'Error',
    stack: `Error
    at Spect.get (C:\\projects\\spect\\src\\index.js:161:26)
    at Object.get (C:\\projects\\spect\\src\\index.js:43:36)
    at <anonymous>
    at (anonymous function).then (C:\\projects\\spect\\src\\index.js:165:33)
    at process.runNextTicks [as _tickCallback] (internal/process/task_queues.js:52:5)
    at C:\\projects\\spect\\node_modules\\esm\\esm.js:1:34535
    at C:\\projects\\spect\\node_modules\\esm\\esm.js:1:34176
    at process.<anonymous> (C:\\projects\\spect\\node_modules\\esm\\esm.js:1:34506)
    at Function.<anonymous> (C:\\projects\\spect\\node_modules\\esm\\esm.js:1:296856)
    at Function.<anonymous> (C:\\projects\\spect\\node_modules\\esm\\esm.js:1:296555)`,
  },

  NODE_SPACE: {
    message: '',
    name: 'Error',
    stack: `Error
    at Spect.get (C:\\project files\\spect\\src\\index.js:161:26)
    at Object.get (C:\\project files\\spect\\src\\index.js:43:36)
    at <anonymous>
    at (anonymous function).then (C:\\project files\\spect\\src\\index.js:165:33)
    at process.runNextTicks [as _tickCallback] (internal/process/task_queues.js:52:5)
    at C:\\project files\\spect\\node_modules\\esm\\esm.js:1:34535
    at C:\\project files\\spect\\node_modules\\esm\\esm.js:1:34176
    at process.<anonymous> (C:\\project files\\spect\\node_modules\\esm\\esm.js:1:34506)
    at Function.<anonymous> (C:\\project files\\spect\\node_modules\\esm\\esm.js:1:296856)
    at Function.<anonymous> (C:\\project files\\spect\\node_modules\\esm\\esm.js:1:296555)`,
  },

  OPERA_25: {
    message: "Cannot read property 'undef' of null",
    name: 'TypeError',
    stack:
      "TypeError: Cannot read property 'undef' of null\n" +
      '    at http://path/to/file.js:47:22\n' +
      '    at foo (http://path/to/file.js:52:15)\n' +
      '    at bar (http://path/to/file.js:108:168)',
  },

  CHROME_15: {
    arguments: ['undef'],
    message: "Object #<Object> has no method 'undef'",
    stack:
      "TypeError: Object #<Object> has no method 'undef'\n" +
      '    at bar (http://path/to/file.js:13:17)\n' +
      '    at bar (http://path/to/file.js:16:5)\n' +
      '    at foo (http://path/to/file.js:20:5)\n' +
      '    at http://path/to/file.js:24:4',
  },

  CHROME_36: {
    message: 'Default error',
    name: 'Error',
    stack:
      'Error: Default error\n' +
      '    at dumpExceptionError (http://localhost:8080/file.js:41:27)\n' +
      '    at HTMLButtonElement.onclick (http://localhost:8080/file.js:107:146)\n' +
      '    at I.e.fn.(anonymous function) [as index] (http://localhost:8080/file.js:10:3651)',
  },

  CHROME_76: {
    message: 'BEEP BEEP',
    name: 'Error',
    stack:
      'Error: BEEP BEEP\n' +
      '    at bar (<anonymous>:8:9)\n' +
      '    at async foo (<anonymous>:2:3)',
  },

  // can be generated when Webpack is built with source maps
  CHROME_XX_WEBPACK: {
    message: "Cannot read property 'error' of undefined",
    name: 'TypeError',
    stack:
      "TypeError: Cannot read property 'error' of undefined\n" +
      // { devtool: eval }:
      '   at TESTTESTTEST.eval(webpack:///./src/components/test/test.jsx?:295:108)\n' +
      '   at TESTTESTTEST.render(webpack:///./src/components/test/test.jsx?:272:32)\n' +
      '   at TESTTESTTEST.tryRender(webpack:///./~/react-transform-catch-errors/lib/index.js?:34:31)\n' +
      '   at TESTTESTTEST.proxiedMethod(webpack:///./~/react-proxy/modules/createPrototypeProxy.js?:44:30)\n' +
      // { devtool: source-map }:
      '   at Module../pages/index.js (C:\\root\\server\\development\\pages\\index.js:182:7)',
  },

  FIREFOX_3: {
    fileName: 'http://127.0.0.1:8000/js/stacktrace.js',
    lineNumber: 44,
    message: 'this.undef is not a function',
    name: 'TypeError',
    stack:
      '()@http://127.0.0.1:8000/js/stacktrace.js:44\n' +
      '(null)@http://127.0.0.1:8000/js/stacktrace.js:31\n' +
      'printStackTrace()@http://127.0.0.1:8000/js/stacktrace.js:18\n' +
      'bar(1)@http://127.0.0.1:8000/js/file.js:13\n' +
      'bar(2)@http://127.0.0.1:8000/js/file.js:16\n' +
      'foo()@http://127.0.0.1:8000/js/file.js:20\n' +
      '@http://127.0.0.1:8000/js/file.js:24\n' +
      '',
  },

  FIREFOX_7: {
    fileName: 'file:///G:/js/stacktrace.js',
    lineNumber: 44,
    stack:
      '()@file:///G:/js/stacktrace.js:44\n' +
      '(null)@file:///G:/js/stacktrace.js:31\n' +
      'printStackTrace()@file:///G:/js/stacktrace.js:18\n' +
      'bar(1)@file:///G:/js/file.js:13\n' +
      'bar(2)@file:///G:/js/file.js:16\n' +
      'foo()@file:///G:/js/file.js:20\n' +
      '@file:///G:/js/file.js:24\n' +
      '',
  },

  FIREFOX_14: {
    message: 'x is null',
    stack:
      '@http://path/to/file.js:48\n' +
      'dumpException3@http://path/to/file.js:52\n' +
      'onclick@http://path/to/file.js:1\n' +
      '',
    fileName: 'http://path/to/file.js',
    lineNumber: 48,
  },

  FIREFOX_31: {
    message: 'Default error',
    name: 'Error',
    stack:
      'foo@http://path/to/file.js:41:13\n' +
      'bar@http://path/to/file.js:1:1\n' +
      '.plugin/e.fn[c]/<@http://path/to/file.js:1:1\n' +
      '',
    fileName: 'http://path/to/file.js',
    lineNumber: 41,
    columnNumber: 12,
  },

  FIREFOX_43_EVAL: {
    columnNumber: 30,
    fileName: 'http://localhost:8080/file.js line 25 > eval line 2 > eval',
    lineNumber: 1,
    message: 'message string',
    stack:
      'baz@http://localhost:8080/file.js line 26 > eval line 2 > eval:1:30\n' +
      'foo@http://localhost:8080/file.js line 26 > eval:2:96\n' +
      '@http://localhost:8080/file.js line 26 > eval:4:18\n' +
      'speak@http://localhost:8080/file.js:26:17\n' +
      '@http://localhost:8080/file.js:33:9',
  },

  // Internal errors sometimes thrown by Firefox
  // More here: https://developer.mozilla.org/en-US/docs/Mozilla/Errors
  //
  // Note that such errors are instanceof "Exception", not "Error"
  FIREFOX_44_NS_EXCEPTION: {
    message: '',
    name: 'NS_ERROR_FAILURE',
    stack:
      '[2]</Bar.prototype._baz/</<@http://path/to/file.js:703:28\n' +
      'App.prototype.foo@file:///path/to/file.js:15:2\n' +
      'bar@file:///path/to/file.js:20:3\n' +
      '@file:///path/to/index.html:23:1\n' + // inside <script> tag
      '',
    fileName: 'http://path/to/file.js',
    columnNumber: 0,
    lineNumber: 703,
    result: 2147500037,
  },

  FIREFOX_50_RESOURCE_URL: {
    stack:
      'render@resource://path/data/content/bundle.js:5529:16\n' +
      'dispatchEvent@resource://path/data/content/vendor.bundle.js:18:23028\n' +
      'wrapped@resource://path/data/content/bundle.js:7270:25',
    fileName: 'resource://path/data/content/bundle.js',
    lineNumber: 5529,
    columnNumber: 16,
    message: 'this.props.raw[this.state.dataSource].rows is undefined',
    name: 'TypeError',
  },

  SAFARI_6: {
    message: "'null' is not an object (evaluating 'x.undef')",
    stack:
      '@http://path/to/file.js:48\n' +
      'dumpException3@http://path/to/file.js:52\n' +
      'onclick@http://path/to/file.js:82\n' +
      '[native code]',
    line: 48,
    sourceURL: 'http://path/to/file.js',
  },

  SAFARI_7: {
    message: "'null' is not an object (evaluating 'x.undef')",
    name: 'TypeError',
    stack:
      'http://path/to/file.js:48:22\n' +
      'foo@http://path/to/file.js:52:15\n' +
      'bar@http://path/to/file.js:108:107',
    line: 47,
    sourceURL: 'http://path/to/file.js',
  },

  SAFARI_8: {
    message: "null is not an object (evaluating 'x.undef')",
    name: 'TypeError',
    stack:
      'http://path/to/file.js:47:22\n' +
      'foo@http://path/to/file.js:52:15\n' +
      'bar@http://path/to/file.js:108:23',
    line: 47,
    column: 22,
    sourceURL: 'http://path/to/file.js',
  },

  SAFARI_8_EVAL: {
    message: "Can't find variable: getExceptionProps",
    name: 'ReferenceError',
    stack:
      'eval code\n' +
      'eval@[native code]\n' +
      'foo@http://path/to/file.js:58:21\n' +
      'bar@http://path/to/file.js:109:91',
    line: 1,
    column: 18,
  },

  IE_10: {
    message: "Unable to get property 'undef' of undefined or null reference",
    stack:
      "TypeError: Unable to get property 'undef' of undefined or null reference\n" +
      '   at Anonymous function (http://path/to/file.js:48:13)\n' +
      '   at foo (http://path/to/file.js:46:9)\n' +
      '   at bar (http://path/to/file.js:82:1)',
    description:
      "Unable to get property 'undef' of undefined or null reference",
    number: -2146823281,
  },

  IE_11: {
    message: "Unable to get property 'undef' of undefined or null reference",
    name: 'TypeError',
    stack:
      "TypeError: Unable to get property 'undef' of undefined or null reference\n" +
      '   at Anonymous function (http://path/to/file.js:47:21)\n' +
      '   at foo (http://path/to/file.js:45:13)\n' +
      '   at bar (http://path/to/file.js:108:1)',
    description:
      "Unable to get property 'undef' of undefined or null reference",
    number: -2146823281,
  },

  IE_11_EVAL: {
    message: "'getExceptionProps' is undefined",
    name: 'ReferenceError',
    stack:
      "ReferenceError: 'getExceptionProps' is undefined\n" +
      '   at eval code (eval code:1:1)\n' +
      '   at foo (http://path/to/file.js:58:17)\n' +
      '   at bar (http://path/to/file.js:109:1)',
    description: "'getExceptionProps' is undefined",
    number: -2146823279,
  },

  CHROME_48_BLOB: {
    message: 'Error: test',
    name: 'Error',
    stack:
      'Error: test\n' +
      '    at Error (native)\n' +
      '    at s (blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379:31:29146)\n' +
      '    at Object.d [as add] (blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379:31:30039)\n' +
      '    at blob:http%3A//localhost%3A8080/d4eefe0f-361a-4682-b217-76587d9f712a:15:10978\n' +
      '    at blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379:1:6911\n' +
      '    at n.fire (blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379:7:3019)\n' +
      '    at n.handle (blob:http%3A//localhost%3A8080/abfc40e9-4742-44ed-9dcd-af8f99a29379:7:2863)',
  },

  CHROME_48_EVAL: {
    message: 'message string',
    name: 'Error',
    stack:
      'Error: message string\n' +
      'at baz (eval at foo (eval at speak (http://localhost:8080/file.js:21:17)), <anonymous>:1:30)\n' +
      'at foo (eval at speak (http://localhost:8080/file.js:21:17), <anonymous>:2:96)\n' +
      'at eval (eval at speak (http://localhost:8080/file.js:21:17), <anonymous>:4:18)\n' +
      'at Object.speak (http://localhost:8080/file.js:21:17)\n' +
      'at http://localhost:8080/file.js:31:13\n',
  },

  PHANTOMJS_1_19: {
    stack:
      'Error: foo\n' +
      '    at file:///path/to/file.js:878\n' +
      '    at foo (http://path/to/file.js:4283)\n' +
      '    at http://path/to/file.js:4287',
  },

  ANDROID_REACT_NATIVE: {
    message: 'Error: test',
    name: 'Error',
    stack:
      'Error: test\n' +
      'at render(/home/username/sample-workspace/sampleapp.collect.react/src/components/GpsMonitorScene.js:78:24)\n' +
      'at _renderValidatedComponentWithoutOwnerOrContext(/home/username/sample-workspace/sampleapp.collect.react/node_modules/react-native/Libraries/Renderer/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js:1050:29)\n' +
      'at _renderValidatedComponent(/home/username/sample-workspace/sampleapp.collect.react/node_modules/react-native/Libraries/Renderer/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js:1075:15)\n' +
      'at renderedElement(/home/username/sample-workspace/sampleapp.collect.react/node_modules/react-native/Libraries/Renderer/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js:484:29)\n' +
      'at _currentElement(/home/username/sample-workspace/sampleapp.collect.react/node_modules/react-native/Libraries/Renderer/src/renderers/shared/stack/reconciler/ReactCompositeComponent.js:346:40)\n' +
      'at child(/home/username/sample-workspace/sampleapp.collect.react/node_modules/react-native/Libraries/Renderer/src/renderers/shared/stack/reconciler/ReactReconciler.js:68:25)\n' +
      'at children(/home/username/sample-workspace/sampleapp.collect.react/node_modules/react-native/Libraries/Renderer/src/renderers/shared/stack/reconciler/ReactMultiChild.js:264:10)\n' +
      'at this(/home/username/sample-workspace/sampleapp.collect.react/node_modules/react-native/Libraries/Renderer/src/renderers/native/ReactNativeBaseComponent.js:74:41)\n',
  },

  ANDROID_REACT_NATIVE_PROD: {
    message: 'Error: test',
    name: 'Error',
    stack:
      'value@index.android.bundle:12:1917\n' +
      'onPress@index.android.bundle:12:2336\n' +
      'touchableHandlePress@index.android.bundle:258:1497\n' +
      '[native code]\n' +
      '_performSideEffectsForTransition@index.android.bundle:252:8508\n' +
      '[native code]\n' +
      '_receiveSignal@index.android.bundle:252:7291\n' +
      '[native code]\n' +
      'touchableHandleResponderRelease@index.android.bundle:252:4735\n' +
      '[native code]\n' +
      'u@index.android.bundle:79:142\n' +
      'invokeGuardedCallback@index.android.bundle:79:459\n' +
      'invokeGuardedCallbackAndCatchFirstError@index.android.bundle:79:580\n' +
      'c@index.android.bundle:95:365\n' +
      'a@index.android.bundle:95:567\n' +
      'v@index.android.bundle:146:501\n' +
      'g@index.android.bundle:146:604\n' +
      'forEach@[native code]\n' +
      'i@index.android.bundle:149:80\n' +
      'processEventQueue@index.android.bundle:146:1432\n' +
      's@index.android.bundle:157:88\n' +
      'handleTopLevel@index.android.bundle:157:174\n' +
      'index.android.bundle:156:572\n' +
      'a@index.android.bundle:93:276\n' +
      'c@index.android.bundle:93:60\n' +
      'perform@index.android.bundle:177:596\n' +
      'batchedUpdates@index.android.bundle:188:464\n' +
      'i@index.android.bundle:176:358\n' +
      'i@index.android.bundle:93:90\n' +
      'u@index.android.bundle:93:150\n' +
      '_receiveRootNodeIDEvent@index.android.bundle:156:544\n' +
      'receiveTouches@index.android.bundle:156:918\n' +
      'value@index.android.bundle:29:3016\n' +
      'index.android.bundle:29:955\n' +
      'value@index.android.bundle:29:2417\n' +
      'value@index.android.bundle:29:927\n' +
      '[native code]',
  },

  IOS_REACT_NATIVE_1: {
    message: 'Error: from issue #11',
    stack: `
      _exampleFunction@/home/test/project/App.js:125:13
      _depRunCallbacks@/home/test/project/node_modules/dep/index.js:77:45
      tryCallTwo@/home/test/project/node_modules/react-native/node_modules/promise/lib/core.js:45:5
      doResolve@/home/test/project/node_modules/react-native/node_modules/promise/lib/core.js:200:13
    `,
  },

  IOS_REACT_NATIVE_2: {
    message:
      'Error: from issue https://github.com/facebook/react-native/issues/24382#issuecomment-489404970',
    stack:
      's@33.js:1:531\n' +
      'b@1959.js:1:1469\n' +
      'onSocketClose@2932.js:1:727\n' +
      'value@81.js:1:1505\n' +
      '102.js:1:2956\n' +
      'value@89.js:1:1247\n' +
      'value@42.js:1:3311\n' +
      '42.js:1:822\n' +
      'value@42.js:1:2565\n' +
      'value@42.js:1:794\n' +
      'value@[native code]',
  },
};
