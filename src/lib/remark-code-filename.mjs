const LANG_ALIASES = {
  diff_json: 'diff',
};

/**
 * Zenn / Qiita 形式の ```lang:filename を、Shiki が解釈できる lang と
 * 表示用の data-filename に分解する。
 */
export function remarkCodeFilename() {
  return (tree) => {
    walk(tree);
  };
}

function walk(node) {
  if (node.type === 'code' && typeof node.lang === 'string' && node.lang.includes(':')) {
    const idx = node.lang.indexOf(':');
    const rawLang = node.lang.slice(0, idx);
    const filename = node.lang.slice(idx + 1);
    const lang = LANG_ALIASES[rawLang] ?? rawLang;

    node.lang = lang || null;
    if (filename) {
      const flag = `filename="${filename}"`;
      node.meta = node.meta ? `${node.meta} ${flag}` : flag;
    }
  }

  if (Array.isArray(node.children)) {
    for (const child of node.children) walk(child);
  }
}
