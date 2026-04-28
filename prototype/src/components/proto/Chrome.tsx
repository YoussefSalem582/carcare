import { ProtoIcon } from './Icon';
import { useProto } from '../../context/ProtoContext';

export function ProtoStatusBarIcons() {
  return (
    <span className="flex gap-1 items-center">
      <ProtoIcon name="signal" className="w-3.5 h-3.5" />
      <ProtoIcon name="wifi" className="w-3.5 h-3.5" />
      <ProtoIcon name="battery-full" className="w-3.5 h-3.5" />
    </span>
  );
}

export function ProtoStatusBar(opts?: { time?: string; trailing?: 'icons' | 'empty' | string }) {
  const { t } = useProto();
  const o = opts ?? {};
  const time = o.time ?? t('demo.status.time', '9:41');
  const right =
    o.trailing === 'icons' ? (
      <ProtoStatusBarIcons />
    ) : o.trailing === 'empty' || o.trailing === '' ? (
      <span />
    ) : o.trailing != null ? (
      <span dangerouslySetInnerHTML={{ __html: o.trailing }} />
    ) : (
      <span />
    );
  return (
    <div className="status-bar">
      <span>{time}</span>
      {right}
    </div>
  );
}

export function ProtoHomeIndicator() {
  return <div className="home-indicator" />;
}

export function ProtoFunnelProgress({ step, total }: { step: number; total: number }) {
  const pct = Math.round((step / total) * 100);
  return (
    <div
      className="funnel-progress"
      role="progressbar"
      aria-valuenow={step}
      aria-valuemin={1}
      aria-valuemax={total}
    >
      <div className="funnel-progress-fill" style={{ width: `${pct}%` }} />
    </div>
  );
}
