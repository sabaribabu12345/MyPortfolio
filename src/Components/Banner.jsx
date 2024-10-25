import stack from "../assets/teck-stack.jpg"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import Medium from "../assets/Medium.png"
import instagram from "../assets/instagram.png"
import leetcode from "../assets/leetcode.jpeg"


export default function Banner() {
    return (
        <div className="h-[100%] bg-gradient-to-r from-blue-300 via-green-100 to-purple-50">
            <div >
                <div className="flex py-9 px-9 justify-around ">
                    <div className='w-[30%] py-14 text-2xl'>
                        <b className="text-4xl">Hello, I'am Sabari Babu </b> <br></br><br></br>I'am a full-stack developer with a strong foundation in both front-end and back-end technologies. I recently completed my master's degree in the USA, where I honed my skills in software development and problem-solving.
                    </div>
                    <div className="p-4">
                        <img className='rounded-full' src='https://media.licdn.com/dms/image/v2/D5603AQHk46GlG16QvA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726166124273?e=1735171200&v=beta&t=oyZdM1_GT_hvVdnoW-kjqZrIN0CvG_BIVZcR0aDiSiE'></img>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="text-3xl font-bold flex justify-center">Tech Stacks</div>
                    <div class="flex items-center justify-center p-4">
                        <img src={stack} alt="Tech Stack" class="rounded-lg shadow-lg w-[70%] h-[60vh]"></img>
                    </div>

                </div>
                <div className="mt-20  ">
                    <div className="text-3xl font-bold flex justify-center">Find Me Online</div>
                    <div className="flex justify-around m-20 ">
                        <a className="w-[7%] w-[8%] transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-sky-200 rounded-xl  p-1"  href='https://www.linkedin.com/in/sabaribabu/' target='_blank'><img src={linkedin}></img></a>
                        <a className="w-[7%] w-[8%]transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-white rounded-xl  p-1" href='https://github.com/SabariBabu2468' target='_blank'><img src={github}></img></a>
                        <a className="w-[7%] w-[8%] transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-white rounded-xl  p-1"  href='https://medium.com/@sabaribabu2468' target='_blank'><img src={Medium}></img></a>
                        <a className="w-[7%] w-[8%] transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-pink-100 rounded-xl  p-1" href='https://www.instagram.com/sabari_royal_odyssey/?next=%2F' target='_blank'><img src={instagram}></img></a>
                        <a className="w-[8%] w-[9%] transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-yellow-200 rounded-xl  p-1" href='https://leetcode.com/u/Sabari12345/' target='_blank'><img src={leetcode}></img></a>

                    </div>
                </div>
                <div>
                     <br>
                     </br>
                     <br></br>
                </div>
            </div>
        </div>

    )
}