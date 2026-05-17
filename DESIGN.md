---
name: Heritage Science Collective
colors:
  surface: '#fbfbe2'
  surface-dim: '#dbdcc3'
  surface-bright: '#fbfbe2'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f5f5dc'
  surface-container: '#efefd7'
  surface-container-high: '#eaead1'
  surface-container-highest: '#e4e4cc'
  on-surface: '#1b1d0e'
  on-surface-variant: '#504441'
  inverse-surface: '#303221'
  inverse-on-surface: '#f2f2d9'
  outline: '#827470'
  outline-variant: '#d4c3be'
  surface-tint: '#77574d'
  primary: '#442a22'
  on-primary: '#ffffff'
  primary-container: '#5d4037'
  on-primary-container: '#d4ada1'
  inverse-primary: '#e7bdb1'
  secondary: '#00639a'
  on-secondary: '#ffffff'
  secondary-container: '#51b2fe'
  on-secondary-container: '#00436a'
  tertiary: '#1e3700'
  on-tertiary: '#ffffff'
  tertiary-container: '#2e5000'
  on-tertiary-container: '#8ec64c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdbd0'
  primary-fixed-dim: '#e7bdb1'
  on-primary-fixed: '#2c160e'
  on-primary-fixed-variant: '#5d4037'
  secondary-fixed: '#cee5ff'
  secondary-fixed-dim: '#96ccff'
  on-secondary-fixed: '#001d32'
  on-secondary-fixed-variant: '#004a75'
  tertiary-fixed: '#b9f474'
  tertiary-fixed-dim: '#9ed75b'
  on-tertiary-fixed: '#0f2000'
  on-tertiary-fixed-variant: '#2e4f00'
  background: '#fbfbe2'
  on-background: '#1b1d0e'
  surface-variant: '#e4e4cc'
typography:
  display-lg:
    fontFamily: Montserrat
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: Montserrat
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  headline-sm:
    fontFamily: Montserrat
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.05em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 48px
  stack-sm: 12px
  stack-md: 24px
  stack-lg: 48px
---

## Brand & Style
The design system bridges traditional Sabahan culinary heritage with rigorous chemistry education. The brand personality is "The Modern Alchemist"—authoritative and academic, yet deeply rooted in cultural warmth and accessibility. It targets students and educators who value both scientific precision and indigenous knowledge.

The visual style is **Corporate Modern with Glassmorphism**. This approach uses a highly structured layout to ensure academic clarity, while employing translucent layers and soft background blurs to simulate the organic, fluid nature of sago starch and coastal environments. Backgrounds should feature subtle, low-opacity geometric motifs inspired by Sabah textile patterns (Linangkit) integrated with molecular honeycomb structures.

## Colors
The palette is derived from the raw ingredients of Ambuyat and Hinava.
- **Sago Beige (Neutral):** Acts as the primary canvas color, replacing harsh whites to provide a warmer, organic reading experience.
- **Earth Brown (Primary):** Used for typography, primary navigation, and structural elements to ground the design in stability.
- **Ocean Blue (Secondary):** Used for interactive elements, scientific diagrams, and "Discovery" actions.
- **Lime Green (Tertiary):** Reserved for success states, biological chemistry highlights, and progress indicators.

Utilize soft linear gradients between the Secondary and Tertiary colors to represent chemical reactions and "flow" within the interactive modules.

## Typography
The typographic system prioritizes legibility for complex scientific notation. **Montserrat** provides a confident, geometric presence for headlines, echoing the modernity of the platform. **Inter** is the workhorse for educational content, offering high readability in dense paragraphs. For chemical formulas, data tables, and molecular labels, **JetBrains Mono** is used to provide a technical, "lab-standard" feel that distinguishes data from prose.

## Layout & Spacing
The layout follows a **Fluid Grid** model with a maximum container width of 1280px to prevent excessive line lengths in educational articles. A 12-column system is used for desktop, collapsing to 4 columns for mobile. 

Spacing follows an 8px base unit. In interactive chemistry modules, use "stack-lg" (48px) to separate distinct conceptual blocks, while using "stack-sm" (12px) for related label-input pairs. Elements should feel airy to reduce cognitive load during learning; whitespace is treated as a functional tool for focus.

## Elevation & Depth
This design system utilizes **Glassmorphism** to create a sense of lightness and technical sophistication. 
- **Level 1 (Base):** Sago Beige background with subtle cultural pattern overlays.
- **Level 2 (Cards):** Translucent white surfaces (`rgba(255, 255, 255, 0.7)`) with a 12px backdrop-blur and a 1px solid white border at 20% opacity.
- **Level 3 (Modals/Popovers):** Increased backdrop-blur (24px) with a soft, Earth Brown tinted shadow (0px 8px 32px rgba(93, 64, 55, 0.1)).

Avoid heavy, dark shadows. Depth should be communicated through the stacking of blurred layers rather than traditional drop shadows.

## Shapes
A **Rounded** shape language (0.5rem / 8px) is applied to all interactive elements to maintain a student-friendly and approachable atmosphere. 
- **Cards and Containers:** Use `rounded-lg` (16px) to echo the soft, organic shapes of sago starch globules.
- **Action Items:** Buttons and input fields use the standard 8px radius.
- **Iconography:** Icons should feature rounded terminals and consistent stroke weights to match the Inter typeface.

## Components
- **Buttons:** Primary buttons use a solid Earth Brown fill with white Montserrat text. Secondary buttons use the Ocean Blue to Lime Green gradient for high-priority "Start Lesson" actions.
- **Learning Cards:** These utilize the Glassmorphism style with a top-border accent in Lime Green or Ocean Blue to categorize content (e.g., Organic vs. Inorganic).
- **Interactive Diagrams:** Use molecular structure patterns as background fills for container headers. Lines in diagrams should be 2px thick with rounded joints.
- **Input Fields:** Soft beige backgrounds with an Earth Brown bottom-border that transitions to an Ocean Blue 2px border on focus.
- **Progress Chips:** Small, pill-shaped indicators using the secondary color at 15% opacity with a 100% opacity text label for status tracking.
- **Cultural Accents:** Small, SVG-rendered Linangkit motifs used as decorative dividers between major lesson sections.