import { create } from 'zustand'
import { immer } from 'zustand/middleware/immer'

export type TimezoneState = {
  timezonesList: string[]
  selectedTimezone: string
  dateTime: string
}

interface IAppState {
  timezoneState: TimezoneState
  setTimezoneState: (
    stateVariable: Partial<TimezoneState> | ((prevDrawerState: TimezoneState) => TimezoneState)
  ) => void
}

export const useAppState = create<IAppState>()(
  immer((set) => ({
    timezoneState: {
      timezonesList: [],
      selectedTimezone: '',
      dateTime: '',
    },
    setTimezoneState: (stateVariable) =>
      set((state) => {
        if (typeof stateVariable === 'function') {
          state.timezoneState = stateVariable(state.timezoneState)
        } else {
          state.timezoneState = { ...state.timezoneState, ...stateVariable }
        }
      }),
  }))
)
