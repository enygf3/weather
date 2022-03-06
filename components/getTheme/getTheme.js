const getTheme = (props) => {
    const app = document.getElementById("app")
    if(props.current.is_day == 1) {
        app.style.background = "linear-gradient(45deg, #14033d 0%, #250D5E 100%)"
    } else {
        app.style.background = "#14033D"
    }
}

export default getTheme