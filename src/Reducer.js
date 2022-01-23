const initState = {
    theme: 'default',
    isChatOpened: 'false'
}

const Reducer = (state = initState, action) => {
    switch (action.type) {
        case "OPEN_CHAT":
            return {
                ...state,
                isChatOpened: "true"
            }
        case "CLOSE_CHAT":
            return {
                ...state,
                isChatOpened: "false"
            }

        default:
            return state
    }
}

export default Reducer;