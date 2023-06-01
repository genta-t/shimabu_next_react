import { createSlice } from '@reduxjs/toolkit'

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1
      // onClick={() => dispatch(increment())}でカウントが+1される
    },
    decrement: (state) => {
      state.value -= 1
      // onClick={() => dispatch(decrement())}でカウントが-1される
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
      //この辺に複雑な処理を書いていくのであろう
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer

//非同期処理
export const incrementAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(decrementByAmount(amount))
  }, 1000)
}

export const selectCount = (state) => state.counter.value
//こういう書き方みたい