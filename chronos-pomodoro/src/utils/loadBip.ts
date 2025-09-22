import gravitationalBeep from '../assets/audio/gravitational_beep.mp3';

export function loadBeep() {
  const audio = new Audio(gravitationalBeep);
  audio.load();

  return () => {
    audio.currentTime = 0;
    audio
      .play()
      .then(() => console.log('Áudio tocou corretamente'))
      .catch(error => console.log('Erro ao tocar áudio', error));
  };
}
