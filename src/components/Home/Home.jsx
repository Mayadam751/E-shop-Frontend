import React from 'react'
import { Carousel, Accordion, Card } from "flowbite-react";




export default function Home() {


   return (
   <>
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          <img src={require("../../images/ban1.jpg")} alt="..." />
          <img src={require("../../images/ban2.jpg")} alt="..." />
        </Carousel>
      </div>
      <div className="about  mt-10 mb-10 flex justify-around">
        <Card className="max-w-md " imgSrc={require("../../images/5.jpg")} horizontal>
          <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            About Us
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis eum magni at consequuntur similique, optio, quis laudantium sequi qui quas, voluptatum eveniet perferendis cumque voluptas accusamus. Quod recusandae id alias sequi nemo, quos perspiciatis minus magni. Cumque, iusto laboriosam? Culpa assumenda facilis odio eius repudiandae quas ex quia minima vero?
          </p>
        </Card>
        <Accordion collapseAll>
          <Accordion.Panel>
            <Accordion.Title>How can I care for my t-shirts to ensure they last longer?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Proper care is essential for maintaining the quality and longevity of your t-shirts. Always follow the care instructions on the garment label, which typically recommend washing in cold water and avoiding harsh detergents and bleach.
              </p>
              
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title>How can I care for my t-shirts to ensure they last longer?</Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 text-gray-500 dark:text-gray-400">
                Proper care is essential for maintaining the quality and longevity of your t-shirts. Always follow the care instructions on the garment label, which typically recommend washing in cold water and avoiding harsh detergents and bleach.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>

      
    </>
  )
}
