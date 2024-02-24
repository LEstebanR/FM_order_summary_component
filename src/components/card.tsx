import { FC } from "react";

type CardProps = {
  infoCard: {
    title: string;
    image: string;
    description: string;
    plan: string;
    price: number;
    time: string;
  };
};

const Card: FC<CardProps> = ({ infoCard }) => {
  return (
    <div className=" flex h-5/6 w-11/12 max-w-card flex-col items-center justify-between  gap-4 rounded-xl bg-white font-red-hat-display  shadow-lg md:h-card">
      <img
        src={infoCard.image}
        alt="illustration hero"
        className="rounded-t-xl"
      />
      <h1 className="text-xl font-extrabold capitalize text-darkBlue">
        {infoCard.title}
      </h1>
      <p className="w-10/12 text-center text-base text-desaturatedBlue md:w-9/12">
        {infoCard.description}
      </p>
      <div className="flex w-10/12 items-center justify-around gap-1 rounded-xl bg-veryPaleBlue p-4">
        <img src="/images/icon-music.svg" alt="music" />
        <div className=" flex grow flex-col items-start gap-1 px-2">
          <p className="font-extrabold capitalize text-darkBlue">
            {infoCard.plan}
          </p>
          <p className=" text-desaturatedBlue">
            ${infoCard.price} /{" "}
            <span className="text-base font-normal text-desaturatedBlue">
              {infoCard.time}
            </span>
          </p>
        </div>
        <p className="cursor-pointer font-bold text-brightBlue underline hover:text-hoverBlue">
          change
        </p>
      </div>
      <button className="w-10/12 rounded-xl bg-brightBlue p-2 text-white shadow-md shadow-darkBlue hover:bg-hoverBlue">
        Proceed to Payment
      </button>
      <button className="mb-12 w-10/12 p-2 font-extrabold text-desaturatedBlue hover:text-darkBlue">
        Cancel Order
      </button>
    </div>
  );
};
export default Card;
