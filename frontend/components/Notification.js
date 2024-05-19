import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const Notification = () => {
    return <ToastContainer />
}

export const notifyAction = (message, type) => {
    if (type === "success") {
        toast.success(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {backgroundColor: "green", color: "white"},
        })
    } else if (type === "error") {
        toast.error(message, {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            style: {backgroundColor: "red", color: "white"},
        })
    }
}

export default Notification
