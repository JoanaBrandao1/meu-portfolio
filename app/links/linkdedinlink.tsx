import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { FaLinkedinIn } from "react-icons/fa";

export const LinkedinLink = () => {
  return(
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>

          <Button
            variant="ghost"
            className='rounded-full p-2'
            asChild
          >
            <a href="https://www.linkedin.com/in/joana-beatriz-brandao/" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn className="size-5" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='bg-pink'>
          <div>LinkedIn</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}