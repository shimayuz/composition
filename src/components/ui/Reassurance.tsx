/** CTA近傍に置く不安打消し文 */
export function Reassurance({ className = '' }: { className?: string }) {
  return (
    <p className={`text-sm text-ink/60 ${className}`}>
      売り込みはしません。30分・オンラインで、現場の課題をお聞かせください。
    </p>
  );
}
