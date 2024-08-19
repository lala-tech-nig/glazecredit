import Image from "next/image";



const Banner = () => {
    return (
        <main>
            <div className="px-6 lg:px-8">
                <div className="mx-auto max-w-7xl pt-16 sm:pt-20 pb-20 banner-image">
                    <div className="text-center">
                        <h1 className="text-4xl font-semibold text-navyblue sm:text-5xl  lg:text-7xl md:4px lh-96">
                            Simplify Lending with an <br /> AI-Powered Solution.
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-bluegray">
                            Glaze Credit simplifies personal, business, and salary loans with an AI-powered <br /> solution that enhances decision-making and optimizes financial outcomes.
                        </p>
                    </div>


                    <div className="text-center mt-5">
                        <button type="button" className='text-15px text-white font-medium bg-[#17ad37] py-5 px-9 mt-2 leafbutton'>
                            See our portfolio
                        </button>
                        <button type="button" className='text-15px ml-4 mt-2 text-[#17ad37] transition duration-150 ease-in-out hover:text-white hover:bg-[#17ad37] font-medium py-5 px-16 border border-lightgrey leafbutton'>
                            Apply Now
                        </button>
                        
                    </div>

                    <Image src={'/assets/banner/dashboard.svg'} alt="banner-image" width={1200} height={598} />
                </div>
            </div>
        </main>
    )
}

export default Banner;
