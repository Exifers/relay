/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @generated SignedSource<<0d03025851537987f1269b604ea585b5>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { LiveCounterResolver$key } from "./LiveCounterResolver.graphql";
import type { LiveState } from "relay-runtime/store/experimental-live-resolvers/LiveResolverStore";
import type { FragmentType } from "relay-runtime";
import queryCounterResolver from "../LiveCounterResolver.js";
// Type assertion validating that `queryCounterResolver` resolver is correctly implemented.
// A type error here indicates that the type signature of the resolver module is incorrect.
(queryCounterResolver: (
  rootKey: LiveCounterResolver$key, 
) => LiveState<any>);
declare export opaque type CounterPlusOneResolver$fragmentType: FragmentType;
export type CounterPlusOneResolver$data = {|
  +counter: $NonMaybeType<$Call<$Call<<R>((...empty[]) => R) => R, typeof queryCounterResolver>["read"]>>,
  +$fragmentType: CounterPlusOneResolver$fragmentType,
|};
export type CounterPlusOneResolver$key = {
  +$data?: CounterPlusOneResolver$data,
  +$fragmentSpreads: CounterPlusOneResolver$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "CounterPlusOneResolver",
  "selections": [
    {
      "kind": "RequiredField",
      "field": {
        "alias": null,
        "args": null,
        "fragment": {
          "args": null,
          "kind": "FragmentSpread",
          "name": "LiveCounterResolver"
        },
        "kind": "RelayLiveResolver",
        "name": "counter",
        "resolverModule": require('./../LiveCounterResolver'),
        "path": "counter"
      },
      "action": "THROW",
      "path": "counter"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

if (__DEV__) {
  (node/*: any*/).hash = "5c197a1dfaa6945a727e92cd1996348d";
}

module.exports = ((node/*: any*/)/*: Fragment<
  CounterPlusOneResolver$fragmentType,
  CounterPlusOneResolver$data,
>*/);
