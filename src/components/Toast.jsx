import './toast.css';

const Toast = (props) => {
    const visibility = props.display ? "show" : "hidden";

    return (
        <div className={visibility + " fixed top-1 right-2 sm:right-16 text-white bg-gray-800 px-3 py-2 rounded-md z-10"}>
            {props.text}
        </div>
    )
}

export default Toast;