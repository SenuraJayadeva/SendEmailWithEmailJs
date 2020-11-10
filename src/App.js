import "./App.css";
import emailjs from "emailjs-com";

function App() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_a0wzcfi",
        e.target,
        "USER_ID" //give you user id here
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div className="container">
      <div style={{ marginTop: "5%" }}>
        <form onSubmit={sendEmail}>
          <div class="form-group">
            <label>Your Name</label>
            <input
              name="name"
              type="text"
              class="form-control"
              placeholder="Enter Your Name"
            />
          </div>

          <div class="form-group">
            <label>Email address</label>
            <input
              name="email"
              type="email"
              class="form-control"
              placeholder="Enter Your Email"
            />
          </div>

          <div class="form-group">
            <label>Message</label>

            <textarea
              name="message"
              class="form-control"
              placeholder="Enter Your Message"
            ></textarea>
          </div>

          <button type="submit" class="btn btn-primary">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
