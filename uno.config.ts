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
      'bg-black': '#242424',
      'brand-red': '#ff545c',
      'brand-red-hov': '#f1474f',
    }
  },
  presets: [
    presetAttributify(),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      fonts: {
        roboto: 'Roboto'
      },
    }),
    presetUno,
  ],
  transformers: [
    transformerDirectives(),
    transformerVariantGroup(),
  ],
})