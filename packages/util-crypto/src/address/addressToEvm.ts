// Copyright 2017-2022 @polkadot/util-crypto authors & contributors
// SPDX-License-Identifier: Apache-2.0

import type { HexString } from '@polkadot/util/types';

import { decodeAddress } from './decode';

/**
 * @name addressToEvm
 * @summary Converts an SS58 address to its corresponding EVM address.
 */
export function addressToEvm (address: HexString | string | Uint8Array, ignoreChecksum?: boolean): Uint8Array {
  return decodeAddress(address, ignoreChecksum).subarray(0, 20);
}
