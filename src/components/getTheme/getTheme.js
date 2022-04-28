const getTheme = (props) => {
  if (props.current.is_day === 1) {
    document.body.style.background =
      "linear-gradient(45deg, #14033d 0%, #2d204d 100%)";
  } else {
    document.body.style.background = "#14033D";
  }
};

export default getTheme;
