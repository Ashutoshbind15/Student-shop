import Image from "next/image";
import ReviewCards from "../components/Layout/ReviewCards";
import TypeCards from "../components/Layout/TypeCards";
import StudentCard from "../components/Student/StudentCard";

export default function Home() {
  return (
    <div>
      <div className="mx-12 my-20 flex items-center justify-between">
        <div className="text-2xl font-bold">
          Welcome to the student Shop App!
          <br />
          Where we cater the needs of students, irrespective of the time,
          <br />
          extending to even decentralized payments
        </div>
        <div className="flex flex-col">
          <Image
            src="/images/ecom.jpg"
            width={400}
            height={400}
            alt="shop_image"
          />
          <a
            href="https://www.freepik.com/free-vector/isometric-laptop-with-shopping-cart-keypad_3297746.htm#query=e-commerce&position=5&from_view=search&track=sph"
            className="underline"
          >
            Image by katemangostar
          </a>{" "}
          on Freepik
        </div>
      </div>
      <div className="py-12 px-6 flex items-center flex-wrap">
        <StudentCard />
        <StudentCard />
      </div>

      <div className="py-12 px-6 flex flex-wrap">
        <TypeCards
          title="Groceries"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sequi
          quo sed sapiente"
          className=""
        />
        <TypeCards
          title="Groceries"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sequi
          quo sed sapiente"
          className=""
        />
        <TypeCards
          title="Groceries"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sequi
          quo sed sapiente"
          className=""
        />
        <TypeCards
          title="Groceries"
          desc="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni sequi
          quo sed sapiente"
          className=""
        />
      </div>

      <div className="my-12">
        <ReviewCards />
      </div>
    </div>
  );
}
