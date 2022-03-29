'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

var _typeof = require('@babel/runtime/helpers/typeof');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _defineProperty2 = _interopRequireDefault(
  require('@babel/runtime/helpers/defineProperty')
);

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);

var _react = _interopRequireWildcard(require('react'));

var _material = require('@mui/material');

var _iconsMaterial = require('@mui/icons-material');

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== 'function') return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(
    nodeInterop
  ) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }
  if (
    obj === null ||
    (_typeof(obj) !== 'object' && typeof obj !== 'function')
  ) {
    return { default: obj };
  }
  var cache = _getRequireWildcardCache(nodeInterop);
  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }
  var newObj = {};
  var hasPropertyDescriptor =
    Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var key in obj) {
    if (key !== 'default' && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor
        ? Object.getOwnPropertyDescriptor(obj, key)
        : null;
      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }
  newObj['default'] = obj;
  if (cache) {
    cache.set(obj, newObj);
  }
  return newObj;
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);
  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly &&
      (symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      })),
      keys.push.apply(keys, symbols);
  }
  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2
      ? ownKeys(Object(source), !0).forEach(function (key) {
          (0, _defineProperty2['default'])(target, key, source[key]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(
          target,
          Object.getOwnPropertyDescriptors(source)
        )
      : ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(
            target,
            key,
            Object.getOwnPropertyDescriptor(source, key)
          );
        });
  }
  return target;
}

var _default = {
  Add: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.AddBox,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'add_box'
      })
    );
  }),
  Check: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.Check,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'check'
      })
    );
  }),
  Clear: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.Clear,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'clear'
      })
    );
  }),
  Delete: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.DeleteOutline,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'delete_outline'
      })
    );
  }),
  DetailPanel: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.ChevronRight,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'chevron_right'
      })
    );
  }),
  Edit: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.Edit,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'edit'
      })
    );
  }),
  Export: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.SaveAlt,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'save_alt'
      })
    );
  }),
  Filter: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.FilterList,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'filter_list'
      })
    );
  }),
  FirstPage: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.FirstPage,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'first_page'
      })
    );
  }),
  LastPage: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.LastPage,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'last_page'
      })
    );
  }),
  NextPage: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.ChevronRight,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'chevron_right'
      })
    );
  }),
  PreviousPage: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.ChevronLeft,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'chevron_left'
      })
    );
  }),
  ResetSearch: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.Clear,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'clear'
      })
    );
  }),
  Resize: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _material.Icon,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        style: _objectSpread({}, props.style),
        'data-testid': 'drag_handle'
      }),
      '|'
    );
  }),
  Retry: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.Replay,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'replay'
      })
    );
  }),
  Search: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.Search,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'search'
      })
    );
  }),
  SortArrow: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.ArrowDownward,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'arrow_downward'
      })
    );
  }),
  ThirdStateCheck: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.Remove,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'remove'
      })
    );
  }),
  ViewColumn: /*#__PURE__*/ (0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      _iconsMaterial.ViewColumn,
      (0, _extends2['default'])({}, props, {
        ref: ref,
        'data-testid': 'view_column'
      })
    );
  })
};
exports['default'] = _default;
