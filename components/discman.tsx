"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { MUSIC } from "@/lib/constants";

const FAKE_DURATION = 176; // duração mostrada antes da música começar (2:56, a mesma da faixa)
const SEGMENTS = 18; // quadradinhos da barra no visor

// tipos mínimos da API de embed do Spotify (https://developer.spotify.com/documentation/embeds)
type PlaybackUpdate = { data: { isPaused: boolean; position: number; duration: number } };
type EmbedController = {
  togglePlay: () => void;
  addListener: (event: "playback_update", cb: (e: PlaybackUpdate) => void) => void;
  destroy: () => void;
};
type SpotifyIFrameAPI = {
  createController: (
    el: HTMLElement,
    options: { uri: string; width?: string | number; height?: string | number },
    cb: (controller: EmbedController) => void,
  ) => void;
};
declare global {
  interface Window {
    onSpotifyIframeApiReady?: (api: SpotifyIFrameAPI) => void;
    spotifyIframeApi?: SpotifyIFrameAPI;
  }
}

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = String(Math.floor(seconds % 60)).padStart(2, "0");
  return `${m}:${s}`;
}

// carrega o script do Spotify uma vez só e devolve a API quando estiver pronta
function loadSpotifyApi(onReady: (api: SpotifyIFrameAPI) => void) {
  if (window.spotifyIframeApi) return onReady(window.spotifyIframeApi);
  const previous = window.onSpotifyIframeApiReady;
  window.onSpotifyIframeApiReady = (api) => {
    window.spotifyIframeApi = api;
    previous?.(api);
    onReady(api);
  };
  if (!document.querySelector('script[src*="open.spotify.com/embed/iframe-api"]')) {
    const script = document.createElement("script");
    script.src = "https://open.spotify.com/embed/iframe-api/v1";
    script.async = true;
    document.body.appendChild(script);
  }
}

// Player prateado com visor de LCD. O botão de play controla o player oficial do Spotify
// (que aparece logo abaixo). Antes de a pessoa dar play, o visor só faz a animação.
export function Discman({
  playing,
  onPlayingChange,
}: {
  playing: boolean;
  onPlayingChange: (playing: boolean) => void;
}) {
  const embedRef = useRef<HTMLDivElement>(null);
  const controller = useRef<EmbedController | null>(null);
  const started = useRef(false); // só sincroniza com o Spotify depois do primeiro clique
  const [fakeElapsed, setFakeElapsed] = useState(42);
  const [audio, setAudio] = useState<{ position: number; duration: number } | null>(null);

  // cria o player do Spotify
  useEffect(() => {
    let cancelled = false;
    loadSpotifyApi((api) => {
      if (cancelled || !embedRef.current) return;
      api.createController(embedRef.current, { uri: MUSIC.spotifyUri, width: "100%", height: 80 }, (c) => {
        controller.current = c;
        c.addListener("playback_update", ({ data }) => {
          if (!started.current) return;
          setAudio({ position: data.position / 1000, duration: data.duration / 1000 });
          onPlayingChange(!data.isPaused);
        });
      });
    });
    return () => {
      cancelled = true;
      controller.current?.destroy();
      controller.current = null;
    };
  }, [onPlayingChange]);

  // relógio de mentirinha, enquanto a música não começou
  useEffect(() => {
    if (!playing || audio) return;
    const id = setInterval(() => setFakeElapsed((t) => (t + 1) % FAKE_DURATION), 1000);
    return () => clearInterval(id);
  }, [playing, audio]);

  const toggle = () => {
    if (controller.current) {
      started.current = true;
      controller.current.togglePlay();
    } else {
      onPlayingChange(!playing); // se o Spotify não carregou, o botão continua só animando
    }
  };

  const elapsed = audio ? audio.position : fakeElapsed;
  const duration = audio && audio.duration > 0 ? audio.duration : FAKE_DURATION;
  const filled = Math.round((elapsed / duration) * SEGMENTS);
  const musicPlaying = Boolean(audio) && playing;

  return (
    <div className="discman-wrap">
      <div className="discman">
        <button
          type="button"
          className="gel-round discman__play"
          onClick={toggle}
          aria-label={musicPlaying ? `Pausar ${MUSIC.title}` : `Tocar ${MUSIC.title}, de ${MUSIC.artist}`}
        >
          {musicPlaying ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
        </button>

        <div className="lcd" role="group" aria-label={`Faixa 00, ${formatTime(elapsed)} de ${formatTime(duration)}`}>
          <div className="lcd__row">
            <span>{playing ? "▶" : "❚❚"} 00</span>
            <span className="lcd__title">Olá, eu sou Joana</span>
          </div>
          <div className="lcd__row">
            <span>{formatTime(elapsed)}</span>
            <span className="lcd__bar" aria-hidden="true">
              {Array.from({ length: SEGMENTS }, (_, i) => (
                <i key={i} data-on={i < filled} />
              ))}
            </span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>
      </div>

      {/* player oficial do Spotify: o script troca esta div pelo player */}
      <div className="spotify-embed">
        <div ref={embedRef} />
      </div>
    </div>
  );
}
