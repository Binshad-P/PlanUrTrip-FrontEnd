/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}","./node_modules/rizzui/dist/*.{js,ts,jsx,tsx}"],
   
  theme: {
    extend: {
      backgroundImage: {
        img1: "url(../src/assets/images/bg-img-1.png)",
        img2: "url(../src/assets/images/bg-img2.png)",
        img3: "url(../src/assets/images/bg-img3.png)",
        img4: "url(../src/assets/images/bg-img4.png)",
        img5: "url(../src/assets/images/bg-img5.png)",
        PlanUrTrip: "url(../src/assets/images/PlanUrTrip.png)",
        itinerary: "url(../src/assets/images/Itinerary-img.png)",
        "login-img": "url(../src/assets/images/login-img.jpg)",
        "signUP-img": "url(../src/assets/images/signup.jpg)",
        "otp-img": "url(../src/assets/images/OTP.jpg)",
        sd: "url(../src/assets/images/sd.jpg)",
        About: "url(../src/assets/images/About.jpg)",
        Aboutus: "url(../src/assets/images/Aboutus.webp)",
        map: "url(../src/assets/images/map.png)",
      },
      fontFamily: {
        Marcellus: ["Marcellus SC", "serif"],
      },
      screens: {
        "md-max": { max: "996px" },
        "sm-max": { max: "576px" },
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
