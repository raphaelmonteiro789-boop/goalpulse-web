type TimeGrupo = {
  nome: string;
  bandeira: string;
  j: number;
  v: number;
  e: number;
  d: number;
  sg: number;
  pts: number;
};

type GrupoType = {
  id: string;
  times: TimeGrupo[];
};

const grupos: GrupoType[] = [
  {
    id: 'A',
    times: [
      { nome: 'Brasil',    bandeira: '🇧🇷', j: 2, v: 2, e: 0, d: 0, sg: 4,  pts: 6 },
      { nome: 'Argentina', bandeira: '🇦🇷', j: 2, v: 1, e: 0, d: 1, sg: 0,  pts: 3 },
      { nome: 'México',    bandeira: '🇲🇽', j: 2, v: 0, e: 1, d: 1, sg: -2, pts: 1 },
      { nome: 'Canadá',   bandeira: '🇨🇦', j: 2, v: 0, e: 1, d: 1, sg: -2, pts: 1 },
    ],
  },
  {
    id: 'B',
    times: [
      { nome: 'França',   bandeira: '🇫🇷', j: 2, v: 2, e: 0, d: 0, sg: 3,  pts: 6 },
      { nome: 'Espanha',  bandeira: '🇪🇸', j: 2, v: 1, e: 1, d: 0, sg: 1,  pts: 4 },
      { nome: 'Alemanha', bandeira: '🇩🇪', j: 2, v: 0, e: 1, d: 1, sg: -1, pts: 1 },
      { nome: 'Portugal', bandeira: '🇵🇹', j: 2, v: 0, e: 0, d: 2, sg: -3, pts: 0 },
    ],
  },
  {
    id: 'C',
    times: [
      { nome: 'Inglaterra', bandeira: '🏴󠁧󠁢󠁥󠁮󠁧󠁿', j: 2, v: 2, e: 0, d: 0, sg: 4,  pts: 6 },
      { nome: 'Holanda',    bandeira: '🇳🇱', j: 2, v: 1, e: 0, d: 1, sg: 1,  pts: 3 },
      { nome: 'Senegal',    bandeira: '🇸🇳', j: 2, v: 0, e: 1, d: 1, sg: -2, pts: 1 },
      { nome: 'Irã',        bandeira: '🇮🇷', j: 2, v: 0, e: 1, d: 1, sg: -3, pts: 1 },
    ],
  },
  {
    id: 'D',
    times: [
      { nome: 'Japão',    bandeira: '🇯🇵', j: 2, v: 1, e: 1, d: 0, sg: 2,  pts: 4 },
      { nome: 'Croácia',  bandeira: '🇭🇷', j: 2, v: 1, e: 1, d: 0, sg: 1,  pts: 4 },
      { nome: 'Marrocos', bandeira: '🇲🇦', j: 2, v: 0, e: 1, d: 1, sg: -1, pts: 1 },
      { nome: 'Bélgica',  bandeira: '🇧🇪', j: 2, v: 0, e: 1, d: 1, sg: -2, pts: 1 },
    ],
  },
];

function TabelaGrupo({ grupo }: { grupo: GrupoType }) {
  return (
    <div className="bg-[#111111] border border-[#222222] rounded-xl overflow-hidden">
      <div className="px-4 py-3 border-b border-[#222222] flex items-center gap-2">
        <span className="w-7 h-7 rounded-lg bg-[#0066FF] text-white text-sm font-black flex items-center justify-center">
          {grupo.id}
        </span>
        <span className="text-sm font-bold text-white">Grupo {grupo.id}</span>
      </div>
      <table className="w-full text-xs">
        <thead>
          <tr className="text-[#555555] border-b border-[#1A1A1A]">
            <th className="px-4 py-2 text-left font-medium">Time</th>
            <th className="px-2 py-2 text-center font-medium">J</th>
            <th className="px-2 py-2 text-center font-medium">V</th>
            <th className="px-2 py-2 text-center font-medium">E</th>
            <th className="px-2 py-2 text-center font-medium">D</th>
            <th className="px-2 py-2 text-center font-medium">SG</th>
            <th className="px-2 py-2 text-center font-bold text-white">P</th>
          </tr>
        </thead>
        <tbody>
          {grupo.times.map((time, idx) => (
            <tr key={time.nome}
              className={`border-t border-[#1A1A1A] hover:bg-[#1A1A1A] transition-colors ${idx < 2 ? 'text-white' : 'text-[#888888]'}`}>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {idx < 2 && <span className="w-1 h-5 rounded-full bg-[#0066FF] block" />}
                  <span className="text-base">{time.bandeira}</span>
                  <span className="font-semibold">{time.nome}</span>
                </div>
              </td>
              <td className="px-2 py-3 text-center">{time.j}</td>
              <td className="px-2 py-3 text-center">{time.v}</td>
              <td className="px-2 py-3 text-center">{time.e}</td>
              <td className="px-2 py-3 text-center">{time.d}</td>
              <td className={`px-2 py-3 text-center font-medium ${time.sg > 0 ? 'text-green-400' : time.sg < 0 ? 'text-[#FF3B30]' : ''}`}>
                {time.sg > 0 ? `+${time.sg}` : time.sg}
              </td>
              <td className="px-2 py-3 text-center font-black text-[#FFD700]">{time.pts}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function Copa2026() {
  return (
    <section id="copa" className="px-6 py-12 bg-[#0D0D0D]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-xs font-semibold text-[#FFD700] uppercase tracking-widest mb-1">FIFA World Cup</p>
            <h2 className="text-2xl font-bold text-white">🏆 Copa do Mundo 2026</h2>
          </div>
          <button className="text-sm text-[#0066FF] hover:text-white transition-colors font-medium">Ver tudo →</button>
        </div>
        <div className="grid grid-cols-3 gap-4 mb-8">
          {[{ valor: '48', label: 'Seleções' }, { valor: '104', label: 'Jogos' }, { valor: '16', label: 'Cidades' }].map(({ valor, label }) => (
            <div key={label} className="bg-[#111111] border border-[#222222] rounded-xl p-4 text-center">
              <div className="text-2xl font-black text-[#FFD700]">{valor}</div>
              <div className="text-xs text-[#555555] mt-1">{label}</div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {grupos.map((grupo) => <TabelaGrupo key={grupo.id} grupo={grupo} />)}
        </div>
        <p className="text-xs text-[#555555] text-center mt-5">🔵 Classificados para as oitavas de final</p>
      </div>
    </section>
  );
}
