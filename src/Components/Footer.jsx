export default function Footer() {
    return (
        <>
        <div class="absolute mt-[480vh] lg:mt-[400vh] xl:mt-[500vh]  h-full  w-full bg-white oveflow-clip">
            <div class="flex flex-col rounded-4xl bg-[url('assets/footer.png')] h-[80%]   bg-no-repeat bg-cover bg-center  ml-4 mr-4 mt-10 ">
            <h2 class="font-cabinet text-home  text-4xl lg:text-6xl xl:text-8xl font-semibold mt-16 ml-12 ">
                GET IN TOUCH.
               
            </h2>
            <div class="flex space-x-4 lg:space-x-6   mt-36 lg:mt-28 ml-6 lg:ml-12  ">
                <a class="text-white font-poppins text-sm lg:text-2xl tracking-normal">HOME</a>
                <a class="text-white font-poppins text-sm lg:text-2xl tracking-normal">ABOUT US</a>
                <a class="text-white font-poppins text-sm lg:text-2xl  tracking-normal">OUR SOLUTION</a>
                <a class="text-white font-poppins text-sm lg:text-2xl tracking-normal">BLOG</a>
                <a class="text-white font-poppins text-sm lg:text-2xl  tracking-normal">CAREERS</a>
                <a class="text-white font-poppins text-sm lg:text-2xl  tracking-normal">CONTACT US</a>
            </div>
            <div class="flex flex-col space-y-8 ml-12 mt-10 xl:mt-12 2xl:mt-15">
                <button class="rounded-2xl bg-white w-36 xl:w-[32%] h-10  xl:h-18 text-center xl:flex items-center justify-between shadow-xl border-2 ">
                    <p class=" text-sm   xl:text-3xl font-cabinet-grotesk text-stone-800 xl:ml-8 font-bold ">SCHEDULE A CALL</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"fill="currentColor"
                                        className="bi bi-arrow-right mr-4 font-bold text-home hidden xl:block" viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1
                                            .708-.708l4 4a.5.5 0 0 1 0
                                            .708l-4 4a.5.5 0 0 1-.708-.708L13.293
                                            8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                </button>
                <button class="rounded-2xl bg-white w-36 h-10 xl:w-[32%] xl:h-18 text-center xl:flex items-center justify-between shadow-xl border-2">
                    <p class=" text-sm xl:text-3xl font-cabinet-grotesk text-stone-800 xl:ml-8 font-bold ">BOOK A DEMO</p>
                    <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"fill="currentColor"
                                        className="bi bi-arrow-right mr-4 font-bold text-home hidden xl:block " viewBox="0 0 16 16">
                                        <path fillRule="evenodd"
                                            d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1
                                            .708-.708l4 4a.5.5 0 0 1 0
                                            .708l-4 4a.5.5 0 0 1-.708-.708L13.293
                                            8.5H1.5A.5.5 0 0 1 1 8" />
                                    </svg>
                </button>
            </div>
            {/*icons  */}
            <div class="flex space-x-12 ml-20 mt-10 lg:mt-5 xl:mt-5 2xl:mt-24">
                <div class="border-4 rounded-full border-white bg-white w-10 h-10 items-center justify-center flex ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
</svg>
                </div>
                <div class="border-4 rounded-full border-white bg-white w-10 h-10 items-center justify-center flex ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="currentColor" class="bi bi-instagram text-black " viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
                </div>
                <div class="border-4 rounded-full border-white bg-white w-10 h-10 items-center justify-center flex ">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="26" fill="currentColor" class="bi bi-twitter-x text-black " viewBox="0 0 16 16">
  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
</svg>
                </div>
                <div class="border-4 rounded-full border-white bg-white w-10 h-10 items-center justify-center flex ">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
  <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"/>
</svg>
                </div>
                

                

            </div>
            </div>

        </div>

        </>
    )
}