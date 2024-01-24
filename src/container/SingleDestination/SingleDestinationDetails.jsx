import React from "react";
import img1 from "../../assets/images/A_img1.png";
const SingleDestinationDetails = () => {
  return (
    <div className="mx-[9rem]">
      {/* <div className="flex  w-full text-center p-3 text-[#767676]">
        <a href="#About" className="flex-1"><p className=" font-bold text-xl focus:bg-black ">About Varanasi</p></a>
        <a href="#Highlights" className="flex-1"><p className="  font-bold text-xl">Highlights</p></a>
        <a href="#Activities" className="flex-1"><p className="  font-bold text-xl">Activities In Varanasi</p></a>
      </div> */}
      <div className=" flex flex-col gap-[4rem]">
        <div id="About">
          <h1 className="font-bold text-3xl my-8 font-Marcellus">
            About Varanasi-Scared City
          </h1>
          <hr />
          <p className="font-light text-base leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quasi accusamus cum similique maiores molestiae praesentium quis.
            Enim vero dolore quas, quae eveniet, consectetur consequuntur
            quaerat, libero cumque esse officiis?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptate quasi accusamus cum
            similique maiores molestiae praesentium quis. Enim vero dolore quas,
            quae eveniet, consectetur consequuntur quaerat, libero cumque esse
            officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate quasi accusamus cum similique maiores molestiae
            praesentium quis. Enim vero dolore quas, quae eveniet, consectetur
            consequuntur quaerat, libero cumque esse officiis?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptate quasi accusamus cum
            similique maiores molestiae praesentium quis. Enim vero dolore quas,
            quae eveniet, consectetur consequuntur quaerat, libero cumque esse
            officiis?
          </p>
        </div>
        <div id="Highlights">
          <h1 className="font-bold text-3xl mb-3 font-Marcellus">Highlights</h1>
          <hr />
          <p className="font-light text-base leading-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            quasi accusamus cum similique maiores molestiae praesentium quis.
            Enim vero dolore quas, quae eveniet, consectetur consequuntur
            quaerat, libero cumque esse officiis?Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Voluptate quasi accusamus cum
            similique maiores molestiae praesentium quis. Enim vero dolore quas,
            quae eveniet, consectetur consequuntur quaerat, libero cumque esse
            officiis?Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptate quasi accusamus cum similique maiores molestiae
            praesentium quis. Enim vero dolore quas, quae eveniet, consectetur
            consequuntur quaerat, libero cumque esse officiis?Lorem ipsum dolor
            sit amet consectetur adipisicing elit. Voluptate quasi accusamus cum
            similique maiores molestiae praesentium quis. Enim vero dolore quas,
            quae eveniet, consectetur consequuntur quaerat, libero cumque esse
            officiis?
          </p>
        </div>
        <div id="Activities">
          <h1 className="font-bold text-3xl mb-3 font-Marcellus">Activities In Varnasi</h1>
          <hr />
          <div className="flex gap-3 flex-wrap py-5">
            <div className="w-[18.5rem] h-[24rem] border rounded-lg">
              <img src={img1} />
              <div className="p-2 rounded-lg">
                <p className="font-semibold text-xl mb-3">
                  The Red Sea Adventures
                </p>
                <p className="font-light mb-3">
                  Going somewhere to celebrate this season Whether you’re going
                  home or somewhere to roam, tools to get you to your
                  destination.
                </p>
                <button className="px-[30px] py-[10px] rounded-md bg-black text-white">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-[18.5rem] h-[24rem] border rounded-lg">
              <img src={img1} />
              <div className="p-2 rounded-lg">
                <p className="font-semibold text-xl mb-3">
                  The Red Sea Adventures
                </p>
                <p className="font-light mb-3">
                  Going somewhere to celebrate this season Whether you’re going
                  home or somewhere to roam, tools to get you to your
                  destination.
                </p>
                <button className="px-[30px] py-[10px] rounded-md bg-black text-white">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-[18.5rem] h-[24rem] border rounded-lg">
              <img src={img1} />
              <div className="p-2 rounded-lg">
                <p className="font-semibold text-xl mb-3">
                  The Red Sea Adventures
                </p>
                <p className="font-light mb-3">
                  Going somewhere to celebrate this season Whether you’re going
                  home or somewhere to roam, tools to get you to your
                  destination.
                </p>
                <button className="px-[30px] py-[10px] rounded-md bg-black text-white">
                  Read More
                </button>
              </div>
            </div>
            <div className="w-[18.5rem] h-[24rem] border rounded-lg">
              <img src={img1} />
              <div className="p-2 rounded-lg">
                <p className="font-semibold text-xl mb-3">
                  The Red Sea Adventures
                </p>
                <p className="font-light mb-3">
                  Going somewhere to celebrate this season Whether you’re going
                  home or somewhere to roam, tools to get you to your
                  destination.
                </p>
                <button className="px-[30px] py-[10px] rounded-md bg-black text-white">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleDestinationDetails;
