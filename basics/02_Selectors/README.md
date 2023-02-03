Es gibt mehrere CSS Selektoren die man verwenden kann.
[Mehr Selektoren, W3Schools](https://www.w3schools.com/css/css_selectors.asp)

Die wichtigsten dabei sind der Klassen-Selector (.), der ID-Selector (#) und der normale Object-Selector.

Beispiele für verschiedene einfache Selektoren
```css
/* Class Selector */
.enemy { /* Alle Objekte, die die Klasse "enemy" haben, werden rot. */
    color: red;
    /* Beispiel-Element: <h1 class="enemy">Der Text ist rot</h1>*/
}

/* ID Selector */
#boss { /* Jenes Objekt, welches die ID "boss" hat, hat die Textgröße 25px. */
    font-size: 25px;
    /* Beispiel-Element: <h1 id="boss">Ich bin der Boss!</h1> */
    /* !!! Eine ID kann es nur einmal pro Dokument geben. !!! */
}

/* Object Selector */
div { /* Alle div-Element der Webseite werden grün. */
    background-color: green;
    /* Beispiel-Element: <div>Ich bin grün!</div> */
}

/* Attribute Selector*/
div[active] { /* Alle div-Elemente, welche ein active-Attribut haben werden orange.*/
    color: orange;
    /* Beispiel-Element: <div active>Ich bin orange.</div> */
}

div[num="2"] { /* Alle div-Elemente, welche im active-Attribut eine 2 haben werden blau.*/
    color: blue;
    /* Beispiel-Element: <div num="2">Ich bin blau.</div> */
}
```