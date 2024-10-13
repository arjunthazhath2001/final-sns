"use client";
import React from 'react';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "./ui/accordion"
  
  // AccordionDemo.tsx
export function AccordionDemo() {
    return (
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What are the unique academic initiatives or programs launched by SNS?</AccordionTrigger>
          <AccordionContent>
            Answer coming soon...
          </AccordionContent>
        </AccordionItem>

          <AccordionItem value="item-2">
          <AccordionTrigger>How do I apply for scholarships or financial aid?</AccordionTrigger>
          <AccordionContent>
            Answer coming soon...
          </AccordionContent>
        </AccordionItem>
        
        <AccordionItem value="item-3">
          <AccordionTrigger>What are the rankings of SNS institutions?</AccordionTrigger>
          <AccordionContent>
            Answer coming soon...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger>What is the 100x Dashboard all about?</AccordionTrigger>
          <AccordionContent>
            Answer coming soon...
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger>Is it free to use SNS Spine?</AccordionTrigger>
          <AccordionContent>
            Answer coming soon...
          </AccordionContent>
        </AccordionItem>
    
      </Accordion>
    );
  }
  
  // Export AccordionDemo
export default AccordionDemo;
  