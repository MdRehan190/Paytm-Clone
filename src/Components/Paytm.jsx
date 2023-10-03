

const Paytm = () => {
  return (
    <div className="overflow-y-scroll font-[roboto] md:overflow-x-hidden">
      {/* <!-- navigation bar section --> */}
      <nav class="container-fluid flex items-center justify-between h-[90px] shadow-xl sticky backdrop-blur-md top-0 md:static ">
            <div class="cursor-pointer">
                <img  class="h-[55px] ml-[30px]"  src={require("../images/paytm_logo.png")} alt="logo"/>
            </div>
            <div class="hidden xl:flex items-center gap-x-[10px] font-semibold text-[18px] font-[roboto]">
                <a class="hover:bg-[#f5f7fa] px-4 py-2 rounded-md" href="google.com">Paytm for Consumer</a>
                <a class="hover:bg-[#f5f7fa] px-4 py-2 rounded-md" href="google.com">Paytm for Business</a>
                <a class="hover:bg-[#f5f7fa] px-4 py-2 rounded-md" href="google.com">Company</a>
                <a class="hover:bg-[#f5f7fa] px-4 py-2 rounded-md" href="google.com">Investor Relations</a>
                <a class="hover:bg-[#f5f7fa] px-4 py-2 rounded-md" href="google.com">Carrer</a>
            </div>
            <div class="md:mr-[80px] mr-[30px] ">
                <button
                    class="w-[83px] h-[36px] md:w-[120px] md:h-[40px] bg-blue text-white text-[15px] flex justify-between items-center font-[600] pl-2 md:pl-5 pr-[2px] capitalize rounded-2xl md:rounded-full hover:bg-[#002970]"
                >
                    <p class="m-0 p-0 text-[12px] md:text-[16px]">
                        Sign in
                    </p>
                    <span>
                        <img
                            class="w-[28px] h-[28px] md:w-[34px] md:h-[34px]"
                            src={require("../images/user.png")}
                            alt="user"
                        />
                    </span>
                </button>
            </div>
        </nav>

        {/* <!-- Notes KYC required section --> */}
        <div class="text-center justify-center flex items-center bg-grey px-8 md:px-0 h-[60px] md:h-[50px]">
            <p class="font-[500] text-[15px]">
                <span class="font-[600]">No Wallet KYC Required</span> 😊 to
                pay using UPI on Paytm.
                <span class="font-[600]">Learn more.</span>
            </p>
        </div>

        {/* <!-- Download app section --> */}
        <section id="hero">
            <div class="container flex flex-col-reverse mt-[80px]  md:flex-row mx-auto md:space-x-6 ">

                <div class=" mt-[40px] md:w-1/2 flex-col justify-start ">
                    <div class="flex justify-center md:justify-start">
                        <img class=" h-[80px] " src={require("../images/paytm-square.png")} alt="logo"/>
                    </div>
                    
                    <div class="max-w-[600px] text-center sm:text-left">
                        <h1  class=" mt-[50px] text-[33px] sm:text-[40px] md:text-[60px] leading-tight font-[900]">
                            India's Most-loved Payments App</h1>
                    </div>
                    <p class=" text-center md:text-left md:text-xl">
                         Recharge & pay bills, book flights & movie tickets, <br/>
                         open a savings account, invest in stocks & mutual <br/>
                         funds, and do a lot more.
                    </p>
                    <div class="flex justify-center md:justify-start">
                        <div
                            class="flex items-center mt-10 [&>div>span>svg]:fill-[#FFFFFF] [&>div>span>svg]:hover:fill-[#000000] gap-4 bg-[#000000] hover:bg-[#FFFFFF] transition-all duration-200 hover:text-[#000000] font-[500] border border-transparent hover:border-[#000000] cursor-pointer text-white justify-center h-[46px] rounded-full w-[252px]"
                        >
                            <button class="block">
                                Download paytm app
                            </button>
                            <div class="flex items-center gap-[10px]">
                                <span
                                    ><svg
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z"
                                        ></path>
                                    </svg>
                                </span>
                                <span>
                                    <svg
                                        width="14"
                                        height="16"
                                        viewBox="0 0 14 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z"
                                        ></path>
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>  
                </div>
                

                <div class="container flex flex-col mt-[-50px] md:mt-[0px] md:w-1/2 ">
                   <img class="w-[110%] h-[550px] md:ml-[100px]" src={require("../images/paytm-mobile.jpg")} alt="Paytm"/>
                </div>
                
            </div>
        </section>
{/*  */}
        {/* <!-- Recharge section --> */}
        <section  class="bg-paytmblue text-white mt-[20px] md:mt-[100px] md:w-[110%] overscroll-x-none">
            <h1 class=" text-4xl text-center p-[40px] md:text-left md:ml-[100px] md:pt-[60px] md:font-semibold ">
                Recharge & Pay Bills on Paytm.
            </h1>
            <div class=" pb-[50px] flex flex-wrap justify-center gap-8 md:pb-[50px]">
               
                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/rent.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </section>

         {/* <!-- Book and buy section --> */}
         <section  class="bg-[#0F4A8A] text-white md:w-[110%] overscroll-x-none">
            <h1 class=" text-4xl text-center p-[40px] md:text-left md:ml-[100px] md:pt-[60px] md:font-semibold ">
                Book & Buy on Paytm.
            </h1>
            <div class="pb-[50px] flex flex-wrap justify-center gap-8 md:pb-[50px]">
               
                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/rent.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>

                <div class="flex flex-wrap justify-center gap-8">
                    <div class="w-[152px] h-[183px] hover:bg-[#00afe3] rounded-xl cursor-pointer transition-all duration-200 px-4 py-4">
                            <div>
                                <img
                                    class="max-w-[64px] max-h-[64px]"
                                    src={require("../images/mobilepng.png")}
                                    alt="pay-mobile-bill"
                                />
                            </div>
                            <div class="mt-5">
                                <p class="text-[17px] font-[500]">Recharge</p>
                                <p class="font-[600] text-[15px]">Prepaid</p>
                                <span class="flex items-center gap-2">
                                    <p class="font-[600] text-[15px]">Mobile</p>
                                    <i class="fa-solid fa-angle-right"></i>
                                </span>
                            </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Payment instruments -->
        <!-- paytm wallet --> */}
        <section class="">
            <div class="bg-[##FFFFFF]">
                <h1 class="pt-[50px] pb-[20px] text-center text-5xl font-bold md:text-left md:ml-[130px] md:pt-[100px] ">
                    Paytm Payment Instruments
                </h1>

                <div class="container mx-auto p-[50px] flex flex-col-reverse rounded-xl shadow-lg md:flex-row md:mx-auto ">
                    <div>
                        <div class="flex justify-center  md:ml-[80px] mt-6 md:justify-start md:w-1/2 md:mt-[50px]">
                            <img class="w-[80px] h-[80px]" src={require("../images/paytm-wallet.png")}alt=""/>
                            <p class="m-0  font-[700] leading-5 ml-2 mt-4"> paytm <br/> walllet</p>
                        </div>

                        <div class="mt-9 md:ml-[100px]">
                            <div class="925:w-[390px] pb-5">
                                <h1
                                    class="text-[26px] md:text-[36px] md:text-4.5xl md:leading-[40px] font-[700] leading-tight md:mt-[50px]"
                                >
                                    The Fastest Way  to <br/> Pay In-store &
                                    Online.
                                </h1>
                            </div>
                            <span class="925:w-[452px] block">
                                <p
                                    class="text-[14px] md:text-[17px] font-[500] md:mt-[20px]"
                                >
                                    Load up your Paytm Wallet for free and
                                    make payments <br/> in a jiffy at over 21
                                    million stores, websites and apps.
                                </p>
                            </span>
                            <div
                                class="flex justify-center sm:justify-start"
                            >
                                <div
                                    class="flex items-center mt-7 [&>div>span>svg]:fill-[#FFFFFF] [&>div>span>svg]:hover:fill-[#000000] gap-4 bg-[#000000] hover:bg-[#FFFFFF] transition-all duration-200 hover:text-[#000000] font-[500] border border-transparent hover:border-[#000000] cursor-pointer text-white justify-center h-[46px] rounded-full w-[252px]"
                                >
                                    <button class="block">
                                        Download paytm app
                                    </button>
                                    <div
                                        class="flex items-center gap-[10px]"
                                    >
                                        <span
                                            ><svg
                                                width="14"
                                                height="16"
                                                viewBox="0 0 14 16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg
                                                width="14"
                                                height="16"
                                                viewBox="0 0 14 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="md:w-1/2 md:ml-[40px]">
                        <img class="md:ml-[100px]" src={require("../images/paytm-addmoney.webp")} alt=""/>
                    </div>
                </div>
            </div>
        </section>


        {/* <!--upi money transfer --> */}
        <section class="mt-[100px]">
            <div class="">
                <div class="container mx-auto p-[50px] bg-[##FFFFFF] flex flex-col-reverse md:flex-row md:mx-auto rounded-xl shadow-lg ">
                    <div>
                        <div class="flex justify-center  md:ml-[80px] mt-6 md:justify-start md:w-1/2 md:mt-[150px]">
                            <img class="w-[80px] h-[80px]" src={require("../images/upi-money-transfer.png")}alt=""/>
                            <p class="m-0  font-[700] leading-5 ml-2 mt-4"> UPI Money <br/> Transfer</p>
                        </div>

                        <div class="mt-9 md:ml-[100px]">
                            <div class="925:w-[390px] pb-5">
                                <h1
                                    class="text-[26px] md:text-[36px] md:text-4.5xl md:leading-[40px] font-[700] leading-tight md:mt-[50px]"
                                >
                                Pay anyone directly <br/> from your bank <br/> account.
                                </h1>
                            </div>
                            <span class="925:w-[452px] block">
                                <p
                                    class="text-[14px] md:text-[17px] font-[500] md:mt-[20px]"
                                >
                                Pay anyone, everywhere. Make contactless & secure <br/> payments in-stores or online using Paytm Wallet or <br/> Directly from your Bank Account. Plus, send & receive <br/> money from anyone.
                                </p>
                            </span>
                            <div
                                class="flex justify-center sm:justify-start"
                            >
                                <div
                                    class="flex items-center mt-7 [&>div>span>svg]:fill-[#FFFFFF] [&>div>span>svg]:hover:fill-[#000000] gap-4 bg-[#000000] hover:bg-[#FFFFFF] transition-all duration-200 hover:text-[#000000] font-[500] border border-transparent hover:border-[#000000] cursor-pointer text-white justify-center h-[46px] rounded-full w-[252px]"
                                >
                                    <button class="block">
                                        Download paytm app
                                    </button>
                                    <div
                                        class="flex items-center gap-[10px]"
                                    >
                                        <span
                                            ><svg
                                                width="14"
                                                height="16"
                                                viewBox="0 0 14 16"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    d="M11.6593 15.3557C10.7589 16.1979 9.76546 16.0666 8.81854 15.6695C7.81182 15.2644 6.89149 15.2388 5.82828 15.6695C4.50426 16.2203 3.80155 16.0602 3.00415 15.3557C-1.49786 10.8883 -0.833353 4.08311 4.28331 3.82691C5.52427 3.89096 6.39311 4.48821 7.12406 4.53785C8.21052 4.32489 9.25047 3.71483 10.4133 3.79489C11.8105 3.90377 12.8554 4.43538 13.5531 5.3913C10.6791 7.05657 11.3603 10.7073 14 11.7321C13.4717 13.0691 12.7939 14.3902 11.6576 15.3669L11.6593 15.3557ZM7.02439 3.77888C6.88982 1.79336 8.55939 0.160122 10.4798 0C10.7439 2.28974 8.32017 4.00305 7.02439 3.77888Z"
                                                ></path>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg
                                                width="14"
                                                height="16"
                                                viewBox="0 0 14 16"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    clip-rule="evenodd"
                                                    d="M0.088012 0.571735C0.0310801 0.726729 0 0.910797 0 1.121V14.8786C0 15.0894 0.0311427 15.2736 0.0881839 15.4286L7.32808 7.9997L0.088012 0.571735ZM0.590122 15.9564C0.85223 16.0466 1.18264 15.9995 1.54068 15.7912L10.0736 10.8165L7.83627 8.52109L0.590122 15.9564ZM10.7221 10.4391L13.3647 8.8987C14.2118 8.40415 14.2118 7.59609 13.3647 7.10217L10.7211 5.561L8.34443 7.99966L10.7221 10.4391ZM10.073 5.18317L1.54068 0.209061C1.18252 0.000250885 0.852017 -0.0466058 0.589868 0.0438429L7.83624 7.47828L10.073 5.18317Z"
                                                ></path>
                                            </svg>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="md:w-1/2 md:ml-[40px]">
                        <img class="md:ml-[100px] md:mt-[100px] mt-[-80px]" src={require("../images/upi.webp")} alt=""/>
                    </div>
                </div>
            </div>
        </section>


        {/* <!-- paytm postpaid --> */}
        <section class="mt-[100px]">
            <div class="">
                <div class="container mx-auto p-[50px] bg-[##FFFFFF] flex flex-col-reverse md:flex-row md:mx-auto rounded-xl shadow-lg ">
                    <div>
                        <div class="flex justify-center   md:ml-[80px] mt-6 md:justify-start md:w-1/2 md:mt-[150px]">
                            <img class="w-[200px] h-[80px]" src={require("../images/paytm-postpaid.webp")}alt=""/>
                            
                        </div>

                        <div class="mt-9 md:ml-[100px]">
                            <div class="925:w-[390px] pb-5">
                                <h1
                                    class="text-[26px] md:text-[36px] md:text-4.5xl md:leading-[40px] font-[700] leading-tight md:mt-[50px]"
                                >
                                Want it? <br/>
                                No more waiting for it.
                                </h1>
                            </div>
                            <span class="925:w-[452px] block">
                                <p
                                    class="text-[14px] md:text-[17px] font-[500] md:mt-[20px]"
                                >
                                With Paytm Postpaid, your wishlist doesn't have to be <br/> on the waitlist. Shop for the things you want today and <br/> pay for them next month.
                                </p>
                            </span>
                            <div class="flex justify-center sm:justify-start">
                                    <div
                                        class="flex items-center mt-7 gap-4 bg-[#002970] transition-all duration-200 group font-[500] hover:bg-[#00baf2] cursor-pointer text-white justify-center h-[49px] rounded-full w-[162px]"
                                    >
                                        <button class="block">
                                            Buy Now
                                        </button>
                                        <div
                                            class="flex items-center gap-[10px] transition-all duration-500 group-hover:translate-x-[2px] relative before:absolute before:content-[''] before:h-[3px] before:rounded-2xl before:w-0 before:bg-slate-100 before:transition-[width] before:duration-500 group-hover:before:w-3 before:-left-1 before:top[7px]"
                                        >
                                            <i
                                                class="fa-solid block fa-angle-right"
                                            ></i>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-[-80px] md:w-1/2 md:ml-[40px]">
                        <img  src={require("../images/shopping-bag.webp" )}alt=""/>
                    </div>
                </div>
            </div>
        </section>


        {/* <!--Bank section --> */}
        <section class="text-gray-600 body-font ">
            <div class="container px-5 py-24 mx-auto flex flex-wrap mt-[-50px]">
              <div class="flex flex-wrap -m-4">
                <div class="p-2 lg:w-1/2 md:w-full">
                    <div class="flex border-2 md:mx-auto rounded-xl shadow-lg  p-8 sm:flex-col flex-col md:mr-[50px]">
                      <div class="mt-[0px] md:mt-[60px]">
                        <img class="h-[80px] w-[200px]" src={require("../images/paytm-hdfc.png")} alt="HDFC"/>
                      </div>
                      <div>
                        <h1 class="pt-10 font-bold text-black text-2xl md:text-5xl md:pt-10 ">
                            Unlimited Cashback Every time
                        </h1>
                        <p class="pt-5 pb-10 text-base md:text-2xl md:pt-10">
                            Paytm HDFC Bank Select Credit Card. A card with assured Cashback and incredible offers.
                        </p>
                        <div >
                            <img class="md:h-[340px]" src={require("../images/credit-card-image.webp")} alt="customized-card"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div class="p-2 lg:w-1/2 md:w-full">
                    <div class="flex border-2  md:mx-auto rounded-xl shadow-lg  p-8 sm:flex-col flex-col">
                      {/* <!-- <div class="mt-[40px] md:mt-[110px]">
                        <img class="h-[20px] w-[200px]" src={require()}"../images/paytm-sbi.png" alt="HDFC"/>
                      </div> --> */}
                      <div class="flex justify-center  mt-6 md:justify-start md:w-1/2 md:mt-[100px]">
                        <img class="w-[200px] h-[30px]" src={require("../images/paytm-sbi.png")}alt=""/>
                        
                    </div>
                      <div>
                        <h1 class="pt-10 font-bold text-black text-2xl md:text-5xl md:pt-10 ">
                            India's Most
                            Sincere Credit Card
                        </h1>
                        <p class="pt-5 pb-10 text-base md:text-2xl md:pt-10">
                            Paytm SBI Card SELECT - With Intelligent Features & Great Rewards that Never Expire
                        </p>
                        <div >
                            <img src={require("../images/customized-card.webp" )}alt="customized-card"/>
                        </div>
                      </div>
                    </div>
                </div>
              </div>
            </div>
        </section>

        {/* <!-- Financial service --> */}
        <section id="Financial" class="">
            <div class="container flex flex-col-reverse mt-[80px]  md:flex-row mx-auto md:space-x-6 ">

                <div class=" mt-[40px] md:w-3.5/5 flex-col justify-start md:mt-[-50px]">
                    {/* <!-- <h1 class=" text-center pt-10 font-bold text-black text-2xl md:text-5xl  
                     md:mt[-500px] md:text-[60px]">
                        Financial Services by Paytm
                    </h1> --> */}
                   <h1
                     class="px-[10px] text-center sm:px-0 text-[32px] sm:text-[60px] font-[700] leading-tight md:flex flex-start">
                     Financial Services by Paytm
                   </h1>
                    
                    <div class="flex justify-center mt-4 md:flex flex-start md:mt-[80px]">
                        <img class="h-[20px] flex justify-center md:mr-[350px]  md:h-[40px] md:w-[250px] md:relative md:left-0" src={require("../images/paytm-banks.png")} alt=""/>
                    </div>
                    <h1 class="mt-4 text-center pb-10 font-bold text-black text-2xl md:text-5xl md:pt-10 md:flex flex-start">
                        India's most sincere bank.
                    </h1>
                    <p class="flex justify-center pt-5 pb-10 text-base md:text-2xl md:pt-10">
                        Paytm Payments Bank offers secure, transparent and risk-free banking at your fingertips. With instant account opening, virtual debit card and zero balance requirements, experience the future of banking today.
                    </p>
                    <div class="ml-[200px] flex items-center mt-7 p-4 gap-4 bg-[#002970] transition-all duration-200 group font-[500] hover:bg-[#00baf2] cursor-pointer text-white justify-center h-[49px] rounded-full w-[162px] md:flex md:justify-items-start md:ml-2 ">
                        <button class="block">
                            Learn More
                        </button>
                        <div class="flex items-center gap-[10px] transition-all duration-500 group-hover:translate-x-[2px] relative before:absolute before:content-[''] before:h-[3px] before:rounded-2xl before:w-0 before:bg-slate-100 before:transition-[width] before:duration-500 group-hover:before:w-3 before:-left-1 before:top[7px]">
                            <i
                                class="fa-solid block fa-angle-right"
                            ></i>
                        </div>
                    </div>
                </div>
                <div class="container flex flex-col mt-[-50px] md:mt-[150px] md:w-1.5/5 ">
                   <img class=" mt-[-80px] md:ml-[100px] md:h-[500px] md:w-[450px]" src={require("../images/bank.webp")} alt="Paytm"/>
                </div>
                
            </div>
        </section>

        
        {/* <!-- <section class="bg-[#f5f7fa] mt-[80px]">
            <img class="absolute block top-10" src={require()}"../images/bg.webp" alt="backgroundimage"/>
            <div class="z-20 flex justify-center items-center">
                <img class="h" src={require()}"../images/paytm-money.webp" alt="money"/>
            </div>
        </section> --> */}

        {/* <!-- Paytm money section --> */}
        <section id="paytm-money">
            {/* <!-- <img class="relative z-0 block top-10" src={require()}"../images/bg.webp" alt="backgroundimage"> --> */}
            <div class="container z-10 flex flex-col items-center md:flex-row mx-auto md:space-x-6">
                <div class=" flex flex-col md:w-1/2 mt-20">
                    <img class="h-50" src={require("../images/paytm-money.webp")} alt=""/>
                </div>
                <div class=" flex flex-col justify-center items-center md:w-1/2 md:flex md:items-start md:pl-[100px]">
                    <div class="mt-10 md:flex md:justify-items-start">
                        <img class="h-12 md:h-[50px]" src={require("../images/paytm-money-logo.webp")}alt=""/>
                    </div>
                    <h1 class="mt-8 mx-auto text-3xl text-center  font-bold md:flex md:justify-items-start md:ml-2">
                        Build Long-term
                        Wealth & Achieve 
                        your Goals.
                    </h1>
                    <p class="mt-8 mx-auto text-xl font-medium p-4 md:flex md:justify-items-start">
                        Investing on Paytm Money is transparent, low-cost and 
                        commission-free. Buy stocks & mutual funds that can
                         help you create wealth & realise your dreams.
                    </p>
                       
                    <div class=" flex items-center mt-7 p-4 gap-4 bg-[#002970] transition-all duration-200 group font-[500] hover:bg-[#00baf2] cursor-pointer text-white justify-center h-[49px] rounded-full w-[162px] md:flex md:justify-items-start md:ml-2">
                        <button class="block">
                            Learn More
                        </button>
                        <div class="flex items-center gap-[10px] transition-all duration-500 group-hover:translate-x-[2px] relative before:absolute before:content-[''] before:h-[3px] before:rounded-2xl before:w-0 before:bg-slate-100 before:transition-[width] before:duration-500 group-hover:before:w-3 before:-left-1 before:top[7px]">
                            <i
                                class="fa-solid block fa-angle-right"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Paytm insurance section --> */}
        <section id="paytm-insurance" class="md:mt-10">
            <div class="container z-10  flex flex-col-reverse items-center md:flex-row mx-auto md:space-x-6">
                <div class=" flex flex-col justify-center items-center md:w-1/2 md:flex md:items-start md:pl-[60px]">
                    <div class="mt-10 md:flex md:justify-items-start">
                        <img class="h-12 md:h-[50px]" src={require("../images/paytm-booking.webp")}alt=""/>
                    </div>
                    <h1 class="mt-8 mx-auto text-5xl  font-bold md:flex md:justify-items-start md:ml-2">
                        Insurance made easy.
                    </h1>
                    <p class="mt-8 mx-auto text-xl font-medium p-4 md:flex md:justify-items-start">
                        Buying insurance does not have to be tedious, time-consuming & confusing. Paytm Insurance removes the worry of getting insured by making it simple, convenient & easy-to-understand.
                    </p>
                       
                    <div class="flex items-center mt-7 p-4 gap-4 bg-[#002970] transition-all duration-200 group font-[500] hover:bg-[#00baf2] cursor-pointer text-white justify-center h-[49px] rounded-full w-[162px] md:flex md:justify-items-start md:ml-2">
                        <button class="block">
                            Learn More
                        </button>
                        <div class="flex items-center gap-[10px] transition-all duration-500 group-hover:translate-x-[2px] relative before:absolute before:content-[''] before:h-[3px] before:rounded-2xl before:w-0 before:bg-slate-100 before:transition-[width] before:duration-500 group-hover:before:w-3 before:-left-1 before:top[7px]">
                            <i
                                class="fa-solid block fa-angle-right"
                            ></i>
                        </div>
                    </div>
                </div>
                <div class=" flex flex-col md:w-1/2 mt-20 md:pl-20 md:mt-[100px]">
                    <img class="h-[400px] md:h-[500px]" src={require("../images/paytm-insurance-image.webp")} alt=""/>
                </div>
            </div>
        </section>
        
        {/* // <!-- Paytm Personal loan section --> */}
        <section id="paytm-loan" class="md:mt-20 bg-[#F5F7FA]">
            {/* <!-- <img class="relative z-0 block top-10" src={require()}"../images/bg.webp" alt="backgroundimage"> --> */}
            <div class="container z-10 flex flex-col items-center md:flex-row mx-auto md:space-x-6">
                <div class=" flex flex-col md:w-1/2 mt-20 md:pl-20">
                    <img class="h-[500px] md:h-[500px] md:w-[500px] md:mt-[80px]" src={require("../images/personal-loan.webp")} alt=""/>
                </div>
                <div class=" flex flex-col justify-center items-center md:w-1/2 md:flex md:items-start md:pl-[100px]">
                    <div class="mt-10 md:flex md:justify-items-start">
                        <img class="h-10 md:h-[50px] " src={require("../images/personal-loan-logo.png")}alt=""/>
                    </div>
                    <h1 class="mt-8 mx-auto text-4xl text-center font-bold  md:flex md:justify-items-start md:ml-2">
                        Get a Personal Loan in 2 Minutes.
                    </h1>
                    <p class="mt-8 mx-auto text-xl font-medium p-4 md:flex md:justify-items-start">
                        Investing on Paytm Money is transparent, low-cost and 
                        commission-free. Buy stocks & mutual funds that can
                         help you create wealth & realise your dreams.
                    </p>
                       
                    <div class="flex items-center mt-7 p-4 gap-4 bg-[#002970] transition-all duration-200 group font-[500] hover:bg-[#00baf2] cursor-pointer text-white justify-center h-[49px] rounded-full w-[162px] md:flex md:justify-items-start md:ml-2">
                        <button class="block">
                            Learn More
                        </button>
                        <div class="flex items-center gap-[10px] transition-all duration-500 group-hover:translate-x-[2px] relative before:absolute before:content-[''] before:h-[3px] before:rounded-2xl before:w-0 before:bg-slate-100 before:transition-[width] before:duration-500 group-hover:before:w-3 before:-left-1 before:top[7px]">
                            <i
                                class="fa-solid block fa-angle-right"
                            ></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* <!-- Business service section --> */}
        <section>
            <h1 class=" mt-10 text-4xl text-center font-extrabold md:text-start md:text-6xl md:pl-[100px] md:mt-40">Business Services by Paytm</h1>
            <div class="container mt-10 flex flex-col-reverse items-center md:flex-row mx-auto md:space-x-6 bg-[#F5F7FA]">
                <div class=" container flex flex-col md:w-1/2  md:ml-30">
                    <h1 class="mt-10 text-3xl text-center font-bold md:text-4xl md:pl-20 md:flex md:justify-items-start">Accept payments<br/>online with ease</h1>
                    <p class="mt-8 mx-auto text-xl font-medium p-4 md:pl-20 md:flex md:justify-items-start">
                        Grow your business with the payment gateway that  powers India’s largest brands and even the Paytm App
                    </p>
                    <div class="flex justify-center items-center mt-7 p-4 gap-4 bg-[#002970] transition-all duration-200 group font-[500] hover:bg-[#00baf2] cursor-pointer text-white  h-[49px] rounded-full w-[162px] md:flex md:justify-items-start md:ml-[80px] ml-40">
                        <button class="block ">
                            Learn More
                        </button>
                        <div class="flex items-center gap-[10px] transition-all duration-500 group-hover:translate-x-[2px] relative before:absolute before:content-[''] before:h-[3px] before:rounded-2xl before:w-0 before:bg-slate-100 before:transition-[width] before:duration-500 group-hover:before:w-3 before:-left-1 before:top[7px]">
                            <i
                                class="fa-solid block fa-angle-right"
                            ></i>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center items-center container  ">
                    <img class="md:h-[500px]" src={require("../images/paytm-business.webp")} alt=""/>
                </div>
            </div>

            <div class="container mt-20 flex flex-col-reverse items-center md:flex-row mx-auto md:space-x-6 bg-[#F5F7FA]">
                <div class=" container flex flex-col md:w-1/2  md:ml-30">
                    <h1 class="mt-10 text-3xl text-center font-bold md:text-4xl md:pl-20 md:flex md:justify-items-start">In-shop payments<br/>powered by Paytm.</h1>
                    <p class="mt-8 mx-auto text-xl font-medium p-4 md:pl-20 md:flex md:justify-items-start">
                        Millions of small & big businesses use Paytm to accept payments anywhere any time with a wide range of solutions for all kind of merchants
                    </p>
                    <div class="flex justify-center items-center mt-7 p-4 gap-4 bg-[#002970] transition-all duration-200 group font-[500] hover:bg-[#00baf2] cursor-pointer text-white  h-[49px] rounded-full w-[162px] md:flex md:justify-items-start md:ml-[80px] ml-40">
                        <button class="block ">
                            Learn More
                        </button>
                        <div class="flex items-center gap-[10px] transition-all duration-500 group-hover:translate-x-[2px] relative before:absolute before:content-[''] before:h-[3px] before:rounded-2xl before:w-0 before:bg-slate-100 before:transition-[width] before:duration-500 group-hover:before:w-3 before:-left-1 before:top[7px]">
                            <i
                                class="fa-solid block fa-angle-right"
                            ></i>
                        </div>
                    </div>
                </div>
                <div class="md:w-1/2 flex justify-center items-center container  ">
                    <img class="md:h-[500px]" src={require("../images/in-shop-payments.webp")} alt=""/>
                </div>
            </div>
        </section>


        {/* <!-- business tool --> */}
        <section class=" body-font">
        <div class="container px-5 py-24 mx-auto">
            <div class="flex flex-wrap w-full mb-20">
                <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
                    <h1 class="mt-5 text-4xl text-center font-bold  md:pl-20 md:flex md:justify-items-start md:text-5xl md:text-left md:ml-[-40px]">Business Tools to help your business grow</h1>
                    {/* <!-- <div class="h-1 w-20 bg-indigo-500 rounded"></div> --> */}
                </div>
            </div>
            <div class="flex flex-wrap -m-4 mt-[-200px] md:mt-[-50px]">
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class=" p-6 rounded-lg">
                        <img class="h-50 mx-auto rounded w-full object-cover object-center mb-6" src={require("../images/dashboard.webp")} alt="content"/>
                        
                    </div>
                         <h2 class="text-4xl text-center font-bold md:text-3xl md:pl-20 md:flex md:justify-items-start md:text-left">POS Billing  Software</h2>
                        <p class="mt-[45px] text-center mx-auto text-2xl font-medium p-4 md:pl-20 md:flex md:justify-items-start md:text-left md:text-xl md:mt-[15px]">Say Hello to Smart Retail Business Management</p>
                        <p class="text-center font-bold text-2xl md:text-xl md:font-bold "><a href="google.com">Learn More</a></p>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class=" p-6 rounded-lg">
                        <img class="h-50 pl-20  mx-auto rounded w-full object-cover object-center mb-6" src={require("../images/accept-upi.webp")} alt="content"/>
                       
                    </div>
                    <h2 class=" mt-[65px] text-4xl text-center font-bold md:text-3xl md:pl-20 md:flex md:justify-items-start md:text-left">Paytm for 50 Business App</h2>
                    <p class="mt-5 text-center mx-auto text-2xl font-medium p-4 md:pl-20 md:flex md:justify-items-start md:text-left md:text-xl">Everything you need to manage your business on your phone</p>
                    <p class="text-center font-bold text-2xl md:text-xl md:font-bold "><a href="google.com">Learn More</a></p>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class=" p-6 rounded-lg">
                        <img class="h-50 pl-20  mx-auto rounded w-full object-cover object-center mb-6" src={require("../images/advertise.webp" )}alt="content"/>
                        
                    </div>
                    <h2 class="mt-[65px] text-4xl text-center font-bold md:text-3xl md:pl-20 md:flex md:justify-items-start md:text-left">Advertise on Paytm</h2>
                        <p class="mt-5 text-center mx-auto text-2xl font-medium p-4 md:pl-20 md:flex md:justify-items-start md:text-left md:text-xl">Grow your business by advertising on India’s largest mobile business</p>
                        <p class="text-center font-bold text-2xl md:text-xl md:font-bold "><a href="google.com">Learn More</a></p>
                </div>
                <div class="xl:w-1/4 md:w-1/2 p-4">
                    <div class=" p-6 rounded-lg">
                        <img class="h-50 pl-[100px] mx-auto rounded w-full object-cover object-center mb-6" src={require("../images/business-khata.webp")} alt="content"/>
                       
                    </div>
                    <h2 class="mt-[30px] text-4xl text-center font-bold md:text-3xl md:pl-20 md:flex md:justify-items-start md:text-left md:mt-[80px]">Business Khata</h2>
                    <p class="mt-[20px] text-center mx-auto text-2xl font-medium p-4 md:pl-20 md:flex md:justify-items-start md:text-left md:text-xl">Managing Khata made easy</p>
                    <p class="text-center font-bold text-2xl md:text-xl md:font-bold "><a href="google.com">Learn More</a></p>
                </div>
            </div>
        </div>
        </section>

        {/* <!-- paytm money slider --> */}
        <section class="bg-[#F0FBFF] md:p-[120px] ">
            <div class="container bg-[#FFFFFF] flex flex-col items-center md:flex-row md:justify-between md:h-[400px] md:gap-4 "> 
                <div class="container ">
                    <div class="flex flex-col justify-center items-center md:flex md:items-start md:pl-[100px]">
                        <img class="h-[60px]  "  src={require("../images/paytm-money-logo.webp")} alt=""/>
                        <p class="text-center mx-0 text-2xl font-semibold mt-10 md:text-l md:font-light md:text-sm md:text-left">
                            Get started on wealth <br/> creation journey with Zero <br/> brokerage fee & no hidden <br/> charges.</p>
                        <a class="text-blue-500 block pt-[10px] text-[17px] text-xl font-[500]" href="google.com">Learn More</a>
                    </div>
                    
                </div>

                <div class="container bg-[#FFFFFF] flex flex-col items-center mx-auto md:flex-row">
                    <div class="max-w-[255px] h-[360px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px]">
                        <div>
                            <img class="w-full h-full block group-hover:scale-110 transition-all duration-200" src={require("../images/ipo.webp")} alt=""/>
                        </div>
                        <div>
                            <p class="text-white text-[32px] text-center md:text-[24px] md:font-bold">Invest in Stocks</p>
                        </div>
                    </div>
    
                    <div class="max-w-[255px] h-[360px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px]">
                        <div>
                            <img class="w-full h-full block group-hover:scale-110 transition-all duration-200" src={require("../images/etsf.webp")} alt=""/>
                        </div>
                        <div>
                            <p class="text-white text-[32px] text-center md:text-[24px] md:font-bold">Apply For IPO</p>
                        </div>
                    </div>
    
                    <div class="max-w-[255px] h-[360px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px]">
                        <div>
                            <img class="w-full h-full block group-hover:scale-110 transition-all duration-200" src={require("../images/buy-gold.webp")} alt=""/>
                        </div>
                        <div>
                            <p class="text-white text-[32px] text-center md:text-[24px] md:font-bold">Invest in ETFs</p>
                        </div>
                    </div>
    
                    <div class="max-w-[255px] h-[360px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px]">
                        <div>
                            <img class="w-full h-full block group-hover:scale-110 transition-all duration-200" src={require("../images/invest-in-stock.webp")} alt=""/>
                        </div>
                        <div>
                            <p class="text-white text-[32px] text-center md:text-[24px] md:font-bold">Buy Gold</p>
                        </div>
                    </div>
    
                    <div class="max-w-[255px] h-[360px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px]">
                        <div>
                            <img  class="w-full h-full block group-hover:scale-110 transition-all duration-200" src={require("../images/mutual-fund-1.webp")} alt=""/>
                        </div>
                        <div>
                            <p class="text-white text-[32px] text-center md:text-[24px] md:font-bold">Invest In Mutual Fund</p>
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>


        {/* <!-- paytm travel slider --> */}
        <section class="bg-[#F0FBFF] py-[50px] md:px-[120px] md:mt-[-150px] ">
            <div class="container bg-[#FFFFFF] flex flex-col items-center md:flex-row md:justify-between md:h-[400px] md:gap-4 "> 
                <div class="container ">
                    <div class="flex flex-col justify-center items-center md:flex md:items-start md:pl-[100px]">
                        <img class="h-[60px] "  src={require("../images/paytm-travel.webp")} alt=""/>
                        <p class="text-center mx-0 text-2xl font-semibold mt-10 md:text-l md:font-light md:text-sm md:text-left">
                            Best travel solutions with quick ticket bookings, great offers and easy refunds.</p>
                        <a class="text-blue-500 block pt-[10px] text-[17px] text-xl font-[500]" href="google.com">Learn More</a>
                    </div>
                    
                </div>

                <div class="container bg-[#FFFFFF] flex flex-col items-center mx-auto md:flex-row">
                    <div class="max-w-[230px] h-[300px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px] hover:bg-[#40c2ed]">
                        <div>
                            <img class="h-[120px] " src={require("../images/flight-logo.webp")} alt=""/>
                        </div>
                        <div class="mt-[20px] ">
                            <p class="text-white text-[25px] text-center md:text-[20px] md:mt-[30px] md:font-bold">Flat 14% Cashback</p>
                            <p class="text-white text-[20px] text-center md:text-[13px] md:font-bold">with code</p>
                            <p class="text-white text-[25px] text-center md:text-[15px] md:font-bold">WELCOMEFLIGHT</p>
                        </div>
                    </div>
                    <div class="max-w-[230px] h-[300px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px] hover:bg-[#40c2ed]">
                        <div>
                            <img class="h-[120px] " src={require("../images/refund-logo.webp")} alt=""/>
                        </div>
                        <div class="mt-[20px] ">
                            <p class="text-white text-[25px] text-center md:text-[20px] md:mt-[30px] md:font-bold"> 100% Refund</p>
                            <p class="text-white text-[20px] text-center md:text-[13px] md:font-bold"> With Paytm's</p>
                            <p class="text-white text-[25px] text-center md:text-[15px] md:font-bold">Cancellation Protect</p>
                        </div>
                    </div>
    
                    <div class="max-w-[230px] h-[300px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px] hover:bg-[#40c2ed]">
                        <div>
                            <img class="h-[120px] " src={require("../images/bus-tickets.png")} alt=""/>
                        </div>
                        <div class="mt-[20px] ">
                            <p class="text-white text-[25px] text-center md:text-[20px] md:mt-[30px] md:font-bold">Flat 10% Cashback</p>
                            <p class="text-white text-[20px] text-center md:text-[13px] md:font-bold">with code</p>
                            <p class="text-white text-[25px] text-center md:text-[15px] md:font-bold"> With Code HAPPYBUS</p>
                        </div>
                    </div>
    
                    <div class="max-w-[230px] h-[300px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px] hover:bg-[#40c2ed]">
                        <div>
                            <img class="h-[120px] " src={require("../images/sanitized.webp")} alt=""/>
                        </div>
                        <div class="mt-[20px] ">
                            <p class="text-white text-[25px] text-center md:text-[20px] md:mt-[30px] md:font-bold"> Sanitised Bus Options With TravelSafe+</p>
                            {/* <!-- <p class="text-white text-[20px] text-center md:text-[13px] md:font-bold">with code</p>
                            <p class="text-white text-[25px] text-center md:text-[15px] md:font-bold">WELCOMEFLIGHT</p> --> */}
                        </div>
                    </div>
    
                    <div class="max-w-[230px] h-[300px] mt-[50px] p-[10px] bg-[#66d6ff] group rounded-lg cursor-pointer
                    md:h-[280px] md:w-[180px] md:m-[10px] hover:bg-[#40c2ed]">
                        <div>
                            <img class="h-[120px] " src={require("../images/train-image.webp")} alt=""/>
                        </div>
                        <div class="mt-[20px] ">
                            <p class="text-white text-[25px] text-center md:text-[20px] md:mt-[30px] md:font-bold">Hassle Free Train Ticket Bookings</p>
                            {/* <!-- <p class="text-white text-[20px] text-center md:text-[13px] md:font-bold">with code</p>
                            <p class="text-white text-[25px] text-center md:text-[15px] md:font-bold">WELCOMEFLIGHT</p> --> */}
                        </div>
                    </div>
                </div>
                
            </div>
            
        </section>

    

        <div class="bg-[#f5f7fa] py-[80px] pb-[120px]">
            <div class="max-w-[1170px] mx-auto">
                <div
                    class="flex justify-center md:justify-between flex-wrap"
                >
                    <div
                        class="flex gap-5 flex-wrap justify-center sm:justify-start"
                    >
                        <h1 class="text-[20px] font-[600] leading-tight">
                            Download Paytm App <br />
                            to Pay from anywhere
                        </h1>
                        <div class="flex gap-4">
                            <img
                                class="max-w-[160px] h-[53px] cursor-pointer"
                                src={require("../images/app-store.png")}
                                alt="app-store"
                            />
                            <img
                                class="max-w-[160px] h-[53px] cursor-pointer"
                                src={require("../images/google-play.png")}
                                alt="play-store"
                            />
                        </div>
                    </div>

                    <div class="flex gap-8 items-center mt-[40px] md:mt-0">
                        <a href="google.com">
                            <img
                                src={require("../images/twitter.png")}
                                class="min-w-[25px] min-h-[21px]"
                                alt="twitter"
                            />
                        </a>
                        <a href="google.com">
                            <img
                                src={require("../images/insta.png")}
                                class="min-w-[25px] min-h-[24px]"
                                alt="insta"
                            />
                        </a>
                        <a href="google.com">
                            <img
                                src={require("../images/facebook.png")}
                                class="min-w-[12px] min-h-[23px]"
                                alt="facebook"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>

        <div class=" h-[12px] bg-[#00baf2]"></div>
        <div class=" h-[12px] bg-[#002970]"></div>
    </div>
  );
};

export default Paytm;
