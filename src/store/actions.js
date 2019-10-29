export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export function increment() {
    return { type: INCREMENT }
}
export const decrement = () => ({ type: DECREMENT })
export const reset = () => ({ type: RESET })
