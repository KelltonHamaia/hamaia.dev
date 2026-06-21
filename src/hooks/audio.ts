import { type Skill } from "@/components/app/sections/skills/data";

// I'm not the one who made all those sounds, so I'll leave all the links
// https://pixabay.com/sound-effects/film-special-effects-coin-collect-retro-8-bit-sound-effect-145251/
// https://pixabay.com/sound-effects/technology-stop-474070/
// https://pixabay.com/sound-effects/film-special-effects-8-bit-game-2-186976/
// https://pixabay.com/sound-effects/film-special-effects-impact-sound-effect-8-bit-retro-151796/

// Thank you!

class AudioPlayer {
  private enabled:boolean = true
  private audio: HTMLAudioElement | null = null;

  private getAudio() {
    if (!this.audio) {
      this.audio = new Audio();
    }

    return this.audio;
  }

  setSource(src: string) {
    this.getAudio().src = src;
  }

  async play() {
    if(!this.enabled) return 

    try {
      const audio = this.getAudio();

      audio.volume = 0.1;
      audio.pause();
      audio.currentTime = 0;

      await audio.play();
    } catch (error) {
      console.log(error);
    }
  }

  setEnabled(enabled: boolean) {
    this.enabled = enabled
  }
}

const audioPlayer = new AudioPlayer();
const AUDIOS: Record<Skill["type"], string> = {
  frontend: "/audio/frontend.opus",
  backend: "/audio/backend.opus",
  database: "/audio/database-devops.opus",
  devops: "/audio/database-devops.opus",
  languages: "/audio/languages.opus",
};

export const usePlayAudio = async (audioType: Skill["type"]) => {
  const source = AUDIOS[audioType];

  audioPlayer.setSource(source);
  await audioPlayer.play();
};

export const useEnableAudio = () => {
  audioPlayer.setEnabled(true);
};

export const useDisableAudio = () => {
  audioPlayer.setEnabled(false);
};