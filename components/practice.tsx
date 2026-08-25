"use client";

import { useEffect, useRef, useState } from "react";
import KanaCharts from "@/components/kana-chart";
import { kanaByMode, type KanaMode } from "@/data/kana";

function pickChar(dict: Record<string, string>, avoid?: string) {
  const keys = Object.keys(dict);
  if (keys.length <= 1) return keys[0] ?? "";
  let next = keys[Math.floor(Math.random() * keys.length)];
  while (next === avoid) {
    next = keys[Math.floor(Math.random() * keys.length)];
  }
  return next;
}

function normalize(value: string) {
  return value.trim().toLowerCase();
}

function mergeModes(modes: KanaMode[]) {
  return Object.assign({}, ...modes.map((mode) => kanaByMode[mode])) as Record<
    string,
    string
  >;
}

function labelFor(modes: KanaMode[]) {
  if (modes.length === 2) return "Hiragana + Katakana";
  return modes[0] === "hiragana" ? "Hiragana" : "Katakana";
}

export default function Practice() {
  const [selected, setSelected] = useState<Record<KanaMode, boolean>>({
    hiragana: false,
    katakana: false,
  });
  const [activeModes, setActiveModes] = useState<KanaMode[] | null>(null);
  const [char, setChar] = useState("");
  const [answer, setAnswer] = useState("");
  const [feedback, setFeedback] = useState<"idle" | "correct" | "wrong">(
    "idle",
  );
  const [correctCount, setCorrectCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const dict = activeModes ? mergeModes(activeModes) : null;
  const selectedModes = (Object.keys(selected) as KanaMode[]).filter(
    (mode) => selected[mode],
  );
  const canStart = selectedModes.length > 0;

  useEffect(() => {
    if (!activeModes) return;
    const nextDict = mergeModes(activeModes);
    setChar(pickChar(nextDict));
    setAnswer("");
    setFeedback("idle");
    setCorrectCount(0);
    setTotalCount(0);
    queueMicrotask(() => inputRef.current?.focus());
  }, [activeModes]);

  useEffect(() => {
    if (dict && feedback === "idle") {
      inputRef.current?.focus();
    }
  }, [char, dict, feedback]);

  function toggle(mode: KanaMode) {
    setSelected((prev) => ({ ...prev, [mode]: !prev[mode] }));
  }

  function start() {
    if (!canStart) return;
    setActiveModes(selectedModes);
  }

  function goHome() {
    setActiveModes(null);
    setChar("");
    setAnswer("");
    setFeedback("idle");
    setCorrectCount(0);
    setTotalCount(0);
  }

  function advance() {
    if (!dict) return;
    setChar(pickChar(dict, char));
    setAnswer("");
    setFeedback("idle");
  }

  function submit(event: React.FormEvent) {
    event.preventDefault();
    if (!dict || !char || feedback !== "idle") return;

    const expected = dict[char];
    const ok = normalize(answer) === expected;
    setFeedback(ok ? "correct" : "wrong");
    setTotalCount((n) => n + 1);
    if (ok) setCorrectCount((n) => n + 1);

    window.setTimeout(() => {
      advance();
    }, ok ? 450 : 900);
  }

  if (!activeModes || !dict) {
    return (
      <div className="home">
        <div className="menu">
          <p className="brand">Kana Free</p>
          <h1 className="headline">Pratique o som de cada caractere</h1>
          <p className="lede">
            Selecione um ou mais silabários e digite o romaji correspondente.
          </p>
          <div className="cta-row" role="group" aria-label="Silabários">
            <button
              type="button"
              className={`choice ${selected.hiragana ? "is-selected" : ""}`}
              aria-pressed={selected.hiragana ? "true" : "false"}
              onClick={() => toggle("hiragana")}
            >
              Hiragana
            </button>
            <button
              type="button"
              className={`choice ${selected.katakana ? "is-selected" : ""}`}
              aria-pressed={selected.katakana ? "true" : "false"}
              onClick={() => toggle("katakana")}
            >
              Katakana
            </button>
          </div>
          <button
            type="button"
            className={`cta ${canStart ? "" : "is-disabled"}`}
            onClick={start}
            aria-disabled={canStart ? "false" : "true"}
          >
            Começar
          </button>
        </div>
        <KanaCharts />
      </div>
    );
  }

  const expected = dict[char];

  return (
    <div className="session">
      <header className="session-bar">
        <button type="button" className="back" onClick={goHome}>
          Voltar
        </button>
        <p className="mode-label">{labelFor(activeModes)}</p>
        <p className="score">
          {correctCount}/{totalCount}
        </p>
      </header>

      <div
        key={char}
        className={`glyph ${feedback === "correct" ? "is-correct" : ""} ${feedback === "wrong" ? "is-wrong" : ""}`}
      >
        {char}
      </div>

      <form className="answer-form" onSubmit={submit}>
        <label className="sr-only" htmlFor="romaji">
          Romaji
        </label>
        <input
          id="romaji"
          ref={inputRef}
          className="answer-input"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="romaji"
          autoComplete="off"
          autoCapitalize="off"
          autoCorrect="off"
          spellCheck={false}
          disabled={feedback !== "idle"}
        />
        <button type="submit" className="submit" disabled={feedback !== "idle"}>
          Verificar
        </button>
      </form>

      <p
        className={`hint ${feedback === "wrong" ? "is-visible" : ""}`}
        aria-live="polite"
      >
        {feedback === "wrong" ? expected : "\u00a0"}
      </p>
    </div>
  );
}
