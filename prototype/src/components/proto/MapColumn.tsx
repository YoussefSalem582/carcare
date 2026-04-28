import { useProto } from '../../context/ProtoContext';
import { ProtoIcon } from './Icon';

export function B2cMapMainColumn() {
  const { show, t } = useProto();
  return (
    <>
      <div className="map-search-header px-4 pt-2 pb-0 bg-white dark:bg-slate-900 relative z-30">
        <div className="flex items-center gap-2.5 pb-3">
          <div className="flex-1 rounded-2xl border border-slate-200 dark:border-slate-600/90 bg-white dark:bg-slate-900 px-3.5 py-3 flex items-center gap-2 shadow-sm">
            <ProtoIcon name="search" className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0" />
            <input
              className="flex-1 bg-transparent text-sm text-slate-900 dark:text-slate-100 outline-none placeholder:text-slate-400 dark:placeholder:text-slate-500"
              placeholder={t('map.search_ph', 'Oil change, brakes, AC…')}
            />
            <ProtoIcon name="mic" className="w-4 h-4 text-slate-400 dark:text-slate-500 flex-shrink-0 tap" />
          </div>
          <button
            type="button"
            className="map-fab rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-600/90 flex items-center justify-center tap flex-shrink-0"
            style={{ width: 48, height: 48, borderRadius: 16 }}
            onClick={() => show('b2c-filters')}
          >
            <ProtoIcon name="sliders-horizontal" className="w-[18px] h-[18px] text-slate-600 dark:text-slate-400" />
          </button>
        </div>
        <div className="chip-scroll-wrap -mx-1 px-1">
          <div className="chip-scroll-row no-scrollbar">
            <span className="chip on flex-shrink-0">
              <ProtoIcon name="badge-check" className="w-3.5 h-3.5" />
              {t('map.chip.verified', 'Verified')}
            </span>
            <span className="chip flex-shrink-0">
              <ProtoIcon name="clock" className="w-3.5 h-3.5" />
              {t('map.chip.open_now', 'Open now')}
            </span>
            <span className="chip flex-shrink-0">
              <ProtoIcon name="star" className="w-3.5 h-3.5" />
              {t('map.chip.star', '4★+')}
            </span>
            <span className="chip flex-shrink-0">
              <ProtoIcon name="map-pin" className="w-3.5 h-3.5" />
              {t('map.chip.km', '<5 km')}
            </span>
            <span className="chip bg-orange-500 text-white border-orange-500 flex-shrink-0">
              <ProtoIcon name="zap" className="w-3.5 h-3.5" />
              {t('map.chip.emergency', 'Emergency')}
            </span>
            <span className="chip flex-shrink-0">
              <ProtoIcon name="truck" className="w-3.5 h-3.5" />
              {t('map.chip.tow', 'Tow truck')}
            </span>
          </div>
        </div>
      </div>

      <div className="flex-1 relative map-canvas map-canvas-pro overflow-hidden min-h-0">
        <div className="map-building" style={{ left: '8%', top: '18%', width: '22%', height: '14%' }} />
        <div className="map-building" style={{ left: '38%', top: '12%', width: '18%', height: '18%' }} />
        <div className="map-building" style={{ left: '68%', top: '22%', width: '24%', height: '12%' }} />
        <div className="map-building" style={{ left: '14%', top: '52%', width: '16%', height: '16%' }} />
        <div className="map-building" style={{ left: '72%', top: '48%', width: '20%', height: '14%' }} />
        <div className="map-building" style={{ left: '44%', top: '58%', width: '14%', height: '11%' }} />

        <div className="map-road-h" style={{ top: '28%' }} />
        <div className="map-road-h" style={{ top: '62%' }} />
        <div className="map-road-v" style={{ left: '34%' }} />
        <div className="map-road-v" style={{ left: '72%' }} />

        <div className="user-loc-dot-wrap" style={{ left: '48%', top: '44%' }}>
          <div className="user-loc-dot-pulse" />
          <div className="user-loc-dot-core" />
        </div>

        <div className="absolute z-10" style={{ left: '30%', top: '24%' }}>
          <div className="pin" style={{ background: '#0F766E' }}>
            <ProtoIcon name="badge-check" className="w-4 h-4 text-white" />
          </div>
        </div>
        <button
          type="button"
          className="absolute tap z-10"
          style={{ left: '56%', top: '36%' }}
          onClick={() => show('b2c-shop')}
        >
          <div className="pin" style={{ background: '#F97316', transform: 'rotate(-45deg) scale(1.2)' }}>
            <ProtoIcon name="wrench" className="w-4 h-4 text-white" />
          </div>
        </button>
        <div className="absolute z-10" style={{ left: '64%', top: '66%' }}>
          <div className="pin" style={{ background: '#0F766E' }}>
            <ProtoIcon name="badge-check" className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="absolute z-10" style={{ left: '22%', top: '70%' }}>
          <div className="pin" style={{ background: '#64748B' }}>
            <ProtoIcon name="wrench" className="w-4 h-4 text-white" />
          </div>
        </div>
        <div className="absolute z-10" style={{ left: '78%', top: '18%' }}>
          <div className="pin" style={{ background: '#0F766E' }}>
            <ProtoIcon name="badge-check" className="w-4 h-4 text-white" />
          </div>
        </div>
        <button
          type="button"
          className="absolute tap z-10"
          style={{ left: '46%', top: '68%' }}
          onClick={() => show('b2c-tow')}
        >
          <div className="pin" style={{ background: '#1D4ED8' }}>
            <ProtoIcon name="truck" className="w-4 h-4 text-white" />
          </div>
        </button>
        <button
          type="button"
          className="absolute tap z-10"
          style={{ left: '12%', top: '38%' }}
          onClick={() => show('b2c-tow')}
        >
          <div className="pin" style={{ background: '#1E40AF' }}>
            <ProtoIcon name="truck" className="w-4 h-4 text-white" />
          </div>
        </button>

        <button
          type="button"
          className="absolute right-3 map-fab rounded-full bg-white dark:bg-slate-900 flex items-center justify-center tap"
          style={{ bottom: 300 }}
        >
          <ProtoIcon name="locate-fixed" className="w-[18px] h-[18px] text-teal-700 dark:text-teal-400" />
        </button>
        <button
          type="button"
          className="absolute right-3 map-fab rounded-full bg-white dark:bg-slate-900 flex items-center justify-center tap"
          style={{ bottom: 352 }}
          onClick={() => show('b2c-search')}
        >
          <ProtoIcon name="list" className="w-[18px] h-[18px] text-slate-700 dark:text-slate-300" />
        </button>

        <div className="sheet sheet-elevated absolute left-0 right-0 bottom-0" style={{ minHeight: 292 }}>
          <div className="sheet-handle" />
          <div className="px-4 pt-3 pb-2 flex justify-between items-end">
            <div>
              <div className="text-[17px] font-bold text-slate-900 dark:text-slate-100 tracking-tight">
                {t('map.sheet.title', 'Nearest to you')}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {t('map.sheet.sub', 'Sorted by distance · live availability')}
              </div>
            </div>
            <span className="text-[11px] font-semibold text-teal-800 dark:text-teal-100 bg-teal-50 dark:bg-teal-950/45 border border-teal-100 dark:border-teal-800/60 px-2.5 py-1 rounded-full">
              {t('map.sheet.badge', '17 centers')}
            </span>
          </div>
          <div className="px-4 pb-3 space-y-2.5 overflow-y-auto" style={{ maxHeight: 218 }}>
            <button
              type="button"
              className="listing-card tap flex items-center gap-3 p-3.5 rounded-2xl border-2 border-teal-300/80 bg-gradient-to-br from-teal-50 to-white shadow-sm w-full border-solid text-left font-inherit"
              onClick={() => show('b2c-shop')}
            >
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center ring-1 ring-slate-200/80">
                <ProtoIcon name="wrench" className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {t('demo.search.r1_name', 'AutoPro Heliopolis')}
                  </span>
                  <ProtoIcon name="badge-check" className="w-4 h-4 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {t('demo.search.r1_dist', '0.8 km')} · <span className="text-emerald-600 font-medium">{t('map.sheet.open', 'Open')}</span> ·{' '}
                  {t('map.sheet.next_slot', 'Next slot')}{' '}
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{t('demo.search.r1_next', '11:30')}</span>
                </div>
                <div className="flex items-center gap-2 mt-1.5 text-xs">
                  <span className="flex items-center gap-0.5 font-semibold text-slate-800 dark:text-slate-200">
                    <ProtoIcon name="star" className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {t('demo.search.r1_stars', '4.8')}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">({t('demo.search.r1_rev_n', '312')})</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600 dark:text-slate-400 font-medium">{t('demo.search.r1_price', 'EGP 350–900')}</span>
                </div>
              </div>
              <span className="btn-primary py-2.5 px-4 text-xs rounded-xl shadow-sm">{t('map.sheet.book', 'Book')}</span>
            </button>
            <div className="listing-card flex items-center gap-3 p-3.5 rounded-2xl border border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800/80 flex items-center justify-center">
                <ProtoIcon name="wrench" className="w-5 h-5 text-slate-600 dark:text-slate-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5">
                  <span className="font-semibold text-slate-900 dark:text-slate-100 truncate">
                    {t('demo.search.r2_name', 'QuickFix Nasr City')}
                  </span>
                  <ProtoIcon name="badge-check" className="w-4 h-4 text-teal-700 dark:text-teal-400 flex-shrink-0" />
                </div>
                <div className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                  {t('demo.search.r2_dist', '1.6 km')} · <span className="text-emerald-600 font-medium">{t('map.sheet.open', 'Open')}</span> ·{' '}
                  {t('map.sheet.next_slot', 'Next slot')}{' '}
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{t('demo.search.r2_next', '12:15')}</span>
                </div>
                <div className="flex items-center gap-2 mt-1.5 text-xs">
                  <span className="flex items-center gap-0.5 font-semibold text-slate-800 dark:text-slate-200">
                    <ProtoIcon name="star" className="w-3 h-3 text-amber-500 fill-amber-500" />
                    {t('demo.search.r2_stars', '4.6')}
                  </span>
                  <span className="text-slate-400 dark:text-slate-500">({t('demo.search.r2_rev_n', '188')})</span>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-600 dark:text-slate-400 font-medium">{t('demo.search.r2_price', 'EGP 250–1200')}</span>
                </div>
              </div>
              <span className="btn-secondary py-2.5 px-4 text-xs">{t('map.sheet.view', 'View')}</span>
            </div>
            <button
              type="button"
              className="w-full py-2.5 text-xs font-semibold text-teal-700 dark:text-teal-300 tap rounded-xl border border-dashed border-teal-200/80 dark:border-teal-700/60 bg-teal-50/30 dark:bg-teal-950/30"
              onClick={() => show('b2c-search')}
            >
              {t('map.sheet.more', '+ 15 more centers · see full list')}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
