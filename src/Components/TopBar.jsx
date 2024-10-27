import logo from "../assets/logo.webp"
export default function TopBar() {
    return (
        <div className="w-[100%] justify-center item-center flex">
            <div className="w-[80%] flex justify-between py-3 px-28 bg-white shadow-xl hover:shadow-2xl rounded-xl  ">
                <div className="flex justify-start w-[50%]">
                    <img className="w-[19%] h-[7vh] rounded-xl px-1 " src={logo}></img>
                    <div className="font-normal hover:font-bold hover:text-red-500 text-2xl px-3 py-2 mt-2 "> Sabari Babu
                    </div></div>
                <div className="w-[50%] p-3 flex justify-around">
                    <a class="" >Home</a>
                    <a class="" >About</a>
                    <a class="" >Skills</a>
                    <a class="" >Work</a>
                    <button class="text-white bg-pink-600 hover:bg-pink-800 p-1 ps-3 pe-3 rounded " >Contact</button>

                </div>
            </div></div>

    )
}