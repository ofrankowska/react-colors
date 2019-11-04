export default {
        root: {
            backgroundColor: "white",
            border: "1px solid black",
            borderRadius: "5px",
            padding: "0.5rem",
            overflow: "hidden",
            cursor: "pointer",
            "&:hover svg": {
                opacity: 1
            },
            position: "relative"
        },
        colors: {
            backgroundColor: "#dae1e4",
            height: "150px",
            width: "100%",
            borderRadius: "5px",
            overflow: "hidden"
    
        },
        title: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: "0",
            color: "black",
            paddingTop: ".5rem",
            fontSize: "1rem",
            position: "relative"
        },
        emoji: {
            marginLeft: ".5rem",
            fontSize: "1.5rem"
        },
        miniColor: {
            height: "25%",
            width: "20%",
            display: "inline-block",
            margin: "0 auto",
            position: "relative",
            marginBottom: "-4.5px"
        },
        deleteIcon: {
            color: "white",
            backgroundColor: "#eb3d30",
            width: "20px",
            height: "20px",
            position: "absolute",
            zIndex: 1,
            right: "0px",
            top: "0px",
            padding: "10px",
            opacity: 0,
        }
}