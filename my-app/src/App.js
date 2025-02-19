import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        fullName: "Emmanuel Amalaman",
        bio: "Développeur passionné par toutes les nouvelles technologies.",
        imgSrc: "https://images.unsplash.com/photo-1604145559206-e3bce0040e2d?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        profession: "Développeur Full Stack",
      },
      show: false,
      elapsedTime: 0,
    };
    this.toggleShow = this.toggleShow.bind(this);
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState((prevState) => ({ elapsedTime: prevState.elapsedTime + 1 }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  toggleShow() {
    this.setState((prevState) => ({ show: !prevState.show }));
  }

  render() {
    return (
      <div style={styles.container}>
        <button onClick={this.toggleShow} style={styles.button}>
          {this.state.show ? "Masquer Profil" : "Afficher Profil"}
        </button>
        {this.state.show && (
          <div style={styles.profile}>
            <img src={this.state.person.imgSrc} alt="profile" style={styles.image} />
            <h2>{this.state.person.fullName}</h2>
            <p>{this.state.person.bio}</p>
            <h4>{this.state.person.profession}</h4>
          </div>
        )}
        <p>Temps écoulé depuis le montage : {this.state.elapsedTime} secondes</p>
      </div>
    );
  }
}

const styles = {
  container: { 
    textAlign: "center", 
    marginTop: "50px", 
    padding: "20px", 
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f0f0f0",
    minHeight: "100vh",
  },
  button: { 
    padding: "10px 20px", 
    fontSize: "16px", 
    cursor: "pointer", 
    backgroundColor: "#007BFF", 
    color: "#fff", 
    border: "none", 
    borderRadius: "5px", 
    transition: "background-color 0.3s ease",
  },
  profile: { 
    border: "1px solid #ccc", 
    padding: "20px", 
    display: "inline-block", 
    marginTop: "20px", 
    backgroundColor: "#fff", 
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", 
    borderRadius: "10px",
    transition: "transform 0.3s ease",
  },
  image: { 
    width: "150px", 
    borderRadius: "50%", 
    marginBottom: "20px",
  },
};

// Add hover styles separately
const buttonHover = {
  backgroundColor: "#0056b3",
};

const profileHover = {
  transform: "scale(1.05)",
};

// Apply hover styles using JavaScript
document.addEventListener("DOMContentLoaded", () => {
  const button = document.querySelector("button");
  const profile = document.querySelector(".profile");

  if (button) {
    button.addEventListener("mouseover", () => {
      Object.assign(button.style, buttonHover);
    });
    button.addEventListener("mouseout", () => {
      Object.assign(button.style, styles.button);
    });
  }

  if (profile) {
    profile.addEventListener("mouseover", () => {
      Object.assign(profile.style, profileHover);
    });
    profile.addEventListener("mouseout", () => {
      Object.assign(profile.style, styles.profile);
    });
  }
});

export default App;
