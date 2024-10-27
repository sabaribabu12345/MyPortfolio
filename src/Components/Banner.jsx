import stack from "../assets/teck-stack.jpg"
import linkedin from "../assets/linkedin.png"
import github from "../assets/github.png"
import Medium from "../assets/Medium.png"
import instagram from "../assets/instagram.png"
import leetcode from "../assets/leetcode.jpeg"
import lcvideo from "../assets/LC VIDEO.mp4"


export default function Banner() {
    return (
        <div className="h-[100%] bg-gradient-to-r from-blue-300 via-green-100 to-gray-200 ">
            <div >
                <div className="flex py-9 px-14 justify-around ">
                    <div className='w-[30%] py-14 text-2xl'>
                        <b className="text-4xl"> <span className="inline-block animate-fade-in" style={{ animationDelay: '0.1s' }}>H</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '0.2s' }}>e</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '0.3s' }}>l</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '0.4s' }}>l</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '0.5s' }}>o</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '0.6s' }}>,&nbsp;</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '0.7s' }}>I</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '0.8s' }}>'</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '0.9s' }}>m&nbsp;</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1s' }}>S</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.1s' }}>a</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.2s' }}>b</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.3s' }}>a</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.4s' }}>r</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.5s' }}>i&nbsp;</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.6s' }}>B</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.7s' }}>a</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.8s' }}>b</span>
                            <span className="inline-block animate-fade-in " style={{ animationDelay: '1.9s' }}>u</span></b> <br></br><br></br>I'am a full-stack developer with a strong foundation in both front-end and back-end technologies. I recently completed my master's degree in the USA, where I honed my skills in software development and problem-solving.
                    </div>
                    <div className="p-4">
                        <img className='rounded-full border shadow-xl hover:shadow-2xl ' src='https://media.licdn.com/dms/image/v2/D5603AQHk46GlG16QvA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726166124273?e=1735171200&v=beta&t=oyZdM1_GT_hvVdnoW-kjqZrIN0CvG_BIVZcR0aDiSiE'></img>
                    </div>
                </div>
                <div className="mt-10">
                    <div className="text-3xl font-bold flex justify-center">Tech Stacks</div>
                    <div class="flex items-center justify-center p-4">
                        <img src={stack} alt="Tech Stack" class="rounded-lg shadow-lg w-[70%] h-[60vh] border shadow-xl hover:shadow-inner"></img>
                    </div>

                </div>
                <div className="mt-20  ">
                    <div className="text-3xl font-bold flex justify-center">Find Me Online</div>
                    <div className="flex justify-around m-20 ">
                        <a className="w-[7%] w-[8%] transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-sky-200 rounded-xl  p-1" href='https://www.linkedin.com/in/sabaribabu/' target='_blank'><img src={linkedin}></img></a>
                        <a className="w-[8%] w-[8%]transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-white rounded-xl  p-1" href='https://github.com/SabariBabu2468' target='_blank'><img src={github}></img></a>
                        <a className="w-[7%] w-[8%] transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-white rounded-xl  p-1" href='https://medium.com/@sabaribabu2468' target='_blank'><img src={Medium}></img></a>
                        <a className="w-[7%] w-[8%] transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-pink-100 rounded-xl  p-1" href='https://www.instagram.com/sabari_royal_odyssey/?next=%2F' target='_blank'><img src={instagram}></img></a>
                        <a className="w-[8%] w-[9%] transition duration-300 ease-in-out transform hover:scale-150 hover:bg-gradient-to-r hover:from-white hover:to-yellow-200 rounded-xl  p-1" href='https://leetcode.com/u/Sabari12345/' target='_blank'><img src={leetcode}></img></a>

                    </div>
                    <div className="mt-10">
                        <div className="text-3xl font-bold flex justify-center mb-4">Leadership</div>

                        <div className="flex justify-center py-7">
                            <video width="640" height="360" controls className="shadow-lg">
                                <source src={lcvideo} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        </div>

                        <div className="flex flex-col items-center mt-4 text-lg text-gray-700">
                            <span className="text-2xl text-gray-500 animate-bounce">↑</span>

                            <p className="text-center mt-2 font-semibold text-gray-800">
                                When I signed as the President of the Information Technology Department
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}