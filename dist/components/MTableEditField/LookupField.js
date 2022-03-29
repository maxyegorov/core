'use strict';

var _interopRequireDefault = require('@babel/runtime/helpers/interopRequireDefault');

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = void 0;

var _extends2 = _interopRequireDefault(
  require('@babel/runtime/helpers/extends')
);

var _objectWithoutProperties2 = _interopRequireDefault(
  require('@babel/runtime/helpers/objectWithoutProperties')
);

var _react = _interopRequireDefault(require('react'));

var _material = require('@mui/material');

var _excluded = ['forwardedRef'];

function LookupField(_ref) {
  var forwardedRef = _ref.forwardedRef,
    props = (0, _objectWithoutProperties2['default'])(_ref, _excluded);
  return /*#__PURE__*/ _react['default'].createElement(
    _material.FormControl,
    {
      ref: forwardedRef,
      error: Boolean(props.error)
    },
    /*#__PURE__*/ _react['default'].createElement(
      _material.Select,
      (0, _extends2['default'])({}, props, {
        value: props.value === undefined ? '' : props.value,
        onChange: function onChange(event) {
          return props.onChange(event.target.value);
        },
        style: {
          fontSize: 13
        },
        SelectDisplayProps: {
          'aria-label': props.columnDef.title
        }
      }),
      Object.keys(props.columnDef.lookup).map(function (key) {
        return /*#__PURE__*/ _react['default'].createElement(
          _material.MenuItem,
          {
            key: key,
            value: key
          },
          props.columnDef.lookup[key]
        );
      })
    ),
    Boolean(props.helperText) &&
      /*#__PURE__*/ _react['default'].createElement(
        _material.FormHelperText,
        null,
        props.helperText
      )
  );
}

var _default = /*#__PURE__*/ _react['default'].forwardRef(
  function LookupFieldRef(props, ref) {
    return /*#__PURE__*/ _react['default'].createElement(
      LookupField,
      (0, _extends2['default'])({}, props, {
        forwardedRef: ref
      })
    );
  }
);

exports['default'] = _default;
