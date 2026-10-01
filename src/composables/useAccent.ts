import { ref } from 'vue';

export type AccentName =
  | 'emerald'
  | 'green'
  | 'lime'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'teal'
  | 'cyan'
  | 'sky'
  | 'blue'
  | 'indigo'
  | 'violet'
  | 'purple'
  | 'fuchsia'
  | 'pink'
  | 'rose'
  | 'slate'
  | 'gray'
  | 'zinc'
  | 'neutral'
  | 'stone'

export interface Accent {
  name: AccentName,
  label: string,
  variable: string,
  preview: string, 
}

export const accents: Accent[] = [
  {
    name: 'emerald',
    label: 'Emerald',
    variable: 'var(--color-emerald-400)',
    preview: 'bg-emerald-400'
  },
  {
    name: 'green',
    label: 'Green',
    variable: 'var(--color-green-400)',
    preview: 'bg-green-400'
  },
  {
    name: 'lime',
    label: 'Lime',
    variable: 'var(--color-lime-400)',
    preview: 'bg-lime-400'
  },
  {
    name: 'red',
    label: 'Red',
    variable: 'var(--color-red-400)',
    preview: 'bg-red-400',
  },
  {
    name: 'orange',
    label: 'Orange',
    variable: 'var(--color-orange-400)',
    preview: 'bg-orange-400',
  },
  {
    name: 'amber',
    label: 'Amber',
    variable: 'var(--color-amber-400)',
    preview: 'bg-amber-400',
  },
  {
    name: 'yellow',
    label: 'Yellow',
    variable: 'var(--color-yellow-400)',
    preview: 'bg-yellow-400',
  },
  {
    name: 'teal',
    label: 'Teal',
    variable: 'var(--color-teal-400)',
    preview: 'bg-teal-400',
  },
  {
    name: 'cyan',
    label: 'Cyan',
    variable: 'var(--color-cyan-400)',
    preview: 'bg-cyan-400',
  },
  {
    name: 'sky',
    label: 'Sky',
    variable: 'var(--color-sky-400)',
    preview: 'bg-sky-400',
  },
  {
    name: 'blue',
    label: 'Blue',
    variable: 'var(--color-blue-400)',
    preview: 'bg-blue-400',
  },
  {
    name: 'indigo',
    label: 'Indigo',
    variable: 'var(--color-indigo-400)',
    preview: 'bg-indigo-400',
  },
  {
    name: 'violet',
    label: 'Violet',
    variable: 'var(--color-violet-400)',
    preview: 'bg-violet-400',
  },
  {
    name: 'purple',
    label: 'Purple',
    variable: 'var(--color-purple-400)',
    preview: 'bg-purple-400',
  },
  {
    name: 'fuchsia',
    label: 'Fuchsia',
    variable: 'var(--color-fuchsia-400)',
    preview: 'bg-fuchsia-400',
  },
  {
    name: 'pink',
    label: 'Pink',
    variable: 'var(--color-pink-400)',
    preview: 'bg-pink-400',
  },
  {
    name: 'rose',
    label: 'Rose',
    variable: 'var(--color-rose-400)',
    preview: 'bg-rose-400',
  },
  {
    name: 'slate',
    label: 'Slate',
    variable: 'var(--color-slate-400)',
    preview: 'bg-slate-400',
  },
  {
    name: 'gray',
    label: 'Gray',
    variable: 'var(--color-gray-400)',
    preview: 'bg-gray-400',
  },
  {
    name: 'neutral',
    label: 'Neutral',
    variable: 'var(--color-neutral-400)',
    preview: 'bg-neutral-400',
  },
]

const DEFAULT_ACCENT: AccentName = 'orange'

const accentColor = ref<AccentName>(DEFAULT_ACCENT)

export function useAccent() {
  const applyAccent = (accent: AccentName) => {
    const selected = accents.find((item) => item.name === accent)
    if (!selected) return

    document.documentElement.style.setProperty('--accent-color', selected.variable)
    accentColor.value = accent

    localStorage.setItem('accent', accent)
  }

  const setAccent = (accent: AccentName) => {
    applyAccent(accent)
  }

  const loadAccent = () => {
    const savedAccent = localStorage.getItem('accent') as AccentName | null
    const validAccent = accents.some((accent) => accent.name === savedAccent)

    if (savedAccent && validAccent) {
      applyAccent(savedAccent)
    } else {
      applyAccent(DEFAULT_ACCENT)
    }
  }

  const resetAccent = () => {
    applyAccent(DEFAULT_ACCENT)
  }

  return {
    accents,
    accentColor,
    setAccent,
    loadAccent,
    resetAccent
  }
}