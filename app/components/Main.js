"use client"
import React from 'react'
import CountUp from 'react-countup';
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

const Main = () => {
    return (
        <div className='mb-16'>

            <div className='relative bg-red-200 mx-6 mt-2  '>
                <Carousel>
                    <CarouselContent>
                        <CarouselItem className={``}><img className='w-full h-[70vh]' src="https://www.iiti.ac.in/public/storage/do_updates/sep2023/alumini%20meet.jpg" alt="" /></CarouselItem>
                        <CarouselItem className={``}><img className='w-full h-[70vh]' src="https://www.iiti.ac.in/people/~chem/images/slides/etc-2019-gp.jpg" alt="" /></CarouselItem>
                        <CarouselItem className={``}><img className='w-full h-[70vh] ' src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/campusfeed/148423_1533550476SxSdr5.jpg" alt="" /></CarouselItem>
                        <CarouselItem className={``}><img className='w-full h-[70vh] ' src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1710927285_3rpDXJQmSk.jpg" alt="" /></CarouselItem>
                        <CarouselItem className={``}><img className='w-full h-[70vh] ' src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1710927285_3rpDXJQmSk.jpg" alt="" /></CarouselItem>
                        <CarouselItem className={``}><img className='w-full h-[70vh] ' src="https://almashines.s3.dualstack.ap-southeast-1.amazonaws.com/assets/images/gallary_photos/t1710927285_3rpDXJQmSk.jpg" alt="" /></CarouselItem>

                    </CarouselContent>
                    <CarouselPrevious className="absolute -start-0 hover:h-12 hover:w-12 hover:opacity-70" />
                    <CarouselNext className="absolute end-0 hover:h-12 hover:w-12 hover:opacity-70" />
                </Carousel>

            </div>

            <div className='stats bg-blue-500 flex justify-evenly py-3 my-2'>
                <div className='text-3xl text-white font-semibold text-center'>
                    <div className='text-xl'>No. of Alumni</div>
                    <CountUp start={0} end={3000} delay={0.5} duration={3}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='text-3xl text-white font-semibold text-center'>
                    <div className='text-xl'>No. of Students</div>
                    <CountUp start={0} end={2500} delay={0.5} duration={3}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />+
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='text-3xl text-white font-semibold text-center'>
                    <div className='text-xl'>No. of Research Publication</div>
                    <CountUp start={0} end={6241} delay={0.5} duration={3}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </div>
                <div className='text-3xl text-white font-semibold text-center'>
                    <div className='text-xl'>No. of Projects</div>
                    <CountUp start={0} end={586} delay={0.5} duration={3}>
                        {({ countUpRef }) => (
                            <div>
                                <span ref={countUpRef} />
                            </div>
                        )}
                    </CountUp>
                </div>

            </div>
            <div className='mx-6'>

                <div className="content text-3xl mt-6 mb-3 font-semibold text-red-700" >Alumni cell Mission :</div>
                <div className=''>

                <div className=' my-4'>
                    <div className='font-bold text-xl'>Alumni Relations</div>
                    <div className=' text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus corrupti qui culpa odio dolore vitae explicabo, non officia. Nemo quos est illo soluta ipsam officia necessitatibus praesentium provident exercitationem commodi, consequuntur sed, enim recusandae sapiente dolorem laborum at excepturi. Autem omnis sapiente necessitatibus molestias ullam.
                    </div>
                </div>
                <div className='my-4'>
                    <div className='font-bold text-xl'>Corporate Relations</div>
                    <div className=' text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus corrupti qui culpa odio dolore vitae explicabo, non officia. Nemo quos est illo soluta ipsam officia necessitatibus praesentium provident exercitationem commodi, consequuntur sed, enim recusandae sapiente dolorem laborum at excepturi. Autem omnis sapiente necessitatibus molestias ullam.
                    </div>
                </div>
                <div className=' my-4'>
                    <div className='font-bold text-xl'>Office of the ACR</div>
                    <div className=' text-lg '>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Necessitatibus corrupti qui culpa odio dolore vitae explicabo, non officia. Nemo quos est illo soluta ipsam officia necessitatibus praesentium provident exercitationem commodi, consequuntur sed, enim recusandae sapiente dolorem laborum at excepturi. Autem omnis sapiente necessitatibus molestias ullam.
                    </div>
                </div>
                
                
                </div>
            </div>
        </div>
    )
}

export default Main
