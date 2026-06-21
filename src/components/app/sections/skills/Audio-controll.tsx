"use client"

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { useEnableAudio, useDisableAudio } from "@/hooks/audio";
import { Volume2Icon, VolumeXIcon } from "lucide-react";
import { useState } from "react";

export const AudioControl = () => {
  const [enabled, setEnabled] = useState<boolean>(true);

  const handleAudioControl = () => {
    if (enabled) {
      useDisableAudio();
      setEnabled(false);
    } else {
      useEnableAudio();
      setEnabled(true);
    }
  };

  return (

    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="rounded"
          onClick={handleAudioControl}
        >
          {enabled ? <VolumeXIcon /> : <Volume2Icon />}
        </Button>

      </TooltipTrigger>
      <TooltipContent>
        {`${enabled ? 'Desabilitar' : 'Habilitar'} efeito sonoro ao passar o mouse nas Skills`}
      </TooltipContent>
    </Tooltip>
  );
};
