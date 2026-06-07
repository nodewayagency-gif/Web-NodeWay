import { PresenceStatus, presenceStatusLabels } from '@/lib/seo-data';

const styles: Record<PresenceStatus, string> = {
  sede: 'border-primary/40 text-primary bg-primary/10',
  cliente_ativo: 'border-accent/40 text-accent bg-accent/10',
  em_expansao: 'border-yellow-500/40 text-yellow-400 bg-yellow-500/10',
  nacional: 'border-border text-muted-foreground bg-card/50',
};

export function PresenceBadge({ status }: { status: PresenceStatus }) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full border text-xs font-mono uppercase tracking-wider ${styles[status]}`}
    >
      {presenceStatusLabels[status]}
    </span>
  );
}
