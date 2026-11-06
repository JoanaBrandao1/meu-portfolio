import { SITE } from '@/lib/constants'
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
            className='rounded-full p-2 size-9'
            asChild
          >
            <a aria-label="Enviar um email" href={`mailto:${SITE.email}`}>
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