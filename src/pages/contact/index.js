import React from "react";
import { navigate } from "gatsby-link";
import Layout from "../../components/Layout";

import mailLogo from "../../img/email.png";

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isValidated: false };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...this.state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  render() {
    return (
      <Layout>
        <section className="section">
          <div className="container">
            <div className="content has-text-centered">
              <h1>Contact</h1>
              <img
                src={mailLogo}
                alt="logo"
                style={{
                  width: "340px",
                  display: "block",
                  margin: "6em auto"
                }}
              />
              <a href="mailto:giovannfulin@gmail.com" className="btn">
                {" "}
                email me{" "}
              </a>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
