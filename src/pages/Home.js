import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HowItWorks from "../components/HowItWorks";
import Marquee from "../components/Marquee";

function Home() {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_rqyhxpg",
        "template_gw53tzn",
        form.current,
        "cnk9au6v3VBqm0eoD"
      )
      // .sendForm(
      //   "service_3a0enal",
      //   "template_x55wubl",
      //   form.current,
      //   "nILhyjPdDiG6yewwS"
      // )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    console.log("Server Error 500");
  };
  return (
    <>
      <Header />
      <HowItWorks />
      <Footer />  
    </>
  );
}

export default Home;
