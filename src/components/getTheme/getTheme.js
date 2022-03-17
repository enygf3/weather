const getTheme = (props) => {
	const body = document.body;
	if (props.current.is_day == 1) {
		body.style.background = "linear-gradient(45deg, #14033d 0%, #2d204d 100%)";
	} else {
		body.style.background = "#14033D";
	}
};

export default getTheme;
