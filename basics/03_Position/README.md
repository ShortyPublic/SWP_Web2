CSS Positions sind dafür da, Elemente auf einer Seite in bestimmter Weise anzuordnen und anzuzeigen.
[Positionen, W3Schools](https://www.w3schools.com/css/css_positioning.asp)

Für das `position`-Attribut gibt es 5 gültige Werte:

`static` - Der Standard, wenn kein anderes explizit festgelegt wurde. Das ist die ganz normale Anordnung der Elemente.

`relative` - Relativ zum Parent (Vater) Element, aber immer noch im "HTML Flow", das heißt andere Elemente reagieren immer noch auf dieses und andersrum. Jede Position die in CSS festgelegt wird, als Beispiel `top: 15px`, geht vom Vater-Element-Top aus.

`fixed` - Eine fixe Position auf dem Viewport. Auch wenn gescrollt wird, ändert sich die Position nicht.

`absolute` - Relativ zum Parent (Vater) Element, aber nicht mehr im "HTML Flow", das heißt dieses Element wirkt nicht auf andere Elemente.

`sticky` - Sobald dieses Element beim scrollen erreicht wird, bleibt as am oberen Bildschirmrand kleben.