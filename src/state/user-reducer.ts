export type StateType = {
    name: string
    age: number
    childrenCount: number
}

type ActionType = {
    type: string
    [key: string]: any
}

export const userReducer = (state: StateType, action: ActionType) => {
    switch (action.type) {
        case "INCREMENT-AGE":
            return {
                ...state,
                age: state.age + 1
            }
        case "INCREMENT-COUNT":
            return {
                ...state,
                childrenCount: state.childrenCount + 1
            }
        case "CHANGE-NAME":
            return {
                ...state,
                name: "Viktor"
            }
        default:
            throw new Error("I don't know this type")
    }
}