/**
 * Domestic (Chinese) LLM picks rendered by `src/components/CnModels.astro`:
 * fixed rails on both sides of the page on wide screens, and an inline strip
 * on narrower viewports. Every outbound link is tagged with the
 * `from=fuck-claude` referral source.
 */

import type { Lang } from '../i18n/ui';

export interface CnModel {
  id: string;
  name: string;
  /** Outbound link, tagged with the fuck-claude referral source. */
  url: string;
  /** Mascot path under `public/`, e.g. `/cn-models/foo.webp`. */
  img: string;
  /** Intrinsic mascot size, used to reserve space and avoid layout shift. */
  imgWidth: number;
  imgHeight: number;
  /** One-line pitch per language. */
  tagline: Record<Lang, string>;
  /** Which fixed rail the card sits on (wide screens). */
  side: 'left' | 'right';
}

export const CN_MODELS: CnModel[] = [
  {
    id: 'deepseek',
    name: 'DeepSeek',
    url: 'https://www.deepseek.com/?from=fuck-claude',
    img: '/cn-models/deepseek.webp',
    imgWidth: 342,
    imgHeight: 360,
    tagline: {
      zh: '深度求索，开源之光',
      en: 'Open-source power from the deep',
    },
    side: 'left',
  },
  {
    id: 'glm',
    name: 'GLM',
    url: 'https://bigmodel.cn/claude-code-plan?from=fuck-claude',
    img: '/cn-models/glm.webp',
    imgWidth: 313,
    imgHeight: 360,
    tagline: {
      zh: '智谱 GLM，Claude Code 无缝平替',
      en: 'Drop-in Claude Code replacement',
    },
    side: 'left',
  },
  {
    id: 'kimi',
    name: 'Kimi',
    url: 'https://www.kimi.com/code?from=fuck-claude',
    img: '/cn-models/kimi.webp',
    imgWidth: 322,
    imgHeight: 360,
    tagline: {
      zh: '月之暗面，代码正面',
      en: 'Moonshot AI’s coding sidekick',
    },
    side: 'right',
  },
];
