import {allForks, phase0, CachedBeaconStateAllForks, CachedBeaconStatePhase0, CachedBeaconStateAltair} from "../../src";
import {IEpochProcess} from "../../src/types";

// Type aliases to typesafe itBench() calls

export type State = CachedBeaconStateAllForks;
export type StateAltair = CachedBeaconStateAltair;
export type StateBlock = {state: CachedBeaconStateAllForks; block: allForks.SignedBeaconBlock};
export type StateAttestations = {
  state: CachedBeaconStateAllForks;
  attestations: phase0.Attestation[];
};
export type StateEpoch = {state: CachedBeaconStateAllForks; epochProcess: IEpochProcess};
export type StatePhase0Epoch = {state: CachedBeaconStatePhase0; epochProcess: IEpochProcess};
export type StateAltairEpoch = {state: CachedBeaconStateAltair; epochProcess: IEpochProcess};
