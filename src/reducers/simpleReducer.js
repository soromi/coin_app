export default (state = {}, action) => {
    switch (action.type) {
        case "SIMPLE_ACTION":
            return {
                result: action.payload
            }

        case "SET_PAGE_HOME":
            return {
                result: action.payload
            }

        case "SET_PAGE_PAGE1":
            return {
                result: action.payload
            }

        case "SET_PAGE_PAGE2":
            return {
                result: action.payload
            }

        case "ANIMATE_START":
            return {
                result: action.payload
            }

        case "ANIMATE_END":
            return {
                result: action.payload
            }

        default:
            return state
    }
}