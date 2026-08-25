export type ChartCell = { kana: string; romaji: string } | null;

export type ChartColumn = {
  id: string;
  label: string;
  cells: [ChartCell, ChartCell, ChartCell, ChartCell, ChartCell];
  accents?: ChartColumn[];
};

export type KanaChart = {
  columns: ChartColumn[];
  n: { kana: string; romaji: string };
};

const vowels = ["A", "I", "U", "E", "O"] as const;

function col(
  id: string,
  label: string,
  entries: Array<[string, string] | null>,
  accents?: ChartColumn[],
): ChartColumn {
  return {
    id,
    label,
    cells: entries.map((entry) =>
      entry ? { kana: entry[0], romaji: entry[1] } : null,
    ) as ChartColumn["cells"],
    accents,
  };
}

export const hiraganaChart: KanaChart = {
  n: { kana: "ん", romaji: "n" },
  columns: [
    col("w", "W", [
      ["わ", "wa"],
      null,
      null,
      null,
      ["を", "wo"],
    ]),
    col("r", "R", [
      ["ら", "ra"],
      ["り", "ri"],
      ["る", "ru"],
      ["れ", "re"],
      ["ろ", "ro"],
    ]),
    col("y", "Y", [
      ["や", "ya"],
      null,
      ["ゆ", "yu"],
      null,
      ["よ", "yo"],
    ]),
    col("m", "M", [
      ["ま", "ma"],
      ["み", "mi"],
      ["む", "mu"],
      ["め", "me"],
      ["も", "mo"],
    ]),
    col(
      "h",
      "H",
      [
        ["は", "ha"],
        ["ひ", "hi"],
        ["ふ", "fu"],
        ["へ", "he"],
        ["ほ", "ho"],
      ],
      [
        col("b", "B", [
          ["ば", "ba"],
          ["び", "bi"],
          ["ぶ", "bu"],
          ["べ", "be"],
          ["ぼ", "bo"],
        ]),
        col("p", "P", [
          ["ぱ", "pa"],
          ["ぴ", "pi"],
          ["ぷ", "pu"],
          ["ぺ", "pe"],
          ["ぽ", "po"],
        ]),
      ],
    ),
    col("n", "N", [
      ["な", "na"],
      ["に", "ni"],
      ["ぬ", "nu"],
      ["ね", "ne"],
      ["の", "no"],
    ]),
    col(
      "t",
      "T",
      [
        ["た", "ta"],
        ["ち", "chi"],
        ["つ", "tsu"],
        ["て", "te"],
        ["と", "to"],
      ],
      [
        col("d", "D", [
          ["だ", "da"],
          ["ぢ", "ji"],
          ["づ", "zu"],
          ["で", "de"],
          ["ど", "do"],
        ]),
      ],
    ),
    col(
      "s",
      "S",
      [
        ["さ", "sa"],
        ["し", "shi"],
        ["す", "su"],
        ["せ", "se"],
        ["そ", "so"],
      ],
      [
        col("z", "Z", [
          ["ざ", "za"],
          ["じ", "ji"],
          ["ず", "zu"],
          ["ぜ", "ze"],
          ["ぞ", "zo"],
        ]),
      ],
    ),
    col(
      "k",
      "K",
      [
        ["か", "ka"],
        ["き", "ki"],
        ["く", "ku"],
        ["け", "ke"],
        ["こ", "ko"],
      ],
      [
        col("g", "G", [
          ["が", "ga"],
          ["ぎ", "gi"],
          ["ぐ", "gu"],
          ["げ", "ge"],
          ["ご", "go"],
        ]),
      ],
    ),
    col("v", "•", [
      ["あ", "a"],
      ["い", "i"],
      ["う", "u"],
      ["え", "e"],
      ["お", "o"],
    ]),
  ],
};

export const katakanaChart: KanaChart = {
  n: { kana: "ン", romaji: "n" },
  columns: [
    col("w", "W", [
      ["ワ", "wa"],
      null,
      null,
      null,
      ["ヲ", "wo"],
    ]),
    col("r", "R", [
      ["ラ", "ra"],
      ["リ", "ri"],
      ["ル", "ru"],
      ["レ", "re"],
      ["ロ", "ro"],
    ]),
    col("y", "Y", [
      ["ヤ", "ya"],
      null,
      ["ユ", "yu"],
      null,
      ["ヨ", "yo"],
    ]),
    col("m", "M", [
      ["マ", "ma"],
      ["ミ", "mi"],
      ["ム", "mu"],
      ["メ", "me"],
      ["モ", "mo"],
    ]),
    col(
      "h",
      "H",
      [
        ["ハ", "ha"],
        ["ヒ", "hi"],
        ["フ", "fu"],
        ["ヘ", "he"],
        ["ホ", "ho"],
      ],
      [
        col("b", "B", [
          ["バ", "ba"],
          ["ビ", "bi"],
          ["ブ", "bu"],
          ["ベ", "be"],
          ["ボ", "bo"],
        ]),
        col("p", "P", [
          ["パ", "pa"],
          ["ピ", "pi"],
          ["プ", "pu"],
          ["ペ", "pe"],
          ["ポ", "po"],
        ]),
      ],
    ),
    col("n", "N", [
      ["ナ", "na"],
      ["ニ", "ni"],
      ["ヌ", "nu"],
      ["ネ", "ne"],
      ["ノ", "no"],
    ]),
    col(
      "t",
      "T",
      [
        ["タ", "ta"],
        ["チ", "chi"],
        ["ツ", "tsu"],
        ["テ", "te"],
        ["ト", "to"],
      ],
      [
        col("d", "D", [
          ["ダ", "da"],
          ["ヂ", "ji"],
          ["ヅ", "zu"],
          ["デ", "de"],
          ["ド", "do"],
        ]),
      ],
    ),
    col(
      "s",
      "S",
      [
        ["サ", "sa"],
        ["シ", "shi"],
        ["ス", "su"],
        ["セ", "se"],
        ["ソ", "so"],
      ],
      [
        col("z", "Z", [
          ["ザ", "za"],
          ["ジ", "ji"],
          ["ズ", "zu"],
          ["ゼ", "ze"],
          ["ゾ", "zo"],
        ]),
      ],
    ),
    col(
      "k",
      "K",
      [
        ["カ", "ka"],
        ["キ", "ki"],
        ["ク", "ku"],
        ["ケ", "ke"],
        ["コ", "ko"],
      ],
      [
        col("g", "G", [
          ["ガ", "ga"],
          ["ギ", "gi"],
          ["グ", "gu"],
          ["ゲ", "ge"],
          ["ゴ", "go"],
        ]),
      ],
    ),
    col("v", "•", [
      ["ア", "a"],
      ["イ", "i"],
      ["ウ", "u"],
      ["エ", "e"],
      ["オ", "o"],
    ]),
  ],
};

export const vowelLabels = vowels;
