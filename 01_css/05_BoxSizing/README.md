[BoxSizing](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing) gibt an, wie die Höhe und die Breite eines Elements berechnet werden.

Es gibt 2 verschiedene Optionen:
```css
.class {
    box-sizing: border-box;
    box-sizing: content-box;
}
```

`border-box` - Der gesetze Höhen- oder Breitenwert wird auch den Rahmen (border) oder Padding berücksichtigen. Das heißt, bei `height: 100px;` zählen border, padding und der Inhalt.

`content-box` (Standard) - Nur der Inhalt des Elements zählt zu dem gesetzten Höhen- oder Breitenwert, ohne Rahmen (border) oder Padding. Das heißt, bei `height: 100px;` zählt nur der Inhalt dazu. 