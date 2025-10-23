class Serie {
    id:number;
    name: string;
    channel: string;
    seasons: number;
  
    constructor(id: number, name: string, channel: string, seasons: number) {
      this.id =id;
      this.name =name;
      this.channel =channel;
      this.seasons=seasons;
    }
  }
  
  let series: Serie[] = [
    new Serie(1, "Breaking Bad", "AMC", 5),
    new Serie(2, "Stranger Things", "Netflix", 4),
    new Serie(3, "Game of Thrones", "HBO", 8),
    new Serie(4, "The Big Bang Theory", "CBS", 12),
    new Serie(5, "Sherlock", "BBC", 4)
  ];
  
  function mostrarTabla(): void {
    let cuerpo = document.getElementById("tablaSeries")!;
    let html = "";
    for (let s of series) {
      html += `
        <tr>
          <td>${s.id}</td>
          <td>${s.name}</td>
          <td>${s.channel}</td>
          <td>${s.seasons}</td>
        </tr>
      `;
    }
    cuerpo.innerHTML = html;
  }
  
  function calcularPromedio(): number {
    let total = 0;
    for (let s of series) {
      total += s.seasons;
    }
    return total / series.length;
  }
  
  function mostrarPromedio(): void {
    let p = document.getElementById("promedio")!;
    p.textContent = "promedio de temporadas: " + calcularPromedio().toFixed(2);
  }
  
mostrarTabla();
mostrarPromedio();