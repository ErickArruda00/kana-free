"use client";

import {
  hiraganaChart,
  katakanaChart,
  vowelLabels,
  type ChartCell,
  type ChartColumn,
  type KanaChart,
} from "@/data/kana-chart";

function Cell({ cell }: { cell: ChartCell }) {
  if (!cell) {
    return <div className="chart-cell is-empty" aria-hidden="true" />;
  }

  return (
    <div className="chart-cell" tabIndex={0}>
      <span className="chart-kana">{cell.kana}</span>
      <span className="chart-romaji">{cell.romaji}</span>
    </div>
  );
}

function Column({
  column,
  variant = "base",
}: {
  column: ChartColumn;
  variant?: "base" | "accent";
}) {
  return (
    <div className={`chart-col chart-col-${variant}`}>
      <div className="chart-col-label">{column.label}</div>
      {column.cells.map((cell, index) => (
        <Cell key={`${column.id}-${index}`} cell={cell} />
      ))}
    </div>
  );
}

function Cluster({ column }: { column: ChartColumn }) {
  const accents = column.accents ?? [];
  const hasAccents = accents.length > 0;

  return (
    <div className={`chart-cluster ${hasAccents ? "has-accents" : ""}`}>
      {hasAccents ? (
        <div className="chart-accents">
          {[...accents].reverse().map((accent) => (
            <Column key={accent.id} column={accent} variant="accent" />
          ))}
        </div>
      ) : null}
      <Column column={column} />
    </div>
  );
}

function ChartBoard({ title, chart }: { title: string; chart: KanaChart }) {
  return (
    <section className="chart-board">
      <h2 className="chart-title">{title}</h2>
      <div className="chart-scroll">
        <div className="chart-grid" role="table" aria-label={title}>
          <div className="chart-n">
            <Cell cell={chart.n} />
          </div>
          <div className="chart-body">
            {chart.columns.map((column) => (
              <Cluster key={column.id} column={column} />
            ))}
            <div className="chart-vowels" aria-hidden="true">
              <div className="chart-col-label" />
              {vowelLabels.map((label) => (
                <div key={label} className="chart-vowel-label">
                  {label}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function KanaCharts() {
  return (
    <div className="charts">
      <ChartBoard title="Hiragana" chart={hiraganaChart} />
      <ChartBoard title="Katakana" chart={katakanaChart} />
    </div>
  );
}
