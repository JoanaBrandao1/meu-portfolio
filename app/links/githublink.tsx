import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { FiGithub } from 'react-icons/fi'

export const GithubLink = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>

          <Button
            variant="ghost"
            className='rounded-full p-2'
            asChild
          >
            <a href="https://github.com/JoanaBrandao1" target="_blank" rel="noopener noreferrer">
              <FiGithub className="size-5" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='bg-pink'>
          <div>Github</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}