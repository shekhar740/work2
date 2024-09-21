'use client'
import { Button } from "@/components/ui/button";
import axios from "axios";

const Dasboard = () => {
  const hanldeClicks = async (e) => {
    try {
      const dd = await axios.post("/api/dashboard/dashboard", {
        email: "shekhar metre",
      });
      console.log(dd.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Button onClick={hanldeClicks}>hells</Button>
    </div>
  );
};
export default Dasboard;
