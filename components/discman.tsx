"use client";

import { useEffect, useState } from "react";
import { Pause, Play } from "lucide-react";

const DURATION = 197; // 3:17, a "duração" da faixa de abertura
const SEGMENTS = 18; // quadradinhos da barra no visor

function formatTime(seconds: number) {
  const m = Math.floor(seconds / 60);
  const s = String(seconds % 60).padStart(2, "0");
  return `${m}:${s}`;
}

// Player prateado com visor de LCD. O relógio fica aqui dentro para que só o
// Discman seja redesenhado a cada segundo, e não o início inteiro.
export function Discman({ playing, onToggle }: { playing: boolean; onToggle: () => void }) {
  const [elapsed, setElapsed] = useState(42);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setElapsed((t) => (t + 1) % DURATION), 1000);
    return () => clearInterval(id);
  }, [playing]);

  const filled = Math.round((elapsed / DURATION) * SEGMENTS);

  return (
    <div className="discman">
      <button type="button" className="gel-round discman__play" onClick={onToggle} aria-label={playing ? "Pausar" : "Tocar"}>
        {playing ? <Pause aria-hidden="true" /> : <Play aria-hidden="true" />}
      </button>

      <div className="lcd" role="group" aria-label={`Faixa 00, ${formatTime(elapsed)} de ${formatTime(DURATION)}`}>
        <div className="lcd__row">
          <span>{playing ? "▶" : "❚❚"} 00</span>
          <span className="lcd__title">Olá, eu sou a Joana</span>
        </div>
        <div className="lcd__row">
          <span>{formatTime(elapsed)}</span>
          <span className="lcd__bar" aria-hidden="true">
            {Array.from({ length: SEGMENTS }, (_, i) => (
              <i key={i} data-on={i < filled} />
            ))}
          </span>
          <span>{formatTime(DURATION)}</span>
        </div>
      </div>
    </div>
  );
}
