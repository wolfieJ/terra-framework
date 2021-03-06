# Terra EmbeddedContentConsumer


[![NPM version](https://badgen.net/npm/v/terra-embedded-content-consumer)](https://www.npmjs.org/package/terra-embedded-content-consumer)
[![Build Status](https://badgen.net/travis/cerner/terra-framework)](https://travis-ci.com/cerner/terra-framework)

The Embedded Content Consumer is the application component which is embedding web content within it.

- [Getting Started](#getting-started)
- [Documentation](https://github.com/cerner/terra-framework/tree/master/packages/terra-embedded-content-consumer/docs)
- [LICENSE](#license)

## Getting Started

- Install from [npmjs](https://www.npmjs.com):
  - `npm install terra-embedded-content-consumer`

- Install the [`xfc`](https://www.npmjs.com/package/xfc) peer dependency:
  - `npm install xfc --save-dev`

- Then, initalize the XFC Consumer to use the `terra-embedded-content-consumer`. This will create an app broker to manage embedded applications.

<!-- AUTO-GENERATED-CONTENT:START Peer Dependencies -->
## Peer Dependencies

This component requires the following peer dependencies be installed in your app for the component to properly function.

| Peer Dependency | Version |
|-|-|
| react | ^16.8.5 |
| react-dom | ^16.8.5 |
| xfc | ^1.2.1 |

<!-- AUTO-GENERATED-CONTENT:END -->

```jsx
import { Consumer } from 'xfc';

Consumer.init();
```

## LICENSE

Copyright 2017 - 2020 Cerner Innovation, Inc.

Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

&nbsp;&nbsp;&nbsp;&nbsp;http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.