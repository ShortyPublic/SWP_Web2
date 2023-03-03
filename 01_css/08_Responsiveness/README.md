Responsiveness (Responsive Design) heißt, dass eine Webseite auf allen Geräten und Seitenverhältnissen/Auflösungen funktioniert, gut aussieht und die UX gut ist.

Dieses wird mit sogenannten @media-Queries gemacht. Diese CSS-"Selektoren" sind dafür da, unter einer bestimmten Kondition (wie zum Beispiel andere Display-Größe) CSS-Eigenschaften zu ändern.

Ein Beispiel dafür ware:
```css
div {
    background-color: red;
    height: 100px;
}

@media (min-width: 600px) {
    div {
        background-color: green;
    }
}
```

In diesem Beispiel, ist ein div immer rot, solang die Breite des Bildschirms weniger als 600 Pixel sind, sonst wird es grün. Wie man sehen kann, weise ich das `height`-Element nicht erneut zu, da ich nur eine Eigenschaft verändern muss, die anderen werden übernommen.
> Möglicher Fehler: Eine @media Query, muss immer unter dem eigentlichen Element im CSS-Dokument sein, da es sonst wieder überschrieben wird.