import React, { useReducer, useEffect } from 'react'
//LOADING, SUCCESS, ERROR
function reducer(state, action) {
    switch (action.type) {
        case 'LOADING':
            return {
                loading: true,
                data: null,
                error: null,
            };
        case 'SUCCESS':
            return {
                loading: false,
                data: action.data,
                error: null,
            };
        case 'ERROR':
            return {
                loading: false,
                data: null,
                error: action.error,
            };
        default:
            throw new Error(`error`);
    }
}

//callback은 api호출하는 함수 deps는 값이 변경되었을때
//특정버튼을 누를때만 동작하도록 세번째 속성을 후가
const useAsync = (callback, deps = [], skip = false) => {
    const [state, dispatch] = useReducer(reducer, {
        loading: false,
        data: null,
        error: null,
    });

    const fetchData = async () => {
        dispatch({ type: 'LOADING' });
        try {
            const data = await callback();
            dispatch({ type: 'SUCCESS', data })
        } catch (e) {
            dispatch({ type: 'ERROR', error: e })
        }
    }

    useEffect(() => {
        //skip이 true라면 리턴
        if (skip) {
            return;
        }
        fetchData();
        // esline-disable-next-line
    }, deps)
    return [state, fetchData];
}

export default useAsync;


