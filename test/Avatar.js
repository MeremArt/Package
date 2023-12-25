const React = require("react");
const { useState } = require("react");

const Avatar = (props) => {
  const [hovered, setHovered] = useState(false);

  const styles = {
    chatWithMeButton: {
      cursor: "pointer",
      boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
      borderRadius: "50%",
      backgroundImage: `url(https://res.cloudinary.com/dtfvdjvyr/image/upload/v1697650258/Group_11_gtqzgd.png)`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center",
      backgroundSize: "84px",
      width: "84px",
      height: "84px",
      border: hovered ? `1px solid #8A88FB` : `4px solid #8A88FB`,
    },
    avatarHello: {
      position: "absolute",
      left: "calc(-100% - 44px - 28px)",
      top: "calc(50% - 24px)",
      zIndex: "10000",
      boxShadow: "0px 0px 16px 6px rgba(0, 0, 0, 0.33)",
      padding: "12px 12px 12px 16px",
      borderRadius: "24px",
      backgroundColor: "#f9f0ff",
      color: "black",
      opacity: hovered ? `1` : `0`,
    },
  };

  return (
    <div style={props.style}>
      <div className="transition-3" style={styles.avatarHello}>
        Connect with a Wizard
      </div>
      <div
        className="transition-3"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => props.onClick && props.onClick()}
        style={styles.chatWithMeButton}
      ></div>
    </div>
  );
};

module.exports = Avatar;
