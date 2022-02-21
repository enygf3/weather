const getTheme = (props) => {
    const app = document.getElementById("app")
    if(props.current.is_day == 1) {
        app.style.background = "linear-gradient(45deg, rgba(20,3,61,1) 36%, rgba(150,152,34,1) 100%)"
    } else {
        app.style.background = "#14033D"
    }
}

export default getTheme