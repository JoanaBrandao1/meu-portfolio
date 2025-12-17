import { Button } from '@/components/ui/button'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { Mail } from 'lucide-react'

export const EmailLink = () => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>

          <Button
            variant="ghost"
            className='rounded-full p-2'
            asChild
          >
            <a href="mailto:joanab.dev@gmail.com?subject=Contato&body=Olá Joana" target="_blank" rel="noopener noreferrer">
              <Mail className="size-5" />
            </a>
          </Button>
        </TooltipTrigger>
        <TooltipContent className='bg-pink'>
          <div>Enviar um Email</div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>

  )
}