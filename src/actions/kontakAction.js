import axios from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK";

export const getListKontak = () => {
    console.log("2.masuk action")
    return (dispatch) => {
        //Loading
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        //Get Data From API 
        axios({
            method: "GET",
            url: "http://localhost:3000/kontaks",
            timeout: 120000
        }).then((res) => {
            console.log("3.success get data", res.data)
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: res.data,
                    errorMessage: false
                }
            })
        }).catch((err) => {
            console.log("3.error get data", err)
            dispatch({
                type: GET_LIST_KONTAK,
                payload: {
                    loading: false,
                    data: false,
                    errorMessage: err.message
                }
            })
        })
    }
}
