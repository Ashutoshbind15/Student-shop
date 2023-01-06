import Image from "next/image";

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
    </div>
  );
}
