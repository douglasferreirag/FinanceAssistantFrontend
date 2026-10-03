import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  private recognition: any;

  private silenceTimer?: number;

  readonly SILENCE_DURATION = 3000;

  async startRecording(): Promise<void> {

    const SpeechRecognition =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;

    if (!SpeechRecognition) {

      throw new Error(
        'Reconhecimento de voz não suportado.'
      );
    }

    this.recognition =
      new SpeechRecognition();

    this.recognition.lang = 'pt-BR';

    this.recognition.continuous = true;

    this.recognition.interimResults = true;

    this.recognition.start();
  }

  stopRecording(): void {

    if (this.recognition) {

      this.recognition.stop();
    }

    if (this.silenceTimer) {

      clearTimeout(this.silenceTimer);
    }
  }

  async transcribe(): Promise<string> {

    return new Promise((resolve, reject) => {

      const SpeechRecognition =
        (window as any).SpeechRecognition ||
        (window as any).webkitSpeechRecognition;

      if (!SpeechRecognition) {

        reject(
          'Reconhecimento de voz não suportado.'
        );

        return;
      }

      let finalText = '';

      this.recognition =
        new SpeechRecognition();

      this.recognition.lang = 'pt-BR';

      this.recognition.continuous = true;

      this.recognition.interimResults = true;

      this.recognition.onresult =
        (event: any) => {

          let transcript = '';

          for (
            let i = event.resultIndex;
            i < event.results.length;
            i++
          ) {

            transcript +=
              event.results[i][0].transcript;
          }

          finalText = transcript;

          if (this.silenceTimer) {

            clearTimeout(this.silenceTimer);
          }

          this.silenceTimer =
            window.setTimeout(() => {

              this.recognition.stop();

            }, this.SILENCE_DURATION);
        };

      this.recognition.onend = () => {

        resolve(
          finalText.trim()
        );
      };

      this.recognition.onerror =
        (error: any) => {

          reject(error);
        };

      this.recognition.start();
    });
  }
}
