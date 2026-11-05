# Bitácora del Portafolio — James Goñe

**Última actualización:** 5 de noviembre de 2026
**Ruta del proyecto:** `C:\Users\Alumno\Documents\GitHub\Portafolio_JG.github.io`
**Estado general:** sitio construido y verificado. Falta confirmar datos y publicar.

---

## 1. Resumen del proyecto

Landing page estática para GitHub Pages con el perfil de **James Deyvi Goñe Lozano** (Game Developer, Programador C#, Game Designer & UI Designer).

- **Stack:** HTML5 semántico + CSS3 + JavaScript vanilla (sin frameworks ni CDN).
- **Diseño:** tema oscuro profesional, estética ingeniería/gaming, responsive mobile-first.
- **Secciones:** Inicio (hero), Habilidades, Proyectos (con filtros) y Contacto.
- **Brief de referencia:** `Agentes/Promts/Pront para el Portafolio.md`.

---

## 2. Decisiones tomadas

| Tema | Decisión | Motivo |
|---|---|---|
| CSS | CSS propio en `css/style.css` | El brief permitía `style.css` si no se usaba Tailwind. Da control total del diseño sin depender de un CDN. |
| Portadas | SVG placeholder tintado por proyecto con la variable `--pa` | El brief pedía un espacio para imagen/GIF; aún no hay capturas reales. |
| Estados | 4 completados + 2 en desarrollo | Solo RhythmPath decía "en desarrollo" en el brief; Duelo de Gremios se asumió en desarrollo. **Por confirmar.** |
| Upwork | Enlace genérico a `https://www.upwork.com/` | No se proporcionó la URL del perfil. **Por reemplazar.** |

---

## 3. Cronología de cambios

### 5 de noviembre de 2026 — Reconstrucción completa

1. **Lectura del brief** `Agentes/Promts/Pront para el Portafolio.md`.
2. **Limpieza del sitio anterior:** se eliminaron `index.html`, `README.md`, `MEDIA-PENDIENTE.md`, `css/`, `js/`, `img/` y `video/` del portafolio previo (Juan Neyra). Se conservaron `.git` y `.nojekyll`.
3. **Creación de la estructura nueva:**
   - `index.html`: header sticky, menú móvil, hero con tarjeta de código C# (`PlayerState.cs`), ticker de tecnologías, skills en 3 tarjetas + 3 principios, 6 proyectos con filtros, contacto y footer.
   - `css/style.css`: variables de color, tipografías, layout responsive, animaciones de reveal, `prefers-reduced-motion`.
   - `js/script.js`: menú móvil accesible, header con scroll, scrollspy, reveal con IntersectionObserver, filtros de proyectos y año dinámico.
   - `img/projects/placeholder.svg` e `img/favicon.svg`.
4. **Correcciones aplicadas:**
   - **Overflow horizontal del hero:** `min-width: 0` en `.hero__inner > *`, `.hero__panel` y `.codecard`; `max-width: 100%` en `.codecard` y `.code`.
   - **Scrollspy:** se cambió el cálculo por `getBoundingClientRect()` con un marcador al 28% del viewport. Ahora la sección activa cambia también al entrar por ancla (`#proyectos`, `#contacto`).
   - **Menú móvil:** fondo sólido `var(--bg)` en lugar de translúcido; se eliminó el `backdrop-filter` que dejaba ver el hero detrás.
   - **Limpieza:** se quitaron las clases sin regla CSS `hero__content` y `codecard__meta`.

---

## 4. Estado de los proyectos

| # | Proyecto | Rol | Estado actual | Enlace |
|---|---|---|---|---|
| 01 | The Angel of The Road | Game Designer & UI Designer | Completado | https://github.com/ChemsLGDesu/TheAngelOfTheRoad |
| 02 | Naval Warfare | Programador & Game Developer | Completado | https://github.com/Diego27SEN/NavalWarfare-PFINAL3CICLO-JDF |
| 03 | RhythmPath | Creador | En desarrollo (confirmado en el brief) | https://github.com/ChemsLGDesu/RhythmPath |
| 04 | Operación Éxodo | Contribuidor / Game Developer | Completado | https://github.com/Diego27SEN/OPERACIONEXODO |
| 05 | Duelo de Gremios | Creador | En desarrollo (asumido) | Código privado |
| 06 | Aventura Narrativa Histórica | Game Designer & UI Developer | Completado (asumido) | Código privado |

**Tecnologías de Duelo de Gremios según el brief:** Unity, UGS, Cloud Save, Matchmaker, UI Toolkit.
**Aventura Narrativa:** árboles de decisión con ScriptableObjects y UI Toolkit (Guerra del Pacífico).

---

## 5. Verificación realizada

- `node --check js/script.js` → **OK**.
- Validador Python (`validate_portfolio.py`):
  - Errores de anidado HTML: **ninguno**.
  - Tags sin cerrar: **ninguno**.
  - IDs duplicados: **ninguno**.
  - Referencias locales faltantes: **ninguna**.
  - Llaves CSS: **199 abre / 199 cierra**.
  - Filtros: `all`, `done`, `wip`.
  - Estados: **4 completados, 2 en desarrollo**.
- Servidor local: `/`, CSS, JS y SVG responden **HTTP 200**.
- Pruebas con Chrome DevTools Protocol:
  - Sin overflow horizontal: `scrollWidth == clientWidth` en **390px** y **1440px**.
  - Scrollspy correcto en Inicio, Habilidades, Proyectos y Contacto (scroll manual, anclas y final de página).
  - Menú móvil: `aria-expanded="true"`, panel visible y opaco, sin desborde.
  - Filtros: **6** en Todos, **4** en Completados, **2** en En desarrollo.

> Nota: `git` no está disponible en este entorno, así que no se hicieron commits ni push. La publicación queda para GitHub Desktop.

---

## 6. Archivos actuales

```text
Portafolio_JG.github.io/
├── .nojekyll
├── index.html
├── css/
│   └── style.css
├── js/
│   └── script.js
├── img/
│   ├── favicon.svg
│   └── projects/
│       └── placeholder.svg
└── Agentes/
    ├── Cerebro/
    │   └── Bitacora_Portafolio.md   ← este archivo
    └── Promts/
        └── Pront para el Portafolio.md
```

---

## 7. Pendientes / por confirmar

1. **URL real de Upwork** (reemplazar el enlace genérico).
2. **Confirmar estados:** Duelo de Gremios y Aventura Narrativa Histórica.
3. **Capturas reales** de los proyectos (hoy son placeholders SVG).
4. **Publicar en GitHub Pages** con GitHub Desktop y comprobar la URL final.
5. Opcional: revisar textos de cada proyecto para que coincidan exactamente con el portafolio deseado.

---

## 8. Cómo previsualizar

Servidor local (Python de Inkscape):

```powershell
& "C:\Program Files\Inkscape\bin\python.exe" -m http.server 8123 --bind 127.0.0.1 --directory "C:\Users\Alumno\Documents\GitHub\Portafolio_JG.github.io"
```

- **Link local:** http://127.0.0.1:8123/
- También funciona abriendo directamente `index.html` en el navegador.

Validar de nuevo:

```powershell
node --check js/script.js
& "C:\Program Files\Inkscape\bin\python.exe" "C:\Users\Alumno\AppData\Local\Temp\opencode\validate_portfolio.py"
```

---

## 9. Para la próxima sesión

1. Leer esta bitácora antes de tocar código.
2. Revisar la lista de pendientes de la sección 7.
3. Si se agregan capturas: guardarlas en `img/projects/` y actualizar los `<img>` de `index.html`.
4. Registrar aquí cada cambio nuevo con su fecha, para no perder el hilo.
