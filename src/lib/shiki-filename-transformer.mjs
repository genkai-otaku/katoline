/** Shiki transformer: remark が付けた filename="..." を pre の data-filename にする */
export function transformerCodeFilename() {
  return {
    name: 'transformer-code-filename',
    pre(node) {
      const raw = this.options?.meta?.__raw ?? '';
      const match = typeof raw === 'string' ? raw.match(/filename="([^"]+)"/) : null;
      if (!match) return;
      node.properties ??= {};
      node.properties['data-filename'] = match[1];
    },
  };
}
