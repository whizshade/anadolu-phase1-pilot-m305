// Anadolu Phase 1 Pilot: M3-05 Niyazi Bey Sahaflar Arka Oda - v3
// Target: Foundry VTT v12 only. Run as GM.
// This macro creates a world Scene first. Export to compendium only after disposable-world validation.

(async () => {
  const MODULE_ID = "anadolu-phase1-pilot-m305";
  const SCENE_NAME = "M3-05 Niyazi Bey Sahaflar Arka Oda";
  const JOURNAL_NAME = "M3-05 GM Notes - Niyazi Bey Sahaflar Arka Oda";
  const IMG = `modules/${MODULE_ID}/assets/maps/m305_v2_layout_1000x1200.webp`;

  if (!game.user?.isGM) {
    ui.notifications.error("M3-05 import must be run by a GM.");
    return;
  }

  const walls = [
  {
    "id": "W-N",
    "label": "North wall",
    "c": [
      55,
      55,
      945,
      55
    ],
    "move": 1,
    "sight": 1,
    "light": 1,
    "sound": 1,
    "door": 0,
    "ds": 0,
    "kind": "outer"
  },
  {
    "id": "W-E",
    "label": "East wall",
    "c": [
      945,
      55,
      945,
      1160
    ],
    "move": 1,
    "sight": 1,
    "light": 1,
    "sound": 1,
    "door": 0,
    "ds": 0,
    "kind": "outer"
  },
  {
    "id": "W-S-L",
    "label": "South wall left of secret door",
    "c": [
      55,
      1160,
      450,
      1160
    ],
    "move": 1,
    "sight": 1,
    "light": 1,
    "sound": 1,
    "door": 0,
    "ds": 0,
    "kind": "outer"
  },
  {
    "id": "SD-S",
    "label": "South concealed secret door",
    "c": [
      450,
      1160,
      550,
      1160
    ],
    "move": 1,
    "sight": 1,
    "light": 1,
    "sound": 1,
    "door": 2,
    "ds": 0,
    "kind": "secret-door"
  },
  {
    "id": "W-S-R",
    "label": "South wall right of secret door",
    "c": [
      550,
      1160,
      945,
      1160
    ],
    "move": 1,
    "sight": 1,
    "light": 1,
    "sound": 1,
    "door": 0,
    "ds": 0,
    "kind": "outer"
  },
  {
    "id": "W-W",
    "label": "West wall",
    "c": [
      55,
      1160,
      55,
      55
    ],
    "move": 1,
    "sight": 1,
    "light": 1,
    "sound": 1,
    "door": 0,
    "ds": 0,
    "kind": "outer"
  },
  {
    "id": "T-PRESS-N",
    "label": "Printing press / matbaa half-cover terrain north",
    "c": [
      150,
      145,
      370,
      145
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-PRESS-E",
    "label": "Printing press / matbaa half-cover terrain east",
    "c": [
      370,
      145,
      370,
      405
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-PRESS-S",
    "label": "Printing press / matbaa half-cover terrain south",
    "c": [
      370,
      405,
      150,
      405
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-PRESS-W",
    "label": "Printing press / matbaa half-cover terrain west",
    "c": [
      150,
      405,
      150,
      145
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-IRON-N",
    "label": "Locked iron cabinet half-cover terrain north",
    "c": [
      800,
      425,
      930,
      425
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-IRON-E",
    "label": "Locked iron cabinet half-cover terrain east",
    "c": [
      930,
      425,
      930,
      675
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-IRON-S",
    "label": "Locked iron cabinet half-cover terrain south",
    "c": [
      930,
      675,
      800,
      675
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-IRON-W",
    "label": "Locked iron cabinet half-cover terrain west",
    "c": [
      800,
      675,
      800,
      425
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-NDESK-N",
    "label": "North-east work table half-cover terrain north",
    "c": [
      510,
      130,
      780,
      130
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-NDESK-E",
    "label": "North-east work table half-cover terrain east",
    "c": [
      780,
      130,
      780,
      310
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-NDESK-S",
    "label": "North-east work table half-cover terrain south",
    "c": [
      780,
      310,
      510,
      310
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-NDESK-W",
    "label": "North-east work table half-cover terrain west",
    "c": [
      510,
      310,
      510,
      130
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-CDESK-N",
    "label": "Central work desk half-cover terrain north",
    "c": [
      360,
      570,
      680,
      570
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-CDESK-E",
    "label": "Central work desk half-cover terrain east",
    "c": [
      680,
      570,
      680,
      940
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-CDESK-S",
    "label": "Central work desk half-cover terrain south",
    "c": [
      680,
      940,
      360,
      940
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  },
  {
    "id": "T-CDESK-W",
    "label": "Central work desk half-cover terrain west",
    "c": [
      360,
      940,
      360,
      570
    ],
    "move": 0,
    "sight": 1,
    "light": 1,
    "sound": 0,
    "door": 0,
    "ds": 0,
    "kind": "terrain"
  }
];
  const lights = [
  {
    "id": "L1",
    "label": "Center oil lamp / worktable lamp",
    "x": 500,
    "y": 765,
    "config": {
      "dim": 220,
      "bright": 70,
      "color": "#f2b65e",
      "alpha": 0.42,
      "animation": {
        "type": "none",
        "speed": 1,
        "intensity": 1
      }
    }
  },
  {
    "id": "L2",
    "label": "North work desk oil lamp",
    "x": 690,
    "y": 210,
    "config": {
      "dim": 180,
      "bright": 55,
      "color": "#f2c06b",
      "alpha": 0.32,
      "animation": {
        "type": "none",
        "speed": 1,
        "intensity": 1
      }
    }
  }
];
  const pins = [
  {
    "id": "PIN-A",
    "label": "Matbaa / baskı tezgâhı",
    "x": 255,
    "y": 250,
    "text": "Küçük el matbaası. Forgery prep için ana üretim aracı. Tall object; blocks movement and sight. Corrected terrain wall rectangle ekli."
  },
  {
    "id": "PIN-B",
    "label": "Kilitli demir dolap",
    "x": 835,
    "y": 525,
    "text": "Kilitli demir dolap. Allied seals, templates ve kritik belgeler. Pick DC 17 / Break DC 18. Tall object terrain wall ekli."
  },
  {
    "id": "PIN-C",
    "label": "Çalışma masası",
    "x": 505,
    "y": 810,
    "text": "Mühür, mürekkep, kâğıt ve notlar. Investigation ile ipuçları bulunabilir. Tall object terrain wall ekli."
  },
  {
    "id": "PIN-D",
    "label": "Kuzey evrak masası",
    "x": 650,
    "y": 285,
    "text": "Ek belge, çalışma notu ve kâğıt stoğu. Düşük değerli ama sahne bilgisini destekler. L2 ile üst üste binmemesi için pin kaydırıldı."
  },
  {
    "id": "PIN-E",
    "label": "Gizli kapı / Güney",
    "x": 500,
    "y": 1130,
    "text": "Güney duvarında gizli kapı. Perception DC 16, Investigation DC 14."
  }
];

  function wallDoc(w) {
    return {
      c: w.c,
      move: w.move ?? 1,
      sight: w.sight ?? 1,
      light: w.light ?? 1,
      sound: w.sound ?? 1,
      dir: 0,
      door: w.door ?? 0,
      ds: w.ds ?? 0,
      flags: { [MODULE_ID]: { id: w.id, label: w.label, kind: w.kind ?? "wall" } }
    };
  }

  function lightDoc(l) {
    return {
      x: l.x,
      y: l.y,
      rotation: 0,
      config: {
        dim: l.config.dim,
        bright: l.config.bright,
        color: l.config.color,
        alpha: l.config.alpha,
        animation: l.config.animation ?? { type: "none", speed: 1, intensity: 1 },
        shadows: 0.5
      },
      flags: { [MODULE_ID]: { id: l.id, label: l.label } }
    };
  }

  try {
    const oldScene = game.scenes.getName(SCENE_NAME);
    if (oldScene) await oldScene.delete();

    const oldJournal = game.journal.getName(JOURNAL_NAME);
    if (oldJournal) await oldJournal.delete();

    const sceneData = {
      name: SCENE_NAME,
      img: IMG,
      width: 1000,
      height: 1200,
      padding: 0,
      tokenVision: true,
      globalLight: false,
      darkness: 0.7,
      grid: { type: CONST.GRID_TYPES.SQUARE, size: 100, distance: 5, units: "ft" },
      navigation: true,
      active: false,
      flags: { [MODULE_ID]: { mapId: "m305", version: "v3", targetFoundry: "v12" } }
    };

    const scene = await Scene.create(sceneData);
    await scene.createEmbeddedDocuments("Wall", walls.map(wallDoc));
    await scene.createEmbeddedDocuments("AmbientLight", lights.map(lightDoc));

    const journal = await JournalEntry.create({
      name: JOURNAL_NAME,
      pages: pins.map(p => ({
        name: p.label,
        type: "text",
        text: { format: 1, content: `<p>${p.text}</p>` },
        ownership: { default: 0 }
      })),
      ownership: { default: 0, [game.user.id]: 3 },
      flags: { [MODULE_ID]: { mapId: "m305", version: "v3" } }
    });

    try {
      const pages = journal.pages.contents;
      const notes = pins.map((p, idx) => ({
        x: p.x,
        y: p.y,
        entryId: journal.id,
        pageId: pages[idx]?.id,
        text: p.label,
        icon: "icons/svg/book.svg",
        texture: { src: "icons/svg/book.svg", tint: "#2ca25f" },
        flags: { [MODULE_ID]: { id: p.id, label: p.label, gmOnly: true } }
      }));
      await scene.createEmbeddedDocuments("Note", notes);
    } catch (err) {
      console.warn("M3-05 note pin creation failed; journal was created successfully.", err);
    }

    ui.notifications.info("M3-05 v2 pilot scene created. Validate walls/lights/pins in a disposable world before exporting to compendium.");
    await scene.view();
  } catch (err) {
    console.error("M3-05 v2 import failed.", err);
    ui.notifications.error(`M3-05 v2 import failed: ${err.message}`);
  }
})();
