import { useMemo, useState } from 'react';
import { ProtoHomeIndicator, ProtoStatusBar } from '../../../components/proto/Chrome';
import { ProtoIcon } from '../../../components/proto/Icon';
import { B2bTabBar, B2bTopbarMobile } from '../../../components/proto/TabBars';
import { useProto } from '../../../context/ProtoContext';
import { ScreenWrap } from '../../shared/ScreenWrap';

export function B2bMore() {
  const { show, t } = useProto();
  return (
    <ScreenWrap id="b2b-more">
      <ProtoStatusBar />
      <div className="flex-1 flex flex-col min-h-0 app-surface">
        <B2bTopbarMobile title={t('b2b.more.title', 'More')} />
        <div className="flex-1 overflow-y-auto p-3">
          <div className="text-xs text-slate-500 dark:text-slate-400 mb-2">{t('b2b.more.account', 'Account')}</div>
          <div className="app-panel divide-y divide-slate-100 dark:divide-slate-700 overflow-hidden p-0 shadow-md">
            <button
              type="button"
              className="w-full p-3 flex items-center justify-between text-left tap hover:bg-amber-50/50 dark:hover:bg-slate-800/80"
              onClick={() => show('b2b-reviews')}
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <ProtoIcon name="star" className="w-4 h-4 text-amber-500" /> {t('b2b.more.reviews', 'Reviews')}
              </span>
              <ProtoIcon name="chevron-right" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </button>
            <button
              type="button"
              className="w-full p-3 flex items-center justify-between text-left tap hover:bg-teal-50/50 dark:hover:bg-teal-950/25"
              onClick={() => show('b2b-payouts')}
            >
              <span className="flex items-center gap-2 text-sm font-medium">
                <ProtoIcon name="wallet" className="w-4 h-4 text-teal-600 dark:text-teal-400" /> {t('b2b.more.payouts', 'Payouts')}
              </span>
              <span className="badge b-amber text-[9px]">{t('common.phase_p2', 'P2')}</span>
            </button>
            <div className="p-3 flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-2 text-sm">
                <ProtoIcon name="users" className="w-4 h-4" /> {t('b2b.more.team', 'Team')}
              </span>
              <span className="text-xs">{t('b2b.more.soon', 'Soon')}</span>
            </div>
            <div className="p-3 flex items-center justify-between text-slate-400 dark:text-slate-500">
              <span className="flex items-center gap-2 text-sm">
                <ProtoIcon name="settings" className="w-4 h-4" /> {t('b2b.more.settings', 'Settings')}
              </span>
              <ProtoIcon name="chevron-right" className="w-4 h-4 text-slate-400 dark:text-slate-500" />
            </div>
          </div>
        </div>
      </div>
      <B2bTabBar active="more" />
      <ProtoHomeIndicator />
    </ScreenWrap>
  );
}