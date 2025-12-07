import dp1 from "../assets/images/dp1.png";
import dp2 from "../assets/images/dp2.png";
import dp3 from "../assets/images/dp3.png";
import dp4 from "../assets/images/dp4.png";
import dp5 from "../assets/images/dp5.png";

// Logged-in user
export const currentUser = {
  id: 0,
  name: "Komal",
  avatar: dp3,
};

// Users (friends)
export const users = [
  {
    id: 1,
    name: "Anushay",
    avatar: dp1,
    messages: [
      { id: 1, text: "Hi! How are you?", sender: "them", time: "10:10 AM" },
      { id: 2, text: "I'm fine!", sender: "me", time: "10:12 AM" },
      { id: 3, text: "What are you doing?", sender: "them", time: "10:15 AM" },
    ],
  },
  {
    id: 2,
    name: "Sumbal",
    avatar: dp2,
    messages: [
      { id: 1, text: "Hi! How are you?", sender: "them", time: "10:10 AM" },
      { id: 2, text: "I'm fine!", sender: "me", time: "10:12 AM" },
    ],
  },
  {
    id: 3,
    name: "Aazar",
    avatar: dp4,
    messages: [
      { id: 1, text: "Hello Komal", sender: "them", time: "9:00 PM" },
      { id: 2, text: "Hi Azar", sender: "me", time: "9:02 PM" },
    ],
  },
  {
    id: 4,
    name: "Sulaiman",
    avatar: dp5,
    messages: [
      { id: 1, text: "Hello Komal", sender: "them", time: "9:00 PM" },
      { id: 2, text: "Hi Sulaman", sender: "me", time: "9:02 PM" },
    ],
  },
];
