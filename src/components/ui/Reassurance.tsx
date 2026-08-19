/** CTA近傍に置く補足情報（事実のみ・防御的な文言は使わない） */
export function Reassurance({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm text-ink/60 ${className}`}>
      オンライン・30分。現状の課題をお聞きするところから始めます。
    </p>
  );
}
