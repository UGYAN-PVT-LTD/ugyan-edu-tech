const AuthLeft=()=>{
    return(
        <>
            <div className="bg-[url(/authLeft.png)] w-[50%] bg-cover bg-no-repeat lg:flex flex-col hidden justify-around py-5 items-center text-white">
                <div className="w-full flex justify-center items-center gap-2">
                    <div className="bg-[url(/commenticon.png)] bg-no-repeat bg-contain flex justify-center items-center h-10 w-10 ">
                            <span className="font-bold">
                                <span>&#123;</span>
                                <span>&bull;</span>
                                <span>&#125;</span>
                            </span>
                    </div>
                    <div>
                        <span className="font-bold text-2xl">UGYAN EDUTECH SOLUTIONS</span>
                    </div>    
                </div>
                <img src="/illustration.png" alt="Illustration" className="w-[40%]"/>
                <div className="flex flex-col justify-center items-center gap-2 ">
                    <div className="flex flex-col justify-center items-center text-2xl font-semibold ">
                        <p>Online Community For</p>
                        <p>Learning</p>
                    </div>
                    <div className="flex flex-col justify-center items-center text-sm">
                        <p>Access personalized courses, track your progress,</p>
                        <p>and stay ahead in your learning journey.</p>
                         
                    </div>
                    
                </div>
            </div>
        </>
    )
}
export default AuthLeft;