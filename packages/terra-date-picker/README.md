# Terra Date Picker

[![NPM version](https://badgen.net/npm/v/terra-date-picker)](https://www.npmjs.org/package/terra-date-picker)
[![Build Status](https://badgen.net/travis/cerner/terra-framework)](https://travis-ci.org/cerner/terra-framework)

Terra-date-picker is an uncontrolled input component that provides users a way to enter or select a date from the date picker. terra-date-picker is essentially a wrapper for [react-datepicker][1] and leverages many of its props. One important difference between terra-date-picker and [react-datepicker][1] is that all of the date props in [react-datepicker][1] must be the native [Date][2] object whereas the date props in terra-date-picker are ISO 8601 representation of the date.

This is an uncontrolled component because it manages the state of the value in the input. Because this is an uncontrolled input component, it cannot accept the defaultValue prop as it always uses the value prop. React does not allow having both the defaultValue and value props.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-framework/tree/master/packages/terra-date-picker/docs)
- [LICENSE](#license)

## Getting Started

- Install with [npm](https://www.npmjs.com): `npm install terra-date-picker`

## LICENSE

Copyright 2017 - 2019 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.

[1]: https://github.com/Hacker0x01/react-datepicker
[2]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
