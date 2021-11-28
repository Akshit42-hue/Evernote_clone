const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: "calc(100% - 35px)",
    position: "absolute",
    left: "0",
    width: "300px",
    boxShadow: "0px 0px 2px black"
  },
  newChatBtn: {
    borderRadius: "0px"
  },
  unreadMessage: {
    color: "red",
    position: "absolute",
    top: "0",
    right: "5px"
  },
  newNoteBtn: {
    width: "100%",
    height: "35px",
    borderBottom: "1px",
    borderRadius: "10px",
    backgroundColor: "#8080ff",
    color: "white",
    "&:hover": {
      backgroundColor: "#ccccff",
      color: "Black"
    }
  },
  sidebarContainer: {
    marginTop: "0px",
    width: "300px",
    height: "100%",
    boxSizing: "border-box",
    float: "left",
    overflowY: "scroll",
    overflowX: "hidden"
  },
  newNoteInput: {
    width: "100%",
    margin: "0px",
    height: "35px",
    outline: "none",
    border: "none",
    paddingLeft: "5px",
    "&:focus": {
      outline: "2px solid rgba(81, 203, 238, 1)"
    }
  },
  newNoteSubmitBtn: {
    width: "100%",
    backgroundColor: "#ffbf00",
    borderRadius: "10px",
    color: "White",
    "&:hover": {
      backgroundColor: "#ffe699",
      color: "Black"
    }
  }
});

export default styles;
