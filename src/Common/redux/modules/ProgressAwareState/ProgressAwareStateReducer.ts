import { IProgress } from "./ProgressAwareStateContracts";
import { ProgressAwareActions, ProgressAwareErrorType, ProgressAwareLoadingType } from "./ProgressAwareStateActions";
import produce from "immer";

export function progressAwareReducer(state: IProgress, action: ProgressAwareActions): IProgress {
    if (!state) {
        state = {
            error: null,
            loading: false
        };
    }

    return produce(state, draft => {
        switch (action.type) {
            case ProgressAwareErrorType:
                draft.error = action.payload;
                draft.loading = false;
                break;
            case ProgressAwareLoadingType:
                draft.loading = action.payload
                break;
        }
    });
}