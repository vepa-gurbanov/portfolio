import { FC } from 'react';
import Circles from "@/components/Circles";
import Bulb from "@/components/Bulb";
import ServiceSlider from "@/components/ServiceSlider";
import { fadeIn } from "@/components/ui/variants";


interface pageProps {}

const Services: FC<pageProps> = ({}) => {
    return (
        <div className='h-full bg-primary/30 py-36 flex items-center'>
            <Circles />
            <div className="container mx-auto">
                <div className='flex flex-col xl:flex-row gap-x-8'>
                    {/*  text  */}
                    <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
                        <h2 className='h2 xl:mt-8'>
                            Our Services <span className="text-accent">.</span>
                        </h2>
                        <p className='mb-4 max-w-[400px] mx-auto lg:mx-4'>
                            Web development is used to create various web applications offering specific functions and services. Examples include online banking systems, project management tools, social media platforms, and email services
                        </p>
                    </div>
                    {/*  slider  */}
                    <ServiceSlider />
                </div>
            </div>
            <Bulb />
        </div>
    );
}

export default Services;