# Morse Rhythm

**Practicá código Morse como si fuera ritmo.** Morse Rhythm convierte letras y palabras en código Morse, lo traduce a valores numéricos y lo transforma en un patrón rítmico que podés escuchar y seguir con un metrónomo.

PWA offline, sin frameworks ni dependencias: HTML, CSS y JavaScript vanilla, con Web Audio API.

![Captura de Morse Rhythm](docs/screenshot.png)

## Cómo funciona

```text
palabra → código Morse → valores numéricos → suma de valores → duración / patrón rítmico
```

Cada símbolo tiene un valor configurable, que equivale a una cantidad de subdivisiones (ticks):

| Símbolo | Valor por defecto |
| ------- | :---------------: |
| raya `—`   | 4 |
| punto `·`  | 3 |
| espacio    | 2 |

Ejemplo: la letra **A** (`·—`) se convierte en `3 4` más un espacio `2`, es decir `342`, que dura **9 ticks**. La suma de los dígitos de una palabra define cuánto dura dentro de la grilla rítmica.

## Características

- **Dos modos de práctica**
  - *Letra → Morse*: ves la palabra y adivinás su Morse y sus dígitos.
  - *Morse → Letra*: ves el Morse y adivinás la palabra.
- **Manual o Automático**
  - *Manual*: generás cada palabra con el botón **Generar**.
  - *Automático*: las palabras se encadenan solas al ritmo del BPM elegido, y ves la siguiente palabra antes de que llegue.
- **Fuente de palabras**: español, inglés o aleatorio, de 3 a 10 letras.
- **Palabra fija** (modo Automático): practicá una palabra concreta o fijá la actual con un toque.
- **Codificación editable**: cambiá los valores de raya, punto y espacio (1–9) con las flechas de cada campo, o subí y bajá los tres a la vez con las flechas globales.
- **Ritmo**: de 30 a 240 BPM, con figuras rítmicas negra, corchea, semicorchea y tresillos, y un contador de compás que señala los tresillos.
- **Tres metrónomos independientes**, cada uno con tono y volumen propios:

  | Metrónomo | Qué marca |
  | --------- | --------- |
  | Principal | El pulso (800 Hz por defecto) |
  | Subdivisión | Cada subdivisión de la figura rítmica (600 Hz por defecto) |
  | Morse | El inicio de cada dígito de la palabra: puntos, rayas y espacios (1000 Hz por defecto) |

- **Mantener oculto**: escondé el Morse y los dígitos para practicar de memoria y revelalos cuando quieras.
- **Barra de progreso** sincronizada con la duración real de cada palabra.
- **Funciona sin conexión** y se puede instalar como app.

## Uso rápido

1. Elegí el modo (*Letra → Morse* o *Morse → Letra*) y si querés generar de forma *Manual* o *Automático*.
2. Elegí el idioma y la cantidad de letras.
3. En Automático, ajustá el BPM y la figura rítmica, y activá los metrónomos que quieras escuchar.
4. Seguí el patrón: cada dígito marca cuántos ticks dura un símbolo.

El audio se activa solo después de una acción tuya (por ejemplo, encender un metrónomo), como exigen los navegadores.

## Instalación como app (PWA)

Abrí la página en tu navegador y elegí **Instalar app** o **Agregar a pantalla de inicio**. Una vez cargada, funciona sin conexión.

## Ejecutar en local

No hace falta compilar nada. Para que el Service Worker funcione, servilo con cualquier servidor estático:

```bash
python3 -m http.server 8000
```

y abrí `http://localhost:8000`.

## Estructura del proyecto

```text
index.html      Interfaz
style.css       Estilos
app.js          Lógica: Morse, generación de palabras, scheduler rítmico y audio
manifest.json   Configuración de la PWA
sw.js           Service Worker: caché y modo offline
icons/          Íconos de la PWA
docs/           Recursos del README
```

## Tecnologías

- HTML, CSS y JavaScript vanilla
- Web Audio API
- PWA: Web App Manifest y Service Worker

## Notas técnicas

- El scheduler comprueba el tiempo cada ~20 ms, pero todos los eventos (pulsos, subdivisiones y dígitos Morse) se calculan contra `performance.now()` y un origen común, por lo que los tres metrónomos quedan alineados en la misma grilla.
- Los valores de raya, punto y espacio son de un dígito (1–9), porque la duración se calcula sumando dígito a dígito.