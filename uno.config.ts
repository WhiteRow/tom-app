import {
  defineConfig,
  presetAttributify,
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
  transformerVariantGroup,
  presetUno,
} from 'unocss'


export default defineConfig({
  shortcuts: [],
  theme: {
    colors: {
      'bg-purple-dark-0': '#1B1C31',
      'bg-purple-dark-1': '#2C2D4C',
      'shadow-purple-dark-0': '#282746',
      'brand-purple-0': '#5842D3',
      'brand-purple-0-hover': '#6851ED',
      'shadow-brand-purple-0': '#3C2F88',
      'red-0': '#C64261',
      'red-0-hover': '#DB3F63',
      'shadow-red-0': '#88273D',
      'text-white-0': '#DBDBED',
      'text-white-1': "#BFBFCD",
    }
  },
  presets: [
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        'micro-5': 'Micro 5'
      },
    }),
    presetUno,
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})