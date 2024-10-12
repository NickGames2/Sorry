function dedicatePoem() {
    const nameInput = document.getElementById('nameInput').value;
    const poemSection = document.getElementById('poemSection');
    const personName = document.getElementById('personName');
    const poemText = document.getElementById('poemText');

    if (nameInput.trim() !== "") {
        personName.textContent = nameInput;
        poemText.innerHTML = `
          Te fallé en el momento más frágil,
          cuando tu alma era cristal en mis manos,
          y sin cuidado,sin razon ni sentido,
          deje caer todo lo que eramos.
          
          Hoy el eco de tu tristeza retumba en mis noches,
          y aunque el tiempo no borre el dolor que cause,
          quiero pedrite perdon desde lo mas profundo,
          por las heridas que deje.

          No supe ver la belleza de tu amor,
          tan puro,tan lleno de luz y ternura,
          y ahora entiendo,en medio de mi oscuridad,
          que tu cariño era mi mejor cura.
          
          Si mis palabras pudieran sanar lo roto,
          las esparciria con suavidad sobre tu dolor,
          pero se que hay cosas que ni el tiempo ni los versos
          pueden restaurar con su calor.

          Solo me queda el deseo sincero,
          de que encuentres en tu andar el amor que mereces,
          y que,aunque no este junto a ti,
          recuerdes que siempre te llevare en mis adentros.
        `;

        poemSection.style.display = 'block';
    } else {
        alert('Porfavor Ingresa Un Nombre');
    }
}
