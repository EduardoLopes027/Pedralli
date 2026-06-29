tailwind.config = {
  darkMode: "class",
  theme: {
    extend: {
      "colors": {
        "on-error": "#ffffff",
        "on-secondary-fixed": "#001d35",
        "tertiary-container": "#2d3338",
        "tertiary-fixed": "#dde3e9",
        "surface-container-lowest": "#ffffff",
        "surface-tint": "#001e37",
        "on-primary": "#ffffff",
        "secondary-container": "#d0e4ff",
        "on-background": "#111111",
        "surface": "#faf9f6",
        "inverse-surface": "#1c1b1b",
        "on-primary-fixed-variant": "#003455",
        "surface-container": "#f4f3f0",
        "surface-container-highest": "#eae8e4",
        "on-secondary-container": "#001d35",
        "background": "#faf9f6",
        "primary-fixed-dim": "#a8c9f2",
        "on-tertiary-fixed-variant": "#41484d",
        "on-primary-fixed": "#001d35",
        "tertiary": "#1a1a1a",
        "inverse-on-surface": "#faf9f6",
        "outline-variant": "#e2e0db",
        "on-tertiary-fixed": "#161c21",
        "on-tertiary": "#ffffff",
        "error-container": "#ffdad6",
        "secondary-fixed-dim": "#a8c9f2",
        "error": "#ba1a1a",
        "on-secondary-fixed-variant": "#003455",
        "surface-container-high": "#eae8e4",
        "on-error-container": "#93000a",
        "secondary-fixed": "#d0e4ff",
        "surface-bright": "#faf9f6",
        "surface-dim": "#eae8e4",
        "on-surface-variant": "#43474e",
        "inverse-primary": "#a8c9f2",
        "primary-container": "#003455",
        "on-secondary": "#ffffff",
        "primary": "#001e37",
        "outline": "#8c8a85",
        "primary-fixed": "#d0e4ff",
        "secondary": "#003455", // Changed from green to rich deep medium navy
        "surface-container-low": "#faf9f6",
        "on-tertiary-container": "#959ba1",
        "surface-variant": "#eae8e4",
        "on-surface": "#111111",
        "tertiary-fixed-dim": "#c1c7cd",
        "on-primary-container": "#7c9dc3",
        "gold-accent": "#d97706", // Amber gold for premium highlights
      },
      "borderRadius": {
        "DEFAULT": "0.125rem",
        "lg": "0.25rem",
        "xl": "0.5rem",
        "full": "9999px"
      },
      "spacing": {
        "base": "8px",
        "margin-desktop": "48px",
        "container-max": "1360px",
        "gutter": "32px",
        "margin-mobile": "24px"
      },
      "fontFamily": {
        "headline-md": [
          "Hanken Grotesk"
        ],
        "headline-lg": [
          "Hanken Grotesk"
        ],
        "body-lg": [
          "Inter"
        ],
        "body-sm": [
          "Inter"
        ],
        "display-lg": [
          "Hanken Grotesk"
        ],
        "label-md": [
          "Inter"
        ],
        "headline-lg-mobile": [
          "Hanken Grotesk"
        ],
        "body-md": [
          "Inter"
        ],
        "label-sm": [
          "Inter"
        ],
        "sans": ["Inter", "sans-serif"]
      },
      "fontSize": {
        "headline-md": [
          "28px",
          {
            "lineHeight": "36px",
            "fontWeight": "600"
          }
        ],
        "headline-lg": [
          "38px",
          {
            "lineHeight": "46px",
            "fontWeight": "700"
          }
        ],
        "body-lg": [
          "20px",
          {
            "lineHeight": "30px",
            "fontWeight": "400"
          }
        ],
        "body-sm": [
          "14px",
          {
            "lineHeight": "22px",
            "fontWeight": "400"
          }
        ],
        "display-lg": [
          "56px",
          {
            "lineHeight": "64px",
            "letterSpacing": "-0.03em",
            "fontWeight": "800"
          }
        ],
        "label-md": [
          "15px",
          {
            "lineHeight": "18px",
            "letterSpacing": "0.06em",
            "fontWeight": "600"
          }
        ],
        "headline-lg-mobile": [
          "28px",
          {
            "lineHeight": "36px",
            "fontWeight": "700"
          }
        ],
        "body-md": [
          "17px",
          {
            "lineHeight": "26px",
            "fontWeight": "400"
          }
        ],
        "label-sm": [
          "13px",
          {
            "lineHeight": "18px",
            "fontWeight": "500"
          }
        ]
      }
    },
  },
};
