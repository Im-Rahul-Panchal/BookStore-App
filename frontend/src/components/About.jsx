import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-2xl contain mx-auto md:px-20 px-4 dark:bg-slate-800 dark:text-white">
        <br />
        <h1 className="text-4xl font-extrabold flex justify-end mt-32 md:mt-24 mb-7 text-pink-500 border-4 border-red-400 border-inset rounded-lg p-4 shadow-lg">
          <marquee>About Us 😊</marquee>
        </h1>
        <div>
          <p className="text-xl">
            Welcome to{" "}
            <span className="text-pink-600 font-semibold">Book Bar</span>, your
            ultimate destination for exploring the world of literature! Whether
            you're a fan of thrilling mysteries, heartwarming romances, or
            thought-provoking non-fiction, our app is designed to cater to every
            reader's taste. <br />
            <br />
            Our Mission At{" "}
            <span className="text-pink-600 font-semibold">
              Book Bar ----
            </span>{" "}
            <br />
            We believe that books have the power to inspire, educate, and
            transform lives. Our mission is to connect readers with their next
            favorite book while fostering a vibrant community of book lovers. We
            aim to make reading accessible and enjoyable for everyone, no matter
            their preference or background. What We Offer Diverse Genres: Dive
            into a vast collection of books across various genres. From classics
            to contemporary bestsellers, there’s something for everyone.
            Personalized Recommendations: Our smart algorithms suggest books
            tailored to your interests, helping you discover new authors and
            hidden gems. User Reviews and Ratings: Read reviews from fellow
            readers and share your thoughts to help others make informed
            choices. Community Engagement: Join discussions, participate in
            reading challenges, and connect with fellow bibliophiles through our
            interactive features. <br />
            <br />
            Why Choose Us? <br />
            With <span className="text-pink-600 font-semibold">Book Bar</span>,
            you’re not just reading; you’re part of a community that celebrates
            the joy of storytelling. We’re committed to providing an intuitive,
            user-friendly experience that enhances your reading journey. Thank
            you for choosing{" "}
            <span className="text-pink-600 font-semibold">Book Bar.</span>{" "}
            <br /> Let’s turn the page to new adventures together! <br/>
            Join Us on 
            <span className="text-pink-600 font-semibold"> Book Bar.</span>{" "}
            This Journey Thank you for choosing . 
            We’re excited to
            accompany you on your literary adventures. Whether you're curling up
            with a good book at home or discovering new titles on the go, we’re
            here to enhance your reading experience. Let’s turn the page to new
            adventures together!
          </p>
        </div>
      </div>
    </>
  );
};

export default About;
