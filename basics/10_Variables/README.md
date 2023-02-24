CSS Variablen sind dafür da, um bestimmte Einstellungen an einem Punkt zu haben. Dazu zählen zum Beispiel Farbe oder Schriftgröße.

Anstatt überall `color: green;` zu machen, erlauben Variablen nur einmal grün zu definieren, was dann überall angewendet wird. Beispiel:
```css
:root {
    --globale-variable: green;
}
div {
    --lokale-variable: red;
    background-color: var(--globale-variable);
    color: var(--lokale-variable)
}
p {
    background-color: var(--globale-variable);
}
```
Im root-Element (:root oder *) kann man Variablen definieren. Diese können überall angewendet werden.
Jedoch kann man auch "lokale" Variablen machen, zum Beispiel im div-Selektor, dann kann diese Variable bei jedem div angewendet werden, egal ob es mit Klasse oder ID selektiert.