import {EPOCHS_PER_SLASHINGS_VECTOR} from "@chainsafe/lodestar-params";
import {IEpochProcess, CachedBeaconStateAllForks} from "../../types";

/**
 * Reset the next slashings balance accumulator
 *
 * PERF: Almost no (constant) cost
 */
export function processSlashingsReset(state: CachedBeaconStateAllForks, epochProcess: IEpochProcess): void {
  const nextEpoch = epochProcess.currentEpoch + 1;

  // reset slashings
  state.slashings[nextEpoch % EPOCHS_PER_SLASHINGS_VECTOR] = BigInt(0);
}
