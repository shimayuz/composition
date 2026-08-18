interface Stat {
  value: string;
  unit: string;
  label: string;
}

const stats: Stat[] = [
  { value: '621', unit: '件', label: '診療報酬加算を構造化しデータベース公開' },
  { value: '1', unit: '位', label: 'AIハッカソン優勝（2026年）' },
  { value: '10', unit: '年+', label: '臨床現場での医師としての経験' },
  { value: '3', unit: '領域', label: 'プロダクト開発・AI駆動開発・AI研修' },
];

/** 検査値レポート風の数字帯（シグネチャ要素） */
export function NumbersBand() {
  return (
    <section className="bg-ink text-white">
      <div className="container-custom py-14">
        <p className="data-label text-white/50 mb-8">Track record</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-8">
          {stats.map((s) => (
            <div key={s.label} className="border-l-2 border-brand pl-5">
              <p className="font-mono text-5xl font-medium tracking-tight">
                {s.value}
                <span className="text-lg text-white/60 ml-1">{s.unit}</span>
              </p>
              <p className="mt-2.5 text-sm text-white/70 leading-relaxed">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
