export const simpleAction = () => dispatch => {
    dispatch({
        type: "SIMPLE_ACTION",
        payload: "simple action"
    })
}

export const setPageHome = () => dispatch => {
    dispatch({
        type: "SET_PAGE_HOME",
        payload: "home"
    })
}

export const setPagePage1 = () => dispatch => {
    dispatch({
        type: "SET_PAGE_PAGE1",
        payload: "page1"
    })
}

export const setPagePage2 = () => dispatch => {
    dispatch({
        type: "SET_PAGE_PAGE2",
        payload: "page2"
    })
}


export const aniamteStart = () => dispatch => {
    dispatch({
        type: "ANIMATE_START",
        payload: "ㅇㅅㅇ",
    })
}

export const aniamteEnd = () => dispatch => {
    dispatch({
        type: "ANIMATE_END",
        payload: "ㅇㅅㅇ",
    })
}


// 애니메이션 콜백 되면
// currentPage값 빼고 hide, 해당 url 적용