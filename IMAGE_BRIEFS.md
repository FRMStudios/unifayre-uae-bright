# Unifayre V2 — AI Image Briefs

Generation prompts for every cinematic image slot in the V2 design.

## Workflow

1. Pick your tool — **Midjourney v6**, **Nano Banana Pro** (Flux Pro), **Higgsfield**, **Ideogram**, etc.
2. Paste the prompt into the tool. Use the suggested aspect ratio.
3. Pick the best variation. Upscale to the minimum size noted.
4. Save the image as JPG/WebP at the **exact path** listed below.
5. `git add public/images/v2/... && git commit && git push` — Vercel rebuilds in ~90s.

## Brand DNA (apply to every prompt)

- **Mood:** P.F. Chang's-style cinematic premium B2B food photography
- **Backgrounds:** Dark slate, charred wood, black ceramic. **Never pure white.**
- **Lighting:** Golden top-light, deep shadows, shallow depth of field
- **Color palette:** Warm food tones (golden char, sauce sheen, herb green, chilli red, oil glisten) against deep navy/charcoal
- **Atmosphere:** Steam, smoke, oil drip, sauce ribbon, sizzle — motion always present
- **Composition rule:** Food fills 60–80% of frame; remaining space stays dark and rich
- **No people faces** unless specified — chef hands and arms are fine, faces avoided
- **No text overlays in the image** — all text added by the site

---

## 1. Heroes (7 images, 21:9 cinematic)

> Used by `<CinematicHero />` on each page. Min size: **2400×1029px** (21:9).

### 1.1 Home hero
**Path:** `public/images/v2/hero/home-hero.jpg`
**Used at:** `/` (Home)
**Aspect:** 21:9, min 2400×1029
**Mood:** Hero ingredient moment. Roti Canai mid-pull, layers separating, steam rising, golden light raking from top-left across dark wooden table. The bread is the light source.

> **Prompt:** Cinematic editorial food photography, hero shot of Roti Canai flatbread being pulled apart by hand, flaky golden layers separating mid-action, hot steam rising in soft curls, dark charred wooden surface with subtle smoke drift, dramatic golden top-light raking across the bread from upper-left, deep shadows, ultra-shallow depth of field, macro detail on flaky texture and oil sheen, warm amber and golden tones against deep navy and black background, restaurant-grade plating, premium B2B mood, shot on Hasselblad H6D, 80mm lens, f/2.8, photorealistic, ultra-detailed, no people faces visible, hand only at edge of frame --ar 21:9 --style raw --v 6

### 1.2 Vegetarian page hero
**Path:** `public/images/v2/hero/veg-hero.jpg`
**Used at:** `/vegetarian`
**Aspect:** 21:9, min 2400×1029
**Mood:** Chef pulling apart layered Malabar Paratha on dark wood, steam rising. Hand visible, face not.

> **Prompt:** Cinematic editorial food photography, chef hand pulling apart layered Malabar Paratha to reveal flaky golden inner layers, fresh coriander and garlic flakes scattered, steam rising in soft curls, dark wooden cutting board surface, copper bowl of curry blurred in background, dramatic golden top-light, deep shadows, shallow depth of field, warm amber tones, premium B2B restaurant-grade mood, shot on Hasselblad, 80mm lens, f/2.8, photorealistic, ultra-detailed, hand only no face --ar 21:9 --style raw --v 6

### 1.3 Non-Vegetarian page hero
**Path:** `public/images/v2/hero/nonveg-hero.jpg`
**Used at:** `/non-vegetarian`
**Aspect:** 21:9, min 2400×1029
**Mood:** Tandoori chicken kebabs charring on glowing grill grate, ember glow underneath, smoke rising heavily.

> **Prompt:** Cinematic editorial food photography, Tandoori chicken kebabs on a charred cast-iron grill grate, deep ember glow visible beneath, thick smoke rising, char marks and crisp tandoor-red marinade glistening with oil, fresh herb garnish at edge, dark backdrop with sparks of orange ember light, dramatic side-lighting from the embers, deep shadows, shallow depth of field, premium halal-restaurant mood, shot on Hasselblad, 85mm lens, f/2.0, photorealistic, ultra-detailed, no people --ar 21:9 --style raw --v 6

### 1.4 Why Unifayre hero
**Path:** `public/images/v2/hero/why-hero.jpg`
**Used at:** `/why-unifayre`
**Aspect:** 21:9, min 2400×1029
**Mood:** Modern industrial frozen food plant exterior at golden hour, dramatic warm light, metallic facade, hint of palm trees suggesting India location.

> **Prompt:** Cinematic architectural photography, modern industrial frozen food manufacturing facility exterior at golden hour, sleek metallic facade with subtle Unifayre signage area (left blank), dramatic warm sunset light raking across the building, long shadows, parked refrigerated trucks at loading dock, hint of palm trees, deep amber and navy sky, premium corporate mood, shot on Sony FX9, 35mm lens, f/4, photorealistic, ultra-detailed, no people, no readable text --ar 21:9 --style raw --v 6

### 1.5 Manufacturing hero
**Path:** `public/images/v2/hero/manufacturing-hero.jpg`
**Used at:** `/manufacturing`
**Aspect:** 21:9, min 2400×1029
**Mood:** Wide interior shot of a clean modern food production line in motion. Stainless steel everywhere, soft overhead lighting, no workers in faces.

> **Prompt:** Cinematic industrial photography, wide interior shot of a clean modern frozen food production line in motion, stainless steel conveyor belts gleaming, golden parathas progressing along the line, gloved hands at edges of frame, hygienic white uniforms blurred in background, soft overhead daylight panel lighting, deep shadows in corners, hint of frozen mist, premium ISO-22000 facility mood, shot on Sony A7S, 24mm lens, f/4, photorealistic, ultra-detailed, no faces visible --ar 21:9 --style raw --v 6

### 1.6 For UAE hero
**Path:** `public/images/v2/hero/uae-hero.jpg`
**Used at:** `/for-uae`
**Aspect:** 21:9, min 2400×1029
**Mood:** Split or layered composition — Dubai/Abu Dhabi modern skyline silhouette at dusk on one half, premium frozen food product (Roti Canai or Tandoori Kebab) cinematically lit on the other. OR a single composite: kitchen pass overlooking a Gulf city skyline through floor-to-ceiling glass.

> **Prompt:** Cinematic editorial photography, modern restaurant kitchen pass with floor-to-ceiling glass overlooking Dubai or Abu Dhabi skyline at dusk, golden hour skyline visible through glass with warm amber and deep navy tones, foreground stainless steel pass with a single plate of golden Roti Canai with curry, dramatic mood lighting, shallow depth of field on the food, soft skyline blur, premium hospitality mood, shot on Sony A7R, 35mm lens, f/2.8, photorealistic, ultra-detailed, no people, no readable signage --ar 21:9 --style raw --v 6

### 1.7 Contact hero
**Path:** `public/images/v2/hero/contact-hero.jpg`
**Used at:** `/contact`
**Aspect:** 21:9, min 2400×1029
**Mood:** Two hands meeting in a confident handshake over a wooden plant table or boardroom desk, warm side-light, suit cuff and chef-jacket cuff suggesting B2B partnership.

> **Prompt:** Cinematic corporate B2B photography, close-up of two hands meeting in a confident handshake over a polished dark wood boardroom desk, one cuff is a tailored navy suit sleeve, the other a crisp chef whites cuff, warm dramatic side-light from window, soft bokeh of plant equipment in deep background, premium partnership mood, shallow depth of field on the hands, shot on Sony A7R, 50mm lens, f/2, photorealistic, ultra-detailed, no faces, no rings or watches --ar 21:9 --style raw --v 6

---

## 2. Category Banners (6 images, 21:9 wide)

> Used by `<CategorySection />` on `/vegetarian` and `/non-vegetarian`. Min size: **2400×1080px**.

### 2.1 Flatbreads & Tortillas banner
**Path:** `public/images/v2/categories/flatbreads-banner.jpg`
**Mood:** Macro close-up of Roti Canai or Malabar Paratha flake structure, oil droplets glistening.

> **Prompt:** Cinematic macro food photography, extreme close-up of layered Malabar Paratha flake structure, golden flaky layers with butter sheen and oil droplets glistening, dark wooden surface, top-down 45-degree angle, dramatic golden raking light, ultra-shallow depth of field, warm amber tones, premium B2B mood, shot on Hasselblad, 100mm macro lens, f/2.8, photorealistic, ultra-detailed --ar 21:9 --style raw --v 6

### 2.2 Frozen-to-Fry Snacks (Veg) banner
**Path:** `public/images/v2/categories/snacks-veg-banner.jpg`
**Mood:** Falafel or samosa mid-fry, oil bubbles rising, golden crust forming, dark backdrop.

> **Prompt:** Cinematic action food photography, falafel balls and Punjabi samosas mid-fry in a black cast-iron pan, golden bubbles rising vigorously through hot oil, crisp golden-brown crust forming, dark slate kitchen counter visible at edges, dramatic top-light, motion captured, deep shadows, premium fast-casual restaurant mood, shot on Sony A7S, 85mm lens, f/2.5, photorealistic, ultra-detailed --ar 21:9 --style raw --v 6

### 2.3 Frozen-to-Fry Snacks (Non-Veg) banner
**Path:** `public/images/v2/categories/snacks-nonveg-banner.jpg`
**Mood:** Shami Kebab patties mid-fry, golden crust, oil sheen, dark moody pan.

> **Prompt:** Cinematic action food photography, Shami Kebab patties mid-fry in a black cast-iron pan, deep golden-brown crust with crackled texture, glistening oil sheen, fresh coriander leaf at edge, dark slate kitchen counter, dramatic top-light, deep shadows, premium halal grill mood, shot on Sony A7S, 85mm lens, f/2.5, photorealistic, ultra-detailed --ar 21:9 --style raw --v 6

### 2.4 Retort Rice banner
**Path:** `public/images/v2/categories/rice-banner.jpg`
**Mood:** Hyderabadi biryani in a clay handi pot, lid slightly lifted, steam rising heavily, saffron strands and fried onions visible on top.

> **Prompt:** Cinematic editorial food photography, traditional Hyderabadi biryani in a hand-thrown terracotta clay handi pot, lid slightly lifted to reveal saffron-stained basmati rice with crispy fried onions and herb garnish, thick steam rising in dramatic curls, dark wooden serving tray, mint sprigs at edge, golden top-light, deep shadows, warm amber and red tones, premium fine-dine mood, shot on Hasselblad, 80mm lens, f/2.8, photorealistic, ultra-detailed --ar 21:9 --style raw --v 6

### 2.5 Base Gravies & Pastes banner
**Path:** `public/images/v2/categories/gravies-banner.jpg`
**Mood:** Makhani gravy in a copper pot, mid-bubble, sauce ribbon dripping from a wooden spoon, butter swirl on top.

> **Prompt:** Cinematic editorial food photography, butter chicken Makhani gravy in a polished copper pot, mid-bubble with thick sauce ribbon dripping from a wooden ladle, butter swirl and cream marbling on the surface, fresh kasuri methi flakes scattered on top, dark slate kitchen surface, dramatic side-light catching the steam, deep amber and red tones, premium restaurant mood, shot on Hasselblad, 80mm lens, f/2.5, photorealistic, ultra-detailed --ar 21:9 --style raw --v 6

### 2.6 Chicken & Meat banner
**Path:** `public/images/v2/categories/chicken-banner.jpg`
**Mood:** Sliced grilled kebab on dark slate, char marks visible, herb garnish, top-down macro.

> **Prompt:** Cinematic editorial food photography, top-down macro of sliced grilled chicken kebab on a dark charcoal slate plate, deep char marks visible on each slice, glistening oil sheen, fresh coriander and red onion ringlets garnish, lemon wedge at edge, dramatic golden top-light, deep shadows, warm tandoor-red and amber tones, premium halal grill mood, shot on Hasselblad, 100mm lens, f/2.8, photorealistic, ultra-detailed --ar 21:9 --style raw --v 6

---

## 3. Lifestyle Strip (7 images, 16:9)

> Used by `<LifestyleStrip />` between category sections. Min size: **1600×900px**.

### 3.1 QSR menu plate
**Path:** `public/images/v2/lifestyle/qsr-plate.jpg`
> **Prompt:** Cinematic editorial food photography, QSR-style serving tray with paratha wrap, fries and dipping sauce, branded paper liner blank, dark wooden tray, golden top-light, shallow DOF, premium fast-casual mood, shot on Sony A7R, 50mm, f/2, photorealistic --ar 16:9 --style raw --v 6

### 3.2 Cloud kitchen plating
**Path:** `public/images/v2/lifestyle/cloud-kitchen.jpg`
> **Prompt:** Cinematic action photography, cloud kitchen pass with stainless steel counter, multiple delivery containers being filled with curry and rice by gloved hands, motion blur on hands, warm overhead light, dark industrial backdrop, premium operational mood, shot on Sony FX9, 35mm, f/2.8, photorealistic, no faces --ar 16:9 --style raw --v 6

### 3.3 5-star buffet line
**Path:** `public/images/v2/lifestyle/hotel-buffet.jpg`
> **Prompt:** Cinematic hospitality photography, luxury 5-star hotel buffet chafing dish line, polished silver chafing dishes filled with biryani, paneer, kebabs, soft warm hotel lighting, marble counter, ambient bokeh of chandeliers, premium banquet mood, shot on Sony A7R, 35mm, f/2.8, photorealistic, no people --ar 16:9 --style raw --v 6

### 3.4 Chef hand plating
**Path:** `public/images/v2/lifestyle/chef-plating.jpg`
> **Prompt:** Cinematic action food photography, chef's hand placing a sauce dot on a plated dish with a squeeze bottle, mid-action, dark slate plate, microherbs garnish, motion captured, dramatic side light, premium fine-dine mood, shot on Hasselblad, 80mm, f/2.5, photorealistic, hand only --ar 16:9 --style raw --v 6

### 3.5 Pan sizzle
**Path:** `public/images/v2/lifestyle/sizzle.jpg`
> **Prompt:** Cinematic action food photography, hot black skillet sizzling with butter, garlic and fresh herbs, oil splatter mid-air, dramatic golden side-light, dark kitchen backdrop, motion captured, premium chef's table mood, shot on Sony A7S, 85mm, f/2, photorealistic --ar 16:9 --style raw --v 6

### 3.6 Grill smoke
**Path:** `public/images/v2/lifestyle/grill-smoke.jpg`
> **Prompt:** Cinematic atmospheric photography, charcoal grill with thick aromatic smoke rising, glowing red embers visible underneath, dark backdrop, dramatic ember glow lighting, premium grill mood, shot on Sony A7S, 50mm, f/2, photorealistic, no food yet — just the empty grill atmosphere --ar 16:9 --style raw --v 6

### 3.7 Fine-dine plating
**Path:** `public/images/v2/lifestyle/fine-dine.jpg`
> **Prompt:** Cinematic editorial food photography, fine-dine plated dish on a black ceramic plate, modern minimalist composition with paratha quenelle, sauce dot trio, microherbs, dark linen tablecloth, dramatic single overhead spotlight, deep shadows, premium tasting menu mood, shot on Hasselblad, 100mm, f/4, photorealistic --ar 16:9 --style raw --v 6

---

## 4. Plant & Process (8 images, 16:9)

> Used in Why Unifayre, Manufacturing, and inline process strips. Min size: **1600×900px**.

### 4.1 Plant exterior golden hour
**Path:** `public/images/v2/plant/exterior-golden.jpg`
> **Prompt:** Architectural photography, modern industrial frozen food manufacturing facility exterior at golden hour, sleek white-and-grey metallic facade, large logo placement area left blank, dramatic warm sunset side-light, long shadows, parked white refrigerated trucks at loading dock, hint of green palm trees, deep amber sky transitioning to navy, shot on Sony A7R, 35mm, f/4, photorealistic, no people, no readable signage --ar 16:9 --style raw --v 6

### 4.2 Flatbread line
**Path:** `public/images/v2/plant/line-flatbreads.jpg`
> **Prompt:** Industrial photography, automated flatbread production line interior, golden Malabar Parathas progressing along stainless steel conveyor belt, soft overhead daylight panels, gloved hands at edges, deep shadows in corners, hygienic white-tile ambient, premium ISO-22000 facility, shot on Sony FX9, 35mm, f/4, photorealistic, no faces --ar 16:9 --style raw --v 6

### 4.3 Meat line
**Path:** `public/images/v2/plant/line-meat.jpg`
> **Prompt:** Industrial photography, halal-certified meat processing line interior, stainless steel automated dicing and patty-forming equipment, gloved hands and white aprons at edges, soft overhead lighting, deep shadows, hygienic mood, premium HACCP facility, shot on Sony FX9, 35mm, f/4, photorealistic, no faces, no visible meat product (focus on equipment) --ar 16:9 --style raw --v 6

### 4.4 R&D lab / test kitchen
**Path:** `public/images/v2/plant/rd-lab.jpg`
> **Prompt:** Industrial photography, modern food R&D test kitchen with stainless steel counters, copper pots, recipe scale, lab beakers with sauces, chef whites and clipboard at edge, dramatic warm side-light, premium science-meets-cuisine mood, shot on Sony A7R, 35mm, f/2.8, photorealistic, no faces --ar 16:9 --style raw --v 6

### 4.5 QA inspection
**Path:** `public/images/v2/plant/qa-inspection.jpg`
> **Prompt:** Industrial photography, food quality control inspection station, gloved hands holding a digital weighing scale and digital thermometer over a tray of frozen samples, white lab coat sleeves visible, soft daylight panel lighting, premium FSSC-22000 mood, shot on Sony A7R, 50mm, f/2.8, photorealistic, no faces --ar 16:9 --style raw --v 6

### 4.6 Spiral freezer
**Path:** `public/images/v2/plant/spiral-freezer.jpg`
> **Prompt:** Industrial photography, large stainless steel spiral freezer interior or close-up exterior with frosty mist drifting from the entrance, products visible on the conveyor entering the freezer, deep blue-cyan cold tones, dramatic backlight from inside the freezer, premium cold-chain mood, shot on Sony FX9, 24mm, f/4, photorealistic, no people --ar 16:9 --style raw --v 6

### 4.7 Packaging line
**Path:** `public/images/v2/plant/packaging-line.jpg`
> **Prompt:** Industrial photography, automated packaging line, vacuum-sealed branded pouches of frozen parathas progressing along conveyor, gloved hands at edges, soft overhead lighting, premium retail-ready mood, shot on Sony FX9, 35mm, f/4, photorealistic, no faces, no readable brand text --ar 16:9 --style raw --v 6

### 4.8 Dispatch dock
**Path:** `public/images/v2/plant/dispatch-dock.jpg`
> **Prompt:** Industrial photography, refrigerated truck loading dock at golden hour, white refrigerated truck reverse-parked at the dock with its rear doors open showing frozen pallet stacks, blue-cyan cold mist drifting from the truck interior, warm sunset light raking across the loading bay, premium logistics mood, shot on Sony A7R, 35mm, f/4, photorealistic, no people --ar 16:9 --style raw --v 6

---

## 5. Decorative Accents (3 SVGs)

These are simple SVG ornaments. Generate or design these manually rather than via AI.

- `public/images/v2/accents/gold-border-top.svg` — thin ornate gold filigree, 1px stroke, ~1200×40px, filigree-art-deco style
- `public/images/v2/accents/gold-border-bottom.svg` — mirror of above
- `public/images/v2/accents/gold-divider.svg` — central gold diamond with hairlines extending outward

If you want to skip these, the existing `.gold-line` CSS utility I added to globals.css is a reasonable substitute.

---

## Tips for batch generation

- **Batch by category** — do all 7 hero images in one session so the lighting/mood feels consistent across pages.
- **Pick a "north star" first** — generate the home hero, lock its mood, then prompt every other image to "match the lighting and shadow style of the home hero."
- **Re-roll cheap, upscale expensive** — generate variants liberally, only upscale the keeper.
- **Format & compression:** save as JPG at 85% quality OR WebP at 80%. Hero images should be ≤500KB after compression. Use [Squoosh](https://squoosh.app) or `cwebp` if size is too high.

## Once images are placed

Tell me "images are in" and I'll wire the codebase to use the v2 paths (currently the pages still point to existing product photos as placeholders).
